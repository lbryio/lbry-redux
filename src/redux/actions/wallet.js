import * as ACTIONS from 'constants/action_types';
import Lbry from 'lbry';
import { doToast } from 'redux/actions/notifications';
import { selectBalance } from 'redux/selectors/wallet';
import { creditsToString } from 'util/formatCredits';

export function doUpdateBalance() {
  return (dispatch, getState) => {
    const {
      wallet: { balance: balanceInStore },
    } = getState();
    Lbry.account_balance().then(balanceAsString => {
      const balance = parseFloat(balanceAsString);
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

export function doUpdateTotalBalance() {
  return (dispatch, getState) => {
    const {
      wallet: { totalBalance: totalBalanceInStore },
    } = getState();
    Lbry.account_list().then(accountList => {
      const { lbc_mainnet: accounts } = accountList;
      const totalSatoshis =
        accounts.length === 1
          ? accounts[0].satoshis
          : accounts.reduce((a, b) => a.satoshis + b.satoshis);
      const totalBalance = (Number.isNaN(totalSatoshis) ? 0 : totalSatoshis) / 10 ** 8;
      if (totalBalanceInStore !== totalBalance) {
        dispatch({
          type: ACTIONS.UPDATE_TOTAL_BALANCE,
          data: {
            totalBalance,
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

export function doTotalBalanceSubscribe() {
  return dispatch => {
    dispatch(doUpdateTotalBalance());
    setInterval(() => dispatch(doUpdateTotalBalance()), 5000);
  };
}

export function doFetchTransactions() {
  return dispatch => {
    dispatch({
      type: ACTIONS.FETCH_TRANSACTIONS_STARTED,
    });

    Lbry.utxo_release()
      .then(() => Lbry.transaction_list())
      .then(results => {
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
      address,
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

export function doSendTip(amount, claimId, uri, successCallback, errorCallback) {
  return (dispatch, getState) => {
    const state = getState();
    const balance = selectBalance(state);

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
          message: __(`You sent ${amount} LBC as a tip, Mahalo!`),
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

    Lbry.claim_tip({
      claim_id: claimId,
      amount: creditsToString(amount),
    }).then(success, error);
  };
}

export function doWalletEncrypt(newPassword) {
  return dispatch => {
    dispatch({
      type: ACTIONS.WALLET_ENCRYPT_START,
    });

    Lbry.account_encrypt({ new_password: newPassword }).then(result => {
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

    Lbry.account_unlock({ password }).then(result => {
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

    Lbry.account_decrypt().then(result => {
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
