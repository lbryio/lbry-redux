// @flow
import * as ACTIONS from 'constants/action_types';
import { makeSelectPlaylistForId } from 'redux/selectors/collections';
import { v4 as uuid } from 'uuid';
import Lbry from 'lbry';
import { doClaimSearch } from 'redux/actions/claims';
import { makeSelectClaimForClaimId } from 'redux/selectors/claims';

// maybe take items param
export const doAddPlaylist = (name: string) => (dispatch: Dispatch) => {
  return dispatch({
    type: ACTIONS.PLAYLIST_CREATE,
    data: {
      entry: {
        id: uuid(), // start with a uuid, this becomes a claimId after publish
        name: name,
      },
    },
  });
};

export const doResolveCollections = (collectionIds: Array<string>) => async(
  dispatch: Dispatch,
  getState: GetState
) => {
  let state = getState();

  // for each collection id,
  // make sure the collection is resolved, the items are resolved, and build the playlist objects

  dispatch({
    type: ACTIONS.COLLECTION_RESOLVE_STARTED,
    data: { ids: collectionIds },
  });

  const collectionIdsToSearch = collectionIds.filter(claimId => !state.claims.byId[claimId]);
  if (collectionIdsToSearch.length) {
    let options = { claim_ids: collectionIdsToSearch, page: 1, page_size: 9999 };
    await doClaimSearch(options);
  }

  state = getState();

  async function resolveCollection(claim_id) {
    const result = await Lbry.collection_resolve({ claim_id });
    const val = {};
    if (result.items) {
      val[claim_id] = result.items;
    } else {
      val[claim_id] = null;
    }
    return val;
  }

  const promises = [];
  collectionIds.forEach(collectionId => {
    promises.push(resolveCollection(collectionId));
  });

  const resolvedCollectionItemsById: Array<{ [string]: Array<GenericClaim> }> = await Promise.all(
    promises
  );

  const processedClaimsByUri = {};

  function processClaims(resultClaimsByUri, processedClaimsByUri = {}) {
    Object.entries(resultClaimsByUri).forEach(([uri, uriResolveInfo]) => {
      // Flow has terrible Object.entries support
      // https://github.com/facebook/flow/issues/2221
      if (uriResolveInfo) {
        // SKIP REPOSTS FOR NOW
        // if (uriResolveInfo.reposted_claim) {
        //   // $FlowFixMe
        //   const repostUrl = uriResolveInfo.reposted_claim.permanent_url;
        //   if (!resolvingUris.includes(repostUrl)) {
        //     repostsToResolve.push(repostUrl);
        //   }
        // }

        let result = {};
        if (uriResolveInfo.value_type === 'channel') {
          result.channel = uriResolveInfo;
          // $FlowFixMe
          result.claimsInChannel = uriResolveInfo.meta.claims_in_channel;
          // ALSO SKIP COLLECTIONS
        } else {
          result.stream = uriResolveInfo;
          if (uriResolveInfo.signing_channel) {
            result.channel = uriResolveInfo.signing_channel;
            result.claimsInChannel =
              (uriResolveInfo.signing_channel.meta &&
                uriResolveInfo.signing_channel.meta.claims_in_channel) ||
              0;
          }
        }
        // $FlowFixMe
        processedClaimsByUri[uri] = result;
      }
    });
  }

  const newPlaylistItemsById = {};
  const flatResolvedCollectionItems = {};
  resolvedCollectionItemsById.forEach(entry => {
    // $FlowFixMe
    const collectionItems: Array<any> = Object.values(entry)[0];
    const collectionId = Object.keys(entry)[0];
    if (collectionItems) {
      const claim = makeSelectClaimForClaimId(collectionId)(state);
      const { name, timestamp } = claim || {};
      const types = new Set();

      let items = [];
      collectionItems.forEach(collectionItem => {
        items.push({
          url: collectionItem.canonical_url,
          claimId: collectionItem.claim_id,
        });
        types.add(collectionItem.value_type);
        flatResolvedCollectionItems[collectionItem.canonical_url] = collectionItem;
      });
      newPlaylistItemsById[collectionId] = {
        items,
        id: collectionId,
        name: name,
        type: types.size > 1 ? 'mixed' : Array.from(types)[0],
        updatedAt: timestamp,
      };
    } else {
      newPlaylistItemsById[collectionId] = null;
    }
  });

  processClaims(flatResolvedCollectionItems, processedClaimsByUri);
  dispatch({
    type: ACTIONS.RESOLVE_URIS_COMPLETED,
    data: { resolveInfo: processedClaimsByUri },
  });

  dispatch({
    type: ACTIONS.COLLECTION_RESOLVE_COMPLETED,
    data: { resolvedCollections: newPlaylistItemsById },
  });
};

export const doResolveCollection = (collectionId: string) => doResolveCollections([collectionId]);

export const doUpdatePlaylist = (id: string, params: any) => (
  dispatch: Dispatch,
  getState: GetState
) => {
  const state = getState();
  const playlist = makeSelectPlaylistForId(id)(state);

  const generatePlaylistItem = claim => {
    if (claim && claim.canonical_url) {
      const item = {};
      item.url = claim.canonical_url;
      item.claimId = claim.claim_id;
      item.addedAt = Date.now();
      return item;
    }
  };

  if (!playlist) {
    return dispatch({
      type: ACTIONS.PLAYLIST_ERROR,
      data: {
        message: 'playlist does not exist',
      },
    });
  }

  let items = playlist.items;
  const passedClaims = params.claims; // && params.claims.map(claim => claim.claimId);
  // add or remove claim
  if (passedClaims) {
    if (params.remove) {
      const passedClaimIds = passedClaims.map(claim => claim.claimId);
      items = items.filter(it => passedClaimIds.includes(it.claimId)); // filter the claim
    } else {
      params.claims.forEach(claim => items.push(generatePlaylistItem(claim)));
    }
  }

  // add addedat date
  dispatch({
    type: ACTIONS.PLAYLIST_UPDATE,
    data: {
      id: id,
      playlist: {
        items: items,
        id: id,
        name: params.name || playlist.name,
        updatedAt: Date.now(),
      },
    },
  });
};
