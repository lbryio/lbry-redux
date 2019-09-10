// @flow
import * as ACTIONS from 'constants/action_types';

function extractSettings(rawObj: {
  version: string,
  app: {},
}): {
  subscriptions?: Array<string>,
  tags?: Array<string>,
} {
  if (rawObj && rawObj.version && rawObj.app) {
    const { subscriptions, tags } = rawObj.app;
    return {
      ...(subscriptions ? { subscriptions } : {}),
      ...(tags ? { tags } : {}),
    };
  }

  return {};
}

export function doPopulateUserSettings(settings: any) {
  return dispatch => {
    const { subscriptions, tags } = extractSettings(settings);
    dispatch({ type: ACTIONS.USER_SETTINGS_POPULATE, data: { subscriptions, tags } });
  };
}
