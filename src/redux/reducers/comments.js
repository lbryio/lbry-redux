// @flow
import * as ACTIONS from 'constants/action_types';
import { handleActions } from 'util/redux-utils';

const defaultState: CommentsState = {
  commentById: {}, // commentId -> Comment
  byId: {}, // ClaimID -> list of comments
  commentsByUri: {}, // URI -> claimId
  isLoading: false,
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
      const { comment, claimId }: any = action.data;
      const commentById = Object.assign({}, state.commentById);
      const byId = Object.assign({}, state.byId);
      const comments = byId[claimId];
      const newCommentIds = comments.slice();

      // add the comment by its ID
      commentById[comment.comment_id] = comment;

      // push the comment_id to the top of ID list
      newCommentIds.unshift(comment.comment_id);
      byId[claimId] = newCommentIds;

      return {
        ...state,
        commentById,
        byId,
        isLoading: false,
      };
    },

    [ACTIONS.COMMENT_LIST_STARTED]: state => ({ ...state, isLoading: true }),

    [ACTIONS.COMMENT_LIST_COMPLETED]: (state: CommentsState, action: any) => {
      const { comments, claimId, uri } = action.data;

      const commentById = Object.assign({}, state.commentById);
      const byId = Object.assign({}, state.byId);
      const commentsByUri = Object.assign({}, state.commentsByUri);

      if (comments) {
        const commentIds = Array(comments.length);
        // map the comment_ids to the new comments
        for (let i = 0; i < comments.length; i++) {
          commentIds[i] = comments[i].comment_id;
          commentById[commentIds[i]] = comments[i];
        }

        byId[claimId] = commentIds;
        commentsByUri[uri] = claimId;
      }
      return {
        ...state,
        byId,
        commentById,
        commentsByUri,
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
    [ACTIONS.COMMENT_ABANDON_COMPLETED]: (state: CommentsState, action: any) => ({
      ...state,
      isLoading: false,
    }),
    [ACTIONS.COMMENT_ABANDON_FAILED]: (state: CommentsState, action: any) => ({
      ...state,
      isLoading: false,
    }),
    [ACTIONS.COMMENT_EDIT_STARTED]: (state: CommentsState, action: any) => ({
      ...state,
      isLoading: true,
    }),
    [ACTIONS.COMMENT_EDIT_COMPLETED]: (state: CommentsState, action: any) => ({
      ...state,
      isLoading: false,
    }),
    [ACTIONS.COMMENT_EDIT_FAILED]: (state: CommentsState, action: any) => ({
      ...state,
      isLoading: false,
    }),
    [ACTIONS.COMMENT_HIDE_STARTED]: (state: CommentsState, action: any) => ({
      ...state,
      isLoading: true,
    }),
    [ACTIONS.COMMENT_HIDE_COMPLETED]: (state: CommentsState, action: any) => ({
      ...state,
      isLoading: false,
    }),
    [ACTIONS.COMMENT_HIDE_FAILED]: (state: CommentsState, action: any) => ({
      ...state,
      isLoading: false,
    }),
  },
  defaultState
);
