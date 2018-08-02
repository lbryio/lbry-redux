// @flow
import * as ACTIONS from 'constants/action_types';

const reducers = {};
const buildDraftTransaction = () => ({
  amount: undefined,
  address: undefined,
});

// TODO: Split into common success and failure types
// See details in https://github.com/lbryio/lbry/issues/1307
type ActionResult = {
  type: any,
  result: any,
};

type WalletState = {
  balance: any,
  blocks: any,
  transactions: any,
  fetchingTransactions: boolean,
  gettingNewAddress: boolean,
  draftTransaction: any,
  sendingSupport: boolean,
  walletIsEncrypted: boolean,
  walletEncryptPending: boolean,
  walletEncryptSucceded: ?boolean,
  walletEncryptResult: ?boolean,
  walletDecryptPending: boolean,
  walletDecryptSucceded: ?boolean,
  walletDecryptResult: ?boolean,
  walletUnlockPending: boolean,
  walletUnlockSucceded: ?boolean,
  walletUnlockResult: ?boolean,
  walletLockPending: boolean,
  walletLockSucceded: ?boolean,
  walletLockResult: ?boolean,
};

const defaultState = {
  balance: undefined,
  blocks: {},
  transactions: {},
  fetchingTransactions: false,
  gettingNewAddress: false,
  draftTransaction: buildDraftTransaction(),
  sendingSupport: false,
  walletIsEncrypted: false,
  walletEncryptPending: false,
  walletEncryptSucceded: null,
  walletEncryptResult: null,
  walletDecryptPending: false,
  walletDecryptSucceded: null,
  walletDecryptResult: null,
  walletUnlockPending: false,
  walletUnlockSucceded: null,
  walletUnlockResult: null,
  walletLockPending: false,
  walletLockSucceded: null,
  walletLockResult: null,
};

reducers[ACTIONS.FETCH_TRANSACTIONS_STARTED] = (state: WalletState) =>
  Object.assign({}, state, {
    fetchingTransactions: true,
  });

reducers[ACTIONS.FETCH_TRANSACTIONS_COMPLETED] = (state: WalletState, action) => {
  const byId = Object.assign({}, state.transactions);

  const { transactions } = action.data;

  transactions.forEach(transaction => {
    byId[transaction.txid] = transaction;
  });

  return Object.assign({}, state, {
    transactions: byId,
    fetchingTransactions: false,
  });
};

reducers[ACTIONS.GET_NEW_ADDRESS_STARTED] = (state: WalletState) =>
  Object.assign({}, state, {
    gettingNewAddress: true,
  });

reducers[ACTIONS.GET_NEW_ADDRESS_COMPLETED] = (state: WalletState, action) => {
  const { address } = action.data;

  // Say no to localStorage!
  return Object.assign({}, state, {
    gettingNewAddress: false,
    receiveAddress: address,
  });
};

reducers[ACTIONS.UPDATE_BALANCE] = (state: WalletState, action) =>
  Object.assign({}, state, {
    balance: action.data.balance,
  });

reducers[ACTIONS.CHECK_ADDRESS_IS_MINE_STARTED] = (state: WalletState) =>
  Object.assign({}, state, {
    checkingAddressOwnership: true,
  });

reducers[ACTIONS.CHECK_ADDRESS_IS_MINE_COMPLETED] = (state: WalletState) =>
  Object.assign({}, state, {
    checkingAddressOwnership: false,
  });

reducers[ACTIONS.SET_DRAFT_TRANSACTION_AMOUNT] = (state: WalletState, action) => {
  const oldDraft = state.draftTransaction;
  const newDraft = Object.assign({}, oldDraft, {
    amount: parseFloat(action.data.amount),
  });

  return Object.assign({}, state, {
    draftTransaction: newDraft,
  });
};

reducers[ACTIONS.SET_DRAFT_TRANSACTION_ADDRESS] = (state: WalletState, action) => {
  const oldDraft = state.draftTransaction;
  const newDraft = Object.assign({}, oldDraft, {
    address: action.data.address,
  });

  return Object.assign({}, state, {
    draftTransaction: newDraft,
  });
};

reducers[ACTIONS.SEND_TRANSACTION_STARTED] = (state: WalletState) => {
  const newDraftTransaction = Object.assign({}, state.draftTransaction, {
    sending: true,
  });

  return Object.assign({}, state, {
    draftTransaction: newDraftTransaction,
  });
};

reducers[ACTIONS.SEND_TRANSACTION_COMPLETED] = (state: WalletState) =>
  Object.assign({}, state, {
    draftTransaction: buildDraftTransaction(),
  });

reducers[ACTIONS.SEND_TRANSACTION_FAILED] = (state: WalletState, action) => {
  const newDraftTransaction = Object.assign({}, state.draftTransaction, {
    sending: false,
    error: action.data.error,
  });

  return Object.assign({}, state, {
    draftTransaction: newDraftTransaction,
  });
};

reducers[ACTIONS.SUPPORT_TRANSACTION_STARTED] = (state: WalletState) =>
  Object.assign({}, state, {
    sendingSupport: true,
  });

reducers[ACTIONS.SUPPORT_TRANSACTION_COMPLETED] = (state: WalletState) =>
  Object.assign({}, state, {
    sendingSupport: false,
  });

reducers[ACTIONS.SUPPORT_TRANSACTION_FAILED] = (state: WalletState, action) =>
  Object.assign({}, state, {
    error: action.data.error,
    sendingSupport: false,
  });

reducers[ACTIONS.FETCH_BLOCK_SUCCESS] = (state: WalletState, action) => {
  const {
    block,
    block: { height },
  } = action.data;
  const blocks = Object.assign({}, state.blocks);

  blocks[height] = block;

  return Object.assign({}, state, { blocks });
};

reducers[ACTIONS.WALLET_STATUS_COMPLETED] = (state: WalletState, action) =>
  Object.assign({}, state, {
    walletIsEncrypted: action.result,
  });

reducers[ACTIONS.WALLET_ENCRYPT_START] = (state: WalletState) =>
  Object.assign({}, state, {
    walletEncryptPending: true,
    walletEncryptSucceded: null,
    walletEncryptResult: null,
  });

reducers[ACTIONS.WALLET_ENCRYPT_COMPLETED] = (state: WalletState, action: ActionResult) =>
  Object.assign({}, state, {
    walletEncryptPending: false,
    walletEncryptSucceded: true,
    walletEncryptResult: action.result,
  });

reducers[ACTIONS.WALLET_ENCRYPT_FAILED] = (state: WalletState, action: ActionResult) =>
  Object.assign({}, state, {
    walletEncryptPending: false,
    walletEncryptSucceded: false,
    walletEncryptResult: action.result,
  });

reducers[ACTIONS.WALLET_DECRYPT_START] = (state: WalletState) =>
  Object.assign({}, state, {
    walletDecryptPending: true,
    walletDecryptSucceded: null,
    walletDecryptResult: null,
  });

reducers[ACTIONS.WALLET_DECRYPT_COMPLETED] = (state: WalletState, action: ActionResult) =>
  Object.assign({}, state, {
    walletDecryptPending: false,
    walletDecryptSucceded: true,
    walletDecryptResult: action.result,
  });

reducers[ACTIONS.WALLET_DECRYPT_FAILED] = (state: WalletState, action: ActionResult) =>
  Object.assign({}, state, {
    walletDecryptPending: false,
    walletDecryptSucceded: false,
    walletDecryptResult: action.result,
  });

reducers[ACTIONS.WALLET_UNLOCK_START] = (state: WalletState) =>
  Object.assign({}, state, {
    walletUnlockPending: true,
    walletUnlockSucceded: null,
    walletUnlockResult: null,
  });

reducers[ACTIONS.WALLET_UNLOCK_COMPLETED] = (state: WalletState, action: ActionResult) =>
  Object.assign({}, state, {
    walletUnlockPending: false,
    walletUnlockSucceded: true,
    walletUnlockResult: action.result,
  });

reducers[ACTIONS.WALLET_UNLOCK_FAILED] = (state: WalletState, action: ActionResult) =>
  Object.assign({}, state, {
    walletUnlockPending: false,
    walletUnlockSucceded: false,
    walletUnlockResult: action.result,
  });

reducers[ACTIONS.WALLET_LOCK_START] = (state: WalletState) =>
  Object.assign({}, state, {
    walletLockPending: false,
    walletLockSucceded: null,
    walletLockResult: null,
  });

reducers[ACTIONS.WALLET_LOCK_COMPLETED] = (state: WalletState, action: ActionResult) =>
  Object.assign({}, state, {
    walletLockPending: false,
    walletLockSucceded: true,
    walletLockResult: action.result,
  });

reducers[ACTIONS.WALLET_LOCK_FAILED] = (state: WalletState, action: ActionResult) =>
  Object.assign({}, state, {
    walletLockPending: false,
    walletLockSucceded: false,
    walletLockResult: action.result,
  });

export function walletReducer(state: WalletState = defaultState, action: ActionResult) {
  const handler = reducers[action.type];
  if (handler) return handler(state, action);
  return state;
}
