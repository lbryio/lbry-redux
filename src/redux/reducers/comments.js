// @flow
import * as ACTIONS from 'constants/action_types';
import { handleActions } from 'util/redux-utils';

const defaultState: CommentsState = {
  byId: {},
  commentsByUri: {},
  isLoading: false,
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
      const byId = Object.assign({}, state.byId);
      const comments = byId[claimId];
      const newComments = comments.slice();

      newComments.unshift(comment);
      byId[claimId] = newComments;

      return {
        ...state,
        byId,
      };
    },

    [ACTIONS.COMMENT_LIST_STARTED]: state => ({ ...state, isLoading: true }),

    [ACTIONS.COMMENT_LIST_COMPLETED]: (state: CommentsState, action: any) => {
      const { comments, claimId, uri } = action.data;
      const byId = Object.assign({}, state.byId);
      const commentsByUri = Object.assign({}, state.commentsByUri);

      if (comments['items']) {
        byId[claimId] = comments['items'];
        commentsByUri[uri] = claimId;
      }
      return {
        ...state,
        byId,
        commentsByUri,
        isLoading: false,
      };
    },

    [ACTIONS.COMMENT_LIST_FAILED]: (state: CommentsState, action: any) => ({
      ...state,
      isLoading: false,
    }),
  },
  defaultState
);
