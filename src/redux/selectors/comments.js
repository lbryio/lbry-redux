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

    Object.keys(repliesById).forEach(parentId => {
      comments[parentId] = [];
      for (const commentId of repliesById[parentId]) {
        comments[parentId].push(byCommentId[commentId]);
      }
    });
    return comments;
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
    return claimThreads;
  }
);

export const selectAllCommentsByClaimId = createSelector(
  selectState,
  selectCommentsById,
  (state, commentById) => {
    const byClaimId = state.byId || {};
    const comments = {};
    // replace every comment_id in the list with the actual comment object
    Object.keys(byClaimId).forEach(claimId => {
      const commentIds = byClaimId[claimId] || [];

      comments[claimId] = [];
      for (const commentId of commentIds) {
        comments[claimId].push(commentById[commentId]);
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
  selectAllCommentsByClaimId,
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

export const makeSelectCommentReplyCount = (commentId: string) =>
  createSelector(
    selectReplyIdsById,
    repliesById => (repliesById[commentId] ? repliesById[commentId].length : 0)
  );

export const makeSelectCommentReplyList = (commentId: string) => {
  createSelector(
    selectRepliesById,
    repliesById => repliesById[commentId]
  );
};
