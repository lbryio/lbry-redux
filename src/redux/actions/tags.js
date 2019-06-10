// @flow
import * as ACTIONS from 'constants/action_types';
import Lbry from 'lbry';
import { doClaimSearch } from 'redux/actions/claims';

export const doToggleTagFollow = (name: string) => ({
  type: ACTIONS.TOGGLE_TAG_FOLLOW,
  data: {
    name,
  },
});

export const doAddTag = (name: string) => ({
  type: ACTIONS.TAG_ADD,
  data: {
    name,
  },
});

export const doDeleteTag = (name: string) => ({
  type: ACTIONS.TAG_DELETE,
  data: {
    name,
  },
});

export const doFetchByTags = (amount: number = 10, options: Object = {}) => {
  return (dispatch: Dispatch) => {
    dispatch({
      type: ACTIONS.FETCH_TRENDING_STARTED,
    });

    const callback = (error: ?Error, uris: ?Array<string> = []) => {
      if (error) {
        return dispatch({
          type: ACTIONS.FETCH_TRENDING_FAILED,
          error,
        });
      }

      dispatch({
        type: ACTIONS.FETCH_TRENDING_COMPLETED,
        data: {
          uris,
        },
      });
    };

    dispatch(doClaimSearch(amount, options, callback));
  };
};
