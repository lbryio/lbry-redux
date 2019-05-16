import { createSelector } from 'reselect';

export const selectState = state => state.file || {};

export const selectFailedPurchaseUris = createSelector(
  selectState,
  state => state.failedPurchaseUris
);

export const selectPurchasedUris = createSelector(
  selectState,
  state => state.purchasedUris
);

export const selectPurchasedStreamingUrls = createSelector(
  selectState,
  state => state.purchasedStreamingUrls
);

export const selectLastPurchasedUri = createSelector(
  selectState,
  state =>
    state.purchasedUris.length > 0 ? state.purchasedUris[state.purchasedUris.length - 1] : null
);

export const makeSelectStreamingUrlForUri = uri =>
  createSelector(
    selectPurchasedStreamingUrls,
    streamingUrls => streamingUrls && streamingUrls[uri]
  );
