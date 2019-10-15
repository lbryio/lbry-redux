// @flow
import * as ACTIONS from 'constants/action_types';
import Lbry from 'lbry';
import { selectClaimsByUri, selectMyChannelClaims } from 'redux/selectors/claims';
import { doToast } from 'redux/actions/notifications';

export function doCommentList(uri: string) {
  return (dispatch: Dispatch, getState: GetState) => {
    const state = getState();
    const claim = selectClaimsByUri(state)[uri];
    const claimId = claim ? claim.claim_id : null;

    dispatch({
      type: ACTIONS.COMMENT_LIST_STARTED,
    });
    Lbry.comment_list({
      claim_id: claimId,
    })
      .then((results: CommentListResponse) => {
        dispatch({
          type: ACTIONS.COMMENT_LIST_COMPLETED,
          data: {
            comments: results,
            claimId: claimId,
            uri: uri,
          },
        });
      })
      .catch(error => {
        console.log(error);
        dispatch({
          type: ACTIONS.COMMENT_LIST_FAILED,
          data: error,
        });
      });
  };
}

export function doCommentCreate(
  comment: string = '',
  claim_id: string = '',
  channel: ?string,
  parent_id?: number
) {
  return (dispatch: Dispatch, getState: GetState) => {
    const state = getState();
    dispatch({
      type: ACTIONS.COMMENT_CREATE_STARTED,
    });
    const myChannels = selectMyChannelClaims(state);
    const namedChannelClaim =
      myChannels && myChannels.find(myChannel => myChannel.name === channel);
    const channel_id = namedChannelClaim ? namedChannelClaim.claim_id : null;
    return Lbry.comment_create({
      comment,
      claim_id,
      channel_id,
    })
      .then((result: Comment) => {
        dispatch({
          type: ACTIONS.COMMENT_CREATE_COMPLETED,
          data: {
            comment: result,
            claimId: claim_id,
          },
        });
      })
      .catch(error => {
        dispatch({
          type: ACTIONS.COMMENT_CREATE_FAILED,
          data: error,
        });
        dispatch(
          doToast({
            message: 'Oops, someone broke comments.',
            isError: true,
          })
        );
      });
  };
}
