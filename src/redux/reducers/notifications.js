import * as ACTIONS from 'constants/action_types';

const reducers = {};

const defaultState = {
  // First-in, first-out
  queue: [],
};

reducers[ACTIONS.NOTIFICATION_CREATED] = (state, action) => {
  const { title, message, type, errorCode, displayType } = action.data;
  const queue = Object.assign([], state.queue);
  queue.push({
    title,
    message,
    type,
    errorCode,
    displayType,
  });

  return Object.assign({}, state, {
    queue,
  });
};

reducers[ACTIONS.NOTIFICATION_DISPLAYED] = state => {
  const queue = Object.assign([], state.queue);
  queue.shift();

  return Object.assign({}, state, {
    queue,
  });
};

export function notificationsReducer(state = defaultState, action) {
  const handler = reducers[action.type];
  if (handler) return handler(state, action);
  return state;
}
