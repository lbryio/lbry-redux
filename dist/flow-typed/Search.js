// @flow
import * as ACTIONS from 'constants/action_types';

declare type SearchSuggestion = {
  value: string,
  shorthand: string,
  type: string,
};

declare type SearchOptions = {
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

declare type SearchState = {
  isActive: boolean,
  searchQuery: string,
  options: SearchOptions,
  suggestions: { [string]: Array<SearchSuggestion> },
  urisByQuery: {},
  resolvedResultsByQuery: {},
};

declare type SearchSuccess = {
  type: ACTIONS.SEARCH_SUCCESS,
  data: {
    query: string,
    uris: Array<string>,
  },
};

declare type UpdateSearchQuery = {
  type: ACTIONS.UPDATE_SEARCH_QUERY,
  data: {
    query: string,
  },
};

declare type UpdateSearchSuggestions = {
  type: ACTIONS.UPDATE_SEARCH_SUGGESTIONS,
  data: {
    query: string,
    suggestions: Array<SearchSuggestion>,
  },
};

declare type UpdateSearchOptions = {
  type: ACTIONS.UPDATE_SEARCH_OPTIONS,
  data: SearchOptions,
};

declare type ResolvedSearchResult = {
  channel: string,
  channel_claim_id: string,
  claimId: string,
  fee: number,
  name: string,
  release_time: string,
  thumbnail_url: string,
  title: string,
};

declare type ResolvedSearchSuccess = {
  type: ACTIONS.RESOLVED_SEARCH_SUCCESS,
  data: {
    query: string,
    results: Array<ResolvedSearchResult>,
  },
};
