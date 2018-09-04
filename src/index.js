import * as ACTIONS from 'constants/action_types';
import * as MODALS from 'constants/modal_types';
import * as THUMBNAIL_STATUSES from 'constants/thumbnail_upload_statuses';
import * as SEARCH_TYPES from 'constants/search';
import * as SETTINGS from 'constants/settings';
import * as TRANSACTIONS from 'constants/transaction_types';
import Lbry from 'lbry';
import Lbryapi from 'lbryapi';
import { selectState as selectSearchState } from 'redux/selectors/search';

// types
export { Notification } from 'types/Notification';

// constants
export { ACTIONS, MODALS, THUMBNAIL_STATUSES, SEARCH_TYPES, SETTINGS, TRANSACTIONS };

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
export { doNotify, doHideNotification } from 'redux/actions/notifications';

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
} from 'redux/actions/file_info';

export {
  doSearch,
  doUpdateSearchQuery,
  doFocusSearchInput,
  doBlurSearchInput,
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
  doSendSupport,
  doWalletEncrypt,
  doWalletDecrypt,
  doWalletUnlock,
  doWalletStatus,
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
export { blacklistReducer } from 'redux/reducers/blacklist';

// selectors
export { selectBlackListedOutpoints } from 'redux/selectors/blacklist';

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
} from 'redux/selectors/navigation';

export { selectSearchState };
export {
  makeSelectSearchUris,
  selectSearchQuery,
  selectSearchValue,
  selectIsSearching,
  selectSearchUrisByQuery,
  selectWunderBarAddress,
  selectSearchBarFocused,
  selectSearchSuggestions,
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
} from 'redux/selectors/wallet';
