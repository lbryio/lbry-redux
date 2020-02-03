// @flow
import { createSelector } from 'reselect';

const selectState = state => state.comments || {};

export const selectCommentsById = createSelector(
  selectState,
  state => state.commentById || {}
);

export const selectReplyIdsById = createSelector(
  selectState,
  state => state.repliesByCommentId || {}
);

export const selectRepliesById = createSelector(
  selectState,
  selectReplyIdsById,
  (state, repliesById) => {
    const byCommentId = state.commentById || {};
    const comments = {};

    for (const [parentId, replies] of repliesById) {
      comments[parentId] = [];
      for (const commentId of replies) {
        comments[parentId].push(byCommentId[commentId]);
      }
    }
  }
);

export const selectRepliesByClaimId = createSelector(
  selectState,
  selectRepliesById,
  (state, repliesById) => {
    const byClaimId = state.byId || {};
    const claimThreads = {};

    Object.keys(byClaimId).forEach(claimId => {
      claimThreads[claimId] = {};
      for (const commentId of byClaimId[claimId]) {
        if (repliesById[commentId]) {
          claimThreads[claimId][commentId] = repliesById[commentId];
        }
      }
    });
  }
);

export const selectCommentsByClaimId = createSelector(
  selectState,
  selectCommentsById,
  selectRepliesByClaimId,
  (state, commentById, repliesByClaimId) => {
    const byClaimId = state.byId || {};
    const comments = {};
    // replace every comment_id in the list with the actual comment object
    Object.keys(byClaimId).forEach(claimId => {
      const threads = repliesByClaimId[claimId];
      const commentIds = byClaimId[claimId];

      comments[claimId] = [];
      for (const commentId of commentIds) {
        const comment = commentById[commentId];
        comment.replies = threads[commentId];
        comments[claimId].push(comment);
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
  selectCommentsByClaimId,
  (state, commentsByClaimId) => {
    const byUri = state.commentsByUri || {};
    const comments = {};
    Object.keys(byUri).forEach(uri => {
      const claimId = byUri[uri];
      comments[uri] = commentsByClaimId[claimId];
    });

    return comments;
  }
);

export const makeSelectCommentsForUri = (uri: string) =>
  createSelector(
    selectCommentsByUri,
    byUri => byUri[uri]
  );
