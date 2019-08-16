// @flow
import * as ACTIONS from 'constants/action_types';

const reducers = {};
const defaultState = {
  failedPurchaseUris: [],
  purchasedUris: [],
  purchaseUriErrorMessage: '',
};

reducers[ACTIONS.PURCHASE_URI_STARTED] = (
  state: FileState,
  action: PurchaseUriStarted
): FileState => {
  const { uri } = action.data;
  const newFailedPurchaseUris = state.failedPurchaseUris.slice();
  if (newFailedPurchaseUris.includes(uri)) {
    newFailedPurchaseUris.splice(newFailedPurchaseUris.indexOf(uri), 1);
  }

  return {
    ...state,
    failedPurchaseUris: newFailedPurchaseUris,
    purchaseUriErrorMessage: '',
  };
};

reducers[ACTIONS.PURCHASE_URI_COMPLETED] = (
  state: FileState,
  action: PurchaseUriCompleted
): FileState => {
  const { uri } = action.data;
  const newPurchasedUris = state.purchasedUris.slice();
  const newFailedPurchaseUris = state.failedPurchaseUris.slice();

  if (!newPurchasedUris.includes(uri)) {
    newPurchasedUris.push(uri);
  }
  if (newFailedPurchaseUris.includes(uri)) {
    newFailedPurchaseUris.splice(newFailedPurchaseUris.indexOf(uri), 1);
  }

  return {
    ...state,
    failedPurchaseUris: newFailedPurchaseUris,
    purchasedUris: newPurchasedUris,
    purchaseUriErrorMessage: '',
  };
};

reducers[ACTIONS.PURCHASE_URI_FAILED] = (
  state: FileState,
  action: PurchaseUriFailed
): FileState => {
  const { uri, error } = action.data;
  const newFailedPurchaseUris = state.failedPurchaseUris.slice();

  if (!newFailedPurchaseUris.includes(uri)) {
    newFailedPurchaseUris.push(uri);
  }

  return {
    ...state,
    failedPurchaseUris: newFailedPurchaseUris,
    purchaseUriErrorMessage: error,
  };
};

reducers[ACTIONS.DELETE_PURCHASED_URI] = (
  state: FileState,
  action: DeletePurchasedUri
): FileState => {
  const { uri } = action.data;
  const newPurchasedUris = state.purchasedUris.slice();
  if (newPurchasedUris.includes(uri)) {
    newPurchasedUris.splice(newPurchasedUris.indexOf(uri), 1);
  }

  return {
    ...state,
    purchasedUris: newPurchasedUris,
  };
};

export function fileReducer(state: FileState = defaultState, action: any) {
  const handler = reducers[action.type];
  if (handler) return handler(state, action);
  return state;
}
