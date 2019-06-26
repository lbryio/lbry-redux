import * as ACTIONS from 'constants/action_types';
import * as THUMBNAIL_STATUSES from 'constants/thumbnail_upload_statuses';
import * as SETTINGS from 'constants/settings';
import * as TRANSACTIONS from 'constants/transaction_types';
import * as SORT_OPTIONS from 'constants/sort_options';
import * as PAGES from 'constants/pages';
import { SEARCH_TYPES, SEARCH_OPTIONS } from 'constants/search';
import Lbry from 'lbry';
import { selectState as selectSearchState } from 'redux/selectors/search';

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
export { Lbry };
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
  doFetchClaimListMine,
  doAbandonClaim,
  doResolveUris,
  doResolveUri,
  doFetchChannelListMine,
  doCreateChannel,
  doClaimSearch,
} from 'redux/actions/claims';

export { doDeletePurchasedUri, doPurchaseUri, doFileGet } from 'redux/actions/file';

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

export { savePosition } from 'redux/actions/content';

export {
  doUpdateBalance,
  doBalanceSubscribe,
  doUpdateTotalBalance,
  doTotalBalanceSubscribe,
  doFetchTransactions,
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

export { doToggleTagFollow, doAddTag, doDeleteTag } from 'redux/actions/tags';

export { doCommentList, doCommentCreate } from 'redux/actions/comments';

// utils
export { batchActions } from 'util/batchActions';
export { parseQueryParams, toQueryString } from 'util/query_params';
export { formatCredits, formatFullPrice, creditsToString } from 'util/formatCredits';
export { isClaimNsfw } from 'util/claim';

// reducers
export { claimsReducer } from 'redux/reducers/claims';
export { fileReducer } from 'redux/reducers/file';
export { fileInfoReducer } from 'redux/reducers/file_info';
export { notificationsReducer } from 'redux/reducers/notifications';
export { searchReducer } from 'redux/reducers/search';
export { walletReducer } from 'redux/reducers/wallet';
export { contentReducer } from 'redux/reducers/content';
export { commentReducer } from 'redux/reducers/comments';
export { tagsReducerBuilder } from 'redux/reducers/tags';

// selectors
export { makeSelectContentPositionForUri } from 'redux/selectors/content';

export { selectToast, selectError } from 'redux/selectors/notifications';

export {
  selectFailedPurchaseUris,
  selectPurchasedUris,
  selectPurchasedStreamingUrls,
  selectPurchaseUriErrorMessage,
  selectLastPurchasedUri,
  makeSelectStreamingUrlForUri,
} from 'redux/selectors/file';

export {
  makeSelectClaimForUri,
  makeSelectClaimIsMine,
  makeSelectFetchingChannelClaims,
  makeSelectClaimsInChannelForPage,
  makeSelectMetadataForUri,
  makeSelectMetadataItemForUri,
  makeSelectThumbnailForUri,
  makeSelectCoverForUri,
  makeSelectTitleForUri,
  makeSelectDateForUri,
  makeSelectTagsForUri,
  makeSelectContentTypeForUri,
  makeSelectIsUriResolving,
  makeSelectTotalItemsForChannel,
  makeSelectTotalPagesForChannel,
  makeSelectNsfwCountFromUris,
  makeSelectNsfwCountForChannel,
  makeSelectClaimIsNsfw,
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
  selectMyClaimUrisWithoutChannels,
  selectAllMyClaimsByOutpoint,
  selectMyClaimsOutpoints,
  selectFetchingMyChannels,
  selectMyChannelClaims,
  selectResolvingUris,
  selectPlayingUri,
  selectChannelClaimCounts,
  selectCurrentChannelPage,
  selectFetchingClaimSearch,
  selectLastClaimSearchUris,
} from 'redux/selectors/claims';

export { makeSelectCommentsForUri } from 'redux/selectors/comments';

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
  selectDownloadedUris,
} from 'redux/selectors/file_info';

export { selectSearchState };
export {
  makeSelectSearchUris,
  selectSearchValue,
  selectSearchOptions,
  selectIsSearching,
  selectSearchUrisByQuery,
  selectSearchBarFocused,
  selectSearchSuggestions,
  makeSelectQueryWithOptions,
} from 'redux/selectors/search';

export {
  selectBalance,
  selectTotalBalance,
  selectTransactionsById,
  selectSupportsByOutpoint,
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

export { selectFollowedTags, selectUnfollowedTags } from 'redux/selectors/tags';
