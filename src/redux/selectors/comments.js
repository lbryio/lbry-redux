// @flow
import { createSelector } from 'reselect';

const selectState = state => state.comments || {};

export const selectCommentsById = createSelector(
  selectState,
  state => state.commentById || {}
);

export const selectCommentsByClaimId = createSelector(
  selectState,
  selectCommentsById,
  (state, byId) => {
    const byClaimId = state.byId || {};
    const comments = {};

    // for every claimId -> commentId, put comments in the object
    Object.keys(byClaimId).forEach(claimId => {
      // get all the commentIds that commented on this ClaimId
      const commentIds = byClaimId[claimId];

      // map a new array of comments by the claimId
      comments[claimId] = Array(commentIds === null ? 0 : commentIds.length);
      for (let i = 0; i < commentIds.length; i++) {
        comments[claimId][i] = byId[commentIds[i]];
      }
    });

    return comments;
  }
);

// previously this used a mapping from claimId -> Array<Comments>
/* export const selectCommentsById = createSelector(
  selectState,
  state => state.byId || {}
); */
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
    selectCommentsByClaimId,
    selectCommentsByUri,
    (byClaimId, byUri) => {
      const claimId = byUri[uri];
      return byClaimId && byClaimId[claimId];
    }
  );

// todo: allow SDK to retrieve user comments through comment_list
// todo: implement selectors for selecting comments owned by user
