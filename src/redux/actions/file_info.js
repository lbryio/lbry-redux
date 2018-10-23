import * as ACTIONS from 'constants/action_types';
import Lbry from 'lbry';
import { doFetchClaimListMine } from 'redux/actions/claims';
import { selectClaimsByUri, selectIsFetchingClaimListMine } from 'redux/selectors/claims';
import { selectIsFetchingFileList, selectUrisLoading } from 'redux/selectors/file_info';

export function doFetchFileInfo(uri) {
  return (dispatch, getState) => {
    const state = getState();
    const claim = selectClaimsByUri(state)[uri];
    const outpoint = claim ? `${claim.txid}:${claim.nout}` : null;
    const alreadyFetching = !!selectUrisLoading(state)[uri];

    if (!alreadyFetching) {
      dispatch({
        type: ACTIONS.FETCH_FILE_INFO_STARTED,
        data: {
          outpoint,
        },
      });

      Lbry.file_list({ outpoint, full_status: true }).then(fileInfos => {
        dispatch({
          type: ACTIONS.FETCH_FILE_INFO_COMPLETED,
          data: {
            outpoint,
            fileInfo: fileInfos && fileInfos.length ? fileInfos[0] : null,
          },
        });
      });
    }
  };
}

export function doFileList() {
  return (dispatch, getState) => {
    const state = getState();
    const isFetching = selectIsFetchingFileList(state);

    if (!isFetching) {
      dispatch({
        type: ACTIONS.FILE_LIST_STARTED,
      });

      Lbry.file_list().then(fileInfos => {
        dispatch({
          type: ACTIONS.FILE_LIST_SUCCEEDED,
          data: {
            fileInfos,
          },
        });
      });
    }
  };
}

export function doFetchFileInfosAndPublishedClaims() {
  return (dispatch, getState) => {
    const state = getState();
    const isFetchingClaimListMine = selectIsFetchingClaimListMine(state);
    const isFetchingFileInfo = selectIsFetchingFileList(state);

    if (!isFetchingClaimListMine) dispatch(doFetchClaimListMine());
    if (!isFetchingFileInfo) dispatch(doFileList());
  };
}

export function doSetFileListSort(page, value) {
  return {
    type: ACTIONS.SET_FILE_LIST_SORT,
    data: { page, value },
  };
}
