// @flow
import * as ACTIONS from 'constants/action_types';
import Lbry from 'lbry';
import isEqual from 'util/deep-equal';

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

export function sharedStateSubscriber(
  state: any,
  filters: any,
  localCache: any,
  accountId: string,
  walletId: string)
{
  Object.keys(filters).forEach(key => {
    const filter = filters[key];
    const { source, property, transform } = filter;
    let value = state[source][property];
    if (transform) {
      value = transform(value);
    }

    let cacheKey = key;
    if (accountId) {
      cacheKey = `${cacheKey}_${accountId}`;
    }
    if (walletId) {
      cacheKey = `${cacheKey}_${walletId}`;
    }

    if (!isEqual(localCache[cacheKey], value)) {
      // only update if the preference changed from last call in the same session
      doPreferenceSet(key, value, accountId, walletId);
    }
  });
}

export function doPreferenceSet(key: string, value: any, accountId: string, walletId: string, success: Function, fail: Function) {
  const preference = {
    type: (typeof value),
    value
  };

  Lbry.preference_set({ key, value: JSON.stringify(preference), account_id: accountId, wallet_id: walletId }).then(() => {
    success(value);
  }).catch(() => {
    if (fail) { fail(); }
  });
}

export function doPreferenceGet(key: string, accountId: string, walletId: string, success: Function, fail: Function) {
  Lbry.preference_get({ key, account_id: accountId, wallet_id: walletId }).then(result => {
    if (result) {
      const preference = JSON.parse(result);
      const { value } = preference;
      return success(value);
    }

    // Or fail instead?
    return success(null);
  }).catch(() => {
    if (fail) { fail(); }
  });
}
