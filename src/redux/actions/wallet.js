import * as ACTIONS from 'constants/action_types';
import Lbry from 'lbry';
import { doToast } from 'redux/actions/notifications';
import { selectBalance } from 'redux/selectors/wallet';
import { creditsToString } from 'util/format-credits';
import { selectMyClaimsRaw } from 'redux/selectors/claims';

let walletBalancePromise = null;
export function doUpdateBalance() {
  return (dispatch, getState) => {
    const {
      wallet: { totalBalance: totalInStore },
    } = getState();

    if (walletBalancePromise === null) {
      walletBalancePromise = Lbry.wallet_balance().then(response => {
        walletBalancePromise = null;

        const { available, reserved, reserved_subtotals, total } = response;
        const { claims, supports, tips } = reserved_subtotals;
        const totalFloat = parseFloat(total);

        if (totalInStore !== totalFloat) {
          dispatch({
            type: ACTIONS.UPDATE_BALANCE,
            data: {
              totalBalance: totalFloat,
              balance: parseFloat(available),
              reservedBalance: parseFloat(reserved),
              claimsBalance: parseFloat(claims),
              supportsBalance: parseFloat(supports),
              tipsBalance: parseFloat(tips),
            },
          });
        }
      });
    }

    return walletBalancePromise;
  };
}

export function doBalanceSubscribe() {
  return dispatch => {
    dispatch(doUpdateBalance());
    setInterval(() => dispatch(doUpdateBalance()), 5000);
  };
}

export function doFetchTransactions(page = 1, pageSize = 99999) {
  return dispatch => {
    dispatch(doFetchSupports());
    dispatch({
      type: ACTIONS.FETCH_TRANSACTIONS_STARTED,
    });

    Lbry.utxo_release()
      .then(() => Lbry.transaction_list({ page, page_size: pageSize }))
      .then(result => {
        dispatch({
          type: ACTIONS.FETCH_TRANSACTIONS_COMPLETED,
          data: {
            transactions: result.items,
          },
        });
      });
  };
}

export function doFetchSupports(page = 1, pageSize = 99999) {
  return dispatch => {
    dispatch({
      type: ACTIONS.FETCH_SUPPORTS_STARTED,
    });

    Lbry.support_list({ page, page_size: pageSize }).then(result => {
      dispatch({
        type: ACTIONS.FETCH_SUPPORTS_COMPLETED,
        data: {
          supports: result.items,
        },
      });
    });
  };
}

export function doGetNewAddress() {
  return dispatch => {
    dispatch({
      type: ACTIONS.GET_NEW_ADDRESS_STARTED,
    });

    Lbry.address_unused().then(address => {
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

    Lbry.address_is_mine({ address }).then(isMine => {
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
        doToast({
          title: 'Insufficient credits',
          message: 'Insufficient credits',
        })
      );
      return;
    }

    dispatch({
      type: ACTIONS.SEND_TRANSACTION_STARTED,
    });

    const successCallback = response => {
      if (response.txid) {
        dispatch({
          type: ACTIONS.SEND_TRANSACTION_COMPLETED,
        });
        dispatch(
          doToast({
            message: `You sent ${amount} LBC`,
            linkText: 'History',
            linkTarget: '/wallet',
          })
        );
      } else {
        dispatch({
          type: ACTIONS.SEND_TRANSACTION_FAILED,
          data: { error: response },
        });
        dispatch(
          doToast({
            message: 'Transaction failed',
            isError: true,
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
        doToast({
          message: 'Transaction failed',
          isError: true,
        })
      );
    };

    Lbry.wallet_send({
      addresses: [address],
      amount: creditsToString(amount),
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

export function doSendTip(amount, claimId, isSupport, successCallback, errorCallback) {
  return (dispatch, getState) => {
    const state = getState();
    const balance = selectBalance(state);
    const myClaims = selectMyClaimsRaw(state);

    const shouldSupport =
      isSupport || (myClaims ? myClaims.find(claim => claim.claim_id === claimId) : false);

    if (balance - amount <= 0) {
      dispatch(
        doToast({
          message: 'Insufficient credits',
          isError: true,
        })
      );
      return;
    }

    const success = () => {
      dispatch(
        doToast({
          message: shouldSupport
            ? __(`You deposited ${amount} LBC as a support!`)
            : __(`You sent ${amount} LBC as a tip, Mahalo!`),
          linkText: __('History'),
          linkTarget: __('/wallet'),
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
        doToast({
          message: __(`There was an error sending support funds.`),
          isError: true,
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

    Lbry.support_create({
      claim_id: claimId,
      amount: creditsToString(amount),
      tip: !shouldSupport,
      blocking: true,
    }).then(success, error);
  };
}

export function doClearSupport() {
  return {
    type: ACTIONS.CLEAR_SUPPORT_TRANSACTION,
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

    Lbry.wallet_status().then(status => {
      if (status) {
        dispatch({
          type: ACTIONS.WALLET_STATUS_COMPLETED,
          result: status.is_encrypted,
        });
      }
    });
  };
}

export function doSetTransactionListFilter(filterOption) {
  return {
    type: ACTIONS.SET_TRANSACTION_LIST_FILTER,
    data: filterOption,
  };
}

export function doUpdateBlockHeight() {
  return dispatch =>
    Lbry.status().then(status => {
      if (status.wallet) {
        dispatch({
          type: ACTIONS.UPDATE_CURRENT_HEIGHT,
          data: status.wallet.blocks,
        });
      }
    });
}
