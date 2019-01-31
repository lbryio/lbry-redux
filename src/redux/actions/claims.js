import * as ACTIONS from 'constants/action_types';
import Lbry from 'lbry';
import Lbryapi from 'lbryapi';
import { normalizeURI } from 'lbryURI';
import { doToast } from 'redux/actions/notifications';
import { selectMyClaimsRaw, selectResolvingUris, selectClaimsByUri } from 'redux/selectors/claims';
import { batchActions } from 'util/batchActions';
import { doFetchTransactions } from 'redux/actions/wallet';

export function doResolveUris(uris, returnCachedClaims = false) {
  return (dispatch, getState) => {
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

    const resolveInfo = {};
    Lbry.resolve({ uris: urisToResolve }).then(result => {
      Object.entries(result).forEach(([uri, uriResolveInfo]) => {
        const fallbackResolveInfo = {
          claim: null,
          claimsInChannel: null,
          certificate: null,
        };

        const { claim, certificate, claims_in_channel: claimsInChannel } =
          uriResolveInfo && !uriResolveInfo.error ? uriResolveInfo : fallbackResolveInfo;

        resolveInfo[uri] = { claim, certificate, claimsInChannel };
      });

      dispatch({
        type: ACTIONS.RESOLVE_URIS_COMPLETED,
        data: { resolveInfo },
      });
    });
  };
}

export function doResolveUri(uri) {
  return doResolveUris([uri]);
}

export function doFetchClaimListMine() {
  return dispatch => {
    dispatch({
      type: ACTIONS.FETCH_CLAIM_LIST_MINE_STARTED,
    });

    Lbry.claim_list_mine().then(claims => {
      dispatch({
        type: ACTIONS.FETCH_CLAIM_LIST_MINE_COMPLETED,
        data: {
          claims,
        },
      });
    });
  };
}

export function doAbandonClaim(txid, nout) {
  return (dispatch, getState) => {
    const state = getState();
    const myClaims = selectMyClaimsRaw(state);
    const { claim_id: claimId } = myClaims.find(
      claim => claim.txid === txid && claim.nout === nout
    );

    dispatch({
      type: ACTIONS.ABANDON_CLAIM_STARTED,
      data: {
        claimId,
      },
    });

    const errorCallback = () => {
      dispatch(
        doToast({
          message: 'Transaction failed',
          isError: true,
        })
      );
    };

    const successCallback = results => {
      if (results.success === true) {
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

        // After abandoning, call claim_list_mine to show the claim as abandoned
        // Also fetch transactions to show the new abandon transaction
        dispatch(doFetchClaimListMine());
        dispatch(doFetchTransactions());
      } else {
        dispatch(
          doToast({
            message: 'Error abandoning claim',
            isError: true,
          })
        );
      }
    };

    Lbry.claim_abandon({
      txid,
      nout,
    }).then(successCallback, errorCallback);
  };
}

export function doFetchFeaturedUris(offloadResolve = false) {
  return dispatch => {
    dispatch({
      type: ACTIONS.FETCH_FEATURED_CONTENT_STARTED,
    });

    const success = ({ Uris }) => {
      let urisToResolve = [];
      Object.keys(Uris).forEach(category => {
        urisToResolve = [...urisToResolve, ...Uris[category]];
      });

      const actions = [
        {
          type: ACTIONS.FETCH_FEATURED_CONTENT_COMPLETED,
          data: {
            uris: Uris,
            success: true,
          },
        },
      ];
      if (urisToResolve.length && !offloadResolve) {
        actions.push(doResolveUris(urisToResolve));
      }

      dispatch(batchActions(...actions));
    };

    const failure = () => {
      dispatch({
        type: ACTIONS.FETCH_FEATURED_CONTENT_COMPLETED,
        data: {
          uris: {},
        },
      });
    };

    Lbryapi.call('file', 'list_homepage').then(success, failure);
  };
}

export function doFetchTrendingUris() {
  return dispatch => {
    dispatch({
      type: ACTIONS.FETCH_TRENDING_CONTENT_STARTED,
    });

    const success = data => {
      const urisToResolve = data.map(uri => uri.url);
      const actions = [
        doResolveUris(urisToResolve),
        {
          type: ACTIONS.FETCH_TRENDING_CONTENT_COMPLETED,
          data: {
            uris: data,
            success: true,
          },
        },
      ];
      dispatch(batchActions(...actions));
    };

    const failure = () => {
      dispatch({
        type: ACTIONS.FETCH_TRENDING_CONTENT_COMPLETED,
        data: {
          uris: [],
        },
      });
    };

    Lbryapi.call('file', 'list_trending').then(success, failure);
  };
}

export function doFetchClaimsByChannel(uri, page) {
  return dispatch => {
    dispatch({
      type: ACTIONS.FETCH_CHANNEL_CLAIMS_STARTED,
      data: { uri, page },
    });

    Lbry.claim_list_by_channel({ uri, page: page || 1 }).then(result => {
      const claimResult = result[uri] || {};
      const { claims_in_channel: claimsInChannel, returned_page: returnedPage } = claimResult;

      dispatch({
        type: ACTIONS.FETCH_CHANNEL_CLAIMS_COMPLETED,
        data: {
          uri,
          claims: claimsInChannel || [],
          page: returnedPage || undefined,
        },
      });
    });
  };
}

export function doFetchClaimCountByChannel(uri) {
  return dispatch => {
    dispatch({
      type: ACTIONS.FETCH_CHANNEL_CLAIM_COUNT_STARTED,
      data: { uri },
    });

    Lbry.claim_list_by_channel({ uri }).then(result => {
      const claimResult = result[uri];
      const totalClaims = claimResult ? claimResult.claims_in_channel : 0;

      dispatch({
        type: ACTIONS.FETCH_CHANNEL_CLAIM_COUNT_COMPLETED,
        data: {
          uri,
          totalClaims,
        },
      });
    });
  };
}
