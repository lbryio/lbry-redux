// @flow
import * as ACTIONS from 'constants/action_types';
import * as SEARCH_TYPES from 'constants/search';
import { normalizeURI, buildURI, parseURI } from 'lbryURI';
import { doResolveUri } from 'redux/actions/claims';
import { makeSelectSearchUris } from 'redux/selectors/search';
import { batchActions } from 'util/batchActions';
import handleFetchResponse from 'util/handle-fetch';

export const doSearch = rawQuery => (dispatch, getState) => {
  const state = getState();
  const query = rawQuery.replace(/^lbry:\/\//i, '');

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
  if (!state.search.searchQuery) {
    dispatch({
      type: ACTIONS.UPDATE_SEARCH_QUERY,
      data: { searchQuery: query },
    });
  }

  fetch(`https://lighthouse.lbry.io/search?s=${query}`)
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

export const getSearchSuggestions = (value: string) => dispatch => {
  const query = value.trim();

  const isPrefix = () =>
    query === '@' || query === 'lbry:' || query === 'lbry:/' || query === 'lbry://';

  if (!query || isPrefix()) {
    dispatch({
      type: ACTIONS.UPDATE_SEARCH_SUGGESTIONS,
      data: { suggestions: [] },
    });
    return;
  }

  let suggestions = [];
  try {
    // If the user is about to manually add the claim id ignore it until they
    // actually add one. This would hardly ever happen, but then the search
    // suggestions won't change just from adding a '#' after a uri
    let uriQuery = query;
    if (uriQuery.endsWith('#')) {
      uriQuery = uriQuery.slice(0, -1);
    }

    const uri = normalizeURI(uriQuery);
    const { claimName, isChannel } = parseURI(uri);

    suggestions.push(
      {
        value: uri,
        shorthand: isChannel ? claimName.slice(1) : claimName,
        type: isChannel ? SEARCH_TYPES.CHANNEL : SEARCH_TYPES.FILE,
      },
      {
        value: claimName,
        type: SEARCH_TYPES.SEARCH,
      }
    );

    // If it's a valid url, don't fetch any extra search results
    dispatch({
      type: ACTIONS.UPDATE_SEARCH_SUGGESTIONS,
      data: { suggestions },
    });
  } catch (e) {
    suggestions.push({
      value: query,
      type: SEARCH_TYPES.SEARCH,
    });
  }

  // Populate the current search query suggestion before fetching results
  dispatch({
    type: ACTIONS.UPDATE_SEARCH_SUGGESTIONS,
    data: { suggestions },
  });

  // strip out any basic stuff for more accurate search results
  let searchValue = value.replace(/lbry:\/\//g, '').replace(/-/g, ' ');
  if (searchValue.includes('#')) {
    // This should probably be more robust, but I think it's fine for now
    // Remove everything after # to get rid of the claim id
    searchValue = searchValue.substring(0, searchValue.indexOf('#'));
  }

  fetch(`https://lighthouse.lbry.io/autocomplete?s=${searchValue}`)
    .then(handleFetchResponse)
    .then(apiSuggestions => {
      // Suggestion could be a channel, uri, or search term
      const formattedSuggestions = apiSuggestions.slice(0, 6).map(suggestion => {
        if (suggestion.includes(' ')) {
          return {
            value: suggestion,
            type: SEARCH_TYPES.SEARCH,
          };
        }

        try {
          const uri = normalizeURI(suggestion);
          const { claimName, isChannel } = parseURI(uri);

          return {
            value: uri,
            shorthand: isChannel ? claimName.slice(1) : claimName,
            type: isChannel ? SEARCH_TYPES.CHANNEL : SEARCH_TYPES.FILE,
          };
        } catch (e) {
          // search result includes some character that isn't valid in claim names
          return {
            value: suggestion,
            type: SEARCH_TYPES.SEARCH,
          };
        }
      });

      suggestions = suggestions.concat(formattedSuggestions);
      dispatch({
        type: ACTIONS.UPDATE_SEARCH_SUGGESTIONS,
        data: { suggestions },
      });
    })
    .catch(() => {
      // If the fetch fails, do nothing
      // Basic search suggestions are already populated at this point
    });
};

export const doUpdateSearchQuery = (query: string, shouldSkipSuggestions: ?boolean) => dispatch => {
  dispatch({
    type: ACTIONS.UPDATE_SEARCH_QUERY,
    data: { query },
  });

  // Don't fetch new suggestions if the user just added a space
  if (!query.endsWith(' ') || !shouldSkipSuggestions) {
    dispatch(getSearchSuggestions(query));
  }
};

export const doFocusSearchInput = () => dispatch =>
  dispatch({
    type: ACTIONS.SEARCH_FOCUS,
  });

export const doBlurSearchInput = () => dispatch =>
  dispatch({
    type: ACTIONS.SEARCH_BLUR,
  });
