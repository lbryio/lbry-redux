// @flow
import * as ACTIONS from 'constants/action_types';
import type { Notification, NotificationProps } from 'types/Notification';

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

export function doHideNotification() {
  return {
    type: ACTIONS.DISMISS_NOTIFICATION,
  };
}
