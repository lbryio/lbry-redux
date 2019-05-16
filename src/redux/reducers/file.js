import * as ACTIONS from 'constants/action_types';
import { buildURI, parseURI } from 'lbryURI';

const reducers = {};
const defaultState = {
  purchasedUris: [],
  failedPurchaseUris: [],
};

reducers[ACTIONS.PURCHASE_URI_COMPLETED] = (state, action) => {
  const { uri } = action.data;
  const newPurchasedUris = state.purchasedUris.slice();
  const newFailedPurchaseUris = state.failedPurchasedUris.slice();
  if (!newPurchasedUris.includes(uri)) {
    newPurchasedUris.push(uri);
  }
  if (newFailedPurchaseUris.includes(uri)) {
    newFailedPurchaseUris.splice(newFailedPurchaseUris.indexOf(uri), 1);
  }

  return {
    ...state,
    purchasedUris: newPurchasedUris,
    failedPurchaseUris: newFailedPurchaseUris,
  };
};

reducers[ACTIONS.PURCHASE_URI_FAILED] = (state, action) => {
  const { uri } = action.data;
  const newFailedPurchaseUris = state.failedPurchasedUris.slice();
  if (!newFailedPurchaseUris.includes(uri)) {
    newFailedPurchaseUris.push(uri);
  }

  return {
    ...state,
    failedPurchaseUris: newFailedPurchaseUris,
  };
};

export function fileReducer(state = defaultState, action) {
  const handler = reducers[action.type];
  if (handler) return handler(state, action);
  return state;
}
