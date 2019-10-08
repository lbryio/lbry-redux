// @flow
import * as ACTIONS from 'constants/action_types';
import Lbry from 'lbry';
import { normalizeURI } from 'lbryURI';
import { doToast } from 'redux/actions/notifications';
import {
  selectMyClaimsRaw,
  selectResolvingUris,
  selectClaimsByUri,
  selectMyChannelClaims,
} from 'redux/selectors/claims';
import { doFetchTransactions } from 'redux/actions/wallet';
import { selectSupportsByOutpoint } from 'redux/selectors/wallet';
import { creditsToString } from 'util/format-credits';
import { batchActions } from 'util/batch-actions';
import { createNormalizedClaimSearchKey } from 'util/claim';

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
            if (uriResolveInfo.value_type === 'channel') {
              result.channel = uriResolveInfo;
              // $FlowFixMe
              result.claimsInChannel = uriResolveInfo.meta.claims_in_channel;
            } else {
              result.stream = uriResolveInfo;
              if (uriResolveInfo.signing_channel) {
                result.channel = uriResolveInfo.signing_channel;
                result.claimsInChannel =
                  (uriResolveInfo.signing_channel.meta &&
                    uriResolveInfo.signing_channel.meta.claims_in_channel) ||
                  0;
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
          message: isClaim ? 'Error abandoning your claim/support' : 'Error unlocking your tip',
          isError: true,
        })
      );
    };

    const successCallback = () => {
      dispatch({
        type: completedActionType,
        data,
      });

      let abandonMessage;
      if (isClaim) {
        abandonMessage = 'Successfully abandoned your claim.';
      } else if (supportToAbandon) {
        abandonMessage = 'Successfully abandoned your support.';
      } else {
        abandonMessage = 'Successfully unlocked your tip!';
      }

      dispatch(
        doToast({
          message: abandonMessage,
        })
      );

      // After abandoning, call claim_list to show the claim as abandoned
      // Also fetch transactions to show the new abandon transaction
      if (isClaim) dispatch(doFetchClaimListMine());
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

    Lbry.claim_search({
      channel: uri,
      valid_channel_signature: true,
      page: page || 1,
      order_by: ['release_time'],
    }).then((result: ClaimSearchResponse) => {
      const { items: claimsInChannel, page: returnedPage } = result;

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

export function doCreateChannel(name: string, amount: number, optionalParams: any) {
  return (dispatch: Dispatch) => {
    dispatch({
      type: ACTIONS.CREATE_CHANNEL_STARTED,
    });

    const createParams: {
      name: string,
      bid: string,
      blocking: true,
      title?: string,
      cover_url?: string,
      thumbnail_url?: string,
      description?: string,
      website_url?: string,
      email?: string,
      tags?: Array<string>,
    } = {
      name,
      bid: creditsToString(amount),
      blocking: true,
    };

    if (optionalParams) {
      if (optionalParams.title) {
        createParams.title = optionalParams.title;
      }
      if (optionalParams.coverUrl) {
        createParams.cover_url = optionalParams.coverUrl;
      }
      if (optionalParams.thumbnailUrl) {
        createParams.thumbnail_url = optionalParams.thumbnailUrl;
      }
      if (optionalParams.description) {
        createParams.description = optionalParams.description;
      }
      if (optionalParams.website) {
        createParams.website_url = optionalParams.website;
      }
      if (optionalParams.email) {
        createParams.email = optionalParams.email;
      }
      if (optionalParams.tags) {
        createParams.tags = optionalParams.tags.map(tag => tag.name);
      }
    }

    return (
      Lbry.channel_create(createParams)
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
            data: error.message,
          });
        })
    );
  };
}

export function doUpdateChannel(params: any) {
  return (dispatch: Dispatch, getState: GetState) => {
    dispatch({
      type: ACTIONS.UPDATE_CHANNEL_STARTED,
    });
    const state = getState();
    const myChannels = selectMyChannelClaims(state);
    const channelClaim = myChannels.find(myChannel => myChannel.claim_id === params.claim_id);

    const updateParams = {
      claim_id: params.claim_id,
      bid: creditsToString(params.amount),
      title: params.title,
      cover_url: params.coverUrl,
      thumbnail_url: params.thumbnailUrl,
      description: params.description,
      website_url: params.website,
      email: params.email,
      tags: [],
      replace: true,
      languages: [],
      locations: [],
      blocking: true,
    };

    if (params.tags) {
      updateParams.tags = params.tags.map(tag => tag.name);
    }

    // we'll need to remove these once we add locations/channels to channel page edit/create options

    if (channelClaim && channelClaim.value && channelClaim.value.locations) {
      updateParams.locations = channelClaim.value.locations;
    }

    if (channelClaim && channelClaim.value && channelClaim.value.languages) {
      updateParams.languages = channelClaim.value.languages;
    }

    return Lbry.channel_update(updateParams)
      .then((result: ChannelUpdateResponse) => {
        const channelClaim = result.outputs[0];
        dispatch({
          type: ACTIONS.UPDATE_CHANNEL_COMPLETED,
          data: { channelClaim },
        });
      })
      .catch(error => {
        dispatch({
          type: ACTIONS.UPDATE_CHANNEL_FAILED,
          data: error,
        });
      });
  };
}

export function doImportChannel(certificate: string) {
  return (dispatch: Dispatch) => {
    dispatch({
      type: ACTIONS.IMPORT_CHANNEL_STARTED,
    });

    return Lbry.channel_import({ channel_data: certificate })
      .then((result: string) => {
        dispatch({
          type: ACTIONS.IMPORT_CHANNEL_COMPLETED,
        });
      })
      .catch(error => {
        dispatch({
          type: ACTIONS.IMPORT_CHANNEL_FAILED,
          data: error,
        });
      });
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

export function doClaimSearch(
  options: { tags?: Array<string>, page?: number, page_size?: number, release_time?: string } = {
    page_size: 10,
  }
) {
  const query = createNormalizedClaimSearchKey(options);
  return (dispatch: Dispatch) => {
    dispatch({
      type: ACTIONS.CLAIM_SEARCH_STARTED,
      data: { query: query },
    });

    const success = (data: ClaimSearchResponse) => {
      const resolveInfo = {};
      const urls = [];
      data.items.forEach((stream: Claim) => {
        resolveInfo[stream.canonical_url] = { stream };
        urls.push(stream.canonical_url);
      });

      dispatch({
        type: ACTIONS.CLAIM_SEARCH_COMPLETED,
        data: {
          query,
          resolveInfo,
          urls,
          append: options.page && options.page !== 1,
          pageSize: options.page_size,
        },
      });
    };

    const failure = err => {
      dispatch({
        type: ACTIONS.CLAIM_SEARCH_FAILED,
        data: { query },
        error: err,
      });
    };

    Lbry.claim_search(options).then(success, failure);
  };
}
