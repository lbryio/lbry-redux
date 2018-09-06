// @flow
import * as ACTIONS from 'constants/action_types';
import { buildURI } from 'lbryURI';
import { doResolveUri } from 'redux/actions/claims';
import { makeSelectSearchUris, selectSuggestions } from 'redux/selectors/search';
import { batchActions } from 'util/batchActions';
import handleFetchResponse from 'util/handle-fetch';

const DEFAULTSEARCHRESULTSIZE = 10;
const DEFAULTSEARCHRESULTFROM = 0;
type Dispatch = (action: any) => any;
type GetState = () => {};

export const doSearch = (
  rawQuery,
  size = DEFAULTSEARCHRESULTSIZE,
  from = DEFAULTSEARCHRESULTFROM,
  isBackgroundSearch
) => (dispatch: Dispatch, getState: GetState) => {
  const state = getState();
  const query = rawQuery.replace(/^lbry:\/\//i, '').replace(/\//, ' ');

  if (!query) {
    dispatch({
      type: ACTIONS.SEARCH_FAIL,
    });
    return;
  }

  // If we have already searched for something, we don't need to do anything
  const urisForQuery = makeSelectSearchUris(query)(state);
  if (urisForQuery && !!urisForQuery.length) {
    return;
  }

  dispatch({
    type: ACTIONS.SEARCH_START,
  });

  // If the user is on the file page with a pre-populated uri and they select
  // the search option without typing anything, searchQuery will be empty
  // We need to populate it so the input is filled on the search page
  // isBackgroundSearch means the search is happening in the background, don't update the search query
  if (!state.search.searchQuery && !isBackgroundSearch) {
    dispatch({
      type: ACTIONS.UPDATE_SEARCH_QUERY,
      data: { searchQuery: query },
    });
  }

  const encodedQuery = encodeURIComponent(query);
  fetch(`https://lighthouse.lbry.io/search?s=${encodedQuery}&size=${size}&from=${from}`)
    .then(handleFetchResponse)
    .then(data => {
      const uris = [];
      const actions = [];

      data.forEach(result => {
        const uri = buildURI({
          claimName: result.name,
          claimId: result.claimId,
        });
        actions.push(doResolveUri(uri));
        uris.push(uri);
      });

      actions.push({
        type: ACTIONS.SEARCH_SUCCESS,
        data: {
          query,
          uris,
        },
      });
      dispatch(batchActions(...actions));
    })
    .catch(() => {
      dispatch({
        type: ACTIONS.SEARCH_FAIL,
      });
    });
};

export const getSearchSuggestions = (value: string) => (dispatch: Dispatch, getState: GetState) => {
  const query = value.trim();

  // strip out any basic stuff for more accurate search results
  let searchValue = query.replace(/lbry:\/\//g, '').replace(/-/g, ' ');
  if (searchValue.includes('#')) {
    // This should probably be more robust, but I think it's fine for now
    // Remove everything after # to get rid of the claim id
    searchValue = searchValue.substring(0, searchValue.indexOf('#'));
  }

  const suggestions = selectSuggestions(getState());
  if (suggestions[searchValue]) {
    return;
  }

  fetch(`https://lighthouse.lbry.io/autocomplete?s=${searchValue}`)
    .then(handleFetchResponse)
    .then(apiSuggestions => {
      dispatch({
        type: ACTIONS.UPDATE_SEARCH_SUGGESTIONS,
        data: {
          query: searchValue,
          suggestions: apiSuggestions,
        },
      });
    })
    .catch(() => {
      // If the fetch fails, do nothing
      // Basic search suggestions are already populated at this point
    });
};

export const doUpdateSearchQuery = (query: string, shouldSkipSuggestions: ?boolean) => (
  dispatch: Dispatch
) => {
  dispatch({
    type: ACTIONS.UPDATE_SEARCH_QUERY,
    data: { query },
  });

  // Don't fetch new suggestions if the user just added a space
  if (!query.endsWith(' ') || !shouldSkipSuggestions) {
    dispatch(getSearchSuggestions(query));
  }
};

export const doFocusSearchInput = () => (dispatch: Dispatch) =>
  dispatch({
    type: ACTIONS.SEARCH_FOCUS,
  });

export const doBlurSearchInput = () => (dispatch: Dispatch) =>
  dispatch({
    type: ACTIONS.SEARCH_BLUR,
  });
