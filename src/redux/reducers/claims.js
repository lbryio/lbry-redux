// @flow

// This file has a lot of FlowFixMe comments
// It's due to Flow's support of Object.{values,entries}
// https://github.com/facebook/flow/issues/2221
// We could move to es6 Sets/Maps, but those are not recommended for redux
// https://github.com/reduxjs/redux/issues/1499
// Unsure of the best solution at the momentf
// - Sean

import * as ACTIONS from 'constants/action_types';
import { buildURI, parseURI } from 'lbryURI';

type State = {
  channelClaimCounts: { [string]: number },
  claimsByUri: { [string]: string },
  byId: { [string]: StreamClaim | ChannelClaim },
  resolvingUris: Array<string>,
  pendingById: { [string]: StreamClaim | ChannelClaim },
  myChannelClaims: Set<string>,
  abandoningById: { [string]: boolean },
  fetchingChannelClaims: { [string]: number },
  fetchingMyChannels: boolean,
  claimsByChannel: {
    [string]: {
      all: Array<string>,
      [number]: Array<string>,
    },
  },
};

const reducers = {};
const defaultState = {
  byId: {},
  claimsByUri: {},
  claimsByChannel: {},
  channelClaimCounts: {},
  fetchingChannelClaims: {},
  resolvingUris: [],
  // This should not be a Set
  // Storing sets in reducers can cause issues
  myChannelClaims: new Set(),
  fetchingMyChannels: false,
  abandoningById: {},
  pendingById: {},
};

reducers[ACTIONS.RESOLVE_URIS_COMPLETED] = (state: State, action: any): State => {
  const { resolveInfo }: { [string]: ClaimWithPossibleCertificate } = action.data;
  const byUri = Object.assign({}, state.claimsByUri);
  const byId = Object.assign({}, state.byId);
  const channelClaimCounts = Object.assign({}, state.channelClaimCounts);

  Object.entries(resolveInfo).forEach(
    ([uri: string, resolveResponse: ClaimWithPossibleCertificate]) => {
      // $FlowFixMe
      if (resolveResponse.certificate && !Number.isNaN(resolveResponse.claimsInChannel)) {
        // $FlowFixMe
        channelClaimCounts[uri] = resolveResponse.claimsInChannel;
      }
    }
  );

  // $FlowFixMe
  Object.entries(resolveInfo).forEach(([uri, { certificate, claim }]) => {
    if (claim && !certificate) {
      byId[claim.claim_id] = claim;
      byUri[uri] = claim.claim_id;
    } else if (claim && certificate) {
      byId[claim.claim_id] = claim;
      byUri[uri] = claim.claim_id;

      byId[certificate.claim_id] = certificate;
      const channelUri = `lbry://${certificate.name}#${certificate.claim_id}`;
      byUri[channelUri] = certificate.claim_id;
    } else if (!claim && certificate) {
      byId[certificate.claim_id] = certificate;
      byUri[uri] = certificate.claim_id;
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

reducers[ACTIONS.FETCH_CLAIM_LIST_MINE_STARTED] = (state: State): State =>
  Object.assign({}, state, {
    isFetchingClaimListMine: true,
  });

reducers[ACTIONS.FETCH_CLAIM_LIST_MINE_COMPLETED] = (state: State, action: any): State => {
  const { claims }: { claims: Array<StreamClaim | ChannelClaim> } = action.data;
  const byId = Object.assign({}, state.byId);
  const byUri = Object.assign({}, state.claimsByUri);
  const pendingById: { [string]: StreamClaim | ChannelClaim } = Object.assign(
    {},
    state.pendingById
  );

  claims.forEach((claim: StreamClaim | ChannelClaim) => {
    const uri = buildURI({ claimName: claim.name, claimId: claim.claim_id });

    if (claim.type && claim.type.match(/claim|update/)) {
      if (claim.confirmations < 1) {
        pendingById[claim.claim_id] = claim;
        delete byId[claim.claim_id];
        delete byUri[claim.claim_id];
      } else {
        byId[claim.claim_id] = claim;
        byUri[uri] = claim.claim_id;
      }
    }
  });

  // Remove old pending publishes
  Object.values(pendingById)
    // $FlowFixMe
    .filter(pendingClaim => byId[pendingClaim.claim_id])
    .forEach(pendingClaim => {
      // $FlowFixMe
      delete pendingById[pendingClaim.claim_id];
    });

  return Object.assign({}, state, {
    isFetchingClaimListMine: false,
    myClaims: claims,
    byId,
    claimsByUri: byUri,
    pendingById,
  });
};

reducers[ACTIONS.FETCH_CHANNEL_LIST_STARTED] = (state: State): State =>
  Object.assign({}, state, { fetchingMyChannels: true });

reducers[ACTIONS.FETCH_CHANNEL_LIST_COMPLETED] = (state: State, action: any): State => {
  const { claims }: { claims: Array<ChannelClaim> } = action.data;
  const myChannelClaims = new Set(state.myChannelClaims);
  const byId = Object.assign({}, state.byId);

  claims.forEach(claim => {
    myChannelClaims.add(claim.claim_id);
    byId[claim.claim_id] = claim;
  });

  return Object.assign({}, state, {
    byId,
    fetchingMyChannels: false,
    myChannelClaims,
  });
};

reducers[ACTIONS.FETCH_CHANNEL_CLAIMS_STARTED] = (state: State, action: any): State => {
  const { uri, page } = action.data;
  const fetchingChannelClaims = Object.assign({}, state.fetchingChannelClaims);

  fetchingChannelClaims[uri] = page;

  return Object.assign({}, state, {
    fetchingChannelClaims,
    currentChannelPage: page,
  });
};

reducers[ACTIONS.FETCH_CHANNEL_CLAIMS_COMPLETED] = (state: State, action: any): State => {
  const {
    uri,
    claims,
    page,
  }: { uri: string, claims: Array<StreamClaim>, page: number } = action.data;

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
    currentChannelPage: page,
  });
};

reducers[ACTIONS.ABANDON_CLAIM_STARTED] = (state: State, action: any): State => {
  const { claimId }: { claimId: string } = action.data;
  const abandoningById = Object.assign({}, state.abandoningById);

  abandoningById[claimId] = true;

  return Object.assign({}, state, {
    abandoningById,
  });
};

reducers[ACTIONS.ABANDON_CLAIM_SUCCEEDED] = (state: State, action: any): State => {
  const { claimId }: { claimId: string } = action.data;
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

reducers[ACTIONS.CREATE_CHANNEL_COMPLETED] = (state: State, action: any): State => {
  const channelClaim: ChannelClaim = action.data.channelClaim;
  const byId = Object.assign({}, state.byId);
  const myChannelClaims = new Set(state.myChannelClaims);

  byId[channelClaim.claim_id] = channelClaim;
  myChannelClaims.add(channelClaim.claim_id);

  return Object.assign({}, state, {
    byId,
    myChannelClaims,
  });
};

reducers[ACTIONS.RESOLVE_URIS_STARTED] = (state: State, action: any): State => {
  const { uris }: { uris: Array<string> } = action.data;

  const oldResolving = state.resolvingUris || [];
  const newResolving = oldResolving.slice();

  uris.forEach(uri => {
    if (!newResolving.includes(uri)) {
      newResolving.push(uri);
    }
  });

  return Object.assign({}, state, {
    resolvingUris: newResolving,
  });
};

export function claimsReducer(state: State = defaultState, action: any) {
  const handler = reducers[action.type];
  if (handler) return handler(state, action);
  return state;
}
