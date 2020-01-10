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
import { concatClaims } from 'util/claim';

type State = {
  createChannelError: ?string,
  channelClaimCounts: { [string]: number },
  claimsByUri: { [string]: string },
  byId: { [string]: Claim },
  resolvingUris: Array<string>,
  pendingById: { [string]: Claim },
  myClaims: ?Array<Claim>,
  myChannelClaims: ?Set<string>,
  abandoningById: { [string]: boolean },
  fetchingChannelClaims: { [string]: number },
  fetchingMyChannels: boolean,
  fetchingClaimSearchByQuery: { [string]: boolean },
  claimSearchByQuery: { [string]: Array<string> },
  claimSearchByQueryLastPageReached: { [string]: Array<boolean> },
  creatingChannel: boolean,
  paginatedClaimsByChannel: {
    [string]: {
      all: Array<string>,
      pageCount: number,
      itemCount: number,
      [number]: Array<string>,
    },
  },
  updateChannelError: string,
  updatingChannel: boolean,
  pendingChannelImport: string | boolean,
};

const reducers = {};
const defaultState = {
  byId: {},
  claimsByUri: {},
  paginatedClaimsByChannel: {},
  channelClaimCounts: {},
  fetchingChannelClaims: {},
  resolvingUris: [],
  // This should not be a Set
  // Storing sets in reducers can cause issues
  myChannelClaims: undefined,
  myClaims: undefined,
  fetchingMyChannels: false,
  abandoningById: {},
  pendingById: {},
  claimSearchError: false,
  claimSearchByQuery: {},
  claimSearchByQueryLastPageReached: {},
  fetchingClaimSearchByQuery: {},
  updateChannelError: '',
  updatingChannel: false,
  creatingChannel: false,
  createChannelError: undefined,
  pendingChannelImport: false,
};

function handleClaimAction(state: State, action: any): State {
  const {
    resolveInfo,
  }: {
    [string]: {
      stream: ?StreamClaim,
      channel: ?ChannelClaim,
      claimsInChannel: ?number,
    },
  } = action.data;
  const byUri = Object.assign({}, state.claimsByUri);
  const byId = Object.assign({}, state.byId);
  const channelClaimCounts = Object.assign({}, state.channelClaimCounts);
  let newResolvingUrls = new Set(state.resolvingUris);

  Object.entries(resolveInfo).forEach(([url: string, resolveResponse: ResolveResponse]) => {
    // $FlowFixMe
    const { claimsInChannel, stream, channel } = resolveResponse;
    if (claimsInChannel) {
      channelClaimCounts[url] = claimsInChannel;
      channelClaimCounts[channel.canonical_url] = claimsInChannel;
    }

    if (stream) {
      byId[stream.claim_id] = stream;
      byUri[url] = stream.claim_id;

      // If url isn't a canonical_url, make sure that is added too
      byUri[stream.canonical_url] = stream.claim_id;

      // Also add the permanent_url here until lighthouse returns canonical_url for search results
      byUri[stream.permanent_url] = stream.claim_id;
      newResolvingUrls.delete(stream.canonical_url);
      newResolvingUrls.delete(stream.permanent_url);
    }

    if (channel) {
      if (!stream) {
        byUri[url] = channel.claim_id;
      }

      byId[channel.claim_id] = channel;
      // Also add the permanent_url here until lighthouse returns canonical_url for search results
      byUri[channel.permanent_url] = channel.claim_id;
      byUri[channel.canonical_url] = channel.claim_id;
      newResolvingUrls.delete(channel.canonical_url);
      newResolvingUrls.delete(channel.permanent_url);
    }

    newResolvingUrls.delete(url);
    if (!stream && !channel) {
      byUri[url] = null;
    }
  });

  return Object.assign({}, state, {
    byId,
    claimsByUri: byUri,
    channelClaimCounts,
    resolvingUris: Array.from(newResolvingUrls),
  });
}

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

reducers[ACTIONS.RESOLVE_URIS_COMPLETED] = (state: State, action: any): State => {
  return {
    ...handleClaimAction(state, action),
  };
};

reducers[ACTIONS.FETCH_CLAIM_LIST_MINE_STARTED] = (state: State): State =>
  Object.assign({}, state, {
    isFetchingClaimListMine: true,
  });

reducers[ACTIONS.FETCH_CLAIM_LIST_MINE_COMPLETED] = (state: State, action: any): State => {
  const { claims }: { claims: Array<Claim> } = action.data;
  const byId = Object.assign({}, state.byId);
  const byUri = Object.assign({}, state.claimsByUri);
  const pendingById: { [string]: Claim } = Object.assign({}, state.pendingById);
  const myClaims = state.myClaims ? state.myClaims.slice() : [];

  claims.forEach((claim: Claim) => {
    const uri = buildURI({ streamName: claim.name, streamClaimId: claim.claim_id });

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
    myClaims: concatClaims(myClaims, claims),
    byId,
    claimsByUri: byUri,
    pendingById,
  });
};

reducers[ACTIONS.FETCH_CHANNEL_LIST_STARTED] = (state: State): State =>
  Object.assign({}, state, { fetchingMyChannels: true });

reducers[ACTIONS.FETCH_CHANNEL_LIST_COMPLETED] = (state: State, action: any): State => {
  const { claims }: { claims: Array<ChannelClaim> } = action.data;
  const myClaims = state.myClaims || [];
  const pendingById = Object.assign(state.pendingById);

  let myChannelClaims;
  let byId = Object.assign({}, state.byId);
  if (!claims.length) {
    // $FlowFixMe
    myChannelClaims = null;
  } else {
    myChannelClaims = new Set(state.myChannelClaims);
    claims.forEach(claim => {
      // $FlowFixMe
      myChannelClaims.add(claim.claim_id);
      if (!byId[claim.claim_id]) {
        byId[claim.claim_id] = claim;
      }

      if (pendingById[claim.claim_id] && claim.confirmations > 0) {
        delete pendingById[claim.claim_id];
      }
    });
  }

  return Object.assign({}, state, {
    byId,
    fetchingMyChannels: false,
    myChannelClaims,
    myClaims: concatClaims(myClaims, claims),
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
    claimsInChannel,
    page,
    totalPages,
  }: {
    uri: string,
    claims: Array<StreamClaim>,
    claimsInChannel?: number,
    page: number,
    totalPages: number,
  } = action.data;

  // byChannel keeps claim_search relevant results by page. If the total changes, erase it.
  const channelClaimCounts = Object.assign({}, state.channelClaimCounts);

  const paginatedClaimsByChannel = Object.assign({}, state.paginatedClaimsByChannel);
  // check if count has changed - that means cached pagination will be wrong, so clear it
  const previousCount = paginatedClaimsByChannel[uri] && paginatedClaimsByChannel[uri]['itemCount'];
  const byChannel =
    claimsInChannel === previousCount ? Object.assign({}, paginatedClaimsByChannel[uri]) : {};
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
      claimsByUri[claim.canonical_url] = claim.claim_id;
    });
  }

  byChannel.all = allClaimIds;
  byChannel.pageCount = totalPages;
  byChannel.itemCount = claimsInChannel;
  byChannel[page] = currentPageClaimIds;
  paginatedClaimsByChannel[uri] = byChannel;
  delete fetchingChannelClaims[uri];

  return Object.assign({}, state, {
    paginatedClaimsByChannel,
    byId,
    fetchingChannelClaims,
    claimsByUri,
    channelClaimCounts,
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
  const newMyClaims = state.myClaims ? state.myClaims.slice() : [];
  const claimsByUri = Object.assign({}, state.claimsByUri);

  Object.keys(claimsByUri).forEach(uri => {
    if (claimsByUri[uri] === claimId) {
      delete claimsByUri[uri];
    }
  });
  const myClaims = newMyClaims.filter(i => i.claim_id && i.claim_id !== claimId);
  delete byId[claimId];

  return Object.assign({}, state, {
    myClaims,
    byId,
    claimsByUri,
  });
};

reducers[ACTIONS.CREATE_CHANNEL_STARTED] = (state: State): State => ({
  ...state,
  creatingChannel: true,
  createChannelError: null,
});

reducers[ACTIONS.CREATE_CHANNEL_COMPLETED] = (state: State, action: any): State => {
  const channelClaim: ChannelClaim = action.data.channelClaim;
  const byId = Object.assign({}, state.byId);
  const pendingById = Object.assign({}, state.pendingById);
  const myChannelClaims = new Set(state.myChannelClaims);

  byId[channelClaim.claim_id] = channelClaim;
  pendingById[channelClaim.claim_id] = channelClaim;
  myChannelClaims.add(channelClaim.claim_id);

  return Object.assign({}, state, {
    byId,
    pendingById,
    myChannelClaims,
    creatingChannel: false,
  });
};

reducers[ACTIONS.CREATE_CHANNEL_FAILED] = (state: State, action: any): State => {
  return Object.assign({}, state, {
    creatingChannel: false,
    createChannelError: action.data,
  });
};

reducers[ACTIONS.UPDATE_CHANNEL_STARTED] = (state: State, action: any): State => {
  return Object.assign({}, state, {
    updateChannelError: '',
    updatingChannel: true,
  });
};

reducers[ACTIONS.UPDATE_CHANNEL_COMPLETED] = (state: State, action: any): State => {
  const channelClaim: ChannelClaim = action.data.channelClaim;
  const byId = Object.assign({}, state.byId);

  byId[channelClaim.claim_id] = channelClaim;

  return Object.assign({}, state, {
    byId,
    updateChannelError: '',
    updatingChannel: false,
  });
};

reducers[ACTIONS.UPDATE_CHANNEL_FAILED] = (state: State, action: any): State => {
  return Object.assign({}, state, {
    updateChannelError: action.data.message,
    updatingChannel: false,
  });
};

reducers[ACTIONS.IMPORT_CHANNEL_STARTED] = (state: State): State =>
  Object.assign({}, state, { pendingChannelImports: true });

reducers[ACTIONS.IMPORT_CHANNEL_COMPLETED] = (state: State): State =>
  Object.assign({}, state, { pendingChannelImports: false });

reducers[ACTIONS.CLAIM_SEARCH_STARTED] = (state: State, action: any): State => {
  const fetchingClaimSearchByQuery = Object.assign({}, state.fetchingClaimSearchByQuery);
  fetchingClaimSearchByQuery[action.data.query] = true;

  return Object.assign({}, state, {
    fetchingClaimSearchByQuery,
  });
};

reducers[ACTIONS.CLAIM_SEARCH_COMPLETED] = (state: State, action: any): State => {
  const fetchingClaimSearchByQuery = Object.assign({}, state.fetchingClaimSearchByQuery);
  const claimSearchByQuery = Object.assign({}, state.claimSearchByQuery);
  const claimSearchByQueryLastPageReached = Object.assign(
    {},
    state.claimSearchByQueryLastPageReached
  );
  const { append, query, urls, pageSize } = action.data;

  if (append) {
    // todo: check for duplicate urls when concatenating?
    claimSearchByQuery[query] =
      claimSearchByQuery[query] && claimSearchByQuery[query].length
        ? claimSearchByQuery[query].concat(urls)
        : urls;
  } else {
    claimSearchByQuery[query] = urls;
  }

  // the returned number of urls is less than the page size, so we're on the last page
  claimSearchByQueryLastPageReached[query] = urls.length < pageSize;

  delete fetchingClaimSearchByQuery[query];

  return Object.assign({}, state, {
    ...handleClaimAction(state, action),
    claimSearchByQuery,
    claimSearchByQueryLastPageReached,
    fetchingClaimSearchByQuery,
  });
};

reducers[ACTIONS.CLAIM_SEARCH_FAILED] = (state: State, action: any): State => {
  const fetchingClaimSearchByQuery = Object.assign({}, state.fetchingClaimSearchByQuery);
  delete fetchingClaimSearchByQuery[action.data.query];

  return Object.assign({}, state, {
    fetchingClaimSearchByQuery,
  });
};

export function claimsReducer(state: State = defaultState, action: any) {
  const handler = reducers[action.type];
  if (handler) return handler(state, action);
  return state;
}
