// @flow
import { createSelector } from 'reselect';
import { selectMyCollectionIds } from 'redux/selectors/claims';
import { parseURI } from 'lbryURI';

const selectState = (state: { collections: CollectionState }) => state.collections;

export const selectSavedCollectionIds = createSelector(
  selectState,
  collectionState => collectionState.saved
);

export const selectBuiltinCollections = createSelector(
  selectState,
  state => state.builtin
);
export const selectResolvedCollections = createSelector(
  selectState,
  state => state.resolved
);

export const selectMyUnpublishedCollections = createSelector(
  selectState,
  state => state.unpublished
);

export const selectMyEditedCollections = createSelector(
  selectState,
  state => state.edited
);

export const selectPendingCollections = createSelector(
  selectState,
  state => state.pending
);

export const makeSelectEditedCollectionForId = (id: string) =>
  createSelector(
    selectMyEditedCollections,
    eLists => eLists[id]
  );

export const makeSelectPendingCollectionForId = (id: string) =>
  createSelector(
    selectPendingCollections,
    pending => pending[id]
  );

export const makeSelectPublishedCollectionForId = (id: string) =>
  createSelector(
    selectResolvedCollections,
    rLists => rLists[id]
  );

export const makeSelectUnpublishedCollectionForId = (id: string) =>
  createSelector(
    selectMyUnpublishedCollections,
    rLists => rLists[id]
  );

export const makeSelectCollectionIsMine = (id: string) =>
  createSelector(
    selectMyCollectionIds,
    selectMyUnpublishedCollections,
    selectBuiltinCollections,
    (publicIds, privateIds, builtinIds) => {
      return Boolean(publicIds.includes(id) || privateIds[id] || builtinIds[id]);
    }
  );

export const selectMyPublishedCollections = createSelector(
  selectResolvedCollections,
  selectPendingCollections,
  selectMyEditedCollections,
  selectMyCollectionIds,
  (resolved, pending, edited, myIds) => {
    // all resolved in myIds, plus those in pending and edited
    const myPublishedCollections = Object.fromEntries(
      Object.entries(pending).concat(
        Object.entries(resolved).filter(
          ([key, val]) =>
            myIds.includes(key) &&
            // $FlowFixMe
            !pending[key]
        )
      )
    );
    // now add in edited:
    Object.entries(edited).forEach(([id, item]) => {
      myPublishedCollections[id] = item;
    });
    return myPublishedCollections;
  }
);

export const selectMyPublishedMixedCollections = createSelector(
  selectMyPublishedCollections,
  published => {
    const myCollections = Object.fromEntries(
      // $FlowFixMe
      Object.entries(published).filter(([key, collection]) => {
        // $FlowFixMe
        return collection.type === 'collection';
      })
    );
    return myCollections;
  }
);

export const selectMyPublishedPlaylistCollections = createSelector(
  selectMyPublishedCollections,
  published => {
    const myCollections = Object.fromEntries(
      // $FlowFixMe
      Object.entries(published).filter(([key, collection]) => {
        // $FlowFixMe
        return collection.type === 'playlist';
      })
    );
    return myCollections;
  }
);

export const makeSelectMyPublishedCollectionForId = (id: string) =>
  createSelector(
    selectMyPublishedCollections,
    myPublishedCollections => myPublishedCollections[id]
  );

// export const selectSavedCollections = createSelector(
//   selectResolvedCollections,
//   selectSavedCollectionIds,
//   (resolved, myIds) => {
//     const mySavedCollections = Object.fromEntries(
//       Object.entries(resolved).filter(([key, val]) => myIds.includes(key))
//     );
//     return mySavedCollections;
//   }
// );

export const makeSelectIsResolvingCollectionForId = (id: string) =>
  createSelector(
    selectState,
    state => {
      return state.isResolvingCollectionById[id];
    }
  );

export const makeSelectCollectionForId = (id: string) =>
  createSelector(
    selectBuiltinCollections,
    selectResolvedCollections,
    selectMyUnpublishedCollections,
    selectMyEditedCollections,
    selectPendingCollections,
    (bLists, rLists, uLists, eLists, pLists) => {
      const collection = bLists[id] || uLists[id] || eLists[id] || rLists[id] || pLists[id];
      return collection;
    }
  );

export const makeSelectCollectionForIdHasClaimUrl = (id: string, url: string) =>
  createSelector(
    makeSelectCollectionForId(id),
    collection => collection && collection.items.includes(url)
  );

export const makeSelectUrlsForCollectionId = (id: string) =>
  createSelector(
    makeSelectCollectionForId(id),
    collection => collection && collection.items
  );

export const makeSelectClaimIdsForCollectionId = (id: string) =>
  createSelector(
    makeSelectCollectionForId(id),
    collection => {
      const items = (collection && collection.items) || [];
      const ids = items.map(item => {
        const { claimId } = parseURI(item);
        return claimId;
      });
      return ids;
    }
  );

export const makeSelectIndexForUrlInCollection = (url: string, id: string) =>
  createSelector(
    makeSelectUrlsForCollectionId(id),
    urls => {
      const index = urls && urls.findIndex(u => u === url);
      if (index > -1) {
        return index;
      }
      return null;
    }
  );

export const makeSelectNextUrlForCollectionAndUrl = (id: string, url: string) =>
  createSelector(
    makeSelectIndexForUrlInCollection(url, id),
    makeSelectUrlsForCollectionId(id),
    (index, urls) => {
      if (urls && index >= -1) {
        const url = urls[index + 1];
        if (url) {
          return url;
        }
      }
      return null;
    }
  );

export const makeSelectNameForCollectionId = (id: string) =>
  createSelector(
    makeSelectCollectionForId(id),
    collection => {
      return (collection && collection.name) || '';
    }
  );

export const makeSelectCountForCollectionId = (id: string) =>
  createSelector(
    makeSelectCollectionForId(id),
    collection => {
      if (collection) {
        if (collection.itemCount !== undefined) {
          return collection.itemCount;
        }
        return collection.items.length;
      }
      return null;
    }
  );
