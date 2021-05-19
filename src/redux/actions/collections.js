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
  makeSelectPublishedCollectionForId,
  makeSelectUnpublishedCollectionForId,
  makeSelectEditedCollectionForId,
} from 'redux/selectors/collections';
import * as COLS from 'constants/collections';

const getTimestamp = () => {
  return Math.floor(Date.now() / 1000);
};

// maybe take items param
export const doLocalCollectionCreate = (
  name: string,
  collectionItems: Array<string>,
  type: string,
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
        type: type,
      },
    },
  });
};

export const doCollectionDelete = (id: string, colKey: ?string = undefined) => (
  dispatch: Dispatch
) => {
  return dispatch({
    type: ACTIONS.COLLECTION_DELETE,
    data: {
      id: id,
      collectionKey: colKey,
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

export const doFetchItemsInCollections = (
  resolveItemsOptions: {
    collectionIds: Array<string>,
    pageSize?: number,
  },
  resolveStartedCallback?: () => void
) => async(dispatch: Dispatch, getState: GetState) => {
  let state = getState();
  // for each collection id,
  // make sure the collection is resolved, the items are resolved, and build the collection objects

  const { collectionIds, pageSize } = resolveItemsOptions;

  dispatch({
    type: ACTIONS.COLLECTION_ITEMS_RESOLVE_STARTED,
    data: { ids: collectionIds },
  });

  if (resolveStartedCallback) resolveStartedCallback();

  const collectionIdsToSearch = collectionIds.filter(claimId => !state.claims.byId[claimId]);
  if (collectionIdsToSearch.length) {
    let claimSearchOptions = { claim_ids: collectionIdsToSearch, page: 1, page_size: 9999 };
    await dispatch(doClaimSearch(claimSearchOptions));
  }
  const invalidCollectionIds = [];
  const stateAfterClaimSearch = getState();

  async function resolveCollectionItems(claimId, totalItems, pageSize) {
    // take [ {}, {} ], return {}
    // only need items [ Claim... ] and total_items
    const mergeResults = (arrayOfResults: Array<{ items: any, total_items: number }>) => {
      const mergedResults: { items: Array<?Claim>, total_items: number } = {
        items: [],
        total_items: 0,
      };
      arrayOfResults.forEach(result => {
        mergedResults.items = mergedResults.items.concat(result.items);
        mergedResults.total_items = result.total_items;
      });
      return mergedResults;
    };

    try {
      const BATCH_SIZE = 10; // up batch size when sdk bug fixed
      const batches = [];
      let fetchResult;
      if (!pageSize) {
        // batch all
        for (let i = 0; i < Math.ceil(totalItems / BATCH_SIZE); i++) {
          batches[i] = Lbry.collection_resolve({
            claim_id: claimId,
            page: i + 1,
            page_size: BATCH_SIZE,
          });
        }
        const resultArray = await Promise.all(batches);
        fetchResult = mergeResults(resultArray);
      } else {
        fetchResult = await Lbry.collection_resolve({
          claim_id: claimId,
          page: 1,
          page_size: pageSize,
        });
      }
      // $FlowFixMe
      const itemsById: { claimId: string, items?: ?Array<GenericClaim> } = { claimId: claimId };
      if (fetchResult.items) {
        itemsById.items = fetchResult.items;
      } else {
        itemsById.items = null;
      }
      return itemsById;
    } catch (e) {
      return {
        claimId: claimId,
        items: null,
      };
    }
  }

  const promises = [];
  collectionIds.forEach(collectionId => {
    const claim = makeSelectClaimForClaimId(collectionId)(stateAfterClaimSearch);
    if (!claim) {
      invalidCollectionIds.push(collectionId);
    } else {
      const claimCount = claim.value.claims && claim.value.claims.length;
      if (pageSize) {
        promises.push(resolveCollectionItems(collectionId, claimCount, pageSize));
      } else {
        promises.push(resolveCollectionItems(collectionId, claimCount));
      }
    }
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

      const editedCollection = makeSelectEditedCollectionForId(collectionId)(stateAfterClaimSearch);
      const { name, timestamp, value } = claim || {};
      const { title } = value;
      const valueTypes = new Set();
      const streamTypes = new Set();

      let items = [];
      collectionItems.forEach(collectionItem => {
        // here's where we would just items.push(collectionItem.permanent_url
        items.push(collectionItem.permanent_url);
        valueTypes.add(collectionItem.value_type);
        if (collectionItem.value.stream_type) {
          streamTypes.add(collectionItem.value.stream_type);
        }
        flatResolvedCollectionItems[collectionItem.canonical_url] = collectionItem;
      });
      const isPlaylist =
        valueTypes.size === 1 &&
        valueTypes.has('stream') &&
        ((streamTypes.size === 1 && (streamTypes.has('audio') || streamTypes.has('video'))) ||
          (streamTypes.size === 2 && (streamTypes.has('audio') && streamTypes.has('video'))));

      newCollectionItemsById[collectionId] = {
        items,
        id: collectionId,
        name: title || name,
        itemCount: claim.value.claims.length,
        type: isPlaylist ? 'playlist' : 'collection',
        updatedAt: timestamp,
      };
      // clear any stale edits
      if (editedCollection && timestamp > editedCollection['updatedAt']) {
        dispatch({
          type: ACTIONS.COLLECTION_DELETE,
          data: {
            id: collectionId,
            collectionKey: 'edited',
          },
        });
      }
    } else {
      // no collection items? probably in pending.
    }
  });
  const processedClaimsByUri = processClaims(flatResolvedCollectionItems);

  dispatch({
    type: ACTIONS.RESOLVE_URIS_COMPLETED,
    data: { resolveInfo: processedClaimsByUri },
  });

  dispatch({
    type: ACTIONS.COLLECTION_ITEMS_RESOLVE_COMPLETED,
    data: {
      resolvedCollections: newCollectionItemsById,
      failedCollectionIds: invalidCollectionIds,
    },
  });
};

export const doFetchItemsInCollection = (
  options: { collectionId: string, pageSize?: number },
  cb?: () => void
) => {
  const { collectionId, pageSize } = options;
  const newOptions: { collectionIds: Array<string>, pageSize?: number } = {
    collectionIds: [collectionId],
  };
  if (pageSize) newOptions.pageSize = pageSize;
  return doFetchItemsInCollections(newOptions, cb);
};

export const doCollectionEdit = (collectionId: string, params: CollectionEditParams) => async(
  dispatch: Dispatch,
  getState: GetState
) => {
  const state = getState();
  const collection: Collection = makeSelectCollectionForId(collectionId)(state);
  const editedCollection: Collection = makeSelectEditedCollectionForId(collectionId)(state);
  const unpublishedCollection: Collection = makeSelectUnpublishedCollectionForId(collectionId)(
    state
  );
  const publishedCollection: Collection = makeSelectPublishedCollectionForId(collectionId)(state); // needs to be published only

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
            let url;
            if (cur.stream) {
              url = cur.stream.permanent_url;
            } else if (cur.channel) {
              url = cur.channel.permanent_url;
            } else if (cur.collection) {
              url = cur.collection.permanent_url;
            } else {
              return acc;
            }
            acc.push(url);
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
  const { claims: passedClaims, order, claimIds, replace, remove, type } = params;

  const collectionType = type || collection.type;
  let newItems: Array<?string> = currentItems;

  if (passedClaims) {
    if (remove) {
      const passedUrls = passedClaims.map(claim => claim.permanent_url);
      // $FlowFixMe // need this?
      newItems = currentItems.filter((item: string) => !passedUrls.includes(item));
    } else {
      passedClaims.forEach(claim => newItems.push(claim.permanent_url));
    }
  }

  if (claimIds) {
    const batches = [];
    if (claimIds.length > 50) {
      for (let i = 0; i < Math.ceil(claimIds.length / 50); i++) {
        batches[i] = claimIds.slice(i * 50, (i + 1) * 50);
      }
    } else {
      batches[0] = claimIds;
    }
    const resultArray = await Promise.all(
      batches.map(batch => {
        let options = { claim_ids: batch, page: 1, page_size: 50 };
        return dispatch(doClaimSearch(options));
      })
    );

    const searchResults = Object.assign({}, ...resultArray);

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

  // console.log('p&e', publishedCollection.items, newItems, publishedCollection.items.join(','), newItems.join(','))
  if (editedCollection) {
    if (publishedCollection.items.join(',') === newItems.join(',')) {
      // print these

      // delete edited if newItems are the same as publishedItems
      dispatch({
        type: ACTIONS.COLLECTION_DELETE,
        data: {
          id: collectionId,
          collectionKey: 'edited',
        },
      });
    } else {
      dispatch({
        type: ACTIONS.COLLECTION_EDIT,
        data: {
          id: collectionId,
          collectionKey: 'edited',
          collection: {
            items: newItems,
            id: collectionId,
            name: params.name || collection.name,
            updatedAt: getTimestamp(),
            type: collectionType,
          },
        },
      });
    }
  } else if (publishedCollection) {
    dispatch({
      type: ACTIONS.COLLECTION_EDIT,
      data: {
        id: collectionId,
        collectionKey: 'edited',
        collection: {
          items: newItems,
          id: collectionId,
          name: params.name || collection.name,
          updatedAt: getTimestamp(),
          type: collectionType,
        },
      },
    });
  } else if (COLS.BUILTIN_LISTS.includes(collectionId)) {
    dispatch({
      type: ACTIONS.COLLECTION_EDIT,
      data: {
        id: collectionId,
        collectionKey: 'builtin',
        collection: {
          items: newItems,
          id: collectionId,
          name: params.name || collection.name,
          updatedAt: getTimestamp(),
          type: collectionType,
        },
      },
    });
  } else if (unpublishedCollection) {
    dispatch({
      type: ACTIONS.COLLECTION_EDIT,
      data: {
        id: collectionId,
        collectionKey: 'unpublished',
        collection: {
          items: newItems,
          id: collectionId,
          name: params.name || collection.name,
          updatedAt: getTimestamp(),
          type: collectionType,
        },
      },
    });
  }
  return true;
};
