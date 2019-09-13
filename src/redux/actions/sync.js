// @flow
import * as ACTIONS from 'constants/action_types';

type v0Data = {
  version: '0',
  shared: {
    subscriptions?: Array<string>,
    tags?: Array<string>,
  },
};

function extractSettings(rawObj: v0Data) {
  if (rawObj && rawObj.version === '0' && rawObj.shared) {
    const { subscriptions, tags } = rawObj.shared;
    return {
      ...(subscriptions ? { subscriptions } : {}),
      ...(tags ? { tags } : {}),
    };
  }

  return {};
}

export function doPopulateUserSettings(settings: any) {
  return (dispatch: Dispatch) => {
    const { subscriptions, tags } = extractSettings(settings);
    dispatch({ type: ACTIONS.USER_STATE_POPULATE, data: { subscriptions, tags } });
  };
}
