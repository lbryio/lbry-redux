import { createSelector } from 'reselect';

export const selectState = state => state.notifications || {};

export const selectNotification = createSelector(
  selectState,
  state => (state.queue.length > 0 ? state.queue[0] : {})
);
