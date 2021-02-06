// @flow
import { handleActions } from 'util/redux-utils';
import * as ACTIONS from 'constants/action_types';

type PlaylistItem = {
  url: string,
  leftOff: number,
  added?: number,
  claimId: string,
};

type Playlist = {
  items: Array<PlaylistItem>,
  name: string,
  createdAt: number,
  updatedAt: number,
  collectionClaimId: ?string,
  builtin: boolean,
};

type PlaylistState = {
  myListsById: { [string]: Playlist },
  resolvedListsById: { [string]: Playlist },
  isResolvingCollection: boolean,
  collectionIdsToResolve: Array<string>, // given an Id, search if necessary, then get all the items
  error: string,
};
// find some way to store resolved pl={url} collection playlists that are not saved
// find some way to copy url collection playlists to saved/sidebar playlists

// I need a place for my published lists
// I need a place for my unpublished lists (watch later, etc)
// I need a place for resolved lists
const defaultState: PlaylistState = {
  myListsById: {
    watchlater: {
      items: [{ url: 'lbry://@seriously#5/seriouspublish#c'}],
      id: 'watchlater',
      name: 'Watch Later',
      createdAt: Date.now(),
      updatedAt: Date.now(),
      collectionClaimId: null,
      builtin: true,
    },
    favorites: {
      items: [
        { url: 'lbry://@seriously#5/seriouspublish#c'},
        { url: 'lbry://@JIGGYTOM#4/niece#a'},
        { url: 'lbry://@Karmakut#7/my-new-favorite-vehicle-in-squad-ft#4'},
      ],
      id: 'favorites',
      name: 'Favorites',
      createdAt: Date.now(),
      updatedAt: Date.now(),
      collectionClaimId: null,
      builtin: true,
    },
  },
  resolvedListsById:{

  },
  error: null,
};

const collectionsReducer = handleActions(
  {
    [ACTIONS.PLAYLIST_CREATE]: (state, action) => {
      const { saved, entry: params } = action.data; // { id:, items: Array<any>}
      const newListTemplate = {
        id: params.id,
        name: params.name,
        items: [],
        createdAt: Date.now(),
        updatedAt: Date.now(),
        collectionClaimId: null,
        builtin: false,
      };

      const newList = Object.assign({}, newListTemplate, { ...params });
      const { myListsById: lists } = state;
      const newLists = Object.assign({}, lists, { [params.id]: newList });

      return {
        ...state,
        myListsById: newLists,
      };
    },

    [ACTIONS.PLAYLIST_DELETE]: (state, action) => {
      const { myListsById: lists } = state;
      const { name } = action.data;
      if (lists && lists[name] && lists[name].userList) {
        delete lists[name];
      }
      return Object.assign({}, state, {
        lists,
      });
    },

    [ACTIONS.PLAYLIST_UPDATE]: (state, action) => {
      const { myListsById: lists } = state;
      const newLists = Object.assign({}, lists);

      const { id, playlist } = action.data;
      newLists[id] = playlist;
      newLists[id]['updatedAt'] = Date.now();

      return {
        ...state,
        myListsById: newLists,
      };
    },
    [ACTIONS.PLAYLIST_ERROR]: (state, action) => {

      return Object.assign({}, state, {
        error: action.data.message,
      });
    },
    [ACTIONS.COLLECTION_RESOLVE_STARTED]: (state) => {
      return Object.assign({}, state, {
        ...state,
        error: '',
        isResolvingCollection: true, //add id
      });
    },
    [ACTIONS.COLLECTION_RESOLVE_COMPLETED]: (state, action) => {
      const { entry: params } = action.data;

      const newList = {
        id: params.id,
        name: params.name,
        items: params.items,
        createdAt: params.createdAt,
        updatedAt: params.updatedAt,
        builtin: false,
      };

      const { resolvedListsById: lists } = state;
      const newLists = Object.assign({}, lists, { [params.id]: newList });


      return Object.assign({}, state, {
        ...state,
        resolvedListsById: newLists,
        isResolvingCollection: false, // add id
      });
    },
    [ACTIONS.COLLECTION_RESOLVE_FAILED]: (state, action) => {
      return Object.assign({}, state, {
        ...state,
        isResolvingCollection: false,
        error: action.data.message,
      });
    },
  },
  defaultState
);

export { collectionsReducer };
