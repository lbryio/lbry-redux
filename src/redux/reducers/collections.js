// @flow
import { handleActions } from 'util/redux-utils';
import * as ACTIONS from 'constants/action_types';

const WATCH_LATER_ID = 'watchlater';
const FAVORITES_ID = 'favorites';

const BUILTIN_LISTS = [WATCH_LATER_ID, FAVORITES_ID];
const getTimestamp = () => {
  return Math.floor(Date.now() / 1000);
};

const defaultState: CollectionState = {
  builtin: {
    watchlater: {
      items: [
        {
          url: 'lbry://@seriously#5/seriouspublish#c',
          claimId: 'c1b740eb88f96b465f65e5f1542564539df1c62e',
        },
      ],
      id: 'watchlater',
      name: 'Watch Later',
      updatedAt: getTimestamp(),
      type: 'stream',
    },
    favorites: {
      items: [
        {
          url: 'lbry://@seriously#5/seriouspublish#c',
          claimId: 'c1b740eb88f96b465f65e5f1542564539df1c62e',
        },
      ],
      id: 'favorites',
      name: 'Favorites',
      type: 'mixed',
      updatedAt: getTimestamp(),
    },
  },
  resolved: {},
  unpublished: {}, // sync
  edited: {},
  pending: {},
  saved: [],
  isResolvingCollectionById: {},
  error: null,
};

const collectionsReducer = handleActions(
  {
    [ACTIONS.COLLECTION_NEW]: (state, action) => {
      const { entry: params } = action.data; // { id:, items: Array<any>}
      // entry
      const newListTemplate = {
        id: params.id,
        name: params.name,
        items: [],
        updatedAt: getTimestamp(),
        type: 'mixed',
      };

      const newList = Object.assign({}, newListTemplate, { ...params });
      const { unpublished: lists } = state;
      const newLists = Object.assign({}, lists, { [params.id]: newList });

      return {
        ...state,
        unpublished: newLists,
      };
    },

    [ACTIONS.COLLECTION_DELETE]: (state, action) => {
      const { id, collectionKey } = action.data;

      if (collectionKey && state[collectionKey] && state[collectionKey][id]) {
        delete state[collectionKey][id];
      }
      const { edited: editList, unpublished: unpublishedList, pending: pendingList } = state;

      if (editList[id]) {
        delete editList[id];
      } else if (unpublishedList[id]) {
        delete unpublishedList[id];
      } else if (pendingList[id]) {
        delete pendingList[id];
      }

      return { ...state, edited: editList, unpublished: unpublishedList, pending: pendingList };
    },

    [ACTIONS.COLLECTION_PENDING]: (state, action) => {
      const { localId, claimId } = action.data;
      const { edited: editList, unpublished: unpublishedList, pending: pendingList } = state;
      const isEdit = editList[localId];
      pendingList[claimId] = editList[localId] || unpublishedList[localId];
      if (isEdit) {
        editList.delete(localId);
      } else {
        unpublishedList.delete(localId);
      }
      return { ...state, unpublished: unpublishedList, edited: editList, pending: pendingList };
    },

    [ACTIONS.COLLECTION_EDIT]: (state, action) => {
      const { id, collectionKey, collection } = action.data;

      if (BUILTIN_LISTS.includes(id)) {
        const { builtin: lists } = state;
        return {
          ...state,
          [collectionKey]: { ...lists, [id]: collection },
        };
      }

      if (collectionKey === 'edited') {
        const { edited: lists } = state;
        return {
          ...state,
          edited: { ...lists, [id]: collection },
        };
      }
      const { unpublished: lists } = state;
      return {
        ...state,
        unpublished: { ...lists, [id]: collection },
      };
    },

    [ACTIONS.COLLECTION_ERROR]: (state, action) => {
      return Object.assign({}, state, {
        error: action.data.message,
      });
    },

    [ACTIONS.COLLECTION_ITEMS_RESOLVE_STARTED]: (state, action) => {
      const { ids } = action.data;
      const { isResolvingCollectionById } = state;
      const newResolving = Object.assign({}, isResolvingCollectionById);
      ids.forEach(id => {
        newResolving[id] = true;
      });
      return Object.assign({}, state, {
        ...state,
        error: '',
        isResolvingCollectionById: newResolving,
      });
    },
    [ACTIONS.USER_STATE_POPULATE]: (state, action) => {
      const { builtinCollectionTest, savedCollectionTest, unpublishedCollectionTest } = action.data;
      return {
        ...state,
        unpublished: unpublishedCollectionTest || state.unpublished,
        builtin: builtinCollectionTest || state.builtin,
        saved: savedCollectionTest || state.saved,
      };
    },
    [ACTIONS.COLLECTION_ITEMS_RESOLVE_COMPLETED]: (state, action) => {
      const { resolvedCollections } = action.data;
      const { pending: pendingList } = state;
      const resolvedIds = Object.keys(resolvedCollections);
      const { isResolvingCollectionById, resolved: lists } = state;
      // remove resolvedIds from isResolvingCollectionById{}
      const newResolving = Object.assign({}, isResolvingCollectionById);
      resolvedIds.forEach(resolvedId => {
        delete newResolving[resolvedId];
        if (pendingList[resolvedId]) {
          delete pendingList[resolvedId];
        }
      });
      const newLists = Object.assign({}, lists, resolvedCollections);
      // create pending if null
      return Object.assign({}, state, {
        ...state,
        pending: pendingList,
        resolved: newLists,
        isResolvingCollectionById: newResolving,
      });
    },
    [ACTIONS.COLLECTION_ITEMS_RESOLVE_FAILED]: (state, action) => {
      const { id } = action.data;
      const { isResolvingCollectionById } = state;
      const newResolving = isResolvingCollectionById.filter(i => i !== id);
      return Object.assign({}, state, {
        ...state,
        isResolvingCollectionById: newResolving,
        error: action.data.message,
      });
    },
  },
  defaultState
);

export { collectionsReducer };
