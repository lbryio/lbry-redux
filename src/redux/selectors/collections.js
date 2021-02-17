// @flow
import { createSelector } from 'reselect';
import { selectMyCollectionIds } from 'redux/selectors/claims';

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
export const selectMyPublishedCollections = createSelector(
  selectResolvedCollections,
  selectMyCollectionIds,
  (resolved, myIds) => {
    const myPublishedCollections = Object.fromEntries(
      Object.entries(resolved).filter(([key, val]) => myIds.includes(key))
    );
    return myPublishedCollections;
  }
);

export const selectSavedCollections = createSelector(
  selectResolvedCollections,
  selectSavedCollectionIds,
  (resolved, myIds) => {
    const mySavedCollections = Object.fromEntries(
      Object.entries(resolved).filter(([key, val]) => myIds.includes(key))
    );
    return mySavedCollections;
  }
);

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
    (bLists, rLists, uLists) => {
      // probably return the most updated when both unpublished and published have same id, maybe mark as unsaved
      const collection = bLists[id] || rLists[id] || uLists[id];
      return collection;
    }
  );

export const makeSelectUrlsForCollectionId = (id: string) =>
  createSelector(
    makeSelectCollectionForId(id),
    collection => {
      const items = (collection && collection.items) || [];
      const urls = items.map(item => item.url);
      return urls;
    }
  );

export const makeSelectNameForCollectionId = (id: string) =>
  createSelector(
    makeSelectCollectionForId(id),
    collection => {
      return collection.name || '';
    }
  );
