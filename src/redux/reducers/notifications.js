// @flow
import type {
  NotificationState,
  DoToast,
  DoNotification,
  DoEditNotification,
  DoDeleteNotification,
} from 'types/Notification';
import * as ACTIONS from 'constants/action_types';
import { handleActions } from 'util/redux-utils';

const defaultState: NotificationState = {
  notifications: [],
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

    // Notifications
    [ACTIONS.CREATE_NOTIFICATION]: (state: NotificationState, action: DoNotification) => {
      const notification = action.data;
      const newNotifications = state.notifications.slice();
      newNotifications.push(notification);

      return {
        ...state,
        notifications: newNotifications,
      };
    },
    // Used to mark notifications as read/dismissed
    [ACTIONS.EDIT_NOTIFICATION]: (state: NotificationState, action: DoEditNotification) => {
      const { notification } = action.data;
      let notifications = state.notifications.slice();

      notifications = notifications.map(
        (pastNotification) =>
          pastNotification.id === notification.id ? notification : pastNotification
      );

      return {
        ...state,
        notifications,
      };
    },
    [ACTIONS.DELETE_NOTIFICATION]: (state: NotificationState, action: DoDeleteNotification) => {
      const { id } = action.data;
      let newNotifications = state.notifications.slice();
      newNotifications = newNotifications.filter((notification) => notification.id !== id);

      return {
        ...state,
        notifications: newNotifications,
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
