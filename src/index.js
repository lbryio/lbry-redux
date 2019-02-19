import * as ACTIONS from 'constants/action_types';
import * as THUMBNAIL_STATUSES from 'constants/thumbnail_upload_statuses';
import * as SETTINGS from 'constants/settings';
import * as TRANSACTIONS from 'constants/transaction_types';
import * as SORT_OPTIONS from 'constants/sort_options';
import * as PAGES from 'constants/pages';
import { SEARCH_TYPES, SEARCH_OPTIONS } from 'constants/search';

import Lbry from 'lbry';
import Lbryapi from 'lbryapi';
import { selectState as selectSearchState } from 'redux/selectors/search';

// types
export { Toast } from 'types/Notification';

// constants
export {
  ACTIONS,
  THUMBNAIL_STATUSES,
  SEARCH_TYPES,
  SEARCH_OPTIONS,
  SETTINGS,
  TRANSACTIONS,
  SORT_OPTIONS,
  PAGES,
};

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
  isNameValid,
  convertToShareLink,
} from 'lbryURI';

// actions
export { doToast, doDismissToast, doError, doDismissError } from 'redux/actions/notifications';

export {
  doFetchClaimsByChannel,
  doFetchClaimCountByChannel,
  doFetchClaimListMine,
  doAbandonClaim,
  doResolveUris,
  doResolveUri,
  doFetchFeaturedUris,
  doFetchTrendingUris,
} from 'redux/actions/claims';

export { doFetchCostInfoForUri } from 'redux/actions/cost_info';

export {
  doFetchFileInfo,
  doFileList,
  doFetchFileInfosAndPublishedClaims,
  doSetFileListSort,
} from 'redux/actions/file_info';

export {
  doSearch,
  doUpdateSearchQuery,
  doFocusSearchInput,
  doBlurSearchInput,
  setSearchApi,
  doUpdateSearchOptions,
} from 'redux/actions/search';

export { doBlackListedOutpointsSubscribe } from 'redux/actions/blacklist';

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
  doSendTip,
  doWalletEncrypt,
  doWalletDecrypt,
  doWalletUnlock,
  doWalletStatus,
  doSetTransactionListFilter,
  doUpdateBlockHeight,
} from 'redux/actions/wallet';

// utils
export { batchActions } from 'util/batchActions';
export { parseQueryParams, toQueryString } from 'util/query_params';
export { formatCredits, formatFullPrice, creditsToString } from 'util/formatCredits';

// reducers
export { claimsReducer } from 'redux/reducers/claims';
export { costInfoReducer } from 'redux/reducers/cost_info';
export { fileInfoReducer } from 'redux/reducers/file_info';
export { notificationsReducer } from 'redux/reducers/notifications';
export { searchReducer } from 'redux/reducers/search';
export { walletReducer } from 'redux/reducers/wallet';
export { blacklistReducer } from 'redux/reducers/blacklist';

// selectors
export { selectBlackListedOutpoints } from 'redux/selectors/blacklist';

export { selectToast, selectError } from 'redux/selectors/notifications';

export {
  makeSelectClaimForUri,
  makeSelectClaimIsMine,
  makeSelectFetchingChannelClaims,
  makeSelectClaimsInChannelForCurrentPage,
  makeSelectClaimsInChannelForPage,
  makeSelectMetadataForUri,
  makeSelectTitleForUri,
  makeSelectContentTypeForUri,
  makeSelectIsUriResolving,
  makeSelectTotalItemsForChannel,
  makeSelectTotalPagesForChannel,
  makeSelectNsfwCountFromUris,
  makeSelectNsfwCountForChannel,
  makeSelectRecommendedContentForUri,
  makeSelectFirstRecommendedFileForUri,
  makeSelectChannelForClaimUri,
  makeSelectClaimIsPending,
  makeSelectPendingByUri,
  makeSelectClaimsInChannelForCurrentPageState,
  selectPendingById,
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
  selectTrendingUris,
  selectFetchingTrendingUris,
  selectPlayingUri,
  selectChannelClaimCounts,
  selectCurrentChannelPage,
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
  selectFileListDownloadedSort,
  selectFileListPublishedSort,
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
} from 'redux/selectors/navigation';

export { selectSearchState };
export {
  makeSelectSearchUris,
  selectSearchQuery,
  selectSearchValue,
  selectSearchOptions,
  selectIsSearching,
  selectSearchUrisByQuery,
  selectWunderBarAddress,
  selectSearchBarFocused,
  selectSearchSuggestions,
  makeSelectQueryWithOptions,
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
  selectWalletIsEncrypted,
  selectWalletState,
  selectWalletEncryptPending,
  selectWalletEncryptSucceeded,
  selectWalletEncryptResult,
  selectWalletDecryptPending,
  selectWalletDecryptSucceeded,
  selectWalletDecryptResult,
  selectWalletUnlockPending,
  selectWalletUnlockSucceeded,
  selectWalletUnlockResult,
  selectTransactionListFilter,
} from 'redux/selectors/wallet';
