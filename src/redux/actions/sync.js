// @flow
import * as ACTIONS from 'constants/action_types';
import Lbry from 'lbry';
import isEqual from 'util/deep-equal';

type sharedData = {
  version: '0.1',
  value: {
    subscriptions?: Array<string>,
    tags?: Array<string>,
  },
};

let oldShared;
const sharedPreferenceKey = 'shared';

function extractUserState(rawObj: sharedData) {
  if (rawObj && rawObj.version === '0.1' && rawObj.value) {
    const { subscriptions, tags } = rawObj.value;

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

export function sharedStateSubscriber(
  state: any,
  filters: any,
  version: string,
  accountId: string,
  walletId: string)
{
  // the shared object that will be saved
  const shared = {};

  Object.keys(filters).forEach(key => {
    const filter = filters[key];
    const { source, property, transform } = filter;
    let value = state[source][property];
    if (transform) {
      value = transform(value);
    }

    shared[key] = value;
  });


  if (!isEqual(oldShared, shared)) {
    // only update if the preference changed from last call in the same session
    oldShared = shared;
    doPreferenceSet(sharedPreferenceKey, shared, version, accountId, walletId);
  }
}

export function doPreferenceSet(
  key: string,
  value: any,
  version: string,
  accountId: string,
  walletId: string,
  success: Function,
  fail: Function
) {
  const preference = {
    type: (typeof value),
    version,
    value,
  };

  Lbry.preference_set({ key, value: JSON.stringify(preference), account_id: accountId, wallet_id: walletId }).then(() => {
    success(preference);
  }).catch(() => {
    if (fail) { fail(); }
  });
}

export function doPreferenceGet(
  key: string,
  accountId: string,
  walletId: string,
  success: Function,
  fail: Function
) {
  Lbry.preference_get({ key, account_id: accountId, wallet_id: walletId }).then(result => {
    if (result) {
      const preference = result[key];
      return success(preference);
    }

    return success(null);
  }).catch(err => {
    if (fail) { fail(err); }
  });
}
