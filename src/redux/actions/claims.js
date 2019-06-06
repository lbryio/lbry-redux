// @flow
import * as ACTIONS from 'constants/action_types';
import Lbry from 'lbry';
import { normalizeURI, parseURI } from 'lbryURI';
import { doToast } from 'redux/actions/notifications';
import { selectMyClaimsRaw, selectResolvingUris, selectClaimsByUri } from 'redux/selectors/claims';
import { doFetchTransactions } from 'redux/actions/wallet';
import { selectSupportsByOutpoint } from 'redux/selectors/wallet';
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
        stream: ?StreamClaim,
        channel: ?ChannelClaim,
        claimsInChannel: ?number,
      },
    } = {};

    Lbry.resolve({ urls: urisToResolve }).then((result: ResolveResponse) => {
      Object.entries(result).forEach(([uri, uriResolveInfo]) => {
        const fallbackResolveInfo = {
          stream: null,
          claimsInChannel: null,
          channel: null,
        };

        // Flow has terrible Object.entries support
        // https://github.com/facebook/flow/issues/2221
        if (uriResolveInfo) {
          if (uriResolveInfo.error) {
            resolveInfo[uri] = { ...fallbackResolveInfo };
          } else {
            let result = {};
            if (uriResolveInfo.value_type === 'channel' ) {
              result.channel = uriResolveInfo;
              // $FlowFixMe
              result.claimsInChannel = uriResolveInfo.meta.claims_in_channel;
            } else {
              result.stream = uriResolveInfo;
              if (uriResolveInfo.signing_channel) {
                result.channel = uriResolveInfo.signing_channel;
                result.claimsInChannel = uriResolveInfo.signing_channel.meta.claims_in_channel;
              }
            }

            // $FlowFixMe
            resolveInfo[uri] = result;
          }
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
  const outpoint = `${txid}:${nout}`;

  return (dispatch: Dispatch, getState: GetState) => {
    const state = getState();
    const myClaims: Array<Claim> = selectMyClaimsRaw(state);
    const mySupports: { [string]: Support } = selectSupportsByOutpoint(state);

    // A user could be trying to abandon a support or one of their claims
    const claimToAbandon = myClaims.find(claim => claim.txid === txid && claim.nout === nout);
    const supportToAbandon = mySupports[outpoint];

    if (!claimToAbandon && !supportToAbandon) {
      console.error('No associated support or claim with txid: ', txid);
      return;
    }

    const data = claimToAbandon
      ? { claimId: claimToAbandon.claim_id }
      : { outpoint: `${supportToAbandon.txid}:${supportToAbandon.nout}` };

    const isClaim = !!claimToAbandon;
    const startedActionType = isClaim
      ? ACTIONS.ABANDON_CLAIM_STARTED
      : ACTIONS.ABANDON_SUPPORT_STARTED;
    const completedActionType = isClaim
      ? ACTIONS.ABANDON_CLAIM_STARTED
      : ACTIONS.ABANDON_SUPPORT_COMPLETED;

    dispatch({
      type: startedActionType,
      data,
    });

    const errorCallback = () => {
      dispatch(
        doToast({
          message: isClaim ? 'Error abandoning your claim' : 'Error unlocking your tip',
          isError: true,
        })
      );
    };

    const successCallback = () => {
      dispatch({
        type: completedActionType,
        data,
      });

      dispatch(
        doToast({
          message: isClaim
            ? 'Successfully abandoned your claim'
            : 'Successfully unlocked your tip!',
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

    let method;
    if (supportToAbandon) {
      method = 'support_abandon';
    } else if (claimToAbandon) {
      const { name: claimName } = claimToAbandon;
      method = claimName.startsWith('@') ? 'channel_abandon' : 'stream_abandon';
    }

    if (!method) {
      console.error('No "method" chosen for claim or support abandon');
      return;
    }

    Lbry[method](abandonParams).then(successCallback, errorCallback);
  };
}

export function doFetchClaimsByChannel(uri: string, page: number = 1) {
  return (dispatch: Dispatch) => {
    dispatch({
      type: ACTIONS.FETCH_CHANNEL_CLAIMS_STARTED,
      data: { uri, page },
    });

    Lbry.claim_search({ channel: uri, is_controlling: true, page: page || 1, order_by: ['release_time']  }).then(
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
