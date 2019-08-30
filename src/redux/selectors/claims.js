// @flow
import { normalizeURI, buildURI, parseURI } from 'lbryURI';
import { selectSearchUrisByQuery } from 'redux/selectors/search';
import { selectSupportsByOutpoint } from 'redux/selectors/wallet';
import { createSelector } from 'reselect';
import { isClaimNsfw, createNormalizedClaimSearchKey } from 'util/claim';
import { getSearchQueryString } from 'util/query-params';

const selectState = state => state.claims || {};

export const selectClaimsById = createSelector(
  selectState,
  state => state.byId || {}
);

export const selectCurrentChannelPage = createSelector(
  selectState,
  state => state.currentChannelPage || 1
);

export const selectClaimsByUri = createSelector(
  selectState,
  selectClaimsById,
  (state, byId) => {
    const byUri = state.claimsByUri || {};
    const claims = {};

    Object.keys(byUri).forEach(uri => {
      const claimId = byUri[uri];

      // NOTE returning a null claim allows us to differentiate between an
      // undefined (never fetched claim) and one which just doesn't exist. Not
      // the cleanest solution but couldn't think of anything better right now
      if (claimId === null) {
        claims[uri] = null;
      } else {
        claims[uri] = byId[claimId];
      }
    });

    return claims;
  }
);

export const selectAllClaimsByChannel = createSelector(
  selectState,
  state => state.claimsByChannel || {}
);

export const selectPendingById = createSelector(
  selectState,
  state => state.pendingById || {}
);

export const selectPendingClaims = createSelector(
  selectState,
  state => Object.values(state.pendingById || [])
);

export const makeSelectClaimIsPending = (uri: string) =>
  createSelector(
    selectPendingById,
    pendingById => {
      let claimId;

      try {
        const { isChannel, channelClaimId, streamClaimId } = parseURI(uri);
        claimId = isChannel ? channelClaimId : streamClaimId;
      } catch (e) {}

      if (claimId) {
        return Boolean(pendingById[claimId]);
      }
    }
  );

export const makeSelectPendingByUri = (uri: string) =>
  createSelector(
    selectPendingById,
    pendingById => {
      const { isChannel, channelClaimId, streamClaimId } = parseURI(uri);
      const claimId = isChannel ? channelClaimId : streamClaimId;
      return pendingById[claimId];
    }
  );

export const makeSelectClaimForUri = (uri: string) =>
  createSelector(
    selectClaimsByUri,
    selectPendingById,
    (byUri, pendingById) => {
      // Check if a claim is pending first
      // It won't be in claimsByUri because resolving it will return nothing

      let valid;
      let channelClaimId;
      let streamClaimId;
      let isChannel;
      try {
        ({ isChannel, channelClaimId, streamClaimId } = parseURI(uri));
        valid = true;
      } catch (e) {}

      if (valid) {
        const claimId = isChannel ? channelClaimId : streamClaimId;
        const pendingClaim = pendingById[claimId];

        if (pendingClaim) {
          return pendingClaim;
        }

        return byUri && byUri[normalizeURI(uri)];
      }
    }
  );

export const selectMyClaimsRaw = createSelector(
  selectState,
  state => state.myClaims
);

export const selectAbandoningIds = createSelector(
  selectState,
  state => Object.keys(state.abandoningById || {})
);

export const selectMyActiveClaims = createSelector(
  selectMyClaimsRaw,
  selectAbandoningIds,
  (claims, abandoningIds) =>
    new Set(
      claims &&
        claims
          .map(claim => claim.claim_id)
          .filter(claimId => Object.keys(abandoningIds).indexOf(claimId) === -1)
    )
);

export const makeSelectClaimIsMine = (rawUri: string) => {
  let uri;
  try {
    uri = normalizeURI(rawUri);
  } catch (e) {}

  return createSelector(
    selectClaimsByUri,
    selectMyActiveClaims,
    (claims, myClaims) => {
      try {
        parseURI(uri);
      } catch (e) {
        return false;
      }

      return claims && claims[uri] && claims[uri].claim_id && myClaims.has(claims[uri].claim_id);
    }
  );
};

export const selectAllFetchingChannelClaims = createSelector(
  selectState,
  state => state.fetchingChannelClaims || {}
);

export const makeSelectFetchingChannelClaims = (uri: string) =>
  createSelector(
    selectAllFetchingChannelClaims,
    fetching => fetching && fetching[uri]
  );

export const makeSelectClaimsInChannelForPage = (uri: string, page?: number) =>
  createSelector(
    selectClaimsById,
    selectAllClaimsByChannel,
    (byId, allClaims) => {
      const byChannel = allClaims[uri] || {};
      const claimIds = byChannel[page || 1];

      if (!claimIds) return claimIds;

      return claimIds.map(claimId => byId[claimId]);
    }
  );

export const makeSelectClaimsInChannelForCurrentPageState = (uri: string) =>
  createSelector(
    selectClaimsById,
    selectAllClaimsByChannel,
    selectCurrentChannelPage,
    (byId, allClaims, page) => {
      const byChannel = allClaims[uri] || {};
      const claimIds = byChannel[page || 1];

      if (!claimIds) return claimIds;

      return claimIds.map(claimId => byId[claimId]);
    }
  );

export const makeSelectMetadataForUri = (uri: string) =>
  createSelector(
    makeSelectClaimForUri(uri),
    claim => {
      const metadata = claim && claim.value;
      return metadata || (claim === undefined ? undefined : null);
    }
  );

export const makeSelectMetadataItemForUri = (uri: string, key: string) =>
  createSelector(
    makeSelectMetadataForUri(uri),
    (metadata: ChannelMetadata | StreamMetadata) => {
      return metadata ? metadata[key] : undefined;
    }
  );

export const makeSelectTitleForUri = (uri: string) =>
  createSelector(
    makeSelectMetadataForUri(uri),
    metadata => metadata && metadata.title
  );

export const makeSelectDateForUri = (uri: string) =>
  createSelector(
    makeSelectClaimForUri(uri),
    claim => {
      const timestamp =
        claim &&
        claim.value &&
        (claim.value.release_time
          ? claim.value.release_time * 1000
          : claim.meta && claim.meta.creation_timestamp
            ? claim.meta.creation_timestamp * 1000
            : null);
      if (!timestamp) {
        return undefined;
      }
      const dateObj = new Date(timestamp);
      return dateObj;
    }
  );

export const makeSelectAmountForUri = (uri: string) =>
  createSelector(
    makeSelectClaimForUri(uri),
    claim => {
      return claim && claim.amount;
    }
  );

export const makeSelectContentTypeForUri = (uri: string) =>
  createSelector(
    makeSelectClaimForUri(uri),
    claim => {
      const source = claim && claim.value && claim.value.source;
      return source ? source.media_type : undefined;
    }
  );

export const makeSelectThumbnailForUri = (uri: string) =>
  createSelector(
    makeSelectClaimForUri(uri),
    claim => {
      const thumbnail = claim && claim.value && claim.value.thumbnail;
      if (!thumbnail || !thumbnail.url) {
        return null;
      }

      return thumbnail.url.trim();
    }
  );

export const makeSelectCoverForUri = (uri: string) =>
  createSelector(
    makeSelectClaimForUri(uri),
    claim => {
      const cover = claim && claim.value && claim.value.cover;
      return cover ? cover.url : undefined;
    }
  );

export const selectIsFetchingClaimListMine = createSelector(
  selectState,
  state => state.isFetchingClaimListMine
);

export const selectMyClaims = createSelector(
  selectMyActiveClaims,
  selectClaimsById,
  selectAbandoningIds,
  selectPendingClaims,
  (myClaimIds, byId, abandoningIds, pendingClaims) => {
    const claims = [];

    myClaimIds.forEach(id => {
      const claim = byId[id];

      if (claim && abandoningIds.indexOf(id) === -1) claims.push(claim);
    });

    return [...claims, ...pendingClaims];
  }
);

export const selectMyClaimsWithoutChannels = createSelector(
  selectMyClaims,
  myClaims =>
    myClaims.filter(claim => !claim.name.match(/^@/)).sort((a, b) => a.timestamp - b.timestamp)
);

export const selectMyClaimUrisWithoutChannels = createSelector(
  selectMyClaimsWithoutChannels,
  myClaims =>
    myClaims
      .sort((a, b) => {
        if (!a.timestamp) {
          return -1;
        } else if (!b.timestamp) {
          return 1;
        } else {
          return b.timestamp - a.timestamp;
        }
      })
      .map(claim => `lbry://${claim.name}#${claim.claim_id}`)
);

export const selectAllMyClaimsByOutpoint = createSelector(
  selectMyClaimsRaw,
  claims =>
    new Set(claims && claims.length ? claims.map(claim => `${claim.txid}:${claim.nout}`) : null)
);

export const selectMyClaimsOutpoints = createSelector(
  selectMyClaims,
  myClaims => {
    const outpoints = [];

    myClaims.forEach(claim => outpoints.push(`${claim.txid}:${claim.nout}`));

    return outpoints;
  }
);

export const selectFetchingMyChannels = createSelector(
  selectState,
  state => state.fetchingMyChannels
);

export const selectMyChannelClaims = createSelector(
  selectState,
  selectClaimsById,
  (state, byId) => {
    const ids = state.myChannelClaims || [];
    const claims = [];

    ids.forEach(id => {
      if (byId[id]) {
        // I'm not sure why this check is necessary, but it ought to be a quick fix for https://github.com/lbryio/lbry-desktop/issues/544
        claims.push(byId[id]);
      }
    });

    return claims;
  }
);

export const selectResolvingUris = createSelector(
  selectState,
  state => state.resolvingUris || []
);

export const makeSelectIsUriResolving = (uri: string) =>
  createSelector(
    selectResolvingUris,
    resolvingUris => resolvingUris && resolvingUris.indexOf(uri) !== -1
  );

export const selectPlayingUri = createSelector(
  selectState,
  state => state.playingUri
);

export const selectChannelClaimCounts = createSelector(
  selectState,
  state => state.channelClaimCounts || {}
);

export const makeSelectTotalItemsForChannel = (uri: string) =>
  createSelector(
    selectChannelClaimCounts,
    byUri => byUri && byUri[uri]
  );

export const makeSelectTotalPagesForChannel = (uri: string, pageSize: number = 10) =>
  createSelector(
    selectChannelClaimCounts,
    byUri => byUri && byUri[uri] && Math.ceil(byUri[uri] / pageSize)
  );

export const makeSelectNsfwCountFromUris = (uris: Array<string>) =>
  createSelector(
    selectClaimsByUri,
    claims =>
      uris.reduce((acc, uri) => {
        const claim = claims[uri];
        if (claim && isClaimNsfw(claim)) {
          return acc + 1;
        }
        return acc;
      }, 0)
  );

export const makeSelectNsfwCountForChannel = (uri: string) =>
  createSelector(
    selectClaimsById,
    selectAllClaimsByChannel,
    selectCurrentChannelPage,
    (byId, allClaims, page) => {
      const byChannel = allClaims[uri] || {};
      const claimIds = byChannel[page || 1];

      if (!claimIds) return 0;

      return claimIds.reduce((acc, claimId) => {
        const claim = byId[claimId];
        if (isClaimNsfw(claim)) {
          return acc + 1;
        }
        return acc;
      }, 0);
    }
  );

export const makeSelectClaimIsNsfw = (uri: string): boolean =>
  createSelector(
    makeSelectClaimForUri(uri),
    // Eventually these will come from some list of tags that are considered adult
    // Or possibly come from users settings of what tags they want to hide
    // For now, there is just a hard coded list of tags inside `isClaimNsfw`
    // selectNaughtyTags(),
    (claim: Claim) => {
      if (!claim) {
        return false;
      }

      return isClaimNsfw(claim);
    }
  );

export const makeSelectRecommendedContentForUri = (uri: string) =>
  createSelector(
    makeSelectClaimForUri(uri),
    selectSearchUrisByQuery,
    (claim, searchUrisByQuery) => {
      const atVanityURI = !uri.includes('#');

      let recommendedContent;
      if (claim) {
        // always grab full URL - this can change once search returns canonical
        const currentUri =  buildURI({ streamClaimId: claim.claim_id, streamName: claim.name });

        const { title } = claim.value;

        const searchQuery = getSearchQueryString(title ? title.replace(/\//, ' ') : '');

        let searchUris = searchUrisByQuery[searchQuery];
        if (searchUris) {
          searchUris = searchUris.filter(searchUri => searchUri !== currentUri);
          recommendedContent = searchUris;
        }
      }

      return recommendedContent;
    }
  );

export const makeSelectFirstRecommendedFileForUri = (uri: string) =>
  createSelector(
    makeSelectRecommendedContentForUri(uri),
    recommendedContent => (recommendedContent ? recommendedContent[0] : null)
  );

// Returns the associated channel uri for a given claim uri
// accepts a regular claim uri lbry://something
// returns the channel uri that created this claim lbry://@channel
export const makeSelectChannelForClaimUri = (uri: string, includePrefix: boolean = false) =>
  createSelector(
    makeSelectClaimForUri(uri),
    (claim: ?StreamClaim) => {
      if (!claim || !claim.signing_channel) {
        return null;
      }

      const { claim_id: claimId, name } = claim.signing_channel;
      let channel = `${name}#${claimId}`;
      return includePrefix ? `lbry://${channel}` : channel;
    }
  );

export const makeSelectTagsForUri = (uri: string) =>
  createSelector(
    makeSelectMetadataForUri(uri),
    (metadata: ?GenericMetadata) => {
      return (metadata && metadata.tags) || [];
    }
  );

export const selectFetchingClaimSearchByQuery = createSelector(
  selectState,
  state => state.fetchingClaimSearchByQuery || {}
);

export const selectFetchingClaimSearch = createSelector(
  selectFetchingClaimSearchByQuery,
  fetchingClaimSearchByQuery => Boolean(Object.keys(fetchingClaimSearchByQuery).length)
);

export const selectClaimSearchByQuery = createSelector(
  selectState,
  state => state.claimSearchByQuery || {}
);

export const selectClaimSearchByQueryLastPageReached = createSelector(
  selectState,
  state => state.claimSearchByQueryLastPageReached || {}
);

export const makeSelectShortUrlForUri = (uri: string) =>
  createSelector(
    makeSelectClaimForUri(uri),
    claim => claim && claim.short_url
  );

export const makeSelectCanonicalUrlForUri = (uri: string) =>
  createSelector(
    makeSelectClaimForUri(uri),
    claim => claim && claim.canonical_url
  );

export const makeSelectSupportsForUri = (uri: string) =>
  createSelector(
    selectSupportsByOutpoint,
    makeSelectClaimForUri(uri),
    (byOutpoint, claim: ?StreamClaim) => {
      if (!claim || !claim.is_mine) {
        return null;
      }

      const { claim_id: claimId } = claim;
      let total = 0;

      Object.values(byOutpoint).forEach(support => {
        // $FlowFixMe
        const { claim_id, amount } = support;
        total = claim_id === claimId && amount ? total + parseFloat(amount) : total;
      });

      return total;
    }
  );
