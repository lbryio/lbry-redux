// @flow
import { createSelector } from 'reselect';

const selectState = state => state.comments || {};

export const selectCommentsById = createSelector(
  selectState,
  state => state.byId || {}
);

export const selectCommentsByUri = createSelector(
  selectState,
  state => {
    const byUri = state.commentsByUri || {};
    const comments = {};
    Object.keys(byUri).forEach(uri => {
      const claimId = byUri[uri];
      if (claimId === null) {
        comments[uri] = null;
      } else {
        comments[uri] = claimId;
      }
    });
    return comments;
  }
);

export const makeSelectCommentsForUri = (uri: string) =>
  createSelector(
    selectCommentsById,
    selectCommentsByUri,
    (byId, byUri) => {
      const claimId = byUri[uri];
      return byId && byId[claimId];
    }
  );
