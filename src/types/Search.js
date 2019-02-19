// @flow
import * as ACTIONS from 'constants/action_types';

export type SearchSuggestion = {
  value: string,
  shorthand: string,
  type: string,
};

export type SearchOptions = {
  // :(
  // https://github.com/facebook/flow/issues/6492
  RESULT_COUNT: number,
  CLAIM_TYPE: string,
  INCLUDE_FILES: string,
  INCLUDE_CHANNELS: string,
  INCLUDE_FILES_AND_CHANNELS: string,
  MEDIA_AUDIO: string,
  MEDIA_VIDEO: string,
  MEDIA_TEXT: string,
  MEDIA_IMAGE: string,
  MEDIA_APPLICATION: string,
};

export type SearchState = {
  isActive: boolean,
  searchQuery: string,
  options: SearchOptions,
  suggestions: { [string]: Array<SearchSuggestion> },
  urisByQuery: {},
};

export type SearchSuccess = {
  type: ACTIONS.SEARCH_SUCCESS,
  data: {
    query: string,
    uris: Array<string>,
  },
};

export type UpdateSearchQuery = {
  type: ACTIONS.UPDATE_SEARCH_QUERY,
  data: {
    query: string,
  },
};

export type UpdateSearchSuggestions = {
  type: ACTIONS.UPDATE_SEARCH_SUGGESTIONS,
  data: {
    query: string,
    suggestions: Array<SearchSuggestion>,
  },
};

export type HistoryNavigate = {
  type: ACTIONS.HISTORY_NAVIGATE,
  data: {
    url: string,
    index?: number,
    scrollY?: number,
  },
};

export type UpdateSearchOptions = {
  type: ACTIONS.UPDATE_SEARCH_OPTIONS,
  data: SearchOptions,
};
