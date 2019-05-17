import * as ACTIONS from 'constants/action_types';

const reducers = {};
const defaultState = {
  failedPurchaseUris: [],
  purchasedUris: [],
  purchasedStreamingUrls: {},
};

reducers[ACTIONS.PURCHASE_URI_COMPLETED] = (state, action) => {
  const { uri, streamingUrl } = action.data;
  const newPurchasedUris = state.purchasedUris.slice();
  const newFailedPurchaseUris = state.failedPurchaseUris.slice();
  const newPurchasedStreamingUrls = Object.assign({}, state.newPurchasedStreamingUrls);

  if (!newPurchasedUris.includes(uri)) {
    newPurchasedUris.push(uri);
  }
  if (newFailedPurchaseUris.includes(uri)) {
    newFailedPurchaseUris.splice(newFailedPurchaseUris.indexOf(uri), 1);
  }
  if (streamingUrl) {
    newPurchasedStreamingUrls[uri] = streamingUrl;
  }

  return {
    ...state,
    failedPurchaseUris: newFailedPurchaseUris,
    purchasedUris: newPurchasedUris,
    purchasedStreamingUrls: newPurchasedStreamingUrls,
  };
};

reducers[ACTIONS.PURCHASE_URI_FAILED] = (state, action) => {
  const { uri } = action.data;
  const newFailedPurchaseUris = state.failedPurchaseUris.slice();
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
