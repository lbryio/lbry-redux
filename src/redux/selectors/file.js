import { createSelector } from 'reselect';

export const selectState = state => state.file || {};

export const selectPurchasedUris = createSelector(
  selectState,
  state => state.purchasedUris
);

export const selectFailedPurchaseUris = createSelector(
  selectState,
  state => state.failedPurchaseUris
);

export const selectLastPurchasedUri = createSelector(
  selectState,
  state =>
    state.purchasedUris.length > 0 ? state.purchasedUris[state.purchasedUris.length - 1] : null
);
