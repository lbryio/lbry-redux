import * as ACTIONS from 'constants/action_types';

const reducers = {};

const defaultState = {
  // First-in, first-out
  queue: [],
};

reducers[ACTIONS.CREATE_NOTIFICATION] = (state, action) => {
  const { notification, notificationProps } = action.data;
  const { title, message, type, error, displayType, id } = notification;
  const { uri, nout, txid } = notificationProps;

  const queue = Object.assign([], state.queue);
  queue.push({
    notification: {
      id,
      title,
      message,
      type,
      error,
      displayType,
    },
    notificationProps: {
      uri,
      txid,
      nout,
    },
  });

  return Object.assign({}, state, {
    queue,
  });
};

reducers[ACTIONS.DISMISS_NOTIFICATION] = state => {
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
