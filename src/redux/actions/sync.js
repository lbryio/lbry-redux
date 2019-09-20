// @flow
import * as ACTIONS from 'constants/action_types';

type v0Data = {
  version: '0.1',
  shared: {
    subscriptions?: Array<string>,
    tags?: Array<string>,
  },
};

function extractUserState(rawObj: v0Data) {
  if (rawObj && rawObj.version === '0.1' && rawObj.shared) {
    const { subscriptions, tags } = rawObj.shared;

    return {
      ...(subscriptions ? { subscriptions } : {}),
      ...(tags ? { tags } : {}),
    };
  }

  return {};
}

export function doPopulateSharedUserState(settings: any) {
  return (dispatch: Dispatch) => {
    const { subscriptions, tags } = extractUserState(settings);
    dispatch({ type: ACTIONS.USER_STATE_POPULATE, data: { subscriptions, tags } });
  };
}
