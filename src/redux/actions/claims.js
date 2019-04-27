// @flow
import * as ACTIONS from 'constants/action_types';
import Lbry from 'lbry';
import { normalizeURI, parseURI } from 'lbryURI';
import { doToast } from 'redux/actions/notifications';
import { selectMyClaimsRaw, selectResolvingUris, selectClaimsByUri } from 'redux/selectors/claims';
import { doFetchTransactions } from 'redux/actions/wallet';
import { creditsToString } from 'util/formatCredits';

export function doResolveUris(uris: Array<string>, returnCachedClaims: boolean = false) {
  return (dispatch: Dispatch, getState: GetState) => {
    const normalizedUris = uris.map(normalizeURI);
    const state = getState();

    const resolvingUris = selectResolvingUris(state);
    const claimsByUri = selectClaimsByUri(state);
    const urisToResolve = normalizedUris.filter(uri => {
      if (resolvingUris.includes(uri)) {
        return false;
      }

      return returnCachedClaims ? !claimsByUri[uri] : true;
    });

    if (urisToResolve.length === 0) {
      return;
    }

    dispatch({
      type: ACTIONS.RESOLVE_URIS_STARTED,
      data: { uris: normalizedUris },
    });

    const resolveInfo: {
      [string]: {
        claim: ?StreamClaim,
        certificate: ?ChannelClaim,
        claimsInChannel: ?number,
      },
    } = {};

    Lbry.resolve({ urls: urisToResolve }).then((result: ResolveResponse) => {
      Object.entries(result).forEach(([uri, uriResolveInfo]) => {
        const fallbackResolveInfo = {
          claim: null,
          claimsInChannel: null,
          certificate: null,
        };

        // Flow has terrible Object.entries support
        // https://github.com/facebook/flow/issues/2221
        // $FlowFixMe
        if (uriResolveInfo.error) {
          resolveInfo[uri] = { ...fallbackResolveInfo };
        } else {
          // $FlowFixMe
          const { claim, certificate, claims_in_channel: claimsInChannel } = uriResolveInfo;
          resolveInfo[uri] = { claim, certificate, claimsInChannel };
        }
      });

      dispatch({
        type: ACTIONS.RESOLVE_URIS_COMPLETED,
        data: { resolveInfo },
      });
    });
  };
}

export function doResolveUri(uri: string) {
  return doResolveUris([uri]);
}

export function doFetchClaimListMine() {
  return (dispatch: Dispatch) => {
    dispatch({
      type: ACTIONS.FETCH_CLAIM_LIST_MINE_STARTED,
    });

    Lbry.claim_list().then((claims: ClaimListResponse) => {
      dispatch({
        type: ACTIONS.FETCH_CLAIM_LIST_MINE_COMPLETED,
        data: {
          claims,
        },
      });
    });
  };
}

export function doAbandonClaim(txid: string, nout: number) {
  return (dispatch: Dispatch, getState: GetState) => {
    const state = getState();
    const myClaims: Array<ChannelClaim | StreamClaim> = selectMyClaimsRaw(state);
    const claimToAbandon = myClaims.find(claim => claim.txid === txid && claim.nout === nout);

    if (!claimToAbandon) {
      console.error('No associated claim with txid: ', txid);
      return;
    }

    const { claim_id: claimId, name: claimName } = claimToAbandon;

    dispatch({
      type: ACTIONS.ABANDON_CLAIM_STARTED,
      data: {
        claimId,
      },
    });

    const errorCallback = () => {
      dispatch(
        doToast({
          message: 'Error abandoning claim',
          isError: true,
        })
      );
    };

    const successCallback = () => {
      dispatch({
        type: ACTIONS.ABANDON_CLAIM_SUCCEEDED,
        data: {
          claimId,
        },
      });

      dispatch(
        doToast({
          message: 'Successfully abandoned your claim',
        })
      );

      // After abandoning, call claim_list to show the claim as abandoned
      // Also fetch transactions to show the new abandon transaction
      dispatch(doFetchClaimListMine());
      dispatch(doFetchTransactions());
    };

    const abandonParams = {
      txid,
      nout,
      blocking: true,
    };

    const method = claimName.startsWith('@') ? 'channel_abandon' : 'stream_abandon';
    Lbry[method](abandonParams).then(successCallback, errorCallback);
  };
}

export function doFetchClaimsByChannel(uri: string, page: number = 1) {
  return (dispatch: Dispatch) => {
    dispatch({
      type: ACTIONS.FETCH_CHANNEL_CLAIMS_STARTED,
      data: { uri, page },
    });

    const { claimId } = parseURI(uri);

    Lbry.claim_search({ channel_id: claimId, page: page || 1 }).then(
      (result: ClaimSearchResponse) => {
        const { items: claimsInChannel, page: returnedPage } = result;

        dispatch({
          type: ACTIONS.FETCH_CHANNEL_CLAIMS_COMPLETED,
          data: {
            uri,
            claims: claimsInChannel || [],
            page: returnedPage || undefined,
          },
        });
      }
    );
  };
}

export function doCreateChannel(name: string, amount: number) {
  return (dispatch: Dispatch) => {
    dispatch({
      type: ACTIONS.CREATE_CHANNEL_STARTED,
    });

    return (
      Lbry.channel_create({
        name,
        bid: creditsToString(amount),
      })
        // outputs[0] is the certificate
        // outputs[1] is the change from the tx, not in the app currently
        .then((result: ChannelCreateResponse) => {
          const channelClaim = result.outputs[0];
          dispatch({
            type: ACTIONS.CREATE_CHANNEL_COMPLETED,
            data: { channelClaim },
          });
        })
        .catch(error => {
          dispatch({
            type: ACTIONS.CREATE_CHANNEL_FAILED,
            data: error,
          });
        })
    );
  };
}

export function doFetchChannelListMine() {
  return (dispatch: Dispatch) => {
    dispatch({
      type: ACTIONS.FETCH_CHANNEL_LIST_STARTED,
    });

    const callback = (channels: Array<ChannelClaim>) => {
      dispatch({
        type: ACTIONS.FETCH_CHANNEL_LIST_COMPLETED,
        data: { claims: channels },
      });
    };

    Lbry.channel_list().then(callback);
  };
}
