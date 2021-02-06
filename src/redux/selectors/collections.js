// @flow
import { createSelector } from 'reselect';

const selectState = (state: { collections: PlaylistState }) => state.collections;

export const selectMyPlaylists = createSelector(selectState, state => state.myListsById);
export const selectResolvedPlaylists = createSelector(selectState, state => state.resolvedListsById);
// export const selectIsResolvingPlaylist = createSelector(selectState, state => state.resolvedListsById);

// how do we deal with both resolvedCollections and localCollections
export const makeSelectPlaylistForId = (id: string) =>
  createSelector(selectMyPlaylists, selectResolvedPlaylists, (myLists, rLists) => {
    const playlist = myLists[id] || rLists[id];
    return playlist;
  });

export const makeSelectUrlsForPlaylistId = (id: string) =>
  createSelector(makeSelectPlaylistForId(id), playlist => {
    const items = playlist.items || [];
    const urls = items.map(item => item.url);
    return urls;
  });

export const makeSelectNameForPlaylistId = (id: string) =>
  createSelector(makeSelectPlaylistForId(id), playlist => {
    return playlist.name || '';
  });
