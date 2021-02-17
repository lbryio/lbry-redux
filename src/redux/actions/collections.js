// @flow
import * as ACTIONS from 'constants/action_types';
import { makeSelectCollectionForId } from 'redux/selectors/collections';
import { v4 as uuid } from 'uuid';
import Lbry from 'lbry';
import { doClaimSearch } from 'redux/actions/claims';
import { makeSelectClaimForClaimId } from 'redux/selectors/claims';

const getTimestamp = () => {
  return Math.floor(Date.now() / 1000);
};

// maybe take items param
export const doCreateUnpublishedCollection = (name: string) => (dispatch: Dispatch) => {
  return dispatch({
    type: ACTIONS.UNPUBLISHED_COLLECTION_CREATE,
    data: {
      entry: {
        id: uuid(), // start with a uuid, this becomes a claimId after publish
        name: name,
        updatedAt: getTimestamp(),
        items: [],
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
  // make sure the collection is resolved, the items are resolved, and build the collection objects

  dispatch({
    type: ACTIONS.COLLECTION_RESOLVE_STARTED,
    data: { ids: collectionIds },
  });

  const collectionIdsToSearch = collectionIds.filter(claimId => !state.claims.byId[claimId]);
  if (collectionIdsToSearch.length) {
    let options = { claim_ids: collectionIdsToSearch, page: 1, page_size: 9999 };
    await doClaimSearch(options);
  }

  const stateAfterClaimSearch = getState();

  async function resolveCollection(claim_id) {
    try {
      const result = await Lbry.collection_resolve({ claim_id });
      // $FlowFixMe
      const val: { claimId: string, items?: ?Array<GenericClaim> } = { claimId: claim_id };
      if (result.items) {
        val.items = result.items;
      } else {
        val.items = null;
      }
      return val;
    } catch (e) {
      return {
        claimId: claim_id,
        items: null,
      };
    }
  }

  const promises = [];
  collectionIds.forEach(collectionId => {
    promises.push(resolveCollection(collectionId));
  });

  // $FlowFixMe
  const resolvedCollectionItemsById: Array<{
    claimId: string,
    items: ?Array<GenericClaim>,
  }> = await Promise.all(promises);

  function processClaims(resultClaimsByUri) {
    const processedClaims = {};
    Object.entries(resultClaimsByUri).forEach(([uri, uriResolveInfo]) => {
      // Flow has terrible Object.entries support
      // https://github.com/facebook/flow/issues/2221
      if (uriResolveInfo) {
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
        processedClaims[uri] = result;
      }
    });
    return processedClaims;
  }

  const newCollectionItemsById = {};
  const flatResolvedCollectionItems = {};
  resolvedCollectionItemsById.forEach(entry => {
    // $FlowFixMe
    const collectionItems: Array<any> = entry.items;
    const collectionId = entry.claimId;
    if (collectionItems) {
      const claim = makeSelectClaimForClaimId(collectionId)(stateAfterClaimSearch);
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
      newCollectionItemsById[collectionId] = {
        items,
        id: collectionId,
        name: name,
        type: types.size > 1 ? 'mixed' : Array.from(types)[0],
        updatedAt: timestamp,
      };
    } else {
      newCollectionItemsById[collectionId] = null;
    }
  });
  const processedClaimsByUri = processClaims(flatResolvedCollectionItems);

  dispatch({
    type: ACTIONS.RESOLVE_URIS_COMPLETED,
    data: { resolveInfo: processedClaimsByUri },
  });

  dispatch({
    type: ACTIONS.COLLECTION_RESOLVE_COMPLETED,
    data: { resolvedCollections: newCollectionItemsById },
  });
};

export const doResolveCollection = (collectionId: string) => doResolveCollections([collectionId]);

export const doUpdateUnpublishedCollection = (id: string, params: any) => (
  dispatch: Dispatch,
  getState: GetState
) => {
  const state = getState();
  const collection = makeSelectCollectionForId(id)(state);

  const generateCollectionItem = claim => {
    if (claim && claim.canonical_url) {
      const item = {};
      item.url = claim.canonical_url;
      item.claimId = claim.claim_id;
      return item;
    }
  };

  if (!collection) {
    return dispatch({
      type: ACTIONS.UNPUBLISHED_COLLECTION_ERROR,
      data: {
        message: 'collection does not exist',
      },
    });
  }

  let items = collection.items;
  const passedClaims = params.claims;
  // add or remove claim
  if (passedClaims) {
    if (params.remove) {
      const passedClaimIds = passedClaims.map(claim => claim.claimId);
      items = items.filter(it => passedClaimIds.includes(it.claimId)); // filter the claim
    } else {
      params.claims.forEach(claim => items.push(generateCollectionItem(claim)));
    }
  }

  dispatch({
    type: ACTIONS.UNPUBLISHED_COLLECTION_UPDATE,
    data: {
      id: id,
      collection: {
        items: items,
        id: id,
        name: params.name || collection.name,
        updatedAt: getTimestamp(),
      },
    },
  });
};
