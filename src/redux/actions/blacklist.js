import Lbryapi from 'lbryapi';
import * as ACTIONS from 'constants/action_types';

const CHECK_BLACK_LISTED_CONTENT_INTERVAL = 60 * 60 * 1000;

export function doFetchBlackListedOutpoints() {
  return dispatch => {
    dispatch({
      type: ACTIONS.FETCH_BLACK_LISTED_CONTENT_STARTED,
    });

    const success = ({ outpoints }) => {
      const splitedOutpoints = [];

      outpoints.forEach((outpoint, index) => {
        const [txid, nout] = outpoint.split(':');

        splitedOutpoints[index] = { txid, nout: Number.parseInt(nout, 10) };
      });
      dispatch({
        type: ACTIONS.FETCH_BLACK_LISTED_CONTENT_COMPLETED,
        data: {
          outpoints: splitedOutpoints,
          success: true,
        },
      });
    };

    const failure = ({ error }) => {
      dispatch({
        type: ACTIONS.FETCH_BLACK_LISTED_CONTENT_FAILED,
        data: {
          error,
          success: false,
        },
      });
    };

    Lbryapi.call('file', 'list_blocked').then(success, failure);
  };
}

export function doBlackListedOutpointsSubscribe() {
  return dispatch => {
    dispatch(doFetchBlackListedOutpoints());
    setInterval(() => dispatch(doFetchBlackListedOutpoints()), CHECK_BLACK_LISTED_CONTENT_INTERVAL);
  };
}
