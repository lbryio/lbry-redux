// @flow
import * as ACTIONS from 'constants/action_types';
import Notification from 'types/Notification';

export function doNotify(data: Notification) {
  return {
    type: ACTIONS.CREATE_NOTIFICATION,
    data,
  };
}
