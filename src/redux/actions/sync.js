// @flow
import * as ACTIONS from 'constants/action_types';
import Lbry from 'lbry';

type SharedData = {
  version: '0.1',
  value: {
    subscriptions?: Array<string>,
    tags?: Array<string>,
    blockedChannels?: Array<string>,
    settings?: any,
  },
};

function extractUserState(rawObj: SharedData) {
  if (rawObj && rawObj.version === '0.1' && rawObj.value) {
    const { subscriptions, tags, blockedChannels, settings} = rawObj.value;

    return {
      ...(subscriptions ? { subscriptions } : {}),
      ...(tags ? { tags } : {}),
      ...(blockedChannels ? { blockedChannels } : {}),
      ...(settings ? { settings } : {}),
    };
  }

  return {};
}

export function doPopulateSharedUserState(sharedSettings: any) {
  return (dispatch: Dispatch) => {
    const { subscriptions, tags, blockedChannels, settings } = extractUserState(sharedSettings);
    dispatch({ type: ACTIONS.USER_STATE_POPULATE, data: { subscriptions, tags, blockedChannels, settings } });
  };
}

export function doPreferenceSet(
  key: string,
  value: any,
  version: string,
  success: Function,
  fail: Function
) {
  const preference = {
    type: typeof value,
    version,
    value,
  };

  const options = {
    key,
    value: JSON.stringify(preference),
  };

  Lbry.preference_set(options)
    .then(() => {
      success(preference);
    })
    .catch(() => {
      if (fail) {
        fail();
      }
    });
}

export function doPreferenceGet(key: string, success: Function, fail?: Function) {
  const options = {
    key,
  };

  Lbry.preference_get(options)
    .then(result => {
      if (result) {
        const preference = result[key];
        return success(preference);
      }

      return success(null);
    })
    .catch(err => {
      if (fail) {
        fail(err);
      }
    });
}
