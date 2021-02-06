// @flow
import * as ACTIONS from 'constants/action_types';
import { makeSelectPlaylistForId } from 'redux/selectors/collections';
import { v4 as uuid } from 'uuid';
import { Lbry, makeSelectClaimForClaimId } from 'lbry-redux';

export const doAddPlaylist = (name, saved) => (dispatch: Dispatch, getState: GetState) => {
  const state = getState();

  return dispatch({
    type: ACTIONS.PLAYLIST_CREATE,
    data: {
      saved: saved,
      entry: {
        items: [],
        id: uuid(), // start with a uuid, this becomes a claimId after publish
        name: name,
        createdAt: Date.now(),
        updatedAt: Date.now(),
        collectionClaimId: null,
        builtin: false,
      },
    },
  });
};

// lbry://something?pl=<claimId>&index=4
export const doResolveCollection = (claimId) =>  async (dispatch: Dispatch, getState: GetState) => {
  const state = getState();

  dispatch({
    type: ACTIONS.COLLECTION_RESOLVE_STARTED,
  });

  let claim = makeSelectClaimForClaimId(claimId)(state);
  if (!claim) {
    const result = await Lbry.claim_search({claim_id: [claimId]});
    let error;
    if (result.message) {
      error = result.message;
    } else if (result.items && result.items.length === 0) {
      error = 'no results';
    }

    if (error) {
      return dispatch({
        type: ACTIONS.COLLECTION_RESOLVE_FAILED,
        data: {
          message: error,
        },
      });
    }

    claim = (result.items[0]);
  }

  const { name } = claim;

  const items = [];
  const collectionResults = await Lbry.collection_resolve({claim_id: claimId});
  if (collectionResults.message || (collectionResults.items && collectionResults.items.length === 0)) {
    return dispatch({
      type: ACTIONS.COLLECTION_RESOLVE_FAILED,
      data: {
        message: collectionResults.message || 'no results',
      },
    });
  }

  const collectionClaims = collectionResults.items;
  collectionClaims.forEach(claim => {
    items.push({
      url: claim.canonical_url,
      claimId: claim.claim_id,
    });
  })

  // resolve or get collection claim for uri
  // dispatch RESOLVE_COLLECTION_STARTED

  dispatch({
    type: ACTIONS.COLLECTION_RESOLVE_COMPLETED,
    data: {
      entry: {
        items,
        id: claimId, // start with a uuid, this becomes a claimId after publish
        name: name, // maybe not
        builtin: false,
      },
    },
  });
  console.log('items retd', items)
  return items;

  // dispatch RESOLVE_COLLECTION_COMPLETE // populated resolved collections by uri, by id
  //
};

export const doUpdatePlaylist = (id, params) => (dispatch: Dispatch, getState: GetState) => {
  const state = getState();
  const playlist = makeSelectPlaylistForId(id)(state);

  const generatePlaylistItem = (claim) => {
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

  const items = playlist.items;

  if (params.claims) {
    if (params.remove) {
      // filter the claim
    }
    params.claims.forEach(claim => items.push(generatePlaylistItem(claim)));
  }
  console.log('items', items)

  // add addedat date
  dispatch({
    type: ACTIONS.PLAYLIST_UPDATE,
    data: {
      id: id,
      playlist: {
        items: items,
        id: id,
        name: params.name || playlist.name,
        createdAt: playlist.createdAt,
        updatedAt: Date.now(),
        collectionClaimId: playlist.collectionClaimId,
        builtin: playlist.builtin,
      },
    },
  });
};
