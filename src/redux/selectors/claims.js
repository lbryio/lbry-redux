// @flow
import { normalizeURI, buildURI, parseURI } from 'lbryURI';
import { selectSearchUrisByQuery } from 'redux/selectors/search';
import { createSelector } from 'reselect';
import { isClaimNsfw } from 'util/claim';
import { getSearchQueryString } from 'util/query_params';

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
      const { claimId } = parseURI(uri);
      return Boolean(pendingById[claimId]);
    }
  );

export const makeSelectPendingByUri = (uri: string) =>
  createSelector(
    selectPendingById,
    pendingById => {
      const { claimId } = parseURI(uri);
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
      const { claimId } = parseURI(uri);
      const pendingClaim = pendingById[claimId];
      if (pendingClaim) {
        return pendingClaim;
      }

      return byUri && byUri[normalizeURI(uri)];
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
  const uri = normalizeURI(rawUri);
  return createSelector(
    selectClaimsByUri,
    selectMyActiveClaims,
    (claims, myClaims) =>
      claims && claims[uri] && claims[uri].claim_id && myClaims.has(claims[uri].claim_id)
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
          : claim.meta.creation_timestamp * 1000);
      if (!timestamp) {
        return undefined;
      }
      const dateObj = new Date(timestamp);
      return dateObj;
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
      return thumbnail ? thumbnail.url : undefined;
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
  myClaims => myClaims.filter(claim => !claim.name.match(/^@/))
);

export const selectMyClaimUrisWithoutChannels = createSelector(
  selectMyClaimsWithoutChannels,
  myClaims => myClaims.map(claim => `lbry://${claim.name}#${claim.claim_id}`)
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
        // If we are at a vanity uri, build the full uri so we can properly filter
        const currentUri = atVanityURI
          ? buildURI({ claimId: claim.claim_id, claimName: claim.name })
          : uri;

        const { title } = claim.value;

        const searchQuery = getSearchQueryString(title.replace(/\//, ' '));

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

export const selectFetchingClaimSearch = createSelector(
  selectState,
  state => state.fetchingClaimSearch
);

export const selectLastClaimSearchUris = createSelector(
  selectState,
  state => state.lastClaimSearchUris
);
