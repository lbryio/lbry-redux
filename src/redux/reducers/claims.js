import * as ACTIONS from 'constants/action_types';

const reducers = {};

const defaultState = {
  channelClaimCounts: {},
};

reducers[ACTIONS.RESOLVE_URIS_COMPLETED] = (state, action) => {
  const { resolveInfo } = action.data;
  const byUri = Object.assign({}, state.claimsByUri);
  const byId = Object.assign({}, state.byId);
  const channelClaimCounts = Object.assign({}, state.channelClaimCounts);

  Object.entries(resolveInfo).forEach(([uri, { certificate, claimsInChannel }]) => {
    if (certificate && !Number.isNaN(claimsInChannel)) {
      channelClaimCounts[uri] = claimsInChannel;
    }
  });

  Object.entries(resolveInfo).forEach(([uri, { certificate, claim }]) => {
    if (claim) {
      byId[claim.claim_id] = claim;
      byUri[uri] = claim.claim_id;
    } else if (claim === undefined && certificate !== undefined) {
      byId[certificate.claim_id] = certificate;
      // Don't point URI at the channel certificate unless it actually is
      // a channel URI. This is brittle.
      if (!uri.split(certificate.name)[1].match(/\//)) {
        byUri[uri] = certificate.claim_id;
      } else {
        byUri[uri] = null;
      }
    } else {
      byUri[uri] = null;
    }
  });

  return Object.assign({}, state, {
    byId,
    claimsByUri: byUri,
    channelClaimCounts,
    resolvingUris: (state.resolvingUris || []).filter(uri => !resolveInfo[uri]),
  });
};

reducers[ACTIONS.FETCH_CLAIM_LIST_MINE_STARTED] = state =>
  Object.assign({}, state, {
    isFetchingClaimListMine: true,
  });

reducers[ACTIONS.FETCH_CLAIM_LIST_MINE_COMPLETED] = (state, action) => {
  const { claims } = action.data;
  const byId = Object.assign({}, state.byId);
  const pendingById = Object.assign({}, state.pendingById);

  claims
    .filter(
      claim => claim.category && (claim.category.match(/claim/) || claim.category.match(/update/))
    )
    .forEach(claim => {
      byId[claim.claim_id] = claim;

      const pending = Object.values(pendingById).find(
        pendingClaim =>
          pendingClaim.name === claim.name && pendingClaim.channel_name === claim.channel_name
      );

      if (pending) {
        delete pendingById[pending.claim_id];
      }
    });

  // Remove old timed out pending publishes
  Object.values(pendingById)
    .filter(pendingClaim => Date.now() - pendingClaim.time >= 20 * 60 * 1000)
    .forEach(pendingClaim => {
      delete pendingById[pendingClaim.claim_id];
    });

  return Object.assign({}, state, {
    isFetchingClaimListMine: false,
    myClaims: claims,
    byId,
    pendingById,
  });
};

reducers[ACTIONS.FETCH_CHANNEL_LIST_STARTED] = state =>
  Object.assign({}, state, { fetchingMyChannels: true });

reducers[ACTIONS.FETCH_CHANNEL_LIST_COMPLETED] = (state, action) => {
  const { claims } = action.data;
  const myChannelClaims = new Set(state.myChannelClaims);
  const byId = Object.assign({}, state.byId);

  claims.forEach(claim => {
    myChannelClaims.add(claim.claim_id);
    byId[claims.claim_id] = claim;
  });

  return Object.assign({}, state, {
    byId,
    fetchingMyChannels: false,
    myChannelClaims,
  });
};

reducers[ACTIONS.FETCH_CHANNEL_CLAIMS_STARTED] = (state, action) => {
  const { uri, page } = action.data;
  const fetchingChannelClaims = Object.assign({}, state.fetchingChannelClaims);

  fetchingChannelClaims[uri] = page;

  return Object.assign({}, state, {
    fetchingChannelClaims,
  });
};

reducers[ACTIONS.FETCH_CHANNEL_CLAIMS_COMPLETED] = (state, action) => {
  const { uri, claims, page } = action.data;

  const claimsByChannel = Object.assign({}, state.claimsByChannel);
  const byChannel = Object.assign({}, claimsByChannel[uri]);
  const allClaimIds = new Set(byChannel.all);
  const currentPageClaimIds = [];
  const byId = Object.assign({}, state.byId);
  const fetchingChannelClaims = Object.assign({}, state.fetchingChannelClaims);
  const claimsByUri = Object.assign({}, state.claimsByUri);

  if (claims !== undefined) {
    claims.forEach(claim => {
      allClaimIds.add(claim.claim_id);
      currentPageClaimIds.push(claim.claim_id);
      byId[claim.claim_id] = claim;
      claimsByUri[`lbry://${claim.name}#${claim.claim_id}`] = claim.claim_id;
    });
  }

  byChannel.all = allClaimIds;
  byChannel[page] = currentPageClaimIds;
  claimsByChannel[uri] = byChannel;
  delete fetchingChannelClaims[uri];

  return Object.assign({}, state, {
    claimsByChannel,
    byId,
    fetchingChannelClaims,
    claimsByUri,
  });
};

reducers[ACTIONS.ABANDON_CLAIM_STARTED] = (state, action) => {
  const { claimId } = action.data;
  const abandoningById = Object.assign({}, state.abandoningById);

  abandoningById[claimId] = true;

  return Object.assign({}, state, {
    abandoningById,
  });
};

reducers[ACTIONS.ABANDON_CLAIM_SUCCEEDED] = (state, action) => {
  const { claimId } = action.data;
  const byId = Object.assign({}, state.byId);
  const claimsByUri = Object.assign({}, state.claimsByUri);

  Object.keys(claimsByUri).forEach(uri => {
    if (claimsByUri[uri] === claimId) {
      delete claimsByUri[uri];
    }
  });

  delete byId[claimId];

  return Object.assign({}, state, {
    byId,
    claimsByUri,
  });
};

reducers[ACTIONS.CREATE_CHANNEL_COMPLETED] = (state, action) => {
  const { channelClaim } = action.data;
  const byId = Object.assign({}, state.byId);
  const myChannelClaims = new Set(state.myChannelClaims);

  byId[channelClaim.claim_id] = channelClaim;
  myChannelClaims.add(channelClaim.claim_id);

  return Object.assign({}, state, {
    byId,
    myChannelClaims,
  });
};

reducers[ACTIONS.FETCH_FEATURED_CONTENT_STARTED] = state =>
  Object.assign({}, state, {
    fetchingFeaturedContent: true,
  });

reducers[ACTIONS.FETCH_FEATURED_CONTENT_COMPLETED] = (state, action) => {
  const { uris, success } = action.data;

  return Object.assign({}, state, {
    fetchingFeaturedContent: false,
    fetchingFeaturedContentFailed: !success,
    featuredUris: uris,
  });
};

reducers[ACTIONS.FETCH_TRENDING_CONTENT_STARTED] = state =>
  Object.assign({}, state, {
    fetchingTrendingContent: true,
  });

reducers[ACTIONS.FETCH_TRENDING_CONTENT_COMPLETED] = (state, action) => {
  const { uris, success } = action.data;

  return Object.assign({}, state, {
    fetchingTrendingContent: false,
    fetchingTrendingContentFailed: !success,
    trendingUris: uris,
  });
};

reducers[ACTIONS.RESOLVE_URIS_STARTED] = (state, action) => {
  const { uris } = action.data;

  const oldResolving = state.resolvingUris || [];
  const newResolving = Object.assign([], oldResolving);

  uris.forEach(uri => {
    if (!newResolving.includes(uri)) {
      newResolving.push(uri);
    }
  });

  return Object.assign({}, state, {
    resolvingUris: newResolving,
  });
};

reducers[ACTIONS.FETCH_CHANNEL_CLAIM_COUNT_COMPLETED] = (state, action) => {
  const channelClaimCounts = Object.assign({}, state.channelClaimCounts);
  const { uri, totalClaims } = action.data;

  channelClaimCounts[uri] = totalClaims;

  return Object.assign({}, state, {
    channelClaimCounts,
  });
};

export function claimsReducer(state = defaultState, action) {
  const handler = reducers[action.type];
  if (handler) return handler(state, action);
  return state;
}
