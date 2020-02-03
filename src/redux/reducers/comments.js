// @flow
import * as ACTIONS from 'constants/action_types';
import { handleActions } from 'util/redux-utils';

const defaultState: CommentsState = {
  commentById: {}, // commentId -> Comment
  byId: {}, // ClaimID -> list of comments
  commentsByUri: {}, // URI -> claimId
  isLoading: false,
  repliesByCommentId: {}, // commentId -> list of commentIds
  myComments: undefined,
};

export const commentReducer = handleActions(
  {
    [ACTIONS.COMMENT_CREATE_STARTED]: (state: CommentsState, action: any): CommentsState => ({
      ...state,
      isLoading: true,
    }),

    [ACTIONS.COMMENT_CREATE_FAILED]: (state: CommentsState, action: any) => ({
      ...state,
      isLoading: false,
    }),

    [ACTIONS.COMMENT_CREATE_COMPLETED]: (state: CommentsState, action: any): CommentsState => {
      const { comment, claimId, parentId } = action.data;
      const commentById = Object.assign({}, state.commentById);
      const byId = Object.assign({}, state.byId);
      const repliesByCommentId = Object.assign({}, state.repliesByCommentId);
      const comments = byId[claimId];
      const newCommentIds = comments.slice();

      // add the comment by its ID
      commentById[comment.comment_id] = comment;

      // push the comment_id to the top of ID list
      newCommentIds.unshift(comment.comment_id);
      byId[claimId] = newCommentIds;

      if (parentId) {
        const newReplies = repliesByCommentId[parentId] || [];
        // unlike regular comments, newest replies should be at the bottom of list
        newReplies.push(comment.comment_id);
        repliesByCommentId[parentId] = newReplies;
      }

      return {
        ...state,
        commentById,
        byId,
        isLoading: false,
      };
    },

    [ACTIONS.COMMENT_LIST_STARTED]: state => ({ ...state, isLoading: true }),

    [ACTIONS.COMMENT_LIST_COMPLETED]: (state: CommentsState, action: any) => {
      const { comments, claimId, uri, parentId } = action.data;

      const commentById = Object.assign({}, state.commentById);
      const byId = Object.assign({}, state.byId);
      const commentsByUri = Object.assign({}, state.commentsByUri);
      const repliesByCommentId = Object.assign({}, state.repliesByCommentId);

      if (comments) {
        // we use an Array to preserve order of listing
        // in reality this doesn't matter and we can just
        // sort comments by their timestamp
        const commentIds = Array(comments.length);
        const replyThreads = {};

        // map the comment_ids to the new comments
        for (let i = 0; i < comments.length; i++) {
          const comment = comments[i];
          commentIds[i] = comment.comment_id;
          commentById[commentIds[i]] = comment;

          if (comment.parent_id) {
            if (!(comment.parent_id in replyThreads)) {
              replyThreads[comment.parent_id] = [];
            }
            replyThreads[comment.parent_id].push(comment.comment_id);
          }
        }

        Object.entries(replyThreads).forEach((parent_id, replyIds) => {
          repliesByCommentId[parent_id] = replyIds;
        });

        commentsByUri[uri] = claimId;
        // don't override the entire list with the replies to one comment
        if (parentId == null) {
          byId[claimId] = commentIds;
        }
      }
      return {
        ...state,
        byId,
        commentById,
        commentsByUri,
        repliesByCommentId,
        isLoading: false,
      };
    },

    [ACTIONS.COMMENT_LIST_FAILED]: (state: CommentsState, action: any) => ({
      ...state,
      isLoading: false,
    }),
    [ACTIONS.COMMENT_ABANDON_STARTED]: (state: CommentsState, action: any) => ({
      ...state,
      isLoading: true,
    }),
    [ACTIONS.COMMENT_ABANDON_COMPLETED]: (state: CommentsState, action: any) => {
      const { comment_id } = action.data;
      const commentById = Object.assign({}, state.commentById);
      const byId = Object.assign({}, state.byId);
      const repliesByCommentId = Object.assign({}, state.repliesByCommentId);

      const comment: Comment = commentById[comment_id];

      // keep record of comment's existence if it has replies
      if (!(comment.comment_id in repliesByCommentId)) {
        const claimId = commentById[comment_id].claim_id;
        for (let i = 0; i < byId[claimId].length; i++) {
          if (byId[claimId][i] === comment_id) {
            byId[claimId].splice(i, 1);
            break;
          }
        }
      }

      if (comment.parent_id) {
        for (let i = 0; i < repliesByCommentId[comment.parent_id]; i++) {
          if (repliesByCommentId[comment.parent_id][i] === comment.comment_id) {
            repliesByCommentId[comment.parent_id].splice(i, 1);
            break;
          }
        }
      }

      delete commentById[comment_id];

      return {
        ...state,
        commentById,
        byId,
        repliesByCommentId,
        isLoading: false,
      };
    },
    // do nothing
    [ACTIONS.COMMENT_ABANDON_FAILED]: (state: CommentsState, action: any) => ({
      ...state,
      isLoading: false,
    }),
    // do nothing
    [ACTIONS.COMMENT_UPDATE_STARTED]: (state: CommentsState, action: any) => ({
      ...state,
      isLoading: true,
    }),
    // replace existing comment with comment returned here under its comment_id
    [ACTIONS.COMMENT_UPDATE_COMPLETED]: (state: CommentsState, action: any) => {
      const { comment } = action.data;
      const commentById = Object.assign({}, state.commentById);
      commentById[comment.comment_id] = comment;

      return {
        ...state,
        commentById,
        isLoading: false,
      };
    },
    // nothing can be done here
    [ACTIONS.COMMENT_UPDATE_FAILED]: (state: CommentsState, action: any) => ({
      ...state,
      isLoading: false,
    }),
    // nothing can really be done here
    [ACTIONS.COMMENT_HIDE_STARTED]: (state: CommentsState, action: any) => ({
      ...state,
      isLoading: true,
    }),
    [ACTIONS.COMMENT_HIDE_COMPLETED]: (state: CommentsState, action: any) => ({
      ...state, // todo: add HiddenComments state & create selectors
      isLoading: false,
    }),
    // nothing can be done here
    [ACTIONS.COMMENT_HIDE_FAILED]: (state: CommentsState, action: any) => ({
      ...state,
      isLoading: false,
    }),
  },
  defaultState
);
