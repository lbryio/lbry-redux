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
import { static as Immutable } from 'seamless-immutable';

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
const defaultState = new Immutable({
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
});

reducers[ACTIONS.RESOLVE_URIS_COMPLETED] = (state: State, action: any): State => {
  const { resolveInfo }: { [string]: ClaimWithPossibleCertificate } = action.data;

  const {
    claimsByUri,
    byId,
    channelClaimCounts
  } = Immutable.asMutable(state, { deep: true });

  const resolveInfoEntries = Object.entries(resolveInfo);

  resolveInfoEntries.forEach(
    ([uri: string, resolveResponse: ClaimWithPossibleCertificate]) => {
      const {
        certificate,
        claim,
        claimsInChannel,
      } = Immutable.asMutable(resolveResponse, { deep: true });

      // $FlowFixMe
      if (certificate && !Number.isNaN(claimsInChannel)) {
        // $FlowFixMe
        channelClaimCounts[uri] = claimsInChannel;
      }

      if (claim && !certificate) {
        byId[claim.claim_id] = claim;
        claimsByUri[uri] = claim.claim_id;
      } else if (claim && certificate) {
        byId[claim.claim_id] = claim;
        claimsByUri[uri] = claim.claim_id;

        byId[certificate.claim_id] = certificate;
        const channelUri = `lbry://${certificate.name}#${certificate.claim_id}`;
        claimsByUri[channelUri] = certificate.claim_id;
      } else if (!claim && certificate) {
        byId[certificate.claim_id] = certificate;
        claimsByUri[uri] = certificate.claim_id;
      } else {
        claimsByUri[uri] = null;
      }
    }
  );

  return Immutable.merge(state, {
    byId,
    claimsByUri,
    channelClaimCounts,
    resolvingUris: (state.resolvingUris || []).filter(uri => !resolveInfo[uri]),
  });
};

reducers[ACTIONS.FETCH_CLAIM_LIST_MINE_STARTED] = (state: State): State => (
  Immutable.merge(state, {
    isFetchingClaimListMine: true,
  })
);

reducers[ACTIONS.FETCH_CLAIM_LIST_MINE_COMPLETED] = (state: State, action: any): State => {
  const { claims }: { claims: Array<StreamClaim | ChannelClaim> } = action.data;

  const {
    byId,
    claimsByUri,
    pendingById,
  } = Immutable.asMutable(state, { deep: true });

  claims.forEach((claim: StreamClaim | ChannelClaim) => {
    const uri = buildURI({ claimName: claim.name, claimId: claim.claim_id });

    if (claim.type && claim.type.match(/claim|update/)) {
      if (claim.confirmations < 1) {
        pendingById[claim.claim_id] = claim;
        delete byId[claim.claim_id];
        delete claimsByUri[claim.claim_id];
      } else {
        byId[claim.claim_id] = claim;
        claimsByUri[uri] = claim.claim_id;
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

  return Immutable.merge(state, {
    isFetchingClaimListMine: false,
    myClaims: claims,
    byId,
    claimsByUri,
    pendingById,
  });
};

reducers[ACTIONS.FETCH_CHANNEL_LIST_STARTED] = (state: State): State => (
  Immutable.merge(state, {
    fetchingMyChannels: true,
  })
);

reducers[ACTIONS.FETCH_CHANNEL_LIST_COMPLETED] = (state: State, action: any): State => {
  const { claims }: { claims: Array<ChannelClaim> } = action.data;
  const myChannelClaims = new Set(state.myChannelClaims);
  const byId = Immutable.asMutable(state.byId);

  claims.forEach(claim => {
    myChannelClaims.add(claim.claim_id);
    byId[claim.claim_id] = claim;
  });

  return Immutable.merge(state, {
    byId,
    fetchingMyChannels: false,
    myChannelClaims,
  });
};

reducers[ACTIONS.FETCH_CHANNEL_CLAIMS_STARTED] = (state: State, action: any): State => {
  const { uri, page } = action.data;

  fetchingChannelClaims[uri] = page;

  return Immutable.merge(state, {
    fetchingChannelClaims: Immutable.merge(state.fetchingChannelClaims, {
      [uri]: page,
    }),
    currentChannelPage: page,
  });
};

reducers[ACTIONS.FETCH_CHANNEL_CLAIMS_COMPLETED] = (state: State, action: any): State => {
  const {
    uri,
    claims,
    page,
  }: { uri: string, claims: Array<StreamClaim>, page: number } = action.data;

  const {
    byId,
    claimsByChannel,
    claimsByUri,
    fetchingChannelClaims,
  } = Immutable.asMutable(state, { deep: true });

  const byChannel = claimsByChannel[uri];
  const allClaimIds = new Set(byChannel.all);
  const currentPageClaimIds = [];

  if (claims !== undefined) {
    claims.forEach(claim => {
      claim = Immutable.asMutable(claim);
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

  return Immutable.merge(state, {
    claimsByChannel,
    byId,
    fetchingChannelClaims,
    claimsByUri,
    currentChannelPage: page,
  });
};

reducers[ACTIONS.ABANDON_CLAIM_STARTED] = (state: State, action: any): State => {
  const { claimId }: { claimId: string } = action.data;

  return Immutable.merge(state, {
    abandoningById: Immutable.merge(state.abandoningById, {
        [claimId]: true,
    }),
  });
};

reducers[ACTIONS.ABANDON_CLAIM_SUCCEEDED] = (state: State, action: any): State => {
  const { claimId }: { claimId: string } = action.data;

  const {
    byId,
    claimsByUri,
  } = Immutable.asMutable(state, { deep: true });

  Object.keys(claimsByUri).forEach(uri => {
    if (claimsByUri[uri] === claimId) {
      delete claimsByUri[uri];
    }
  });

  delete byId[claimId];

  return Immutable.merge(state, {
    byId,
    claimsByUri,
  });
};

reducers[ACTIONS.CREATE_CHANNEL_COMPLETED] = (state: State, action: any): State => {
  const channelClaim: ChannelClaim = action.data.channelClaim;

  const {
    byId,
    myChannelClaims,
  } = Immutable.asMutable(state, { deep: true });

  byId[channelClaim.claim_id] = channelClaim;
  myChannelClaims.add(channelClaim.claim_id);

  return Immutable.merge(state, {
    byId,
    myChannelClaims,
  });
};

reducers[ACTIONS.RESOLVE_URIS_STARTED] = (state: State, action: any): State => {
  const { uris }: { uris: Array<string> } = action.data;

  const newResolving = Immutable.asMutable(state.resolvingUris || []);

  uris.forEach(uri => {
    if (!newResolving.includes(uri)) {
      newResolving.push(uri);
    }
  });

  return Immutable.merge(state, {
    resolvingUris: newResolving,
  });
};

export function claimsReducer(state: State = defaultState, action: any) {
  const handler = reducers[action.type];
  if (handler) return handler(state, action);
  return state;
}
