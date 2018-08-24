import * as SEARCH_TYPES from 'constants/search';
import { normalizeURI, parseURI } from 'lbryURI';
import { selectCurrentPage, selectCurrentParams } from 'redux/selectors/navigation';
import { createSelector } from 'reselect';

export const selectState = state => state.search || {};

export const selectSearchValue = createSelector(selectState, state => state.searchQuery);

export const selectSuggestions = createSelector(selectState, state => state.suggestions);

export const selectSearchQuery = createSelector(
  selectCurrentPage,
  selectCurrentParams,
  (page, params) => (page === 'search' ? params && params.query : null)
);

export const selectIsSearching = createSelector(selectState, state => state.searching);

export const selectSearchUrisByQuery = createSelector(selectState, state => state.urisByQuery);

export const makeSelectSearchUris = query =>
  // replace statement below is kind of ugly, and repeated in doSearch action
  createSelector(
    selectSearchUrisByQuery,
    byQuery => byQuery[query ? query.replace(/^lbry:\/\//i, '').replace(/\//, ' ') : query]
  );

export const selectWunderBarAddress = createSelector(
  selectCurrentPage,
  selectSearchQuery,
  selectCurrentParams,
  (page, query, params) => {
    // only populate the wunderbar address if we are on the file/channel pages
    // or show the search query
    if (page === 'show') {
      return params.uri;
    }
    return query;
  }
);

export const selectSearchBarFocused = createSelector(selectState, state => state.focused);
// export const selectSear

export const selectSearchSuggestions = createSelector(
  selectSearchValue,
  selectSuggestions,
  (query, suggestions) => {
    if (!query) {
      return [];
    }

    const queryIsPrefix = query === 'lbry:' || query === 'lbry:/' || query === 'lbry://';

    if (query.startsWith('lbry://') && query !== 'lbry://') {
      // If it starts with a prefix, don't show any autocomplete results
      // They are probably typing/pasting in a lbry uri
      return [
        {
          value: query,
          type: SEARCH_TYPES.FILE,
        },
      ];
    } else if (queryIsPrefix) {
      // If it is a prefix, wait until something else comes to figure out what to do
      return [];
    }

    let searchSuggestions = [];
    try {
      const uri = normalizeURI(query);
      const { claimName, isChannel } = parseURI(uri);
      searchSuggestions.push(
        {
          value: claimName,
          type: SEARCH_TYPES.SEARCH,
        },
        {
          value: uri,
          shorthand: isChannel ? claimName.slice(1) : claimName,
          type: isChannel ? SEARCH_TYPES.CHANNEL : SEARCH_TYPES.FILE,
        }
      );
    } catch (e) {
      searchSuggestions.push({
        value: query,
        type: SEARCH_TYPES.SEARCH,
      });
    }

    const apiSuggestions = suggestions[query] || [];
    if (apiSuggestions.length) {
      searchSuggestions = searchSuggestions.concat(
        apiSuggestions.filter(suggestion => suggestion !== query).map(suggestion => {
          // determine if it's a channel
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
        })
      );
    }

    return searchSuggestions;
  }
);
