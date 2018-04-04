import * as ACTIONS from 'constants/action_types';
import Lbry from 'lbry';
import Lbryapi from 'lbryapi';
import { buildURI, normalizeURI } from 'lbryURI';
import { doNotify } from 'redux/actions/notifications';
import { selectMyClaimsRaw, selectResolvingUris } from 'redux/selectors/claims';
import { batchActions } from 'util/batchActions';

export function doResolveUris(uris) {
  return (dispatch, getState) => {
    const normalizedUris = uris.map(normalizeURI);
    const state = getState();

    // Filter out URIs that are already resolving
    const resolvingUris = selectResolvingUris(state);
    const urisToResolve = normalizedUris.filter(uri => !resolvingUris.includes(uri));

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
    const { claim_id: claimId, name } = myClaims.find(
      claim => claim.txid === txid && claim.nout === nout
    );

    dispatch({
      type: ACTIONS.ABANDON_CLAIM_STARTED,
      data: {
        claimId,
      },
    });

    const errorCallback = () => {
      dispatch(doNotify({
        title: 'Transaction failed',
        message: 'Transaction failed',
        type: 'error',
        displayType: ['modal', 'toast']
      }));
    };

    const successCallback = results => {
      if (results.txid) {
        dispatch({
          type: ACTIONS.ABANDON_CLAIM_SUCCEEDED,
          data: {
            claimId,
          },
        });
        dispatch(doResolveUri(buildURI({ name, claimId })));
        dispatch(doFetchClaimListMine());
      } else {
        dispatch(doNotify({
          title: 'Transaction failed',
          message: 'Transaction failed',
          type: 'error',
          displayType: ['modal', 'toast']
        }));
      }
    };

    Lbry.claim_abandon({
      txid,
      nout,
    }).then(successCallback, errorCallback);
  };
}

export function doFetchFeaturedUris() {
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
        doResolveUris(urisToResolve),
        {
          type: ACTIONS.FETCH_FEATURED_CONTENT_COMPLETED,
          data: {
            uris: Uris,
            success: true,
          },
        },
      ];
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

export function doFetchRewardedContent() {
  return dispatch => {
    const success = nameToClaimId => {
      dispatch({
        type: ACTIONS.FETCH_REWARD_CONTENT_COMPLETED,
        data: {
          claimIds: Object.values(nameToClaimId),
          success: true,
        },
      });
    };

    const failure = () => {
      dispatch({
        type: ACTIONS.FETCH_REWARD_CONTENT_COMPLETED,
        data: {
          claimIds: [],
          success: false,
        },
      });
    };

    Lbryapi.call('reward', 'list_featured').then(success, failure);
  };
}
