// @flow
import * as ACTIONS from 'constants/action_types';
import { handleActions } from 'util/redux-utils';
import { SEARCH_OPTIONS } from 'constants/search';
import type {
  SearchState,
  SearchSuccess,
  UpdateSearchQuery,
  UpdateSearchSuggestions,
  HistoryNavigate,
  UpdateSearchOptions,
} from 'types/Search';

const defaultState = {
  isActive: false, // does the user have any typed text in the search input
  focused: false, // is the search input focused
  searchQuery: '', // needs to be an empty string for input focusing
  options: {
    [SEARCH_OPTIONS.RESULT_COUNT]: 30,
    [SEARCH_OPTIONS.CLAIM_TYPE]: SEARCH_OPTIONS.INCLUDE_FILES_AND_CHANNELS,
    [SEARCH_OPTIONS.MEDIA_AUDIO]: true,
    [SEARCH_OPTIONS.MEDIA_VIDEO]: true,
    [SEARCH_OPTIONS.MEDIA_TEXT]: true,
    [SEARCH_OPTIONS.MEDIA_IMAGE]: true,
    [SEARCH_OPTIONS.MEDIA_APPLICATION]: true,
  },
  suggestions: {},
  urisByQuery: {},
};

export const searchReducer = handleActions(
  {
    [ACTIONS.SEARCH_START]: (state: SearchState): SearchState => ({
      ...state,
      searching: true,
    }),
    [ACTIONS.SEARCH_SUCCESS]: (state: SearchState, action: SearchSuccess): SearchState => {
      const { query, uris } = action.data;

      return {
        ...state,
        searching: false,
        urisByQuery: Object.assign({}, state.urisByQuery, { [query]: uris }),
      };
    },

    [ACTIONS.SEARCH_FAIL]: (state: SearchState): SearchState => ({
      ...state,
      searching: false,
    }),

    [ACTIONS.UPDATE_SEARCH_QUERY]: (
      state: SearchState,
      action: UpdateSearchQuery
    ): SearchState => ({
      ...state,
      searchQuery: action.data.query,
      isActive: true,
    }),

    [ACTIONS.UPDATE_SEARCH_SUGGESTIONS]: (
      state: SearchState,
      action: UpdateSearchSuggestions
    ): SearchState => ({
      ...state,
      suggestions: {
        ...state.suggestions,
        [action.data.query]: action.data.suggestions,
      },
    }),

    // clear the searchQuery on back/forward unless to search page
    [ACTIONS.HISTORY_NAVIGATE]: (state: SearchState, action: HistoryNavigate): SearchState => {
      const { url } = action.data;
      return {
        ...state,
        searchQuery: url.indexOf('/search') === 0 ? url.slice(14) : '',
        isActive: url.indexOf('/search') === 0,
        suggestions: {},
      };
    },

    // sets isActive to false so the uri will be populated correctly if the
    // user is on a file page. The search query will still be present on any
    // other page
    [ACTIONS.DISMISS_NOTIFICATION]: (state: SearchState): SearchState => ({
      ...state,
      isActive: false,
    }),

    [ACTIONS.SEARCH_FOCUS]: (state: SearchState): SearchState => ({
      ...state,
      focused: true,
    }),
    [ACTIONS.SEARCH_BLUR]: (state: SearchState): SearchState => ({
      ...state,
      focused: false,
    }),
    [ACTIONS.UPDATE_SEARCH_OPTIONS]: (
      state: SearchState,
      action: UpdateSearchOptions
    ): SearchState => {
      const { options: oldOptions } = state;
      const newOptions = action.data;
      const options = { ...oldOptions, ...newOptions };
      return {
        ...state,
        options,
      };
    },
  },
  defaultState
);
