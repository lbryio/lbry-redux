import { createSelector } from 'reselect';

export const selectState = state => state.notifications || {};

export const selectNotifications = createSelector(
  selectState,
  state => state.stack
);

export const selectNotificationData = createSelector(
  selectState,
  state => (state.queue.length > 0 ? state.queue[0] : {})
);

export const selectNotification = createSelector(
  selectNotificationData,
  notificationData => notificationData.notification
);

export const selectNotificationProps = createSelector(
  selectNotificationData,
  notificationData => notificationData.notificationProps
);

export const selectSnack = createSelector(
  // No props for snackbar
  selectNotification,
  notification => {
    if (notification && notification.displayType) {
      return notification.displayType.indexOf('snackbar') > -1 ? notification : undefined;
    }

    return undefined;
  }
);
