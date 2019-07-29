// @flow
import { createSelector } from 'reselect';

const selectState = (state: { blockedChannels: BlocklistState }) => state.blockedChannels || {};

export const selectBlockedChannels = createSelector(
  selectState,
  (state: BlocklistState) => state.blockedChannels
);

export const selectBlockedChannelsCount = createSelector(
  selectState,
  (state: BlocklistState) => state.blockedChannels.length
);

export const selectChannelIsBlocked = (uri: string) => createSelector(
  selectState,
  (state: BlocklistState) => { return state.blockedChannels.includes(uri) }
);
