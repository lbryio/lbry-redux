// @flow
import * as ACTIONS from 'constants/action_types';
import type { Notification, NotificationProps, NotificationTile } from 'types/Notification';

export function doNotify(notification: Notification, notificationProps: NotificationProps) {
  return {
    type: ACTIONS.CREATE_NOTIFICATION,
    data: {
      notification,
      // using this syntax to create an object if notificationProps is undefined
      notificationProps: { ...notificationProps },
    },
  };
}

export function doNotifyStack(
  notification: NotificationTile,
  notificationProps: NotificationProps
) {
  return {
    type: ACTIONS.STACK_NOTIFICATION,
    data: {
      notification,
      notificationProps: { ...notificationProps },
    },
  };
}

export function doClearNotifyStack() {
  return {
    type: ACTIONS.CLEAR_NOTIFICATIONS,
  };
}

export function doHideNotification() {
  return {
    type: ACTIONS.DISMISS_NOTIFICATION,
  };
}

export function doRemoveNotification(index) {
  return {
    type: ACTIONS.REMOVE_NOTIFICATION,
    data: { index },
  };
}
