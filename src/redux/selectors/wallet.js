import { createSelector } from 'reselect';
import * as TRANSACTIONS from 'constants/transaction_types';

export const selectState = state => state.wallet || {};

export const selectWalletState = selectState;

export const selectWalletIsEncrypted = createSelector(
  selectState,
  state => state.walletIsEncrypted
);

export const selectWalletEncryptPending = createSelector(
  selectState,
  state => state.walletEncryptPending
);

export const selectWalletEncryptSucceeded = createSelector(
  selectState,
  state => state.walletEncryptSucceded
);

export const selectWalletEncryptResult = createSelector(
  selectState,
  state => state.walletEncryptResult
);

export const selectWalletDecryptPending = createSelector(
  selectState,
  state => state.walletDecryptPending
);

export const selectWalletDecryptSucceeded = createSelector(
  selectState,
  state => state.walletDecryptSucceded
);

export const selectWalletDecryptResult = createSelector(
  selectState,
  state => state.walletDecryptResult
);

export const selectWalletUnlockPending = createSelector(
  selectState,
  state => state.walletUnlockPending
);

export const selectWalletUnlockSucceeded = createSelector(
  selectState,
  state => state.walletUnlockSucceded
);

export const selectWalletUnlockResult = createSelector(
  selectState,
  state => state.walletUnlockResult
);

export const selectWalletLockPending = createSelector(
  selectState,
  state => state.walletLockPending
);

export const selectWalletLockSucceeded = createSelector(
  selectState,
  state => state.walletLockSucceded
);

export const selectWalletLockResult = createSelector(
  selectState,
  state => state.walletLockResult
);

export const selectBalance = createSelector(
  selectState,
  state => state.balance
);

export const selectTotalBalance = createSelector(
  selectState,
  state => state.totalBalance
);

export const selectTransactionsById = createSelector(
  selectState,
  state => state.transactions || {}
);

export const selectSupportsByOutpoint = createSelector(
  selectState,
  state => state.supports || {}
);

export const selectTotalSupports = createSelector(
  selectSupportsByOutpoint,
  byOutpoint => {
    let total = parseFloat("0.0");
    //let total = 0.0;

    Object.values(byOutpoint).forEach(support => {
      const { amount } = support;
      total = amount ? total + parseFloat(amount) : total;
    });

    return total;
  }
);

export const selectTransactionItems = createSelector(
  selectTransactionsById,
  byId => {
    const items = [];

    Object.keys(byId).forEach(txid => {
      const tx = byId[txid];

      // ignore dust/fees
      // it is fee only txn if all infos are also empty
      if (
        Math.abs(tx.value) === Math.abs(tx.fee) &&
        tx.claim_info.length === 0 &&
        tx.support_info.length === 0 &&
        tx.update_info.length === 0 &&
        tx.abandon_info.length === 0
      ) {
        return;
      }

      const append = [];

      append.push(
        ...tx.claim_info.map(item =>
          Object.assign({}, tx, item, {
            type: item.claim_name[0] === '@' ? TRANSACTIONS.CHANNEL : TRANSACTIONS.PUBLISH,
          })
        )
      );
      append.push(
        ...tx.support_info.map(item =>
          Object.assign({}, tx, item, {
            type: !item.is_tip ? TRANSACTIONS.SUPPORT : TRANSACTIONS.TIP,
          })
        )
      );
      append.push(
        ...tx.update_info.map(item => Object.assign({}, tx, item, { type: TRANSACTIONS.UPDATE }))
      );
      append.push(
        ...tx.abandon_info.map(item => Object.assign({}, tx, item, { type: TRANSACTIONS.ABANDON }))
      );

      if (!append.length) {
        append.push(
          Object.assign({}, tx, {
            type: tx.value < 0 ? TRANSACTIONS.SPEND : TRANSACTIONS.RECEIVE,
          })
        );
      }

      items.push(
        ...append.map(item => {
          // value on transaction, amount on outpoint
          // amount is always positive, but should match sign of value
          const balanceDelta = parseFloat(item.balance_delta);
          const value = parseFloat(item.value);
          const amount = balanceDelta || value;
          const fee = parseFloat(tx.fee);

          return {
            txid,
            timestamp: tx.timestamp,
            date: tx.timestamp ? new Date(Number(tx.timestamp) * 1000) : null,
            amount,
            fee,
            claim_id: item.claim_id,
            claim_name: item.claim_name,
            type: item.type || TRANSACTIONS.SPEND,
            nout: item.nout,
            confirmations: tx.confirmations,
          };
        })
      );
    });

    return items.sort((tx1, tx2) => {
      if (!tx1.timestamp && !tx2.timestamp) {
        return 0;
      } else if (!tx1.timestamp && tx2.timestamp) {
        return -1;
      } else if (tx1.timestamp && !tx2.timestamp) {
        return 1;
      }

      return tx2.timestamp - tx1.timestamp;
    });
  }
);

export const selectRecentTransactions = createSelector(
  selectTransactionItems,
  transactions => {
    const threshold = new Date();
    threshold.setDate(threshold.getDate() - 7);
    return transactions.filter(transaction => {
      if (!transaction.date) {
        return true; // pending transaction
      }

      return transaction.date > threshold;
    });
  }
);

export const selectHasTransactions = createSelector(
  selectTransactionItems,
  transactions => transactions && transactions.length > 0
);

export const selectIsFetchingTransactions = createSelector(
  selectState,
  state => state.fetchingTransactions
);

export const selectIsSendingSupport = createSelector(
  selectState,
  state => state.sendingSupport
);

export const selectReceiveAddress = createSelector(
  selectState,
  state => state.receiveAddress
);

export const selectGettingNewAddress = createSelector(
  selectState,
  state => state.gettingNewAddress
);

export const selectDraftTransaction = createSelector(
  selectState,
  state => state.draftTransaction || {}
);

export const selectDraftTransactionAmount = createSelector(
  selectDraftTransaction,
  draft => draft.amount
);

export const selectDraftTransactionAddress = createSelector(
  selectDraftTransaction,
  draft => draft.address
);

export const selectDraftTransactionError = createSelector(
  selectDraftTransaction,
  draft => draft.error
);

export const selectBlocks = createSelector(
  selectState,
  state => state.blocks
);

export const selectCurrentHeight = createSelector(
  selectState,
  state => state.latestBlock
);

export const selectTransactionListFilter = createSelector(
  selectState,
  state => state.transactionListFilter || ''
);
