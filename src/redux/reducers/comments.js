// @flow
import * as ACTIONS from 'constants/action_types';

// TODO change to handleActions()
// const commentsReducer = handleActions( {
const reducers = {};

const defaultState: CommentsState = {
  byId: {},
  commentsByUri: {},
  isLoading: false,
};

reducers[ACTIONS.COMMENT_CREATE_STARTED] = (state: CommentsState, action: any): CommentsState =>
  Object.assign({}, state, {
    isLoading: true,
  });

reducers[ACTIONS.COMMENT_CREATE_FAILED] = (state: CommentsState, action: any): CommentsState => {
  // TODO: handle error.. what else?
  return state;
};

reducers[ACTIONS.COMMENT_CREATE_COMPLETED] = (state: CommentsState, action: any): CommentsState => {
  const { comments }: any = action.data;
  return state;
};

reducers[ACTIONS.COMMENT_LIST_UPDATED] = (state: CommentsState, action: any): CommentsState => {
  const { comment, claimId }: any = action.data;
  const byId = Object.assign({}, state.byId);
  const comments = byId[claimId];
  const newComments = comments.slice();
  newComments.unshift(comment);
  byId[claimId] = newComments;
  return Object.assign({}, state, {
    byId,
  });
};

reducers[ACTIONS.COMMENT_LIST_STARTED] = state =>
  Object.assign({}, state, {
    isLoading: true,
  });

reducers[ACTIONS.COMMENT_LIST_COMPLETED] = (state: CommentsState, action: any) => {
  const { comments, claimId, uri } = action.data;
  const byId = Object.assign({}, state.byId);
  const commentsByUri = Object.assign({}, state.commentsByUri);

  if (comments['items']) {
    byId[claimId] = comments['items'];
    commentsByUri[uri] = claimId;
  }
  return Object.assign({}, state, {
    byId,
    commentsByUri,
    isLoading: false,
  });
};

export function commentReducer(state: CommentsState = defaultState, action: any) {
  const handler = reducers[action.type];
  if (handler) return handler(state, action);
  return state;
}
