// @flow
import { createSelector } from 'reselect';

type State = { file: FileState };

export const selectState = (state: State): FileState => state.file || {};

export const selectPurchaseUriErrorMessage: (state: State) => string = createSelector(
  selectState,
  state => state.purchaseUriErrorMessage
);

export const selectFailedPurchaseUris: (state: State) => Array<string> = createSelector(
  selectState,
  state => state.failedPurchaseUris
);

export const selectPurchasedUris: (state: State) => Array<string> = createSelector(
  selectState,
  state => state.purchasedUris
);

export const selectPurchasedStreamingUrls: (state: State) => {} = createSelector(
  selectState,
  state => state.purchasedStreamingUrls
);

export const selectLastPurchasedUri: (state: State) => string = createSelector(
  selectState,
  state =>
    state.purchasedUris.length > 0 ? state.purchasedUris[state.purchasedUris.length - 1] : null
);

export const makeSelectStreamingUrlForUri = (uri: string): ((state: State) => {}) =>
  createSelector(
    selectPurchasedStreamingUrls,
    streamingUrls => streamingUrls && streamingUrls[uri]
  );
