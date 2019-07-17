// @flow
import { SEARCH_TYPES, SEARCH_OPTIONS } from 'constants/search';
import { getSearchQueryString } from 'util/query-params';
import { normalizeURI, parseURI } from 'lbryURI';
import { createSelector } from 'reselect';

type State = { search: SearchState };

export const selectState = (state: State): SearchState => state.search;

export const selectSearchValue: (state: State) => string = createSelector(
  selectState,
  state => state.searchQuery
);

export const selectSearchOptions: (state: State) => SearchOptions = createSelector(
  selectState,
  state => state.options
);

export const selectSuggestions: (
  state: State
) => { [string]: Array<SearchSuggestion> } = createSelector(
  selectState,
  state => state.suggestions
);

export const selectIsSearching: (state: State) => boolean = createSelector(
  selectState,
  state => state.searching
);

export const selectSearchUrisByQuery: (
  state: State
) => { [string]: Array<string> } = createSelector(
  selectState,
  state => state.urisByQuery
);

export const makeSelectSearchUris = (query: string): ((state: State) => Array<string>) =>
  // replace statement below is kind of ugly, and repeated in doSearch action
  createSelector(
    selectSearchUrisByQuery,
    byQuery => byQuery[query ? query.replace(/^lbry:\/\//i, '').replace(/\//, ' ') : query]
  );

export const selectSearchBarFocused: boolean = createSelector(
  selectState,
  state => state.focused
);

export const selectSearchSuggestions: Array<SearchSuggestion> = createSelector(
  selectSearchValue,
  selectSuggestions,
  (query: string, suggestions: { [string]: Array<string> }) => {
    if (!query) {
      return [];
    }

    const queryIsPrefix =
      query === 'lbry:' || query === 'lbry:/' || query === 'lbry://' || query === 'lbry://@';

    if (queryIsPrefix) {
      // If it is a prefix, wait until something else comes to figure out what to do
      return [];
    } else if (query.startsWith('lbry://')) {
      // If it starts with a prefix, don't show any autocomplete results
      // They are probably typing/pasting in a lbry uri
      return [
        {
          value: query,
          type: query[7] === '@' ? SEARCH_TYPES.CHANNEL : SEARCH_TYPES.FILE,
        },
      ];
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

    searchSuggestions.push({
      value: query,
      type: SEARCH_TYPES.TAG,
    });

    const apiSuggestions = suggestions[query] || [];
    if (apiSuggestions.length) {
      searchSuggestions = searchSuggestions.concat(
        apiSuggestions
          .filter(suggestion => suggestion !== query)
          .map(suggestion => {
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

// Creates a query string based on the state in the search reducer
// Can be overrided by passing in custom sizes/from values for other areas pagination
export const makeSelectQueryWithOptions = (
  customQuery: ?string,
  customSize: ?number,
  customFrom: ?number,
  isBackgroundSearch: boolean = false // If it's a background search, don't use the users settings
) =>
  createSelector(
    selectSearchValue,
    selectSearchOptions,
    (query, options) => {
      const size = customSize || options[SEARCH_OPTIONS.RESULT_COUNT];

      const queryString = getSearchQueryString(
        customQuery || query,
        { ...options, size, from: customFrom },
        !isBackgroundSearch
      );

      return queryString;
    }
  );
