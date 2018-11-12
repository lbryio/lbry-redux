// @flow
import type {
  NotificationState,
  DoToast,
  DoEvent,
  DoEditEvent,
  DoDeleteEvent,
} from 'types/Notification';
import * as ACTIONS from 'constants/action_types';
import { handleActions } from 'util/redux-utils';

const defaultState: NotificationState = {
  events: [],
  toasts: [],
  errors: [],
};

const notificationsReducer = handleActions(
  {
    // Toasts
    [ACTIONS.CREATE_TOAST]: (state: NotificationState, action: DoToast) => {
      const toast = action.data;
      const newToasts = state.toasts.slice();
      newToasts.push(toast);

      return {
        ...state,
        toasts: newToasts,
      };
    },
    [ACTIONS.DISMISS_TOAST]: (state: NotificationState) => {
      const newToasts = state.toasts.slice();
      newToasts.shift();

      return {
        ...state,
        toasts: newToasts,
      };
    },

    // Events
    [ACTIONS.CREATE_EVENT]: (state: NotificationState, action: DoEvent) => {
      const event = action.data;
      const newEvents = state.events.slice();
      newEvents.push(event);

      return {
        ...state,
        events: newEvents,
      };
    },
    // Used to mark notifications as read/dismissed
    [ACTIONS.EDIT_EVENT]: (state: NotificationState, action: DoEditEvent) => {
      const { event } = action.data;
      let events = state.events.slice();

      events = events.map((pastEvent) => (pastEvent.id === event.id ? event : pastEvent));

      return {
        ...state,
        events,
      };
    },
    [ACTIONS.DELETE_EVENT]: (state: NotificationState, action: DoDeleteEvent) => {
      const { id } = action.data;
      let newEvents = state.events.slice();
      newEvents = newEvents.filter((notification) => notification.id !== id);

      return {
        ...state,
        events: newEvents,
      };
    },

    // Errors
    [ACTIONS.CREATE_ERROR]: (state: NotificationState, action: DoToast) => {
      const error = action.data;
      const newErrors = state.errors.slice();
      newErrors.push(error);

      return {
        ...state,
        errors: newErrors,
      };
    },
    [ACTIONS.DISMISS_ERROR]: (state: NotificationState) => {
      const newErrors = state.errors.slice();
      newErrors.shift();

      return {
        ...state,
        errors: newErrors,
      };
    },
  },
  defaultState
);

export { notificationsReducer };
