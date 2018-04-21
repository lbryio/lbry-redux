import * as ACTIONS from 'constants/action_types';
import * as SETTINGS from 'constants/settings';
import Lbry from 'lbry';
import Lbryapi from 'lbryapi';
import { selectState as selectSearchState } from 'redux/selectors/search';

// types
export { Notification } from 'types/Notification';

// constants
export { ACTIONS, SETTINGS };

// common
export { Lbry, Lbryapi };
export {
  regexInvalidURI,
  regexAddress,
  parseURI,
  buildURI,
  normalizeURI,
  isURIValid,
  isURIClaimable,
} from 'lbryURI';

// actions
export { doNotify, doHideNotification } from 'redux/actions/notifications';

export {
  doFetchClaimListMine,
  doAbandonClaim,
  doResolveUris,
  doResolveUri,
  doFetchFeaturedUris,
  doFetchRewardedContent,
} from 'redux/actions/claims';

export { doFetchCostInfoForUri } from 'redux/actions/cost_info';

export {
  doFetchFileInfo,
  doFileList,
  doFetchFileInfosAndPublishedClaims,
} from 'redux/actions/file_info';

export { doSearch, doUpdateSearchQuery } from 'redux/actions/search';

export {
  doUpdateBalance,
  doBalanceSubscribe,
  doFetchTransactions,
  doFetchBlock,
  doGetNewAddress,
  doCheckAddressIsMine,
  doSendDraftTransaction,
  doSetDraftTransactionAmount,
  doSetDraftTransactionAddress,
  doSendSupport,
} from 'redux/actions/wallet';

// utils
export { batchActions } from 'util/batchActions';
export { parseQueryParams, toQueryString } from 'util/query_params';
export { formatCredits, formatFullPrice } from 'util/formatCredits';

// reducers
export { claimsReducer } from 'redux/reducers/claims';
export { costInfoReducer } from 'redux/reducers/cost_info';
export { fileInfoReducer } from 'redux/reducers/file_info';
export { notificationsReducer } from 'redux/reducers/notifications';
export { searchReducer } from 'redux/reducers/search';
export { walletReducer } from 'redux/reducers/wallet';

// selectors
export {
  selectNotification,
  selectNotificationProps,
  selectSnack,
} from 'redux/selectors/notifications';

export {
  makeSelectClaimForUri,
  makeSelectClaimIsMine,
  makeSelectFetchingChannelClaims,
  makeSelectClaimsInChannelForCurrentPage,
  makeSelectMetadataForUri,
  makeSelectTitleForUri,
  makeSelectContentTypeForUri,
  makeSelectIsUriResolving,
  makeSelectTotalItemsForChannel,
  makeSelectTotalPagesForChannel,
  selectClaimsById,
  selectClaimsByUri,
  selectAllClaimsByChannel,
  selectMyClaimsRaw,
  selectAbandoningIds,
  selectMyActiveClaims,
  selectAllFetchingChannelClaims,
  selectIsFetchingClaimListMine,
  selectPendingClaims,
  selectMyClaims,
  selectMyClaimsWithoutChannels,
  selectAllMyClaimsByOutpoint,
  selectMyClaimsOutpoints,
  selectFetchingMyChannels,
  selectMyChannelClaims,
  selectResolvingUris,
  selectFeaturedUris,
  selectFetchingFeaturedUris,
  selectPlayingUri,
  selectChannelClaimCounts,
  selectRewardContentClaimIds,
} from 'redux/selectors/claims';

export {
  makeSelectFetchingCostInfoForUri,
  makeSelectCostInfoForUri,
  selectAllCostInfoByUri,
  selectCostForCurrentPageUri,
  selectFetchingCostInfo,
} from 'redux/selectors/cost_info';

export {
  makeSelectFileInfoForUri,
  makeSelectDownloadingForUri,
  makeSelectLoadingForUri,
  selectFileInfosByOutpoint,
  selectIsFetchingFileList,
  selectIsFetchingFileListDownloadedOrPublished,
  selectDownloadingByOutpoint,
  selectUrisLoading,
  selectFileInfosDownloaded,
  selectDownloadingFileInfos,
  selectTotalDownloadProgress,
  selectSearchDownloadUris,
} from 'redux/selectors/file_info';

export {
  computePageFromPath,
  makeSelectCurrentParam,
  selectCurrentPath,
  selectCurrentPage,
  selectCurrentParams,
  selectHeaderLinks,
  selectPageTitle,
  selectPathAfterAuth,
  selectIsBackDisabled,
  selectIsForwardDisabled,
  selectHistoryIndex,
  selectHistoryStack,
  selectActiveHistoryEntry,
  selectNavLinks,
} from 'redux/selectors/navigation';

export { selectSearchState };
export {
  makeSelectSearchUris,
  selectSearchQuery,
  selectSearchValue,
  selectIsSearching,
  selectSearchUrisByQuery,
  selectWunderBarAddress,
} from 'redux/selectors/search';

export {
  makeSelectBlockDate,
  selectBalance,
  selectTransactionsById,
  selectTransactionItems,
  selectRecentTransactions,
  selectHasTransactions,
  selectIsFetchingTransactions,
  selectIsSendingSupport,
  selectReceiveAddress,
  selectGettingNewAddress,
  selectDraftTransaction,
  selectDraftTransactionAmount,
  selectDraftTransactionAddress,
  selectDraftTransactionError,
  selectBlocks,
} from 'redux/selectors/wallet';
