import * as ACTIONS from 'constants/action_types';
import * as MODALS from 'constants/modal_types';

const reducers = {};

const defaultState = {
  // First-in, first-out
  queue: [],
  stack: [],
};

// Instant notification: snackbar and modals
reducers[ACTIONS.CREATE_NOTIFICATION] = (state, action) => {
  const { notification, notificationProps } = action.data;
  const { title, message, type, error, displayType, id } = notification;

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
    notificationProps,
  });

  return Object.assign({}, state, {
    queue,
  });
};

// Add to stack
reducers[ACTIONS.STACK_NOTIFICATION] = (state, action) => {
  const { notification, notificationProps } = action.data;
  const { title, message, type, error, displayType, id } = notification;
  const stack = Object.assign([], state.stack);
  stack.unshift({
    notification: {
      id,
      title,
      message,
      type,
      error,
      displayType,
    },
    notificationProps,
  });

  return Object.assign({}, state, {
    stack,
  });
};

reducers[ACTIONS.DISMISS_NOTIFICATION] = state => {
  const queue = Object.assign([], state.queue);
  queue.shift();

  return Object.assign({}, state, {
    queue,
  });
};

reducers[ACTIONS.REMOVE_NOTIFICATION] = (state, action) => {
  const stack = Object.assign([], state.stack);
  const { index } = action.data;
  stack.splice(index, 1);

  return Object.assign({}, state, {
    stack,
  });
};

reducers[ACTIONS.CLEAR_NOTIFICATIONS] = state => {
  const stack = Object.assign([], state.stack);
  stack.splice(0, stack.length);

  return Object.assign({}, state, {
    stack,
  });
};

reducers[ACTIONS.HISTORY_NAVIGATE] = state => {
  const queue = Object.assign([], state.queue);
  if (queue[0] && queue[0].notification.id === MODALS.SEARCH) {
    queue.shift();
    return Object.assign({}, state, { queue });
  }
  return state;
};

export function notificationsReducer(state = defaultState, action) {
  const handler = reducers[action.type];
  if (handler) return handler(state, action);
  return state;
}
