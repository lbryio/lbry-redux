import * as ACTIONS from 'constants/action_types';
import Lbry from 'lbry';
import Lbryuri from 'lbryuri';
import { selectResolvingUris } from 'redux/selectors/claims';

export function doResolveUris(uris) {
  return (dispatch, getState) => {
    const normalizedUris = uris.map(Lbryuri.normalize);
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
      dispatch(doOpenModal(MODALS.TRANSACTION_FAILED));
    };

    const successCallback = results => {
      if (results.txid) {
        dispatch({
          type: ACTIONS.ABANDON_CLAIM_SUCCEEDED,
          data: {
            claimId,
          },
        });
        dispatch(doResolveUri(Lbryuri.build({ name, claimId })));
        dispatch(doFetchClaimListMine());
      } else {
        dispatch(doOpenModal(MODALS.TRANSACTION_FAILED));
      }
    };

    Lbry.claim_abandon({
      txid,
      nout,
    }).then(successCallback, errorCallback);
  };
}