import { createSelector } from 'reselect';
import { parseQueryParams } from 'util/query-params';

export const selectState = state => state.navigation || {};

export const selectCurrentPath = createSelector(
  selectState,
  state => state.currentPath
);

export const computePageFromPath = path => (path ? path.replace(/^\//, '').split('?')[0] : '');

export const selectCurrentPage = createSelector(
  selectCurrentPath,
  path => computePageFromPath(path)
);

export const selectCurrentParams = createSelector(
  selectCurrentPath,
  path => {
    if (path === undefined) return {};
    if (!path.match(/\?/)) return {};

    return parseQueryParams(path.split('?')[1]);
  }
);

export const makeSelectCurrentParam = param =>
  createSelector(
    selectCurrentParams,
    params => (params ? params[param] : undefined)
  );

export const selectPathAfterAuth = createSelector(
  selectState,
  state => state.pathAfterAuth
);

export const selectIsBackDisabled = createSelector(
  selectState,
  state => state.index === 0
);

export const selectIsForwardDisabled = createSelector(
  selectState,
  state => state.index === state.stack.length - 1
);

export const selectIsHome = createSelector(
  selectCurrentPage,
  page => page === 'discover'
);

export const selectHistoryIndex = createSelector(
  selectState,
  state => state.index
);

export const selectHistoryStack = createSelector(
  selectState,
  state => state.stack
);

// returns current page attributes (scrollY, path)
export const selectActiveHistoryEntry = createSelector(
  selectState,
  state => state.stack[state.index]
);

export const selectPageTitle = createSelector(
  selectCurrentPage,
  page => {
    switch (page) {
      default:
        return '';
    }
  }
);
