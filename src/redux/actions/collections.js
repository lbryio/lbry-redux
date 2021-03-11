// @flow
import * as ACTIONS from 'constants/action_types';
import { v4 as uuid } from 'uuid';
import Lbry from 'lbry';
import { doClaimSearch } from 'redux/actions/claims';
import { makeSelectClaimForClaimId } from 'redux/selectors/claims';
import {
  makeSelectCollectionForId,
  // makeSelectPublishedCollectionForId, // for "save" or "copy" action
  makeSelectMyPublishedCollectionForId,
  makeSelectUnpublishedCollectionForId,
  makeSelectEditedCollectionForId,
} from 'redux/selectors/collections';
const WATCH_LATER_ID = 'watchlater';
const FAVORITES_ID = 'favorites';

const BUILTIN_LISTS = [WATCH_LATER_ID, FAVORITES_ID];

const getTimestamp = () => {
  return Math.floor(Date.now() / 1000);
};

// maybe take items param
export const doLocalCollectionCreate = (
  name: string,
  collectionItems: string,
  sourceId: string
) => (dispatch: Dispatch) => {
  return dispatch({
    type: ACTIONS.COLLECTION_NEW,
    data: {
      entry: {
        id: uuid(), // start with a uuid, this becomes a claimId after publish
        name: name,
        updatedAt: getTimestamp(),
        items: collectionItems || [],
        sourceId: sourceId,
      },
    },
  });
};

export const doLocalCollectionDelete = (id: string) => (dispatch: Dispatch) => {
  return dispatch({
    type: ACTIONS.COLLECTION_DELETE,
    data: {
      id: id,
    },
  });
};

// Given a collection, save its collectionId to be resolved and displayed in Library
// export const doCollectionSave = (
//   id: string,
// ) => (dispatch: Dispatch) => {
//   return dispatch({
//     type: ACTIONS.COLLECTION_SAVE,
//     data: {
//       id: id,
//     },
//   });
// };

// Given a collection and name, copy it to a local private collection with a name
// export const doCollectionCopy = (
//   id: string,
// ) => (dispatch: Dispatch) => {
//   return dispatch({
//     type: ACTIONS.COLLECTION_COPY,
//     data: {
//       id: id,
//     },
//   });
// };

export const doResolveItemsInCollections = (collectionIds: Array<string>) => async(
  dispatch: Dispatch,
  getState: GetState
) => {
  let state = getState();

  // for each collection id,
  // make sure the collection is resolved, the items are resolved, and build the collection objects

  dispatch({
    type: ACTIONS.COLLECTION_ITEMS_RESOLVE_STARTED,
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
    type: ACTIONS.COLLECTION_ITEMS_RESOLVE_COMPLETED,
    data: { resolvedCollections: newCollectionItemsById },
  });
};

export const doResolveItemsInCollection = (collectionId: string) =>
  doResolveItemsInCollections([collectionId]);

/*
  id can be in published or unpublished
  if it is in published, copy it into unpublished
  if it is in unpublished, update it into unpublished
 */
export const doCollectionEdit = (id: string, params: any) => async(
  dispatch: Dispatch,
  getState: GetState
) => {
  const state = getState();
  const collection: Collection = makeSelectCollectionForId(id)(state);
  const editedCollection: Collection = makeSelectEditedCollectionForId(id)(state);
  const unpublishedCollection: Collection = makeSelectUnpublishedCollectionForId(id)(state);
  const publishedCollection: Collection = makeSelectMyPublishedCollectionForId(id)(state);

  const isCollectionItemsIdentical = (
    first: Array<?CollectionItem> = [],
    second: Array<?CollectionItem> = []
  ) => {
    // $FlowFixMe
    const getClaimIdString = (items: Array<?CollectionItem>) =>
      items.map(item => item.claimId).join(',');
    return getClaimIdString(first) === getClaimIdString(second);
  };

  // we can edit a published one by copying it
  // if not published, just add or remove, done.
  // if published, add, or remove
  // and if no items, delete.

  const generateCollectionItemFromClaim = (claim: GenericClaim) => {
    if (claim && claim.canonical_url) {
      const item: CollectionItem = {};
      item.url = claim.canonical_url;
      item.claimId = claim.claim_id;
      return item;
    }
  };

  const generateCollectionItemsFromSearchResult = results => {
    return (
      Object.values(results)
        // $FlowFixMe
        .reduce(
          (
            acc,
            cur: {
              stream: ?StreamClaim,
              channel: ?ChannelClaim,
              claimsInChannel: ?number,
              collection: ?CollectionClaim,
            }
          ) => {
            let claimId, url;
            if (cur.stream) {
              claimId = cur.stream.claim_id;
              url = cur.stream.permanent_url;
            } else if (cur.channel) {
              claimId = cur.channel.claim_id;
              url = cur.channel.permanent_url;
            } else if (cur.collection) {
              claimId = cur.collection.claim_id;
              url = cur.collection.permanent_url;
            } else {
              return acc;
            }
            acc.push({ url, claimId });
            return acc;
          },
          []
        )
    );
  };

  if (!collection) {
    return dispatch({
      type: ACTIONS.COLLECTION_ERROR,
      data: {
        message: 'collection does not exist',
      },
    });
  }

  let currentItems = collection.items ? collection.items.concat() : [];
  const { claims: passedClaims, order, claimIds, replace, remove } = params;

  let newItems: Array<?CollectionItem> = currentItems;

  if (passedClaims) {
    if (remove) {
      const passedClaimIds = passedClaims.map(claim => claim.claim_id);
      // $FlowFixMe
      newItems = currentItems.filter(
        (item: CollectionItem) => !passedClaimIds.includes(item.claimId)
      ); // filter the claim
    } else {
      passedClaims.forEach(claim => newItems.push(generateCollectionItemFromClaim(claim)));
    }
  }

  if (claimIds) {
    let options = { claim_ids: claimIds, page: 1, page_size: 9999 };
    const searchResults = await dispatch(doClaimSearch(options));
    if (replace) {
      newItems = generateCollectionItemsFromSearchResult(searchResults);
    } else {
      newItems = currentItems.concat(generateCollectionItemsFromSearchResult(searchResults));
    }
  }

  if (order) {
    const [movedItem] = currentItems.splice(order.from, 1);
    currentItems.splice(order.to, 0, movedItem);
  }

  if (editedCollection) {
    if (isCollectionItemsIdentical(publishedCollection.items, newItems)) {
      // delete edited if newItems are the same as publishedItems
      dispatch({
        type: ACTIONS.COLLECTION_DELETE,
        data: {
          id: id,
          collectionKey: 'edited',
        },
      });
    } else {
      dispatch({
        type: ACTIONS.COLLECTION_EDIT,
        data: {
          id: id,
          collectionKey: 'edited',
          collection: {
            items: newItems,
            id: id,
            name: params.name || collection.name,
            updatedAt: getTimestamp(),
          },
        },
      });
    }
    // check if updatedEditedCollectoin would be same as published collection
    // update or delete the edited collection
  } else if (publishedCollection) {
    dispatch({
      type: ACTIONS.COLLECTION_EDIT,
      data: {
        id: id,
        collectionKey: 'edited',
        collection: {
          items: newItems,
          id: id,
          name: params.name || collection.name,
          updatedAt: getTimestamp(),
        },
      },
    });
  } else if (BUILTIN_LISTS.includes(id)) {
    dispatch({
      type: ACTIONS.COLLECTION_EDIT,
      data: {
        id: id,
        collectionKey: 'builtin',
        collection: {
          items: newItems,
          id: id,
          name: params.name || collection.name,
          updatedAt: getTimestamp(),
        },
      },
    });
  } else if (unpublishedCollection) {
    return dispatch({
      type: ACTIONS.COLLECTION_EDIT,
      data: {
        id: id,
        collectionKey: 'unpublished',
        collection: {
          items: newItems,
          id: id,
          name: params.name || collection.name,
          updatedAt: getTimestamp(),
        },
      },
    });
  }
};
