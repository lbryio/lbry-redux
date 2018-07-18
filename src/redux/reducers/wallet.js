import * as ACTIONS from 'constants/action_types';

const reducers = {};
const buildDraftTransaction = () => ({
  amount: undefined,
  address: undefined,
});

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
  walletDecryptPending: false,
  walletDecryptSucceded: null,
  walletUnlockPending: false,
  walletUnlockSucceded: null,
  walletLockResult: null,
};

reducers[ACTIONS.FETCH_TRANSACTIONS_STARTED] = state =>
  Object.assign({}, state, {
    fetchingTransactions: true,
  });

reducers[ACTIONS.FETCH_TRANSACTIONS_COMPLETED] = (state, action) => {
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

reducers[ACTIONS.GET_NEW_ADDRESS_STARTED] = state =>
  Object.assign({}, state, {
    gettingNewAddress: true,
  });

reducers[ACTIONS.GET_NEW_ADDRESS_COMPLETED] = (state, action) => {
  const { address } = action.data;

  // Say no to localStorage!
  return Object.assign({}, state, {
    gettingNewAddress: false,
    receiveAddress: address,
  });
};

reducers[ACTIONS.UPDATE_BALANCE] = (state, action) =>
  Object.assign({}, state, {
    balance: action.data.balance,
  });

reducers[ACTIONS.CHECK_ADDRESS_IS_MINE_STARTED] = state =>
  Object.assign({}, state, {
    checkingAddressOwnership: true,
  });

reducers[ACTIONS.CHECK_ADDRESS_IS_MINE_COMPLETED] = state =>
  Object.assign({}, state, {
    checkingAddressOwnership: false,
  });

reducers[ACTIONS.SET_DRAFT_TRANSACTION_AMOUNT] = (state, action) => {
  const oldDraft = state.draftTransaction;
  const newDraft = Object.assign({}, oldDraft, {
    amount: parseFloat(action.data.amount),
  });

  return Object.assign({}, state, {
    draftTransaction: newDraft,
  });
};

reducers[ACTIONS.SET_DRAFT_TRANSACTION_ADDRESS] = (state, action) => {
  const oldDraft = state.draftTransaction;
  const newDraft = Object.assign({}, oldDraft, {
    address: action.data.address,
  });

  return Object.assign({}, state, {
    draftTransaction: newDraft,
  });
};

reducers[ACTIONS.SEND_TRANSACTION_STARTED] = state => {
  const newDraftTransaction = Object.assign({}, state.draftTransaction, {
    sending: true,
  });

  return Object.assign({}, state, {
    draftTransaction: newDraftTransaction,
  });
};

reducers[ACTIONS.SEND_TRANSACTION_COMPLETED] = state =>
  Object.assign({}, state, {
    draftTransaction: buildDraftTransaction(),
  });

reducers[ACTIONS.SEND_TRANSACTION_FAILED] = (state, action) => {
  const newDraftTransaction = Object.assign({}, state.draftTransaction, {
    sending: false,
    error: action.data.error,
  });

  return Object.assign({}, state, {
    draftTransaction: newDraftTransaction,
  });
};

reducers[ACTIONS.SUPPORT_TRANSACTION_STARTED] = state =>
  Object.assign({}, state, {
    sendingSupport: true,
  });

reducers[ACTIONS.SUPPORT_TRANSACTION_COMPLETED] = state =>
  Object.assign({}, state, {
    sendingSupport: false,
  });

reducers[ACTIONS.SUPPORT_TRANSACTION_FAILED] = (state, action) =>
  Object.assign({}, state, {
    error: action.data.error,
    sendingSupport: false,
  });

reducers[ACTIONS.FETCH_BLOCK_SUCCESS] = (state, action) => {
  const {
    block,
    block: { height },
  } = action.data;
  const blocks = Object.assign({}, state.blocks);

  blocks[height] = block;

  return Object.assign({}, state, { blocks });
};

reducers[ACTIONS.WALLET_STATUS_COMPLETED] = (state, action) =>
  Object.assign({}, state, {
    walletIsEncrypted: !!action.result.wallet_is_encrypted,
  });

reducers[ACTIONS.WALLET_ENCRYPT_START] = state =>
  Object.assign({}, state, {
    walletEncryptPending: true,
    walletEncryptSucceded: null,
    walletEncryptResult: null,
  });

reducers[ACTIONS.WALLET_ENCRYPT_COMPLETED] = (state, action) =>
  Object.assign({}, state, {
    walletEncryptPending: false,
    walletEncryptSucceded: true,
    walletEncryptResult: action.result,
  });

reducers[ACTIONS.WALLET_ENCRYPT_FAILED] = (state, action) =>
  Object.assign({}, state, {
    walletEncryptPending: false,
    walletEncryptSucceded: false,
    walletEncryptResult: action.result,
  });

reducers[ACTIONS.WALLET_DECRYPT_START] = state =>
  Object.assign({}, state, {
    walletDecryptPending: true,
    walletDecryptSucceded: null,
    walletDecryptResult: null,
  });

reducers[ACTIONS.WALLET_DECRYPT_COMPLETED] = (state, action) =>
  Object.assign({}, state, {
    walletDecryptPending: false,
    walletDecryptSucceded: true,
    walletDecryptResult: action.result,
  });

reducers[ACTIONS.WALLET_DECRYPT_FAILED] = (state, action) =>
  Object.assign({}, state, {
    walletDecryptPending: false,
    walletDecryptSucceded: false,
    walletDecryptResult: action.result,
  });

reducers[ACTIONS.WALLET_UNLOCK_START] = state =>
  Object.assign({}, state, {
    walletUnlockPending: true,
    walletUnlockSucceded: null,
    walletUnlockResult: null,
  });

reducers[ACTIONS.WALLET_UNLOCK_COMPLETED] = (state, action) =>
  Object.assign({}, state, {
    walletUnlockPending: false,
    walletUnlockSucceded: true,
    walletUnlockResult: action.result,
  });

reducers[ACTIONS.WALLET_UNLOCK_FAILED] = (state, action) =>
  Object.assign({}, state, {
    walletUnlockPending: false,
    walletUnlockSucceded: false,
    walletUnlockResult: action.result,
  });

reducers[ACTIONS.WALLET_LOCK_START] = state =>
  Object.assign({}, state, {
    walletLockPending: false,
    walletLockSucceded: null,
    walletLockResult: null,
  });

reducers[ACTIONS.WALLET_LOCK_COMPLETED] = (state, action) =>
  Object.assign({}, state, {
    walletLockPending: false,
    walletLockSucceded: true,
    walletLockResult: action.result,
  });

reducers[ACTIONS.WALLET_LOCK_FAILED] = (state, action) =>
  Object.assign({}, state, {
    walletLockPending: false,
    walletLockSucceded: false,
    walletLockResult: action.result,
  });

export function walletReducer(state = defaultState, action) {
  const handler = reducers[action.type];
  if (handler) return handler(state, action);
  return state;
}
