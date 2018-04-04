import * as ACTIONS from 'constants/action_types';
import Lbry from 'lbry';
import { doNotify } from 'redux/actions/notifications';
import {
  selectBalance,
  selectDraftTransaction,
  selectDraftTransactionAmount,
} from 'redux/selectors/wallet';

export function doUpdateBalance() {
  return (dispatch, getState) => {
    const { wallet: { balance: balanceInStore } } = getState();
    Lbry.wallet_balance().then(balance => {
      if (balanceInStore !== balance) {
        return dispatch({
          type: ACTIONS.UPDATE_BALANCE,
          data: {
            balance,
          },
        });
      }
    });
  };
}

export function doBalanceSubscribe() {
  return dispatch => {
    dispatch(doUpdateBalance());
    setInterval(() => dispatch(doUpdateBalance()), 5000);
  };
}

export function doFetchTransactions() {
  return dispatch => {
    dispatch({
      type: ACTIONS.FETCH_TRANSACTIONS_STARTED,
    });

    Lbry.transaction_list().then(results => {
      dispatch({
        type: ACTIONS.FETCH_TRANSACTIONS_COMPLETED,
        data: {
          transactions: results,
        },
      });
    });
  };
}

export function doFetchBlock(height) {
  return dispatch => {
    Lbry.block_show({ height }).then(block => {
      dispatch({
        type: ACTIONS.FETCH_BLOCK_SUCCESS,
        data: { block },
      });
    });
  };
}

export function doGetNewAddress() {
  return dispatch => {
    dispatch({
      type: ACTIONS.GET_NEW_ADDRESS_STARTED,
    });

    // Removed localStorage use, since address is expected to be stored in redux store
    Lbry.wallet_new_address().then(address => {
      dispatch({
        type: ACTIONS.GET_NEW_ADDRESS_COMPLETED,
        data: { address },
      });
    });
  };
}

export function doCheckAddressIsMine(address) {
  return dispatch => {
    dispatch({
      type: ACTIONS.CHECK_ADDRESS_IS_MINE_STARTED,
    });

    Lbry.wallet_is_address_mine({ address }).then(isMine => {
      if (!isMine) dispatch(doGetNewAddress());

      dispatch({
        type: ACTIONS.CHECK_ADDRESS_IS_MINE_COMPLETED,
      });
    });
  };
}

export function doSendDraftTransaction() {
  return (dispatch, getState) => {
    const state = getState();
    const draftTx = selectDraftTransaction(state);
    const balance = selectBalance(state);
    const amount = selectDraftTransactionAmount(state);

    if (balance - amount <= 0) {
      dispatch(doNotify({
        title: 'Insufficient credits',
        message: 'Insufficient credits',
        type: 'error',
        displayType: ['modal', 'toast']
      }));
      return;
    }

    dispatch({
      type: ACTIONS.SEND_TRANSACTION_STARTED,
    });

    const successCallback = results => {
      if (results === true) {
        dispatch({
          type: ACTIONS.SEND_TRANSACTION_COMPLETED,
        });
        dispatch(doNotify({
          title: 'Credits sent',
          message: `You sent ${amount} LBC`,
          type: 'error',
          displayType: ['snackbar', 'toast'],
          linkText: 'History',
          linkTarget: '/wallet'
        }));
      } else {
        dispatch({
          type: ACTIONS.SEND_TRANSACTION_FAILED,
          data: { error: results },
        });
        dispatch(doNotify({
          title: 'Transaction failed',
          message: 'Transaction failed',
          type: 'error',
          displayType: ['modal', 'toast']
        }));
      }
    };

    const errorCallback = error => {
      dispatch({
        type: ACTIONS.SEND_TRANSACTION_FAILED,
        data: { error: error.message },
      });
      dispatch(doNotify({
        title: 'Transaction failed',
        message: 'Transaction failed',
        type: 'error',
        displayType: ['modal', 'toast']
      }));
    };

    Lbry.wallet_send({
      amount: draftTx.amount,
      address: draftTx.address,
    }).then(successCallback, errorCallback);
  };
}

export function doSetDraftTransactionAmount(amount) {
  return {
    type: ACTIONS.SET_DRAFT_TRANSACTION_AMOUNT,
    data: { amount },
  };
}

export function doSetDraftTransactionAddress(address) {
  return {
    type: ACTIONS.SET_DRAFT_TRANSACTION_ADDRESS,
    data: { address },
  };
}

export function doSendSupport(amount, claimId, uri, successCallback, errorCallback) {
  return (dispatch, getState) => {
    const state = getState();
    const balance = selectBalance(state);

    if (balance - amount <= 0) {
      dispatch(doNotify({
        title: 'Insufficient credits',
        message: 'Insufficient credits',
        type: 'error',
        displayType: ['modal', 'toast']
      }));
      return;
    }

    dispatch({
      type: ACTIONS.SUPPORT_TRANSACTION_STARTED,
    });

    Lbry.wallet_send({
      claim_id: claimId,
      amount,
    }).then(successCallback, errorCallback);
  };
}
