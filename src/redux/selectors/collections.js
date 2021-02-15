// @flow
import { createSelector } from 'reselect';
import { selectMyCollectionIds } from 'redux/selectors/claims';

const selectState = (state: { collections: CollectionState }) => state.collections;

export const selectSavedCollectionIds = createSelector(
  selectState,
  collectionState => collectionState.saved
);
export const selectBuiltinPlaylists = createSelector(
  selectState,
  state => state.builtin
); // playlists
export const selectResolvedPlaylists = createSelector(
  selectState,
  state => state.resolved
); // collections
export const selectMyUnpublishedPlaylists = createSelector(
  selectState,
  state => state.unpublished
); // collections
export const selectMyPublishedPlaylists = createSelector(
  selectResolvedPlaylists,
  selectMyCollectionIds,
  (resolved, myIds) => {
    const myPublishedPlaylists = Object.fromEntries(
      Object.entries(resolved).filter(([key, val]) => myIds.includes(key))
    );
    return myPublishedPlaylists;
  }
);

export const selectSavedPlaylists = createSelector(
  selectResolvedPlaylists,
  selectSavedCollectionIds,
  (resolved, myIds) => {
    const mySavedPlaylists = Object.fromEntries(
      Object.entries(resolved).filter(([key, val]) => myIds.includes(key))
    );
    return mySavedPlaylists;
  }
);

export const makeSelectIsResolvingCollectionForId = (id: string) =>
  createSelector(
    selectState,
    state => {
      return state.isResolvingCollectionById.includes(id);
    }
  );

// how do we deal with both resolvedCollections and localCollections
export const makeSelectPlaylistForId = (id: string) =>
  createSelector(
    selectBuiltinPlaylists,
    selectResolvedPlaylists,
    selectMyUnpublishedPlaylists,
    (bLists, rLists, uLists) => {
      // probably return the most updated when both unpublished and published have same id, maybe mark as unsaved
      const playlist = bLists[id] || rLists[id] || uLists[id];
      return playlist;
    }
  );

export const makeSelectUrlsForPlaylistId = (id: string) =>
  createSelector(
    makeSelectPlaylistForId(id),
    playlist => {
      const items = (playlist && playlist.items) || [];
      const urls = items.map(item => item.url);
      return urls;
    }
  );

export const makeSelectNameForPlaylistId = (id: string) =>
  createSelector(
    makeSelectPlaylistForId(id),
    playlist => {
      return playlist.name || '';
    }
  );
