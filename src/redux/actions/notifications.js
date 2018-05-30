// @flow
import * as ACTIONS from 'constants/action_types';
import Notification from 'types/Notification';

export function doNotify(notification: Notification, notificationProps) {
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
