import * as ACTIONS from 'constants/action_types';
import Lbry from 'lbry';
import { doNotify } from 'redux/actions/notifications';
import { selectBalance } from 'redux/selectors/wallet';

export function doUpdateBalance() {
  return (dispatch, getState) => {
    const {
      wallet: { balance: balanceInStore },
    } = getState();
    Lbry.wallet_balance().then(balance => {
      if (balanceInStore !== balance) {
        dispatch({
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

export function doSendDraftTransaction(address, amount) {
  return (dispatch, getState) => {
    const state = getState();
    const balance = selectBalance(state);

    if (balance - amount <= 0) {
      dispatch(
        doNotify({
          title: 'Insufficient credits',
          message: 'Insufficient credits',
          type: 'error',
          displayType: ['modal', 'toast'],
        })
      );
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
        dispatch(
          doNotify({
            title: 'Credits sent',
            message: `You sent ${amount} LBC`,
            type: 'error',
            displayType: ['snackbar', 'toast'],
            linkText: 'History',
            linkTarget: '/wallet',
          })
        );
      } else {
        dispatch({
          type: ACTIONS.SEND_TRANSACTION_FAILED,
          data: { error: results },
        });
        dispatch(
          doNotify({
            title: 'Transaction failed',
            message: 'Transaction failed',
            type: 'error',
            displayType: ['snackbar', 'toast'],
          })
        );
      }
    };

    const errorCallback = error => {
      dispatch({
        type: ACTIONS.SEND_TRANSACTION_FAILED,
        data: { error: error.message },
      });
      dispatch(
        doNotify({
          title: 'Transaction failed',
          message: 'Transaction failed',
          type: 'error',
          displayType: ['snackbar', 'toast'],
        })
      );
    };

    Lbry.wallet_send({
      amount,
      address,
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
      dispatch(
        doNotify({
          title: 'Insufficient credits',
          message: 'Insufficient credits',
          type: 'error',
          displayType: ['modal', 'toast'],
        })
      );
      return;
    }

    const success = () => {
      dispatch(
        doNotify({
          message: __(`You sent ${amount} LBC as a tip, Mahalo!`),
          linkText: __('History'),
          linkTarget: __('/wallet'),
          displayType: ['snackbar'],
        })
      );

      dispatch({
        type: ACTIONS.SUPPORT_TRANSACTION_COMPLETED,
      });

      if (successCallback) {
        successCallback();
      }
    };

    const error = err => {
      dispatch(
        doNotify({
          message: __(`There was an error sending support funds.`),
          displayType: ['snackbar'],
        })
      );

      dispatch({
        type: ACTIONS.SUPPORT_TRANSACTION_FAILED,
        data: {
          error: err,
        },
      });

      if (errorCallback) {
        errorCallback();
      }
    };

    dispatch({
      type: ACTIONS.SUPPORT_TRANSACTION_STARTED,
    });

    Lbry.wallet_send({
      claim_id: claimId,
      amount,
    }).then(success, error);
  };
}

export function doWalletEncrypt(newPassword) {
  return dispatch => {
    dispatch({
      type: ACTIONS.WALLET_ENCRYPT_START,
    });

    Lbry.wallet_encrypt({ new_password: newPassword }).then(result => {
      if (result === true) {
        dispatch({
          type: ACTIONS.WALLET_ENCRYPT_COMPLETED,
          result,
        });
      } else {
        dispatch({
          type: ACTIONS.WALLET_ENCRYPT_FAILED,
          result,
        });
      }
    });
  };
}

export function doWalletUnlock(password) {
  return dispatch => {
    dispatch({
      type: ACTIONS.WALLET_UNLOCK_START,
    });

    Lbry.wallet_unlock({ password }).then(result => {
      if (result === true) {
        dispatch({
          type: ACTIONS.WALLET_UNLOCK_COMPLETED,
          result,
        });
      } else {
        dispatch({
          type: ACTIONS.WALLET_UNLOCK_FAILED,
          result,
        });
      }
    });
  };
}

export function doWalletLock() {
  return dispatch => {
    dispatch({
      type: ACTIONS.WALLET_LOCK_START,
    });

    Lbry.wallet_lock().then(result => {
      if (result === true) {
        dispatch({
          type: ACTIONS.WALLET_LOCK_COMPLETED,
          result,
        });
      } else {
        dispatch({
          type: ACTIONS.WALLET_LOCK_FAILED,
          result,
        });
      }
    });
  };
}

export function doWalletDecrypt() {
  return dispatch => {
    dispatch({
      type: ACTIONS.WALLET_DECRYPT_START,
    });

    Lbry.wallet_decrypt().then(result => {
      if (result === true) {
        dispatch({
          type: ACTIONS.WALLET_DECRYPT_COMPLETED,
          result,
        });
      } else {
        dispatch({
          type: ACTIONS.WALLET_DECRYPT_FAILED,
          result,
        });
      }
    });
  };
}

export function doWalletStatus() {
  return dispatch => {
    dispatch({
      type: ACTIONS.WALLET_STATUS_START,
    });

    Lbry.status().then(status => {
      if (status && status.wallet) {
        dispatch({
          type: ACTIONS.WALLET_STATUS_COMPLETED,
          result: status.wallet.is_encrypted,
        });
      }
    });
  };
}
