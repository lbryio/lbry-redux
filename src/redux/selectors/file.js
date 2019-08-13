// @flow
import { createSelector } from 'reselect';
import { makeSelectFileInfoForUri } from 'redux/selectors/file_info';

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

export const selectLastPurchasedUri: (state: State) => string = createSelector(
  selectState,
  state =>
    state.purchasedUris.length > 0 ? state.purchasedUris[state.purchasedUris.length - 1] : null
);

export const makeSelectStreamingUrlForUri = (uri: string) =>
  createSelector(
    makeSelectFileInfoForUri(uri),
    fileInfo => {
      return fileInfo && fileInfo.streaming_url;
    }
  );
