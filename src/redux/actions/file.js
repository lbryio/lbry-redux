// @flow
import * as ACTIONS from 'constants/action_types';
import Lbry from 'lbry';
import { doToast } from 'redux/actions/notifications';
import { selectBalance } from 'redux/selectors/wallet';
import { makeSelectFileInfoForUri, selectDownloadingByOutpoint } from 'redux/selectors/file_info';
import { makeSelectStreamingUrlForUri } from 'redux/selectors/file';

type Dispatch = (action: any) => any;
type GetState = () => { file: FileState };

export function doFileGet(uri: string, saveFile: boolean = true) {
  return (dispatch: Dispatch) => {
    dispatch({
      type: ACTIONS.LOADING_FILE_STARTED,
      data: {
        uri,
      },
    });

    // set save_file argument to True to save the file (old behaviour)
    Lbry.get({ uri, save_file: saveFile })
      .then((streamInfo: GetResponse) => {
        const timeout = streamInfo === null || typeof streamInfo !== 'object';

        if (timeout) {
          dispatch({
            type: ACTIONS.LOADING_FILE_FAILED,
            data: { uri },
          });
          dispatch({
            type: ACTIONS.PURCHASE_URI_FAILED,
            data: { uri },
          });

          dispatch(doToast({ message: `File timeout for uri ${uri}`, isError: true }));
        } else {
          // purchase was completed successfully
          const { streaming_url: streamingUrl } = streamInfo;
          dispatch({
            type: ACTIONS.PURCHASE_URI_COMPLETED,
            data: { uri, streamingUrl: !saveFile && streamingUrl ? streamingUrl : null },
          });
        }
      })
      .catch(() => {
        dispatch({
          type: ACTIONS.LOADING_FILE_FAILED,
          data: { uri },
        });
        dispatch({
          type: ACTIONS.PURCHASE_URI_FAILED,
          data: { uri },
        });

        dispatch(
          doToast({
            message: `Failed to download ${uri}, please try again. If this problem persists, visit https://lbry.com/faq/support for support.`,
            isError: true,
          })
        );
      });
  };
}

export function doPurchaseUri(uri: string, costInfo: { cost: number }, saveFile: boolean = true) {
  return (dispatch: Dispatch, getState: GetState) => {
    dispatch({
      type: ACTIONS.PURCHASE_URI_STARTED,
      data: { uri },
    });

    const state = getState();
    const balance = selectBalance(state);
    const fileInfo = makeSelectFileInfoForUri(uri)(state);
    const downloadingByOutpoint = selectDownloadingByOutpoint(state);
    const alreadyDownloading = fileInfo && !!downloadingByOutpoint[fileInfo.outpoint];
    const alreadyStreaming = makeSelectStreamingUrlForUri(uri)(state);

    if (alreadyDownloading || alreadyStreaming) {
      dispatch({
        type: ACTIONS.PURCHASE_URI_FAILED,
        data: { uri, error: `Already fetching uri: ${uri}` },
      });

      Promise.resolve();
      return;
    }

    const { cost } = costInfo;

    if (cost > balance) {
      dispatch({
        type: ACTIONS.PURCHASE_URI_FAILED,
        data: { uri, error: 'Insufficient credits' },
      });

      Promise.resolve();
      return;
    }

    dispatch(doFileGet(uri, saveFile));
  };
}
