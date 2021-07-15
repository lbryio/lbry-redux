// @flow
import * as ACTIONS from 'constants/action_types';
import Lbry from 'lbry';

type SharedData = {
  version: '0.1',
  value: {
    subscriptions?: Array<string>,
    following?: Array<{ uri: string, notificationsDisabled: boolean }>,
    tags?: Array<string>,
    blocked?: Array<string>,
    coin_swap_codes?: Array<string>,
    settings?: any,
    app_welcome_version?: number,
    sharing_3P?: boolean,
    unpublishedCollections: CollectionGroup,
    builtinCollections: CollectionGroup,
    savedCollections: Array<string>,
  },
};

function extractUserState(rawObj: SharedData) {
  if (rawObj && rawObj.version === '0.1' && rawObj.value) {
    const {
      subscriptions,
      following,
      tags,
      blocked,
      coin_swap_codes,
      settings,
      app_welcome_version,
      sharing_3P,
      unpublishedCollections,
      builtinCollections,
      savedCollections,
    } = rawObj.value;

    return {
      ...(subscriptions ? { subscriptions } : {}),
      ...(following ? { following } : {}),
      ...(tags ? { tags } : {}),
      ...(blocked ? { blocked } : {}),
      ...(coin_swap_codes ? { coin_swap_codes } : {}),
      ...(settings ? { settings } : {}),
      ...(app_welcome_version ? { app_welcome_version } : {}),
      ...(sharing_3P ? { sharing_3P } : {}),
      ...(unpublishedCollections ? { unpublishedCollections } : {}),
      ...(builtinCollections ? { builtinCollections } : {}),
      ...(savedCollections ? { savedCollections } : {}),
    };
  }

  return {};
}

export function doPopulateSharedUserState(sharedSettings: any) {
  return (dispatch: Dispatch) => {
    const {
      subscriptions,
      following,
      tags,
      blocked,
      coin_swap_codes,
      settings,
      app_welcome_version,
      sharing_3P,
      unpublishedCollections,
      builtinCollections,
      savedCollections,
    } = extractUserState(sharedSettings);
    dispatch({
      type: ACTIONS.USER_STATE_POPULATE,
      data: {
        subscriptions,
        following,
        tags,
        blocked,
        coinSwapCodes: coin_swap_codes,
        settings,
        welcomeVersion: app_welcome_version,
        allowAnalytics: sharing_3P,
        unpublishedCollections,
        builtinCollections,
        savedCollections,
      },
    });
  };
}

export function doPreferenceSet(
  key: string,
  value: any,
  version: string,
  success: Function,
  fail: Function
) {
  return (dispatch: Dispatch) => {
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
        if (success) {
          success(preference);
        }
      })
      .catch(err => {
        dispatch({
          type: ACTIONS.SYNC_FATAL_ERROR,
          error: err,
        });

        if (fail) {
          fail();
        }
      });
  };
}

export function doPreferenceGet(key: string, success: Function, fail?: Function) {
  return (dispatch: Dispatch) => {
    const options = {
      key,
    };

    return Lbry.preference_get(options)
      .then(result => {
        if (result) {
          console.log('result', result)
          const preference = result[key];
          console.log('pref', preference)
          return success(preference);
        }

        return success(null);
      })
      .catch(err => {
        dispatch({
          type: ACTIONS.SYNC_FATAL_ERROR,
          error: err,
        });

        if (fail) {
          fail(err);
        }
      });
  };
}
