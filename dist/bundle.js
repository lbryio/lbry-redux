(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})((typeof self !== 'undefined' ? self : this), function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.selectTransactionListFilter = exports.selectWalletUnlockResult = exports.selectWalletUnlockSucceeded = exports.selectWalletUnlockPending = exports.selectWalletDecryptResult = exports.selectWalletDecryptSucceeded = exports.selectWalletDecryptPending = exports.selectWalletEncryptResult = exports.selectWalletEncryptSucceeded = exports.selectWalletEncryptPending = exports.selectWalletState = exports.selectWalletIsEncrypted = exports.selectBlocks = exports.selectDraftTransactionError = exports.selectDraftTransactionAddress = exports.selectDraftTransactionAmount = exports.selectDraftTransaction = exports.selectGettingNewAddress = exports.selectReceiveAddress = exports.selectIsSendingSupport = exports.selectIsFetchingTransactions = exports.selectHasTransactions = exports.selectRecentTransactions = exports.selectTransactionItems = exports.selectTransactionsById = exports.selectBalance = exports.makeSelectBlockDate = exports.makeSelectQueryWithOptions = exports.selectSearchSuggestions = exports.selectSearchBarFocused = exports.selectWunderBarAddress = exports.selectSearchUrisByQuery = exports.selectIsSearching = exports.selectSearchOptions = exports.selectSearchValue = exports.selectSearchQuery = exports.makeSelectSearchUris = exports.selectSearchState = exports.selectActiveHistoryEntry = exports.selectHistoryStack = exports.selectHistoryIndex = exports.selectIsForwardDisabled = exports.selectIsBackDisabled = exports.selectPathAfterAuth = exports.selectPageTitle = exports.selectHeaderLinks = exports.selectCurrentParams = exports.selectCurrentPage = exports.selectCurrentPath = exports.makeSelectCurrentParam = exports.computePageFromPath = exports.selectFileListPublishedSort = exports.selectFileListDownloadedSort = exports.selectSearchDownloadUris = exports.selectTotalDownloadProgress = exports.selectDownloadingFileInfos = exports.selectFileInfosDownloaded = exports.selectUrisLoading = exports.selectDownloadingByOutpoint = exports.selectIsFetchingFileListDownloadedOrPublished = exports.selectIsFetchingFileList = exports.selectFileInfosByOutpoint = exports.makeSelectLoadingForUri = exports.makeSelectDownloadingForUri = exports.makeSelectFileInfoForUri = exports.selectCurrentChannelPage = exports.selectChannelClaimCounts = exports.selectPlayingUri = exports.selectFetchingTrendingUris = exports.selectTrendingUris = exports.selectFetchingFeaturedUris = exports.selectFeaturedUris = exports.selectResolvingUris = exports.selectMyChannelClaims = exports.selectFetchingMyChannels = exports.selectMyClaimsOutpoints = exports.selectAllMyClaimsByOutpoint = exports.selectMyClaimsWithoutChannels = exports.selectMyClaims = undefined;
exports.selectPendingClaims = exports.selectIsFetchingClaimListMine = exports.selectAllFetchingChannelClaims = exports.selectMyActiveClaims = exports.selectAbandoningIds = exports.selectMyClaimsRaw = exports.selectAllClaimsByChannel = exports.selectClaimsByUri = exports.selectClaimsById = exports.selectPendingById = exports.makeSelectClaimsInChannelForCurrentPageState = exports.makeSelectPendingByUri = exports.makeSelectClaimIsPending = exports.makeSelectChannelForClaimUri = exports.makeSelectFirstRecommendedFileForUri = exports.makeSelectRecommendedContentForUri = exports.makeSelectNsfwCountForChannel = exports.makeSelectNsfwCountFromUris = exports.makeSelectTotalPagesForChannel = exports.makeSelectTotalItemsForChannel = exports.makeSelectIsUriResolving = exports.makeSelectContentTypeForUri = exports.makeSelectTitleForUri = exports.makeSelectMetadataForUri = exports.makeSelectClaimsInChannelForPage = exports.makeSelectClaimsInChannelForCurrentPage = exports.makeSelectFetchingChannelClaims = exports.makeSelectClaimIsMine = exports.makeSelectClaimForUri = exports.selectError = exports.selectToast = exports.makeSelectContentPositionForUri = exports.contentReducer = exports.walletReducer = exports.searchReducer = exports.notificationsReducer = exports.fileInfoReducer = exports.claimsReducer = exports.creditsToString = exports.formatFullPrice = exports.formatCredits = exports.toQueryString = exports.parseQueryParams = exports.batchActions = exports.doUpdateBlockHeight = exports.doSetTransactionListFilter = exports.doWalletStatus = exports.doWalletUnlock = exports.doWalletDecrypt = exports.doWalletEncrypt = exports.doSendTip = exports.doSetDraftTransactionAddress = exports.doSetDraftTransactionAmount = exports.doSendDraftTransaction = exports.doCheckAddressIsMine = exports.doGetNewAddress = exports.doFetchBlock = exports.doFetchTransactions = exports.doBalanceSubscribe = exports.doUpdateBalance = exports.savePosition = exports.doUpdateSearchOptions = exports.setSearchApi = exports.doBlurSearchInput = exports.doFocusSearchInput = exports.doUpdateSearchQuery = exports.doSearch = exports.doSetFileListSort = exports.doFetchFileInfosAndPublishedClaims = exports.doFileList = exports.doFetchFileInfo = exports.doResolveUri = exports.doResolveUris = exports.doAbandonClaim = exports.doFetchClaimListMine = exports.doFetchClaimCountByChannel = exports.doFetchClaimsByChannel = exports.doDismissError = exports.doError = exports.doDismissToast = exports.doToast = exports.convertToShareLink = exports.isNameValid = exports.isURIClaimable = exports.isURIValid = exports.normalizeURI = exports.buildURI = exports.parseURI = exports.regexAddress = exports.regexInvalidURI = exports.Lbry = exports.PAGES = exports.SORT_OPTIONS = exports.TRANSACTIONS = exports.SETTINGS = exports.SEARCH_OPTIONS = exports.SEARCH_TYPES = exports.THUMBNAIL_STATUSES = exports.ACTIONS = exports.Toast = undefined;

var _Notification = __webpack_require__(1);

Object.defineProperty(exports, 'Toast', {
  enumerable: true,
  get: function get() {
    return _Notification.Toast;
  }
});

var _lbryURI = __webpack_require__(3);

Object.defineProperty(exports, 'regexInvalidURI', {
  enumerable: true,
  get: function get() {
    return _lbryURI.regexInvalidURI;
  }
});
Object.defineProperty(exports, 'regexAddress', {
  enumerable: true,
  get: function get() {
    return _lbryURI.regexAddress;
  }
});
Object.defineProperty(exports, 'parseURI', {
  enumerable: true,
  get: function get() {
    return _lbryURI.parseURI;
  }
});
Object.defineProperty(exports, 'buildURI', {
  enumerable: true,
  get: function get() {
    return _lbryURI.buildURI;
  }
});
Object.defineProperty(exports, 'normalizeURI', {
  enumerable: true,
  get: function get() {
    return _lbryURI.normalizeURI;
  }
});
Object.defineProperty(exports, 'isURIValid', {
  enumerable: true,
  get: function get() {
    return _lbryURI.isURIValid;
  }
});
Object.defineProperty(exports, 'isURIClaimable', {
  enumerable: true,
  get: function get() {
    return _lbryURI.isURIClaimable;
  }
});
Object.defineProperty(exports, 'isNameValid', {
  enumerable: true,
  get: function get() {
    return _lbryURI.isNameValid;
  }
});
Object.defineProperty(exports, 'convertToShareLink', {
  enumerable: true,
  get: function get() {
    return _lbryURI.convertToShareLink;
  }
});

var _notifications = __webpack_require__(4);

Object.defineProperty(exports, 'doToast', {
  enumerable: true,
  get: function get() {
    return _notifications.doToast;
  }
});
Object.defineProperty(exports, 'doDismissToast', {
  enumerable: true,
  get: function get() {
    return _notifications.doDismissToast;
  }
});
Object.defineProperty(exports, 'doError', {
  enumerable: true,
  get: function get() {
    return _notifications.doError;
  }
});
Object.defineProperty(exports, 'doDismissError', {
  enumerable: true,
  get: function get() {
    return _notifications.doDismissError;
  }
});

var _claims = __webpack_require__(8);

Object.defineProperty(exports, 'doFetchClaimsByChannel', {
  enumerable: true,
  get: function get() {
    return _claims.doFetchClaimsByChannel;
  }
});
Object.defineProperty(exports, 'doFetchClaimCountByChannel', {
  enumerable: true,
  get: function get() {
    return _claims.doFetchClaimCountByChannel;
  }
});
Object.defineProperty(exports, 'doFetchClaimListMine', {
  enumerable: true,
  get: function get() {
    return _claims.doFetchClaimListMine;
  }
});
Object.defineProperty(exports, 'doAbandonClaim', {
  enumerable: true,
  get: function get() {
    return _claims.doAbandonClaim;
  }
});
Object.defineProperty(exports, 'doResolveUris', {
  enumerable: true,
  get: function get() {
    return _claims.doResolveUris;
  }
});
Object.defineProperty(exports, 'doResolveUri', {
  enumerable: true,
  get: function get() {
    return _claims.doResolveUri;
  }
});

var _file_info = __webpack_require__(23);

Object.defineProperty(exports, 'doFetchFileInfo', {
  enumerable: true,
  get: function get() {
    return _file_info.doFetchFileInfo;
  }
});
Object.defineProperty(exports, 'doFileList', {
  enumerable: true,
  get: function get() {
    return _file_info.doFileList;
  }
});
Object.defineProperty(exports, 'doFetchFileInfosAndPublishedClaims', {
  enumerable: true,
  get: function get() {
    return _file_info.doFetchFileInfosAndPublishedClaims;
  }
});
Object.defineProperty(exports, 'doSetFileListSort', {
  enumerable: true,
  get: function get() {
    return _file_info.doSetFileListSort;
  }
});

var _search = __webpack_require__(25);

Object.defineProperty(exports, 'doSearch', {
  enumerable: true,
  get: function get() {
    return _search.doSearch;
  }
});
Object.defineProperty(exports, 'doUpdateSearchQuery', {
  enumerable: true,
  get: function get() {
    return _search.doUpdateSearchQuery;
  }
});
Object.defineProperty(exports, 'doFocusSearchInput', {
  enumerable: true,
  get: function get() {
    return _search.doFocusSearchInput;
  }
});
Object.defineProperty(exports, 'doBlurSearchInput', {
  enumerable: true,
  get: function get() {
    return _search.doBlurSearchInput;
  }
});
Object.defineProperty(exports, 'setSearchApi', {
  enumerable: true,
  get: function get() {
    return _search.setSearchApi;
  }
});
Object.defineProperty(exports, 'doUpdateSearchOptions', {
  enumerable: true,
  get: function get() {
    return _search.doUpdateSearchOptions;
  }
});

var _content = __webpack_require__(29);

Object.defineProperty(exports, 'savePosition', {
  enumerable: true,
  get: function get() {
    return _content.savePosition;
  }
});

var _wallet = __webpack_require__(19);

Object.defineProperty(exports, 'doUpdateBalance', {
  enumerable: true,
  get: function get() {
    return _wallet.doUpdateBalance;
  }
});
Object.defineProperty(exports, 'doBalanceSubscribe', {
  enumerable: true,
  get: function get() {
    return _wallet.doBalanceSubscribe;
  }
});
Object.defineProperty(exports, 'doFetchTransactions', {
  enumerable: true,
  get: function get() {
    return _wallet.doFetchTransactions;
  }
});
Object.defineProperty(exports, 'doFetchBlock', {
  enumerable: true,
  get: function get() {
    return _wallet.doFetchBlock;
  }
});
Object.defineProperty(exports, 'doGetNewAddress', {
  enumerable: true,
  get: function get() {
    return _wallet.doGetNewAddress;
  }
});
Object.defineProperty(exports, 'doCheckAddressIsMine', {
  enumerable: true,
  get: function get() {
    return _wallet.doCheckAddressIsMine;
  }
});
Object.defineProperty(exports, 'doSendDraftTransaction', {
  enumerable: true,
  get: function get() {
    return _wallet.doSendDraftTransaction;
  }
});
Object.defineProperty(exports, 'doSetDraftTransactionAmount', {
  enumerable: true,
  get: function get() {
    return _wallet.doSetDraftTransactionAmount;
  }
});
Object.defineProperty(exports, 'doSetDraftTransactionAddress', {
  enumerable: true,
  get: function get() {
    return _wallet.doSetDraftTransactionAddress;
  }
});
Object.defineProperty(exports, 'doSendTip', {
  enumerable: true,
  get: function get() {
    return _wallet.doSendTip;
  }
});
Object.defineProperty(exports, 'doWalletEncrypt', {
  enumerable: true,
  get: function get() {
    return _wallet.doWalletEncrypt;
  }
});
Object.defineProperty(exports, 'doWalletDecrypt', {
  enumerable: true,
  get: function get() {
    return _wallet.doWalletDecrypt;
  }
});
Object.defineProperty(exports, 'doWalletUnlock', {
  enumerable: true,
  get: function get() {
    return _wallet.doWalletUnlock;
  }
});
Object.defineProperty(exports, 'doWalletStatus', {
  enumerable: true,
  get: function get() {
    return _wallet.doWalletStatus;
  }
});
Object.defineProperty(exports, 'doSetTransactionListFilter', {
  enumerable: true,
  get: function get() {
    return _wallet.doSetTransactionListFilter;
  }
});
Object.defineProperty(exports, 'doUpdateBlockHeight', {
  enumerable: true,
  get: function get() {
    return _wallet.doUpdateBlockHeight;
  }
});

var _batchActions = __webpack_require__(26);

Object.defineProperty(exports, 'batchActions', {
  enumerable: true,
  get: function get() {
    return _batchActions.batchActions;
  }
});

var _query_params = __webpack_require__(15);

Object.defineProperty(exports, 'parseQueryParams', {
  enumerable: true,
  get: function get() {
    return _query_params.parseQueryParams;
  }
});
Object.defineProperty(exports, 'toQueryString', {
  enumerable: true,
  get: function get() {
    return _query_params.toQueryString;
  }
});

var _formatCredits = __webpack_require__(22);

Object.defineProperty(exports, 'formatCredits', {
  enumerable: true,
  get: function get() {
    return _formatCredits.formatCredits;
  }
});
Object.defineProperty(exports, 'formatFullPrice', {
  enumerable: true,
  get: function get() {
    return _formatCredits.formatFullPrice;
  }
});
Object.defineProperty(exports, 'creditsToString', {
  enumerable: true,
  get: function get() {
    return _formatCredits.creditsToString;
  }
});

var _claims2 = __webpack_require__(30);

Object.defineProperty(exports, 'claimsReducer', {
  enumerable: true,
  get: function get() {
    return _claims2.claimsReducer;
  }
});

var _file_info2 = __webpack_require__(31);

Object.defineProperty(exports, 'fileInfoReducer', {
  enumerable: true,
  get: function get() {
    return _file_info2.fileInfoReducer;
  }
});

var _notifications2 = __webpack_require__(34);

Object.defineProperty(exports, 'notificationsReducer', {
  enumerable: true,
  get: function get() {
    return _notifications2.notificationsReducer;
  }
});

var _search2 = __webpack_require__(36);

Object.defineProperty(exports, 'searchReducer', {
  enumerable: true,
  get: function get() {
    return _search2.searchReducer;
  }
});

var _wallet2 = __webpack_require__(37);

Object.defineProperty(exports, 'walletReducer', {
  enumerable: true,
  get: function get() {
    return _wallet2.walletReducer;
  }
});

var _content2 = __webpack_require__(38);

Object.defineProperty(exports, 'contentReducer', {
  enumerable: true,
  get: function get() {
    return _content2.contentReducer;
  }
});

var _content3 = __webpack_require__(39);

Object.defineProperty(exports, 'makeSelectContentPositionForUri', {
  enumerable: true,
  get: function get() {
    return _content3.makeSelectContentPositionForUri;
  }
});

var _notifications3 = __webpack_require__(40);

Object.defineProperty(exports, 'selectToast', {
  enumerable: true,
  get: function get() {
    return _notifications3.selectToast;
  }
});
Object.defineProperty(exports, 'selectError', {
  enumerable: true,
  get: function get() {
    return _notifications3.selectError;
  }
});

var _claims3 = __webpack_require__(12);

Object.defineProperty(exports, 'makeSelectClaimForUri', {
  enumerable: true,
  get: function get() {
    return _claims3.makeSelectClaimForUri;
  }
});
Object.defineProperty(exports, 'makeSelectClaimIsMine', {
  enumerable: true,
  get: function get() {
    return _claims3.makeSelectClaimIsMine;
  }
});
Object.defineProperty(exports, 'makeSelectFetchingChannelClaims', {
  enumerable: true,
  get: function get() {
    return _claims3.makeSelectFetchingChannelClaims;
  }
});
Object.defineProperty(exports, 'makeSelectClaimsInChannelForCurrentPage', {
  enumerable: true,
  get: function get() {
    return _claims3.makeSelectClaimsInChannelForCurrentPage;
  }
});
Object.defineProperty(exports, 'makeSelectClaimsInChannelForPage', {
  enumerable: true,
  get: function get() {
    return _claims3.makeSelectClaimsInChannelForPage;
  }
});
Object.defineProperty(exports, 'makeSelectMetadataForUri', {
  enumerable: true,
  get: function get() {
    return _claims3.makeSelectMetadataForUri;
  }
});
Object.defineProperty(exports, 'makeSelectTitleForUri', {
  enumerable: true,
  get: function get() {
    return _claims3.makeSelectTitleForUri;
  }
});
Object.defineProperty(exports, 'makeSelectContentTypeForUri', {
  enumerable: true,
  get: function get() {
    return _claims3.makeSelectContentTypeForUri;
  }
});
Object.defineProperty(exports, 'makeSelectIsUriResolving', {
  enumerable: true,
  get: function get() {
    return _claims3.makeSelectIsUriResolving;
  }
});
Object.defineProperty(exports, 'makeSelectTotalItemsForChannel', {
  enumerable: true,
  get: function get() {
    return _claims3.makeSelectTotalItemsForChannel;
  }
});
Object.defineProperty(exports, 'makeSelectTotalPagesForChannel', {
  enumerable: true,
  get: function get() {
    return _claims3.makeSelectTotalPagesForChannel;
  }
});
Object.defineProperty(exports, 'makeSelectNsfwCountFromUris', {
  enumerable: true,
  get: function get() {
    return _claims3.makeSelectNsfwCountFromUris;
  }
});
Object.defineProperty(exports, 'makeSelectNsfwCountForChannel', {
  enumerable: true,
  get: function get() {
    return _claims3.makeSelectNsfwCountForChannel;
  }
});
Object.defineProperty(exports, 'makeSelectRecommendedContentForUri', {
  enumerable: true,
  get: function get() {
    return _claims3.makeSelectRecommendedContentForUri;
  }
});
Object.defineProperty(exports, 'makeSelectFirstRecommendedFileForUri', {
  enumerable: true,
  get: function get() {
    return _claims3.makeSelectFirstRecommendedFileForUri;
  }
});
Object.defineProperty(exports, 'makeSelectChannelForClaimUri', {
  enumerable: true,
  get: function get() {
    return _claims3.makeSelectChannelForClaimUri;
  }
});
Object.defineProperty(exports, 'makeSelectClaimIsPending', {
  enumerable: true,
  get: function get() {
    return _claims3.makeSelectClaimIsPending;
  }
});
Object.defineProperty(exports, 'makeSelectPendingByUri', {
  enumerable: true,
  get: function get() {
    return _claims3.makeSelectPendingByUri;
  }
});
Object.defineProperty(exports, 'makeSelectClaimsInChannelForCurrentPageState', {
  enumerable: true,
  get: function get() {
    return _claims3.makeSelectClaimsInChannelForCurrentPageState;
  }
});
Object.defineProperty(exports, 'selectPendingById', {
  enumerable: true,
  get: function get() {
    return _claims3.selectPendingById;
  }
});
Object.defineProperty(exports, 'selectClaimsById', {
  enumerable: true,
  get: function get() {
    return _claims3.selectClaimsById;
  }
});
Object.defineProperty(exports, 'selectClaimsByUri', {
  enumerable: true,
  get: function get() {
    return _claims3.selectClaimsByUri;
  }
});
Object.defineProperty(exports, 'selectAllClaimsByChannel', {
  enumerable: true,
  get: function get() {
    return _claims3.selectAllClaimsByChannel;
  }
});
Object.defineProperty(exports, 'selectMyClaimsRaw', {
  enumerable: true,
  get: function get() {
    return _claims3.selectMyClaimsRaw;
  }
});
Object.defineProperty(exports, 'selectAbandoningIds', {
  enumerable: true,
  get: function get() {
    return _claims3.selectAbandoningIds;
  }
});
Object.defineProperty(exports, 'selectMyActiveClaims', {
  enumerable: true,
  get: function get() {
    return _claims3.selectMyActiveClaims;
  }
});
Object.defineProperty(exports, 'selectAllFetchingChannelClaims', {
  enumerable: true,
  get: function get() {
    return _claims3.selectAllFetchingChannelClaims;
  }
});
Object.defineProperty(exports, 'selectIsFetchingClaimListMine', {
  enumerable: true,
  get: function get() {
    return _claims3.selectIsFetchingClaimListMine;
  }
});
Object.defineProperty(exports, 'selectPendingClaims', {
  enumerable: true,
  get: function get() {
    return _claims3.selectPendingClaims;
  }
});
Object.defineProperty(exports, 'selectMyClaims', {
  enumerable: true,
  get: function get() {
    return _claims3.selectMyClaims;
  }
});
Object.defineProperty(exports, 'selectMyClaimsWithoutChannels', {
  enumerable: true,
  get: function get() {
    return _claims3.selectMyClaimsWithoutChannels;
  }
});
Object.defineProperty(exports, 'selectAllMyClaimsByOutpoint', {
  enumerable: true,
  get: function get() {
    return _claims3.selectAllMyClaimsByOutpoint;
  }
});
Object.defineProperty(exports, 'selectMyClaimsOutpoints', {
  enumerable: true,
  get: function get() {
    return _claims3.selectMyClaimsOutpoints;
  }
});
Object.defineProperty(exports, 'selectFetchingMyChannels', {
  enumerable: true,
  get: function get() {
    return _claims3.selectFetchingMyChannels;
  }
});
Object.defineProperty(exports, 'selectMyChannelClaims', {
  enumerable: true,
  get: function get() {
    return _claims3.selectMyChannelClaims;
  }
});
Object.defineProperty(exports, 'selectResolvingUris', {
  enumerable: true,
  get: function get() {
    return _claims3.selectResolvingUris;
  }
});
Object.defineProperty(exports, 'selectFeaturedUris', {
  enumerable: true,
  get: function get() {
    return _claims3.selectFeaturedUris;
  }
});
Object.defineProperty(exports, 'selectFetchingFeaturedUris', {
  enumerable: true,
  get: function get() {
    return _claims3.selectFetchingFeaturedUris;
  }
});
Object.defineProperty(exports, 'selectTrendingUris', {
  enumerable: true,
  get: function get() {
    return _claims3.selectTrendingUris;
  }
});
Object.defineProperty(exports, 'selectFetchingTrendingUris', {
  enumerable: true,
  get: function get() {
    return _claims3.selectFetchingTrendingUris;
  }
});
Object.defineProperty(exports, 'selectPlayingUri', {
  enumerable: true,
  get: function get() {
    return _claims3.selectPlayingUri;
  }
});
Object.defineProperty(exports, 'selectChannelClaimCounts', {
  enumerable: true,
  get: function get() {
    return _claims3.selectChannelClaimCounts;
  }
});
Object.defineProperty(exports, 'selectCurrentChannelPage', {
  enumerable: true,
  get: function get() {
    return _claims3.selectCurrentChannelPage;
  }
});

var _file_info3 = __webpack_require__(24);

Object.defineProperty(exports, 'makeSelectFileInfoForUri', {
  enumerable: true,
  get: function get() {
    return _file_info3.makeSelectFileInfoForUri;
  }
});
Object.defineProperty(exports, 'makeSelectDownloadingForUri', {
  enumerable: true,
  get: function get() {
    return _file_info3.makeSelectDownloadingForUri;
  }
});
Object.defineProperty(exports, 'makeSelectLoadingForUri', {
  enumerable: true,
  get: function get() {
    return _file_info3.makeSelectLoadingForUri;
  }
});
Object.defineProperty(exports, 'selectFileInfosByOutpoint', {
  enumerable: true,
  get: function get() {
    return _file_info3.selectFileInfosByOutpoint;
  }
});
Object.defineProperty(exports, 'selectIsFetchingFileList', {
  enumerable: true,
  get: function get() {
    return _file_info3.selectIsFetchingFileList;
  }
});
Object.defineProperty(exports, 'selectIsFetchingFileListDownloadedOrPublished', {
  enumerable: true,
  get: function get() {
    return _file_info3.selectIsFetchingFileListDownloadedOrPublished;
  }
});
Object.defineProperty(exports, 'selectDownloadingByOutpoint', {
  enumerable: true,
  get: function get() {
    return _file_info3.selectDownloadingByOutpoint;
  }
});
Object.defineProperty(exports, 'selectUrisLoading', {
  enumerable: true,
  get: function get() {
    return _file_info3.selectUrisLoading;
  }
});
Object.defineProperty(exports, 'selectFileInfosDownloaded', {
  enumerable: true,
  get: function get() {
    return _file_info3.selectFileInfosDownloaded;
  }
});
Object.defineProperty(exports, 'selectDownloadingFileInfos', {
  enumerable: true,
  get: function get() {
    return _file_info3.selectDownloadingFileInfos;
  }
});
Object.defineProperty(exports, 'selectTotalDownloadProgress', {
  enumerable: true,
  get: function get() {
    return _file_info3.selectTotalDownloadProgress;
  }
});
Object.defineProperty(exports, 'selectSearchDownloadUris', {
  enumerable: true,
  get: function get() {
    return _file_info3.selectSearchDownloadUris;
  }
});
Object.defineProperty(exports, 'selectFileListDownloadedSort', {
  enumerable: true,
  get: function get() {
    return _file_info3.selectFileListDownloadedSort;
  }
});
Object.defineProperty(exports, 'selectFileListPublishedSort', {
  enumerable: true,
  get: function get() {
    return _file_info3.selectFileListPublishedSort;
  }
});

var _navigation = __webpack_require__(13);

Object.defineProperty(exports, 'computePageFromPath', {
  enumerable: true,
  get: function get() {
    return _navigation.computePageFromPath;
  }
});
Object.defineProperty(exports, 'makeSelectCurrentParam', {
  enumerable: true,
  get: function get() {
    return _navigation.makeSelectCurrentParam;
  }
});
Object.defineProperty(exports, 'selectCurrentPath', {
  enumerable: true,
  get: function get() {
    return _navigation.selectCurrentPath;
  }
});
Object.defineProperty(exports, 'selectCurrentPage', {
  enumerable: true,
  get: function get() {
    return _navigation.selectCurrentPage;
  }
});
Object.defineProperty(exports, 'selectCurrentParams', {
  enumerable: true,
  get: function get() {
    return _navigation.selectCurrentParams;
  }
});
Object.defineProperty(exports, 'selectHeaderLinks', {
  enumerable: true,
  get: function get() {
    return _navigation.selectHeaderLinks;
  }
});
Object.defineProperty(exports, 'selectPageTitle', {
  enumerable: true,
  get: function get() {
    return _navigation.selectPageTitle;
  }
});
Object.defineProperty(exports, 'selectPathAfterAuth', {
  enumerable: true,
  get: function get() {
    return _navigation.selectPathAfterAuth;
  }
});
Object.defineProperty(exports, 'selectIsBackDisabled', {
  enumerable: true,
  get: function get() {
    return _navigation.selectIsBackDisabled;
  }
});
Object.defineProperty(exports, 'selectIsForwardDisabled', {
  enumerable: true,
  get: function get() {
    return _navigation.selectIsForwardDisabled;
  }
});
Object.defineProperty(exports, 'selectHistoryIndex', {
  enumerable: true,
  get: function get() {
    return _navigation.selectHistoryIndex;
  }
});
Object.defineProperty(exports, 'selectHistoryStack', {
  enumerable: true,
  get: function get() {
    return _navigation.selectHistoryStack;
  }
});
Object.defineProperty(exports, 'selectActiveHistoryEntry', {
  enumerable: true,
  get: function get() {
    return _navigation.selectActiveHistoryEntry;
  }
});

var _search3 = __webpack_require__(17);

Object.defineProperty(exports, 'makeSelectSearchUris', {
  enumerable: true,
  get: function get() {
    return _search3.makeSelectSearchUris;
  }
});
Object.defineProperty(exports, 'selectSearchQuery', {
  enumerable: true,
  get: function get() {
    return _search3.selectSearchQuery;
  }
});
Object.defineProperty(exports, 'selectSearchValue', {
  enumerable: true,
  get: function get() {
    return _search3.selectSearchValue;
  }
});
Object.defineProperty(exports, 'selectSearchOptions', {
  enumerable: true,
  get: function get() {
    return _search3.selectSearchOptions;
  }
});
Object.defineProperty(exports, 'selectIsSearching', {
  enumerable: true,
  get: function get() {
    return _search3.selectIsSearching;
  }
});
Object.defineProperty(exports, 'selectSearchUrisByQuery', {
  enumerable: true,
  get: function get() {
    return _search3.selectSearchUrisByQuery;
  }
});
Object.defineProperty(exports, 'selectWunderBarAddress', {
  enumerable: true,
  get: function get() {
    return _search3.selectWunderBarAddress;
  }
});
Object.defineProperty(exports, 'selectSearchBarFocused', {
  enumerable: true,
  get: function get() {
    return _search3.selectSearchBarFocused;
  }
});
Object.defineProperty(exports, 'selectSearchSuggestions', {
  enumerable: true,
  get: function get() {
    return _search3.selectSearchSuggestions;
  }
});
Object.defineProperty(exports, 'makeSelectQueryWithOptions', {
  enumerable: true,
  get: function get() {
    return _search3.makeSelectQueryWithOptions;
  }
});

var _wallet3 = __webpack_require__(20);

Object.defineProperty(exports, 'makeSelectBlockDate', {
  enumerable: true,
  get: function get() {
    return _wallet3.makeSelectBlockDate;
  }
});
Object.defineProperty(exports, 'selectBalance', {
  enumerable: true,
  get: function get() {
    return _wallet3.selectBalance;
  }
});
Object.defineProperty(exports, 'selectTransactionsById', {
  enumerable: true,
  get: function get() {
    return _wallet3.selectTransactionsById;
  }
});
Object.defineProperty(exports, 'selectTransactionItems', {
  enumerable: true,
  get: function get() {
    return _wallet3.selectTransactionItems;
  }
});
Object.defineProperty(exports, 'selectRecentTransactions', {
  enumerable: true,
  get: function get() {
    return _wallet3.selectRecentTransactions;
  }
});
Object.defineProperty(exports, 'selectHasTransactions', {
  enumerable: true,
  get: function get() {
    return _wallet3.selectHasTransactions;
  }
});
Object.defineProperty(exports, 'selectIsFetchingTransactions', {
  enumerable: true,
  get: function get() {
    return _wallet3.selectIsFetchingTransactions;
  }
});
Object.defineProperty(exports, 'selectIsSendingSupport', {
  enumerable: true,
  get: function get() {
    return _wallet3.selectIsSendingSupport;
  }
});
Object.defineProperty(exports, 'selectReceiveAddress', {
  enumerable: true,
  get: function get() {
    return _wallet3.selectReceiveAddress;
  }
});
Object.defineProperty(exports, 'selectGettingNewAddress', {
  enumerable: true,
  get: function get() {
    return _wallet3.selectGettingNewAddress;
  }
});
Object.defineProperty(exports, 'selectDraftTransaction', {
  enumerable: true,
  get: function get() {
    return _wallet3.selectDraftTransaction;
  }
});
Object.defineProperty(exports, 'selectDraftTransactionAmount', {
  enumerable: true,
  get: function get() {
    return _wallet3.selectDraftTransactionAmount;
  }
});
Object.defineProperty(exports, 'selectDraftTransactionAddress', {
  enumerable: true,
  get: function get() {
    return _wallet3.selectDraftTransactionAddress;
  }
});
Object.defineProperty(exports, 'selectDraftTransactionError', {
  enumerable: true,
  get: function get() {
    return _wallet3.selectDraftTransactionError;
  }
});
Object.defineProperty(exports, 'selectBlocks', {
  enumerable: true,
  get: function get() {
    return _wallet3.selectBlocks;
  }
});
Object.defineProperty(exports, 'selectWalletIsEncrypted', {
  enumerable: true,
  get: function get() {
    return _wallet3.selectWalletIsEncrypted;
  }
});
Object.defineProperty(exports, 'selectWalletState', {
  enumerable: true,
  get: function get() {
    return _wallet3.selectWalletState;
  }
});
Object.defineProperty(exports, 'selectWalletEncryptPending', {
  enumerable: true,
  get: function get() {
    return _wallet3.selectWalletEncryptPending;
  }
});
Object.defineProperty(exports, 'selectWalletEncryptSucceeded', {
  enumerable: true,
  get: function get() {
    return _wallet3.selectWalletEncryptSucceeded;
  }
});
Object.defineProperty(exports, 'selectWalletEncryptResult', {
  enumerable: true,
  get: function get() {
    return _wallet3.selectWalletEncryptResult;
  }
});
Object.defineProperty(exports, 'selectWalletDecryptPending', {
  enumerable: true,
  get: function get() {
    return _wallet3.selectWalletDecryptPending;
  }
});
Object.defineProperty(exports, 'selectWalletDecryptSucceeded', {
  enumerable: true,
  get: function get() {
    return _wallet3.selectWalletDecryptSucceeded;
  }
});
Object.defineProperty(exports, 'selectWalletDecryptResult', {
  enumerable: true,
  get: function get() {
    return _wallet3.selectWalletDecryptResult;
  }
});
Object.defineProperty(exports, 'selectWalletUnlockPending', {
  enumerable: true,
  get: function get() {
    return _wallet3.selectWalletUnlockPending;
  }
});
Object.defineProperty(exports, 'selectWalletUnlockSucceeded', {
  enumerable: true,
  get: function get() {
    return _wallet3.selectWalletUnlockSucceeded;
  }
});
Object.defineProperty(exports, 'selectWalletUnlockResult', {
  enumerable: true,
  get: function get() {
    return _wallet3.selectWalletUnlockResult;
  }
});
Object.defineProperty(exports, 'selectTransactionListFilter', {
  enumerable: true,
  get: function get() {
    return _wallet3.selectTransactionListFilter;
  }
});

var _action_types = __webpack_require__(2);

var ACTIONS = _interopRequireWildcard(_action_types);

var _thumbnail_upload_statuses = __webpack_require__(41);

var THUMBNAIL_STATUSES = _interopRequireWildcard(_thumbnail_upload_statuses);

var _settings = __webpack_require__(42);

var SETTINGS = _interopRequireWildcard(_settings);

var _transaction_types = __webpack_require__(21);

var TRANSACTIONS = _interopRequireWildcard(_transaction_types);

var _sort_options = __webpack_require__(32);

var SORT_OPTIONS = _interopRequireWildcard(_sort_options);

var _pages = __webpack_require__(33);

var PAGES = _interopRequireWildcard(_pages);

var _search4 = __webpack_require__(16);

var _lbry = __webpack_require__(9);

var _lbry2 = _interopRequireDefault(_lbry);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

// constants
exports.ACTIONS = ACTIONS;
exports.THUMBNAIL_STATUSES = THUMBNAIL_STATUSES;
exports.SEARCH_TYPES = _search4.SEARCH_TYPES;
exports.SEARCH_OPTIONS = _search4.SEARCH_OPTIONS;
exports.SETTINGS = SETTINGS;
exports.TRANSACTIONS = TRANSACTIONS;
exports.SORT_OPTIONS = SORT_OPTIONS;
exports.PAGES = PAGES;

// common

exports.Lbry = _lbry2.default;
exports.selectSearchState = _search3.selectState;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _action_types = __webpack_require__(2);

var ACTIONS = _interopRequireWildcard(_action_types);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/*
  Toasts:
    - First-in, first-out queue
    - Simple messages that are shown in response to user interactions
    - Never saved
    - If they are the result of errors, use the isError flag when creating
    - For errors that should interrupt user behavior, use Error
*/
/*:: export type ToastParams = {
  message: string,
  title?: string,
  linkText?: string,
  linkTarget?: string,
  isError?: boolean,
};*/ // @flow

/*:: export type Toast = {
  id: string,
  params: ToastParams,
};*/


/*
  Notifications:
    - List of notifications based on user interactions/app notifications
    - Always saved, but can be manually deleted
    - Can happen in the background, or because of user interaction (ex: publish confirmed)
*/
/*:: export type DoToast = {
  type: ACTIONS.CREATE_TOAST,
  data: Toast,
};*/
/*:: export type Notification = {
  id: string, // Unique id
  dateCreated: number,
  isRead: boolean, // Used to display "new" notifications that a user hasn't seen yet
  source?: string, // The type/area an notification is from. Used for sorting (ex: publishes, transactions)
  // We may want to use priority/isDismissed in the future to specify how urgent a notification is
  // and if the user should see it immediately
  // isDissmied: boolean,
  // priority?: number
};*/
/*:: export type DoNotification = {
  type: ACTIONS.CREATE_NOTIFICATION,
  data: Notification,
};*/
/*:: export type DoEditNotification = {
  type: ACTIONS.EDIT_NOTIFICATION,
  data: {
    id: string,
    isRead: boolean,
    // In the future we can add `isDismissed` if we decide to show notifications as they come in
    // Similar to Facebook's notifications in the corner of the screen
    // isDismissed: boolean,
  },
};*/


/*
  Errors:
    - First-in, first-out queue
    - Errors that should interupt user behavior
    - For errors that can be shown without interrupting a user, use Toast with the isError flag
*/
/*:: export type DoDeleteNotification = {
  type: ACTIONS.DELETE_NOTIFICATION,
  data: {
    id: string, // The id to delete
  },
};*/
/*:: export type Error = {
  title: string,
  text: string,
};*/
/*:: export type DoError = {
  type: ACTIONS.CREATE_ERROR,
  data: Error,
};*/


/*
  NotificationState
*/
/*:: export type DoDismissError = {
  type: ACTIONS.DISMISS_ERROR,
};*/
/*:: export type NotificationState = {
  notifications: Array<Notification>,
  errors: Array<Error>,
  toasts: Array<Toast>,
};*/

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var WINDOW_FOCUSED = exports.WINDOW_FOCUSED = 'WINDOW_FOCUSED';
var DAEMON_READY = exports.DAEMON_READY = 'DAEMON_READY';
var DAEMON_VERSION_MATCH = exports.DAEMON_VERSION_MATCH = 'DAEMON_VERSION_MATCH';
var DAEMON_VERSION_MISMATCH = exports.DAEMON_VERSION_MISMATCH = 'DAEMON_VERSION_MISMATCH';
var VOLUME_CHANGED = exports.VOLUME_CHANGED = 'VOLUME_CHANGED';

// Navigation
var CHANGE_AFTER_AUTH_PATH = exports.CHANGE_AFTER_AUTH_PATH = 'CHANGE_AFTER_AUTH_PATH';
var WINDOW_SCROLLED = exports.WINDOW_SCROLLED = 'WINDOW_SCROLLED';
var HISTORY_NAVIGATE = exports.HISTORY_NAVIGATE = 'HISTORY_NAVIGATE';

// Upgrades
var UPGRADE_CANCELLED = exports.UPGRADE_CANCELLED = 'UPGRADE_CANCELLED';
var DOWNLOAD_UPGRADE = exports.DOWNLOAD_UPGRADE = 'DOWNLOAD_UPGRADE';
var UPGRADE_DOWNLOAD_STARTED = exports.UPGRADE_DOWNLOAD_STARTED = 'UPGRADE_DOWNLOAD_STARTED';
var UPGRADE_DOWNLOAD_COMPLETED = exports.UPGRADE_DOWNLOAD_COMPLETED = 'UPGRADE_DOWNLOAD_COMPLETED';
var UPGRADE_DOWNLOAD_PROGRESSED = exports.UPGRADE_DOWNLOAD_PROGRESSED = 'UPGRADE_DOWNLOAD_PROGRESSED';
var CHECK_UPGRADE_AVAILABLE = exports.CHECK_UPGRADE_AVAILABLE = 'CHECK_UPGRADE_AVAILABLE';
var CHECK_UPGRADE_START = exports.CHECK_UPGRADE_START = 'CHECK_UPGRADE_START';
var CHECK_UPGRADE_SUCCESS = exports.CHECK_UPGRADE_SUCCESS = 'CHECK_UPGRADE_SUCCESS';
var CHECK_UPGRADE_FAIL = exports.CHECK_UPGRADE_FAIL = 'CHECK_UPGRADE_FAIL';
var CHECK_UPGRADE_SUBSCRIBE = exports.CHECK_UPGRADE_SUBSCRIBE = 'CHECK_UPGRADE_SUBSCRIBE';
var UPDATE_VERSION = exports.UPDATE_VERSION = 'UPDATE_VERSION';
var UPDATE_REMOTE_VERSION = exports.UPDATE_REMOTE_VERSION = 'UPDATE_REMOTE_VERSION';
var SKIP_UPGRADE = exports.SKIP_UPGRADE = 'SKIP_UPGRADE';
var START_UPGRADE = exports.START_UPGRADE = 'START_UPGRADE';
var AUTO_UPDATE_DECLINED = exports.AUTO_UPDATE_DECLINED = 'AUTO_UPDATE_DECLINED';
var AUTO_UPDATE_DOWNLOADED = exports.AUTO_UPDATE_DOWNLOADED = 'AUTO_UPDATE_DOWNLOADED';
var CLEAR_UPGRADE_TIMER = exports.CLEAR_UPGRADE_TIMER = 'CLEAR_UPGRADE_TIMER';

// Wallet
var GET_NEW_ADDRESS_STARTED = exports.GET_NEW_ADDRESS_STARTED = 'GET_NEW_ADDRESS_STARTED';
var GET_NEW_ADDRESS_COMPLETED = exports.GET_NEW_ADDRESS_COMPLETED = 'GET_NEW_ADDRESS_COMPLETED';
var FETCH_TRANSACTIONS_STARTED = exports.FETCH_TRANSACTIONS_STARTED = 'FETCH_TRANSACTIONS_STARTED';
var FETCH_TRANSACTIONS_COMPLETED = exports.FETCH_TRANSACTIONS_COMPLETED = 'FETCH_TRANSACTIONS_COMPLETED';
var UPDATE_BALANCE = exports.UPDATE_BALANCE = 'UPDATE_BALANCE';
var CHECK_ADDRESS_IS_MINE_STARTED = exports.CHECK_ADDRESS_IS_MINE_STARTED = 'CHECK_ADDRESS_IS_MINE_STARTED';
var CHECK_ADDRESS_IS_MINE_COMPLETED = exports.CHECK_ADDRESS_IS_MINE_COMPLETED = 'CHECK_ADDRESS_IS_MINE_COMPLETED';
var SEND_TRANSACTION_STARTED = exports.SEND_TRANSACTION_STARTED = 'SEND_TRANSACTION_STARTED';
var SEND_TRANSACTION_COMPLETED = exports.SEND_TRANSACTION_COMPLETED = 'SEND_TRANSACTION_COMPLETED';
var SEND_TRANSACTION_FAILED = exports.SEND_TRANSACTION_FAILED = 'SEND_TRANSACTION_FAILED';
var FETCH_BLOCK_SUCCESS = exports.FETCH_BLOCK_SUCCESS = 'FETCH_BLOCK_SUCCESS';
var SUPPORT_TRANSACTION_STARTED = exports.SUPPORT_TRANSACTION_STARTED = 'SUPPORT_TRANSACTION_STARTED';
var SUPPORT_TRANSACTION_COMPLETED = exports.SUPPORT_TRANSACTION_COMPLETED = 'SUPPORT_TRANSACTION_COMPLETED';
var SUPPORT_TRANSACTION_FAILED = exports.SUPPORT_TRANSACTION_FAILED = 'SUPPORT_TRANSACTION_FAILED';
var WALLET_ENCRYPT_START = exports.WALLET_ENCRYPT_START = 'WALLET_ENCRYPT_START';
var WALLET_ENCRYPT_COMPLETED = exports.WALLET_ENCRYPT_COMPLETED = 'WALLET_ENCRYPT_COMPLETED';
var WALLET_ENCRYPT_FAILED = exports.WALLET_ENCRYPT_FAILED = 'WALLET_ENCRYPT_FAILED';
var WALLET_UNLOCK_START = exports.WALLET_UNLOCK_START = 'WALLET_UNLOCK_START';
var WALLET_UNLOCK_COMPLETED = exports.WALLET_UNLOCK_COMPLETED = 'WALLET_UNLOCK_COMPLETED';
var WALLET_UNLOCK_FAILED = exports.WALLET_UNLOCK_FAILED = 'WALLET_UNLOCK_FAILED';
var WALLET_DECRYPT_START = exports.WALLET_DECRYPT_START = 'WALLET_DECRYPT_START';
var WALLET_DECRYPT_COMPLETED = exports.WALLET_DECRYPT_COMPLETED = 'WALLET_DECRYPT_COMPLETED';
var WALLET_DECRYPT_FAILED = exports.WALLET_DECRYPT_FAILED = 'WALLET_DECRYPT_FAILED';
var WALLET_LOCK_START = exports.WALLET_LOCK_START = 'WALLET_LOCK_START';
var WALLET_LOCK_COMPLETED = exports.WALLET_LOCK_COMPLETED = 'WALLET_LOCK_COMPLETED';
var WALLET_LOCK_FAILED = exports.WALLET_LOCK_FAILED = 'WALLET_LOCK_FAILED';
var WALLET_STATUS_START = exports.WALLET_STATUS_START = 'WALLET_STATUS_START';
var WALLET_STATUS_COMPLETED = exports.WALLET_STATUS_COMPLETED = 'WALLET_STATUS_COMPLETED';
var SET_TRANSACTION_LIST_FILTER = exports.SET_TRANSACTION_LIST_FILTER = 'SET_TRANSACTION_LIST_FILTER';
var UPDATE_CURRENT_HEIGHT = exports.UPDATE_CURRENT_HEIGHT = 'UPDATE_CURRENT_HEIGHT';

// Claims
var RESOLVE_URIS_STARTED = exports.RESOLVE_URIS_STARTED = 'RESOLVE_URIS_STARTED';
var RESOLVE_URIS_COMPLETED = exports.RESOLVE_URIS_COMPLETED = 'RESOLVE_URIS_COMPLETED';
var FETCH_CHANNEL_CLAIMS_STARTED = exports.FETCH_CHANNEL_CLAIMS_STARTED = 'FETCH_CHANNEL_CLAIMS_STARTED';
var FETCH_CHANNEL_CLAIMS_COMPLETED = exports.FETCH_CHANNEL_CLAIMS_COMPLETED = 'FETCH_CHANNEL_CLAIMS_COMPLETED';
var FETCH_CHANNEL_CLAIM_COUNT_STARTED = exports.FETCH_CHANNEL_CLAIM_COUNT_STARTED = 'FETCH_CHANNEL_CLAIM_COUNT_STARTED';
var FETCH_CHANNEL_CLAIM_COUNT_COMPLETED = exports.FETCH_CHANNEL_CLAIM_COUNT_COMPLETED = 'FETCH_CHANNEL_CLAIM_COUNT_COMPLETED';
var FETCH_CLAIM_LIST_MINE_STARTED = exports.FETCH_CLAIM_LIST_MINE_STARTED = 'FETCH_CLAIM_LIST_MINE_STARTED';
var FETCH_CLAIM_LIST_MINE_COMPLETED = exports.FETCH_CLAIM_LIST_MINE_COMPLETED = 'FETCH_CLAIM_LIST_MINE_COMPLETED';
var ABANDON_CLAIM_STARTED = exports.ABANDON_CLAIM_STARTED = 'ABANDON_CLAIM_STARTED';
var ABANDON_CLAIM_SUCCEEDED = exports.ABANDON_CLAIM_SUCCEEDED = 'ABANDON_CLAIM_SUCCEEDED';
var FETCH_CHANNEL_LIST_STARTED = exports.FETCH_CHANNEL_LIST_STARTED = 'FETCH_CHANNEL_LIST_STARTED';
var FETCH_CHANNEL_LIST_COMPLETED = exports.FETCH_CHANNEL_LIST_COMPLETED = 'FETCH_CHANNEL_LIST_COMPLETED';
var CREATE_CHANNEL_STARTED = exports.CREATE_CHANNEL_STARTED = 'CREATE_CHANNEL_STARTED';
var CREATE_CHANNEL_COMPLETED = exports.CREATE_CHANNEL_COMPLETED = 'CREATE_CHANNEL_COMPLETED';
var PUBLISH_STARTED = exports.PUBLISH_STARTED = 'PUBLISH_STARTED';
var PUBLISH_COMPLETED = exports.PUBLISH_COMPLETED = 'PUBLISH_COMPLETED';
var PUBLISH_FAILED = exports.PUBLISH_FAILED = 'PUBLISH_FAILED';
var SET_PLAYING_URI = exports.SET_PLAYING_URI = 'SET_PLAYING_URI';
var SET_CONTENT_POSITION = exports.SET_CONTENT_POSITION = 'SET_CONTENT_POSITION';
var SET_CONTENT_LAST_VIEWED = exports.SET_CONTENT_LAST_VIEWED = 'SET_CONTENT_LAST_VIEWED';
var CLEAR_CONTENT_HISTORY_URI = exports.CLEAR_CONTENT_HISTORY_URI = 'CLEAR_CONTENT_HISTORY_URI';
var CLEAR_CONTENT_HISTORY_ALL = exports.CLEAR_CONTENT_HISTORY_ALL = 'CLEAR_CONTENT_HISTORY_ALL';

// Files
var FILE_LIST_STARTED = exports.FILE_LIST_STARTED = 'FILE_LIST_STARTED';
var FILE_LIST_SUCCEEDED = exports.FILE_LIST_SUCCEEDED = 'FILE_LIST_SUCCEEDED';
var FETCH_FILE_INFO_STARTED = exports.FETCH_FILE_INFO_STARTED = 'FETCH_FILE_INFO_STARTED';
var FETCH_FILE_INFO_COMPLETED = exports.FETCH_FILE_INFO_COMPLETED = 'FETCH_FILE_INFO_COMPLETED';
var LOADING_VIDEO_STARTED = exports.LOADING_VIDEO_STARTED = 'LOADING_VIDEO_STARTED';
var LOADING_VIDEO_COMPLETED = exports.LOADING_VIDEO_COMPLETED = 'LOADING_VIDEO_COMPLETED';
var LOADING_VIDEO_FAILED = exports.LOADING_VIDEO_FAILED = 'LOADING_VIDEO_FAILED';
var DOWNLOADING_STARTED = exports.DOWNLOADING_STARTED = 'DOWNLOADING_STARTED';
var DOWNLOADING_PROGRESSED = exports.DOWNLOADING_PROGRESSED = 'DOWNLOADING_PROGRESSED';
var DOWNLOADING_COMPLETED = exports.DOWNLOADING_COMPLETED = 'DOWNLOADING_COMPLETED';
var DOWNLOADING_CANCELED = exports.DOWNLOADING_CANCELED = 'DOWNLOADING_CANCELED';
var PLAY_VIDEO_STARTED = exports.PLAY_VIDEO_STARTED = 'PLAY_VIDEO_STARTED';
var FETCH_AVAILABILITY_STARTED = exports.FETCH_AVAILABILITY_STARTED = 'FETCH_AVAILABILITY_STARTED';
var FETCH_AVAILABILITY_COMPLETED = exports.FETCH_AVAILABILITY_COMPLETED = 'FETCH_AVAILABILITY_COMPLETED';
var FILE_DELETE = exports.FILE_DELETE = 'FILE_DELETE';
var SET_FILE_LIST_SORT = exports.SET_FILE_LIST_SORT = 'SET_FILE_LIST_SORT';

// Search
var SEARCH_START = exports.SEARCH_START = 'SEARCH_START';
var SEARCH_SUCCESS = exports.SEARCH_SUCCESS = 'SEARCH_SUCCESS';
var SEARCH_FAIL = exports.SEARCH_FAIL = 'SEARCH_FAIL';
var UPDATE_SEARCH_QUERY = exports.UPDATE_SEARCH_QUERY = 'UPDATE_SEARCH_QUERY';
var UPDATE_SEARCH_OPTIONS = exports.UPDATE_SEARCH_OPTIONS = 'UPDATE_SEARCH_OPTIONS';
var UPDATE_SEARCH_SUGGESTIONS = exports.UPDATE_SEARCH_SUGGESTIONS = 'UPDATE_SEARCH_SUGGESTIONS';
var SEARCH_FOCUS = exports.SEARCH_FOCUS = 'SEARCH_FOCUS';
var SEARCH_BLUR = exports.SEARCH_BLUR = 'SEARCH_BLUR';

// Settings
var DAEMON_SETTINGS_RECEIVED = exports.DAEMON_SETTINGS_RECEIVED = 'DAEMON_SETTINGS_RECEIVED';
var CLIENT_SETTING_CHANGED = exports.CLIENT_SETTING_CHANGED = 'CLIENT_SETTING_CHANGED';
var UPDATE_IS_NIGHT = exports.UPDATE_IS_NIGHT = 'UPDATE_IS_NIGHT';

// User
var AUTHENTICATION_STARTED = exports.AUTHENTICATION_STARTED = 'AUTHENTICATION_STARTED';
var AUTHENTICATION_SUCCESS = exports.AUTHENTICATION_SUCCESS = 'AUTHENTICATION_SUCCESS';
var AUTHENTICATION_FAILURE = exports.AUTHENTICATION_FAILURE = 'AUTHENTICATION_FAILURE';
var USER_EMAIL_DECLINE = exports.USER_EMAIL_DECLINE = 'USER_EMAIL_DECLINE';
var USER_EMAIL_NEW_STARTED = exports.USER_EMAIL_NEW_STARTED = 'USER_EMAIL_NEW_STARTED';
var USER_EMAIL_NEW_SUCCESS = exports.USER_EMAIL_NEW_SUCCESS = 'USER_EMAIL_NEW_SUCCESS';
var USER_EMAIL_NEW_EXISTS = exports.USER_EMAIL_NEW_EXISTS = 'USER_EMAIL_NEW_EXISTS';
var USER_EMAIL_NEW_FAILURE = exports.USER_EMAIL_NEW_FAILURE = 'USER_EMAIL_NEW_FAILURE';
var USER_EMAIL_VERIFY_SET = exports.USER_EMAIL_VERIFY_SET = 'USER_EMAIL_VERIFY_SET';
var USER_EMAIL_VERIFY_STARTED = exports.USER_EMAIL_VERIFY_STARTED = 'USER_EMAIL_VERIFY_STARTED';
var USER_EMAIL_VERIFY_SUCCESS = exports.USER_EMAIL_VERIFY_SUCCESS = 'USER_EMAIL_VERIFY_SUCCESS';
var USER_EMAIL_VERIFY_FAILURE = exports.USER_EMAIL_VERIFY_FAILURE = 'USER_EMAIL_VERIFY_FAILURE';
var USER_EMAIL_VERIFY_RETRY = exports.USER_EMAIL_VERIFY_RETRY = 'USER_EMAIL_VERIFY_RETRY';
var USER_PHONE_RESET = exports.USER_PHONE_RESET = 'USER_PHONE_RESET';
var USER_PHONE_NEW_STARTED = exports.USER_PHONE_NEW_STARTED = 'USER_PHONE_NEW_STARTED';
var USER_PHONE_NEW_SUCCESS = exports.USER_PHONE_NEW_SUCCESS = 'USER_PHONE_NEW_SUCCESS';
var USER_PHONE_NEW_FAILURE = exports.USER_PHONE_NEW_FAILURE = 'USER_PHONE_NEW_FAILURE';
var USER_PHONE_VERIFY_STARTED = exports.USER_PHONE_VERIFY_STARTED = 'USER_PHONE_VERIFY_STARTED';
var USER_PHONE_VERIFY_SUCCESS = exports.USER_PHONE_VERIFY_SUCCESS = 'USER_PHONE_VERIFY_SUCCESS';
var USER_PHONE_VERIFY_FAILURE = exports.USER_PHONE_VERIFY_FAILURE = 'USER_PHONE_VERIFY_FAILURE';
var USER_IDENTITY_VERIFY_STARTED = exports.USER_IDENTITY_VERIFY_STARTED = 'USER_IDENTITY_VERIFY_STARTED';
var USER_IDENTITY_VERIFY_SUCCESS = exports.USER_IDENTITY_VERIFY_SUCCESS = 'USER_IDENTITY_VERIFY_SUCCESS';
var USER_IDENTITY_VERIFY_FAILURE = exports.USER_IDENTITY_VERIFY_FAILURE = 'USER_IDENTITY_VERIFY_FAILURE';
var USER_FETCH_STARTED = exports.USER_FETCH_STARTED = 'USER_FETCH_STARTED';
var USER_FETCH_SUCCESS = exports.USER_FETCH_SUCCESS = 'USER_FETCH_SUCCESS';
var USER_FETCH_FAILURE = exports.USER_FETCH_FAILURE = 'USER_FETCH_FAILURE';
var USER_INVITE_STATUS_FETCH_STARTED = exports.USER_INVITE_STATUS_FETCH_STARTED = 'USER_INVITE_STATUS_FETCH_STARTED';
var USER_INVITE_STATUS_FETCH_SUCCESS = exports.USER_INVITE_STATUS_FETCH_SUCCESS = 'USER_INVITE_STATUS_FETCH_SUCCESS';
var USER_INVITE_STATUS_FETCH_FAILURE = exports.USER_INVITE_STATUS_FETCH_FAILURE = 'USER_INVITE_STATUS_FETCH_FAILURE';
var USER_INVITE_NEW_STARTED = exports.USER_INVITE_NEW_STARTED = 'USER_INVITE_NEW_STARTED';
var USER_INVITE_NEW_SUCCESS = exports.USER_INVITE_NEW_SUCCESS = 'USER_INVITE_NEW_SUCCESS';
var USER_INVITE_NEW_FAILURE = exports.USER_INVITE_NEW_FAILURE = 'USER_INVITE_NEW_FAILURE';
var FETCH_ACCESS_TOKEN_SUCCESS = exports.FETCH_ACCESS_TOKEN_SUCCESS = 'FETCH_ACCESS_TOKEN_SUCCESS';

// Rewards
var FETCH_REWARDS_STARTED = exports.FETCH_REWARDS_STARTED = 'FETCH_REWARDS_STARTED';
var FETCH_REWARDS_COMPLETED = exports.FETCH_REWARDS_COMPLETED = 'FETCH_REWARDS_COMPLETED';
var CLAIM_REWARD_STARTED = exports.CLAIM_REWARD_STARTED = 'CLAIM_REWARD_STARTED';
var CLAIM_REWARD_SUCCESS = exports.CLAIM_REWARD_SUCCESS = 'CLAIM_REWARD_SUCCESS';
var CLAIM_REWARD_FAILURE = exports.CLAIM_REWARD_FAILURE = 'CLAIM_REWARD_FAILURE';
var CLAIM_REWARD_CLEAR_ERROR = exports.CLAIM_REWARD_CLEAR_ERROR = 'CLAIM_REWARD_CLEAR_ERROR';
var FETCH_REWARD_CONTENT_COMPLETED = exports.FETCH_REWARD_CONTENT_COMPLETED = 'FETCH_REWARD_CONTENT_COMPLETED';

// Language
var DOWNLOAD_LANGUAGE_SUCCEEDED = exports.DOWNLOAD_LANGUAGE_SUCCEEDED = 'DOWNLOAD_LANGUAGE_SUCCEEDED';
var DOWNLOAD_LANGUAGE_FAILED = exports.DOWNLOAD_LANGUAGE_FAILED = 'DOWNLOAD_LANGUAGE_FAILED';

// ShapeShift
var GET_SUPPORTED_COINS_START = exports.GET_SUPPORTED_COINS_START = 'GET_SUPPORTED_COINS_START';
var GET_SUPPORTED_COINS_SUCCESS = exports.GET_SUPPORTED_COINS_SUCCESS = 'GET_SUPPORTED_COINS_SUCCESS';
var GET_SUPPORTED_COINS_FAIL = exports.GET_SUPPORTED_COINS_FAIL = 'GET_SUPPORTED_COINS_FAIL';
var GET_COIN_STATS_START = exports.GET_COIN_STATS_START = 'GET_COIN_STATS_START';
var GET_COIN_STATS_SUCCESS = exports.GET_COIN_STATS_SUCCESS = 'GET_COIN_STATS_SUCCESS';
var GET_COIN_STATS_FAIL = exports.GET_COIN_STATS_FAIL = 'GET_COIN_STATS_FAIL';
var PREPARE_SHAPE_SHIFT_START = exports.PREPARE_SHAPE_SHIFT_START = 'PREPARE_SHAPE_SHIFT_START';
var PREPARE_SHAPE_SHIFT_SUCCESS = exports.PREPARE_SHAPE_SHIFT_SUCCESS = 'PREPARE_SHAPE_SHIFT_SUCCESS';
var PREPARE_SHAPE_SHIFT_FAIL = exports.PREPARE_SHAPE_SHIFT_FAIL = 'PREPARE_SHAPE_SHIFT_FAIL';
var GET_ACTIVE_SHIFT_START = exports.GET_ACTIVE_SHIFT_START = 'GET_ACTIVE_SHIFT_START';
var GET_ACTIVE_SHIFT_SUCCESS = exports.GET_ACTIVE_SHIFT_SUCCESS = 'GET_ACTIVE_SHIFT_SUCCESS';
var GET_ACTIVE_SHIFT_FAIL = exports.GET_ACTIVE_SHIFT_FAIL = 'GET_ACTIVE_SHIFT_FAIL';
var CLEAR_SHAPE_SHIFT = exports.CLEAR_SHAPE_SHIFT = 'CLEAR_SHAPE_SHIFT';

// Subscriptions
var CHANNEL_SUBSCRIBE = exports.CHANNEL_SUBSCRIBE = 'CHANNEL_SUBSCRIBE';
var CHANNEL_UNSUBSCRIBE = exports.CHANNEL_UNSUBSCRIBE = 'CHANNEL_UNSUBSCRIBE';
var HAS_FETCHED_SUBSCRIPTIONS = exports.HAS_FETCHED_SUBSCRIPTIONS = 'HAS_FETCHED_SUBSCRIPTIONS';
var SET_SUBSCRIPTION_LATEST = exports.SET_SUBSCRIPTION_LATEST = 'SET_SUBSCRIPTION_LATEST';
var SET_SUBSCRIPTION_NOTIFICATION = exports.SET_SUBSCRIPTION_NOTIFICATION = 'SET_SUBSCRIPTION_NOTIFICATION';
var SET_SUBSCRIPTION_NOTIFICATIONS = exports.SET_SUBSCRIPTION_NOTIFICATIONS = 'SET_SUBSCRIPTION_NOTIFICATIONS';
var CHECK_SUBSCRIPTION_STARTED = exports.CHECK_SUBSCRIPTION_STARTED = 'CHECK_SUBSCRIPTION_STARTED';
var CHECK_SUBSCRIPTION_COMPLETED = exports.CHECK_SUBSCRIPTION_COMPLETED = 'CHECK_SUBSCRIPTION_COMPLETED';
var CHECK_SUBSCRIPTIONS_SUBSCRIBE = exports.CHECK_SUBSCRIPTIONS_SUBSCRIBE = 'CHECK_SUBSCRIPTIONS_SUBSCRIBE';

// Publishing
var CLEAR_PUBLISH = exports.CLEAR_PUBLISH = 'CLEAR_PUBLISH';
var UPDATE_PUBLISH_FORM = exports.UPDATE_PUBLISH_FORM = 'UPDATE_PUBLISH_FORM';
var PUBLISH_START = exports.PUBLISH_START = 'PUBLISH_START';
var PUBLISH_SUCCESS = exports.PUBLISH_SUCCESS = 'PUBLISH_SUCCESS';
var PUBLISH_FAIL = exports.PUBLISH_FAIL = 'PUBLISH_FAIL';
var CLEAR_PUBLISH_ERROR = exports.CLEAR_PUBLISH_ERROR = 'CLEAR_PUBLISH_ERROR';
var REMOVE_PENDING_PUBLISH = exports.REMOVE_PENDING_PUBLISH = 'REMOVE_PENDING_PUBLISH';
var DO_PREPARE_EDIT = exports.DO_PREPARE_EDIT = 'DO_PREPARE_EDIT';

// Notifications
var CREATE_NOTIFICATION = exports.CREATE_NOTIFICATION = 'CREATE_NOTIFICATION';
var EDIT_NOTIFICATION = exports.EDIT_NOTIFICATION = 'EDIT_NOTIFICATION';
var DELETE_NOTIFICATION = exports.DELETE_NOTIFICATION = 'DELETE_NOTIFICATION';
var CREATE_TOAST = exports.CREATE_TOAST = 'CREATE_TOAST';
var DISMISS_TOAST = exports.DISMISS_TOAST = 'DISMISS_TOAST';
var CREATE_ERROR = exports.CREATE_ERROR = 'CREATE_ERROR';
var DISMISS_ERROR = exports.DISMISS_ERROR = 'DISMISS_ERROR';

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

exports.parseURI = parseURI;
exports.buildURI = buildURI;
exports.normalizeURI = normalizeURI;
exports.isURIValid = isURIValid;
exports.isNameValid = isNameValid;
exports.isURIClaimable = isURIClaimable;
exports.convertToShareLink = convertToShareLink;
var channelNameMinLength = 1;
var claimIdMaxLength = 40;

var regexInvalidURI = exports.regexInvalidURI = /[^A-Za-z0-9-]/g;
var regexAddress = exports.regexAddress = /^(b|r)(?=[^0OIl]{32,33})[0-9A-Za-z]{32,33}$/;

/**
 * Parses a LBRY name into its component parts. Throws errors with user-friendly
 * messages for invalid names.
 *
 * N.B. that "name" indicates the value in the name position of the URI. For
 * claims for channel content, this will actually be the channel name, and
 * the content name is in the path (e.g. lbry://@channel/content)
 *
 * In most situations, you'll want to use the contentName and channelName keys
 * and ignore the name key.
 *
 * Returns a dictionary with keys:
 *   - name (string): The value in the "name" position in the URI. Note that this
 *                    could be either content name or channel name; see above.
 *   - path (string, if persent)
 *   - claimSequence (int, if present)
 *   - bidPosition (int, if present)
 *   - claimId (string, if present)
 *   - isChannel (boolean)
 *   - contentName (string): For anon claims, the name; for channel claims, the path
 *   - channelName (string, if present): Channel name without @
 */
function parseURI(URI) {
  var requireProto = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  // Break into components. Empty sub-matches are converted to null
  var componentsRegex = new RegExp('^((?:lbry://)?)' + // protocol
  '([^:$#/]*)' + // claim name (stops at the first separator or end)
  '([:$#]?)([^/]*)' + // modifier separator, modifier (stops at the first path separator or end)
  '(/?)(.*)' // path separator, path
  );

  var _componentsRegex$exec = componentsRegex.exec(URI).slice(1).map(function (match) {
    return match || null;
  }),
      _componentsRegex$exec2 = _slicedToArray(_componentsRegex$exec, 6),
      proto = _componentsRegex$exec2[0],
      claimName = _componentsRegex$exec2[1],
      modSep = _componentsRegex$exec2[2],
      modVal = _componentsRegex$exec2[3],
      pathSep = _componentsRegex$exec2[4],
      path = _componentsRegex$exec2[5];

  var contentName = void 0;

  // Validate protocol
  if (requireProto && !proto) {
    throw new Error(__('LBRY URIs must include a protocol prefix (lbry://).'));
  }

  // Validate and process name
  if (!claimName) {
    throw new Error(__('URI does not include name.'));
  }

  var isChannel = claimName.startsWith('@');
  var channelName = isChannel ? claimName.slice(1) : claimName;

  if (isChannel) {
    if (!channelName) {
      throw new Error(__('No channel name after @.'));
    }

    if (channelName.length < channelNameMinLength) {
      throw new Error(__('Channel names must be at least %s characters.', channelNameMinLength));
    }

    contentName = path;
  }

  var nameBadChars = (channelName || claimName).match(regexInvalidURI);
  if (nameBadChars) {
    throw new Error(__('Invalid character %s in name: %s.', nameBadChars.length === 1 ? '' : 's', nameBadChars.join(', ')));
  }

  // Validate and process modifier (claim ID, bid position or claim sequence)
  var claimId = void 0;
  var claimSequence = void 0;
  var bidPosition = void 0;
  if (modSep) {
    if (!modVal) {
      throw new Error(__('No modifier provided after separator %s.', modSep));
    }

    if (modSep === '#') {
      claimId = modVal;
    } else if (modSep === ':') {
      claimSequence = modVal;
    } else if (modSep === '$') {
      bidPosition = modVal;
    }
  }

  if (claimId && (claimId.length > claimIdMaxLength || !claimId.match(/^[0-9a-f]+$/))) {
    throw new Error(__('Invalid claim ID %s.', claimId));
  }

  if (claimSequence && !claimSequence.match(/^-?[1-9][0-9]*$/)) {
    throw new Error(__('Claim sequence must be a number.'));
  }

  if (bidPosition && !bidPosition.match(/^-?[1-9][0-9]*$/)) {
    throw new Error(__('Bid position must be a number.'));
  }

  // Validate and process path
  if (path) {
    if (!isChannel) {
      throw new Error(__('Only channel URIs may have a path.'));
    }

    var pathBadChars = path.match(regexInvalidURI);
    if (pathBadChars) {
      throw new Error(__('Invalid character in path: %s', pathBadChars.join(', ')));
    }

    contentName = path;
  } else if (pathSep) {
    throw new Error(__('No path provided after /'));
  }

  return _extends({
    claimName: claimName,
    path: path,
    isChannel: isChannel
  }, contentName ? { contentName: contentName } : {}, channelName ? { channelName: channelName } : {}, claimSequence ? { claimSequence: parseInt(claimSequence, 10) } : {}, bidPosition ? { bidPosition: parseInt(bidPosition, 10) } : {}, claimId ? { claimId: claimId } : {}, path ? { path: path } : {});
}

/**
 * Takes an object in the same format returned by parse() and builds a URI.
 *
 * The channelName key will accept names with or without the @ prefix.
 */
function buildURI(URIObj) {
  var includeProto = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var protoDefault = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'lbry://';
  var claimId = URIObj.claimId,
      claimSequence = URIObj.claimSequence,
      bidPosition = URIObj.bidPosition,
      contentName = URIObj.contentName,
      channelName = URIObj.channelName;
  var claimName = URIObj.claimName,
      path = URIObj.path;


  if (channelName) {
    var channelNameFormatted = channelName.startsWith('@') ? channelName : '@' + channelName;
    if (!claimName) {
      claimName = channelNameFormatted;
    } else if (claimName !== channelNameFormatted) {
      throw new Error(__('Received a channel content URI, but claim name and channelName do not match. "name" represents the value in the name position of the URI (lbry://name...), which for channel content will be the channel name. In most cases, to construct a channel URI you should just pass channelName and contentName.'));
    }
  }

  if (contentName) {
    if (!claimName) {
      claimName = contentName;
    } else if (!path) {
      path = contentName;
    }
    if (path && path !== contentName) {
      throw new Error(__('Path and contentName do not match. Only one is required; most likely you wanted contentName.'));
    }
  }

  return (includeProto ? protoDefault : '') + claimName + (claimId ? '#' + claimId : '') + (claimSequence ? ':' + claimSequence : '') + (bidPosition ? '' + bidPosition : '') + (path ? '/' + path : '');
}

/* Takes a parseable LBRY URI and converts it to standard, canonical format */
function normalizeURI(URI) {
  var _parseURI = parseURI(URI),
      claimName = _parseURI.claimName,
      path = _parseURI.path,
      bidPosition = _parseURI.bidPosition,
      claimSequence = _parseURI.claimSequence,
      claimId = _parseURI.claimId;

  return buildURI({ claimName: claimName, path: path, claimSequence: claimSequence, bidPosition: bidPosition, claimId: claimId });
}

function isURIValid(URI) {
  var parts = void 0;
  try {
    parts = parseURI(normalizeURI(URI));
  } catch (error) {
    return false;
  }
  return parts && parts.claimName;
}

function isNameValid(claimName) {
  var checkCase = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

  var regexp = new RegExp('^[a-z0-9-]+$', checkCase ? '' : 'i');
  return regexp.test(claimName);
}

function isURIClaimable(URI) {
  var parts = void 0;
  try {
    parts = parseURI(normalizeURI(URI));
  } catch (error) {
    return false;
  }
  return parts && parts.claimName && !parts.claimId && !parts.bidPosition && !parts.claimSequence && !parts.isChannel && !parts.path;
}

function convertToShareLink(URI) {
  var _parseURI2 = parseURI(URI),
      claimName = _parseURI2.claimName,
      path = _parseURI2.path,
      bidPosition = _parseURI2.bidPosition,
      claimSequence = _parseURI2.claimSequence,
      claimId = _parseURI2.claimId;

  return buildURI({ claimName: claimName, path: path, claimSequence: claimSequence, bidPosition: bidPosition, claimId: claimId }, true, 'https://open.lbry.io/');
}

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.doToast = doToast;
exports.doDismissToast = doDismissToast;
exports.doError = doError;
exports.doDismissError = doDismissError;

var _action_types = __webpack_require__(2);

var ACTIONS = _interopRequireWildcard(_action_types);

var _v = __webpack_require__(5);

var _v2 = _interopRequireDefault(_v);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

// @flow
/*:: import type { ToastParams } from 'types/Notification';*/
function doToast(params /*: ToastParams*/) {
  if (!params) {
    throw Error("'params' object is required to create a toast notification");
  }

  return {
    type: ACTIONS.CREATE_TOAST,
    data: {
      id: (0, _v2.default)(),
      params: params
    }
  };
}

function doDismissToast() {
  return {
    type: ACTIONS.DISMISS_TOAST
  };
}

function doError(error /*: string | {}*/) {
  return {
    type: ACTIONS.CREATE_ERROR,
    data: {
      error: error
    }
  };
}

function doDismissError() {
  return {
    type: ACTIONS.DISMISS_ERROR
  };
}

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var rng = __webpack_require__(6);
var bytesToUuid = __webpack_require__(7);

function v4(options, buf, offset) {
  var i = buf && offset || 0;

  if (typeof(options) == 'string') {
    buf = options === 'binary' ? new Array(16) : null;
    options = null;
  }
  options = options || {};

  var rnds = options.random || (options.rng || rng)();

  // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`
  rnds[6] = (rnds[6] & 0x0f) | 0x40;
  rnds[8] = (rnds[8] & 0x3f) | 0x80;

  // Copy bytes to buffer, if provided
  if (buf) {
    for (var ii = 0; ii < 16; ++ii) {
      buf[i + ii] = rnds[ii];
    }
  }

  return buf || bytesToUuid(rnds);
}

module.exports = v4;


/***/ }),
/* 6 */
/***/ (function(module, exports) {

// Unique ID creation requires a high quality random # generator.  In the
// browser this is a little complicated due to unknown quality of Math.random()
// and inconsistent support for the `crypto` API.  We do the best we can via
// feature-detection

// getRandomValues needs to be invoked in a context where "this" is a Crypto
// implementation. Also, find the complete implementation of crypto on IE11.
var getRandomValues = (typeof(crypto) != 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto)) ||
                      (typeof(msCrypto) != 'undefined' && typeof window.msCrypto.getRandomValues == 'function' && msCrypto.getRandomValues.bind(msCrypto));

if (getRandomValues) {
  // WHATWG crypto RNG - http://wiki.whatwg.org/wiki/Crypto
  var rnds8 = new Uint8Array(16); // eslint-disable-line no-undef

  module.exports = function whatwgRNG() {
    getRandomValues(rnds8);
    return rnds8;
  };
} else {
  // Math.random()-based (RNG)
  //
  // If all else fails, use Math.random().  It's fast, but is of unspecified
  // quality.
  var rnds = new Array(16);

  module.exports = function mathRNG() {
    for (var i = 0, r; i < 16; i++) {
      if ((i & 0x03) === 0) r = Math.random() * 0x100000000;
      rnds[i] = r >>> ((i & 0x03) << 3) & 0xff;
    }

    return rnds;
  };
}


/***/ }),
/* 7 */
/***/ (function(module, exports) {

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */
var byteToHex = [];
for (var i = 0; i < 256; ++i) {
  byteToHex[i] = (i + 0x100).toString(16).substr(1);
}

function bytesToUuid(buf, offset) {
  var i = offset || 0;
  var bth = byteToHex;
  // join used to fix memory issue caused by concatenation: https://bugs.chromium.org/p/v8/issues/detail?id=3175#c4
  return ([bth[buf[i++]], bth[buf[i++]], 
	bth[buf[i++]], bth[buf[i++]], '-',
	bth[buf[i++]], bth[buf[i++]], '-',
	bth[buf[i++]], bth[buf[i++]], '-',
	bth[buf[i++]], bth[buf[i++]], '-',
	bth[buf[i++]], bth[buf[i++]],
	bth[buf[i++]], bth[buf[i++]],
	bth[buf[i++]], bth[buf[i++]]]).join('');
}

module.exports = bytesToUuid;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

exports.doResolveUris = doResolveUris;
exports.doResolveUri = doResolveUri;
exports.doFetchClaimListMine = doFetchClaimListMine;
exports.doAbandonClaim = doAbandonClaim;
exports.doFetchClaimsByChannel = doFetchClaimsByChannel;
exports.doFetchClaimCountByChannel = doFetchClaimCountByChannel;

var _action_types = __webpack_require__(2);

var ACTIONS = _interopRequireWildcard(_action_types);

var _lbry = __webpack_require__(9);

var _lbry2 = _interopRequireDefault(_lbry);

var _lbryURI = __webpack_require__(3);

var _notifications = __webpack_require__(4);

var _claims = __webpack_require__(12);

var _wallet = __webpack_require__(19);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function doResolveUris(uris) {
  var returnCachedClaims = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  return function (dispatch, getState) {
    var normalizedUris = uris.map(_lbryURI.normalizeURI);
    var state = getState();

    var resolvingUris = (0, _claims.selectResolvingUris)(state);
    var claimsByUri = (0, _claims.selectClaimsByUri)(state);
    var urisToResolve = normalizedUris.filter(function (uri) {
      if (resolvingUris.includes(uri)) {
        return false;
      }

      return returnCachedClaims ? !claimsByUri[uri] : true;
    });

    if (urisToResolve.length === 0) {
      return;
    }

    dispatch({
      type: ACTIONS.RESOLVE_URIS_STARTED,
      data: { uris: normalizedUris }
    });

    var resolveInfo = {};
    _lbry2.default.resolve({ urls: urisToResolve }).then(function (result) {
      Object.entries(result).forEach(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2),
            uri = _ref2[0],
            uriResolveInfo = _ref2[1];

        var fallbackResolveInfo = {
          claim: null,
          claimsInChannel: null,
          certificate: null
        };

        var _ref3 = uriResolveInfo && !uriResolveInfo.error ? uriResolveInfo : fallbackResolveInfo,
            claim = _ref3.claim,
            certificate = _ref3.certificate,
            claimsInChannel = _ref3.claims_in_channel;

        resolveInfo[uri] = { claim: claim, certificate: certificate, claimsInChannel: claimsInChannel };
      });

      dispatch({
        type: ACTIONS.RESOLVE_URIS_COMPLETED,
        data: { resolveInfo: resolveInfo }
      });
    });
  };
}

function doResolveUri(uri) {
  return doResolveUris([uri]);
}

function doFetchClaimListMine() {
  return function (dispatch) {
    dispatch({
      type: ACTIONS.FETCH_CLAIM_LIST_MINE_STARTED
    });

    _lbry2.default.claim_list_mine().then(function (claims) {
      dispatch({
        type: ACTIONS.FETCH_CLAIM_LIST_MINE_COMPLETED,
        data: {
          claims: claims
        }
      });
    });
  };
}

function doAbandonClaim(txid, nout) {
  return function (dispatch, getState) {
    var state = getState();
    var myClaims = (0, _claims.selectMyClaimsRaw)(state);

    var _myClaims$find = myClaims.find(function (claim) {
      return claim.txid === txid && claim.nout === nout;
    }),
        claimId = _myClaims$find.claim_id;

    dispatch({
      type: ACTIONS.ABANDON_CLAIM_STARTED,
      data: {
        claimId: claimId
      }
    });

    var errorCallback = function errorCallback() {
      dispatch((0, _notifications.doToast)({
        message: 'Transaction failed',
        isError: true
      }));
    };

    var successCallback = function successCallback(results) {
      if (results.success === true) {
        dispatch({
          type: ACTIONS.ABANDON_CLAIM_SUCCEEDED,
          data: {
            claimId: claimId
          }
        });
        dispatch((0, _notifications.doToast)({
          message: 'Successfully abandoned your claim'
        }));

        // After abandoning, call claim_list_mine to show the claim as abandoned
        // Also fetch transactions to show the new abandon transaction
        dispatch(doFetchClaimListMine());
        dispatch((0, _wallet.doFetchTransactions)());
      } else {
        dispatch((0, _notifications.doToast)({
          message: 'Error abandoning claim',
          isError: true
        }));
      }
    };

    _lbry2.default.claim_abandon({
      txid: txid,
      nout: nout
    }).then(successCallback, errorCallback);
  };
}

function doFetchClaimsByChannel(uri, page) {
  return function (dispatch) {
    dispatch({
      type: ACTIONS.FETCH_CHANNEL_CLAIMS_STARTED,
      data: { uri: uri, page: page }
    });

    _lbry2.default.claim_list_by_channel({ uri: uri, page: page || 1 }).then(function (result) {
      var claimResult = result[uri] || {};
      var claimsInChannel = claimResult.claims_in_channel,
          returnedPage = claimResult.returned_page;


      dispatch({
        type: ACTIONS.FETCH_CHANNEL_CLAIMS_COMPLETED,
        data: {
          uri: uri,
          claims: claimsInChannel || [],
          page: returnedPage || undefined
        }
      });
    });
  };
}

function doFetchClaimCountByChannel(uri) {
  return function (dispatch) {
    dispatch({
      type: ACTIONS.FETCH_CHANNEL_CLAIM_COUNT_STARTED,
      data: { uri: uri }
    });

    _lbry2.default.claim_list_by_channel({ uri: uri }).then(function (result) {
      var claimResult = result[uri];
      var totalClaims = claimResult ? claimResult.claims_in_channel : 0;

      dispatch({
        type: ACTIONS.FETCH_CHANNEL_CLAIM_COUNT_COMPLETED,
        data: {
          uri: uri,
          totalClaims: totalClaims
        }
      });
    });
  };
}

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; // @flow


__webpack_require__(10);

var CHECK_DAEMON_STARTED_TRY_NUMBER = 200;

var Lbry = {
  isConnected: false,
  daemonConnectionString: 'http://localhost:5279',
  pendingPublishTimeout: 20 * 60 * 1000
};

function checkAndParse(response) {
  if (response.status >= 200 && response.status < 300) {
    return response.json();
  }
  return response.json().then(function (json) {
    var error = void 0;
    if (json.error) {
      var errorMessage = _typeof(json.error) === 'object' ? json.error.message : json.error;
      error = new Error(errorMessage);
    } else {
      error = new Error('Protocol error with unknown response signature');
    }
    return Promise.reject(error);
  });
}

function apiCall(method /*: string*/, params /*: ?{}*/, resolve /*: Function*/, reject /*: Function*/) {
  var counter = new Date().getTime();
  var options = {
    method: 'POST',
    body: JSON.stringify({
      jsonrpc: '2.0',
      method: method,
      params: params,
      id: counter
    })
  };

  return fetch(Lbry.daemonConnectionString, options).then(checkAndParse).then(function (response) {
    var error = response.error || response.result && response.result.error;

    if (error) {
      return reject(error);
    }
    return resolve(response.result);
  }).catch(reject);
}

var daemonCallWithResult = function daemonCallWithResult(name) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return new Promise(function (resolve, reject) {
    apiCall(name, params, function (result) {
      resolve(result);
    }, reject);
  });
};

// blobs
Lbry.blob_delete = function () {
  var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return daemonCallWithResult('blob_delete', params);
};
Lbry.blob_list = function () {
  var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return daemonCallWithResult('blob_list', params);
};

// core
Lbry.status = function () {
  var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return daemonCallWithResult('status', params);
};
Lbry.version = function () {
  return daemonCallWithResult('version', {});
};
Lbry.file_delete = function () {
  var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return daemonCallWithResult('file_delete', params);
};
Lbry.file_set_status = function () {
  var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return daemonCallWithResult('file_set_status', params);
};
Lbry.stop = function () {
  return daemonCallWithResult('stop', {});
};

// claims
Lbry.claim_list_by_channel = function () {
  var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return daemonCallWithResult('claim_list_by_channel', params);
};

// wallet
Lbry.account_balance = function () {
  var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return daemonCallWithResult('account_balance', params);
};
Lbry.account_decrypt = function () {
  return daemonCallWithResult('account_decrypt', {});
};
Lbry.account_encrypt = function () {
  var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return daemonCallWithResult('account_encrypt', params);
};
Lbry.account_list = function () {
  var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return daemonCallWithResult('account_list', params);
};
Lbry.address_is_mine = function () {
  var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return daemonCallWithResult('address_is_mine', params);
};
Lbry.wallet_lock = function () {
  return daemonCallWithResult('wallet_lock', {});
};
Lbry.address_unused = function () {
  var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return daemonCallWithResult('address_unused', params);
};
Lbry.wallet_send = function () {
  var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return daemonCallWithResult('wallet_send', params);
};
Lbry.account_unlock = function () {
  var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return daemonCallWithResult('account_unlock', params);
};
Lbry.address_unused = function () {
  return daemonCallWithResult('address_unused', {});
};
Lbry.claim_tip = function () {
  var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return daemonCallWithResult('claim_tip', params);
};

// transactions
Lbry.transaction_list = function () {
  var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return daemonCallWithResult('transaction_list', params);
};
Lbry.utxo_release = function () {
  var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return daemonCallWithResult('utxo_release', params);
};

Lbry.connectPromise = null;
Lbry.connect = function () {
  if (Lbry.connectPromise === null) {
    Lbry.connectPromise = new Promise(function (resolve, reject) {
      var tryNum = 0;
      // Check every half second to see if the daemon is accepting connections
      function checkDaemonStarted() {
        tryNum += 1;
        Lbry.status().then(resolve).catch(function () {
          if (tryNum <= CHECK_DAEMON_STARTED_TRY_NUMBER) {
            setTimeout(checkDaemonStarted, tryNum < 50 ? 400 : 1000);
          } else {
            reject(new Error('Unable to connect to LBRY'));
          }
        });
      }

      checkDaemonStarted();
    });
  }

  return Lbry.connectPromise;
};

Lbry.getMediaType = function (contentType, extname) {
  if (extname) {
    var formats = [[/^(mp4|m4v|webm|flv|f4v|ogv)$/i, 'video'], [/^(mp3|m4a|aac|wav|flac|ogg|opus)$/i, 'audio'], [/^(html|htm|xml|pdf|odf|doc|docx|md|markdown|txt|epub|org)$/i, 'document'], [/^(stl|obj|fbx|gcode)$/i, '3D-file']];
    var res = formats.reduce(function (ret, testpair) {
      switch (testpair[0].test(ret)) {
        case true:
          return testpair[1];
        default:
          return ret;
      }
    }, extname);
    return res === extname ? 'unknown' : res;
  } else if (contentType) {
    return (/^[^/]+/.exec(contentType)[0]
    );
  }
  return 'unknown';
};

/**
 * Wrappers for API methods to simulate missing or future behavior. Unlike the old-style stubs,
 * these are designed to be transparent wrappers around the corresponding API methods.
 */

/**
 * Returns results from the file_list API method, plus dummy entries for pending publishes.
 * (If a real publish with the same name is found, the pending publish will be ignored and removed.)
 */
Lbry.file_list = function () {
  var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return new Promise(function (resolve, reject) {
    apiCall('file_list', params, function (fileInfos) {
      resolve(fileInfos);
    }, reject);
  });
};

Lbry.claim_list_mine = function () {
  var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return new Promise(function (resolve, reject) {
    apiCall('claim_list_mine', params, function (claims) {
      resolve(claims);
    }, reject);
  });
};

Lbry.get = function () {
  var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return new Promise(function (resolve, reject) {
    apiCall('get', params, function (streamInfo) {
      resolve(streamInfo);
    }, reject);
  });
};

Lbry.resolve = function () {
  var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return new Promise(function (resolve, reject) {
    apiCall('resolve', params, function (data) {
      resolve(data || {});
    }, reject);
  });
};

Lbry.publish = function () {
  var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return new Promise(function (resolve, reject) {
    if (Lbry.overrides.publish) {
      Lbry.overrides.publish(params).then(resolve, reject);
    } else {
      apiCall('publish', params, resolve, reject);
    }
  });
};

// Allow overriding Lbry methods
Lbry.overrides = {};
Lbry.setOverride = function (methodName, newMethod) {
  Lbry.overrides[methodName] = newMethod;
};

// Allow overriding daemon connection string (e.g. to `/api/proxy` for lbryweb)
Lbry.setDaemonConnectionString = function (value) {
  Lbry.daemonConnectionString = value;
};

var lbryProxy = new Proxy(Lbry, {
  get: function get(target, name) {
    if (name in target) {
      return target[name];
    }

    return function () {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return new Promise(function (resolve, reject) {
        apiCall(name, params, resolve, reject);
      });
    };
  }
});

exports.default = lbryProxy;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/*
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not
 * use this file except in compliance with the License. You may obtain a copy of
 * the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations under
 * the License.
 */




(function(scope) {
  if (scope['Proxy']) {
    return;
  }
  let lastRevokeFn = null;

  /**
   * @param {*} o
   * @return {boolean} whether this is probably a (non-null) Object
   */
  function isObject(o) {
    return o ? (typeof o == 'object' || typeof o == 'function') : false;
  }

  /**
   * @constructor
   * @param {!Object} target
   * @param {{apply, construct, get, set}} handler
   */
  scope.Proxy = function(target, handler) {
    if (!isObject(target) || !isObject(handler)) {
      throw new TypeError('Cannot create proxy with a non-object as target or handler');
    }

    // Construct revoke function, and set lastRevokeFn so that Proxy.revocable can steal it.
    // The caller might get the wrong revoke function if a user replaces or wraps scope.Proxy
    // to call itself, but that seems unlikely especially when using the polyfill.
    let throwRevoked = function() {};
    lastRevokeFn = function() {
      throwRevoked = function(trap) {
        throw new TypeError(`Cannot perform '${trap}' on a proxy that has been revoked`);
      };
    };

    // Fail on unsupported traps: Chrome doesn't do this, but ensure that users of the polyfill
    // are a bit more careful. Copy the internal parts of handler to prevent user changes.
    let unsafeHandler = handler;
    handler = {'get': null, 'set': null, 'apply': null, 'construct': null};
    for (let k in unsafeHandler) {
      if (!(k in handler)) {
        throw new TypeError(`Proxy polyfill does not support trap '${k}'`);
      }
      handler[k] = unsafeHandler[k];
    }
    if (typeof unsafeHandler == 'function') {
      // Allow handler to be a function (which has an 'apply' method). This matches what is
      // probably a bug in native versions. It treats the apply call as a trap to be configured.
      handler.apply = unsafeHandler.apply.bind(unsafeHandler);
    }

    // Define proxy as this, or a Function (if either it's callable, or apply is set).
    // TODO(samthor): Closure compiler doesn't know about 'construct', attempts to rename it.
    let proxy = this;
    let isMethod = false;
    let targetIsFunction = typeof target == 'function';
    if (handler.apply || handler['construct'] || targetIsFunction) {
      proxy = function Proxy() {
        let usingNew = (this && this.constructor === proxy);
        throwRevoked(usingNew ? 'construct' : 'apply');

        if (usingNew && handler['construct']) {
          return handler['construct'].call(this, target, arguments);
        } else if (!usingNew && handler.apply) {
          return handler.apply(target, this, arguments);
        } else if (targetIsFunction) {
          // since the target was a function, fallback to calling it directly.
          if (usingNew) {
            // inspired by answers to https://stackoverflow.com/q/1606797
            let all = Array.prototype.slice.call(arguments);
            all.unshift(target);  // pass class as first arg to constructor, although irrelevant
            // nb. cast to convince Closure compiler that this is a constructor
            let f = /** @type {!Function} */ (target.bind.apply(target, all));
            return new f();
          }
          return target.apply(this, arguments);
        }
        throw new TypeError(usingNew ? 'not a constructor' : 'not a function');
      };
      isMethod = true;
    }

    // Create default getters/setters. Create different code paths as handler.get/handler.set can't
    // change after creation.
    let getter = handler.get ? function(prop) {
      throwRevoked('get');
      return handler.get(this, prop, proxy);
    } : function(prop) {
      throwRevoked('get');
      return this[prop];
    };
    let setter = handler.set ? function(prop, value) {
      throwRevoked('set');
      let status = handler.set(this, prop, value, proxy);
      if (!status) {
        // TODO(samthor): If the calling code is in strict mode, throw TypeError.
        // It's (sometimes) possible to work this out, if this code isn't strict- try to load the
        // callee, and if it's available, that code is non-strict. However, this isn't exhaustive.
      }
    } : function(prop, value) {
      throwRevoked('set');
      this[prop] = value;
    };

    // Clone direct properties (i.e., not part of a prototype).
    let propertyNames = Object.getOwnPropertyNames(target);
    let propertyMap = {};
    propertyNames.forEach(function(prop) {
      if (isMethod && prop in proxy) {
        return;  // ignore properties already here, e.g. 'bind', 'prototype' etc
      }
      let real = Object.getOwnPropertyDescriptor(target, prop);
      let desc = {
        enumerable: !!real.enumerable,
        get: getter.bind(target, prop),
        set: setter.bind(target, prop),
      };
      Object.defineProperty(proxy, prop, desc);
      propertyMap[prop] = true;
    });

    // Set the prototype, or clone all prototype methods (always required if a getter is provided).
    // TODO(samthor): We don't allow prototype methods to be set. It's (even more) awkward.
    // An alternative here would be to _just_ clone methods to keep behavior consistent.
    let prototypeOk = true;
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(proxy, Object.getPrototypeOf(target));
    } else if (proxy.__proto__) {
      proxy.__proto__ = target.__proto__;
    } else {
      prototypeOk = false;
    }
    if (handler.get || !prototypeOk) {
      for (let k in target) {
        if (propertyMap[k]) {
          continue;
        }
        Object.defineProperty(proxy, k, {get: getter.bind(target, k)});
      }
    }

    // The Proxy polyfill cannot handle adding new properties. Seal the target and proxy.
    Object.seal(target);
    Object.seal(proxy);

    return proxy;  // nb. if isMethod is true, proxy != this
  };

  scope.Proxy.revocable = function(target, handler) {
    let p = new scope.Proxy(target, handler);
    return {'proxy': p, 'revoke': lastRevokeFn};
  };

  scope.Proxy['revocable'] = scope.Proxy.revocable;
  scope['Proxy'] = scope.Proxy;
})(typeof module !== 'undefined' && module['exports'] ? global : window);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(11)))

/***/ }),
/* 11 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeSelectChannelForClaimUri = exports.makeSelectFirstRecommendedFileForUri = exports.makeSelectRecommendedContentForUri = exports.makeSelectNsfwCountForChannel = exports.makeSelectNsfwCountFromUris = exports.makeSelectTotalPagesForChannel = exports.makeSelectTotalItemsForChannel = exports.selectChannelClaimCounts = exports.selectPlayingUri = exports.makeSelectIsUriResolving = exports.selectResolvingUris = exports.selectMyChannelClaims = exports.selectFetchingMyChannels = exports.selectMyClaimsOutpoints = exports.selectAllMyClaimsByOutpoint = exports.selectMyClaimsWithoutChannels = exports.selectMyClaims = exports.selectIsFetchingClaimListMine = exports.makeSelectContentTypeForUri = exports.makeSelectTitleForUri = exports.makeSelectMetadataForUri = exports.makeSelectClaimsInChannelForCurrentPageState = exports.makeSelectClaimsInChannelForCurrentPage = exports.makeSelectClaimsInChannelForPage = exports.makeSelectFetchingChannelClaims = exports.selectAllFetchingChannelClaims = exports.makeSelectClaimIsMine = exports.selectMyActiveClaims = exports.selectAbandoningIds = exports.selectMyClaimsRaw = exports.makeSelectClaimForUri = exports.makeSelectPendingByUri = exports.makeSelectClaimIsPending = exports.selectPendingClaims = exports.selectPendingById = exports.selectAllClaimsByChannel = exports.selectClaimsByUri = exports.selectCurrentChannelPage = exports.selectClaimsById = undefined;

var _lbryURI = __webpack_require__(3);

var _navigation = __webpack_require__(13);

var _search = __webpack_require__(17);

var _reselect = __webpack_require__(14);

var _claim = __webpack_require__(18);

var _query_params = __webpack_require__(15);

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var selectState = function selectState(state) {
  return state.claims || {};
};

var selectClaimsById = exports.selectClaimsById = (0, _reselect.createSelector)(selectState, function (state) {
  return state.byId || {};
});

var selectCurrentChannelPage = exports.selectCurrentChannelPage = (0, _reselect.createSelector)(selectState, function (state) {
  return state.currentChannelPage || 1;
});

var selectClaimsByUri = exports.selectClaimsByUri = (0, _reselect.createSelector)(selectState, selectClaimsById, function (state, byId) {
  var byUri = state.claimsByUri || {};
  var claims = {};

  Object.keys(byUri).forEach(function (uri) {
    var claimId = byUri[uri];

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
});

var selectAllClaimsByChannel = exports.selectAllClaimsByChannel = (0, _reselect.createSelector)(selectState, function (state) {
  return state.claimsByChannel || {};
});

var selectPendingById = exports.selectPendingById = (0, _reselect.createSelector)(selectState, function (state) {
  return state.pendingById || {};
});

var selectPendingClaims = exports.selectPendingClaims = (0, _reselect.createSelector)(selectState, function (state) {
  return Object.values(state.pendingById || []);
});

var makeSelectClaimIsPending = exports.makeSelectClaimIsPending = function makeSelectClaimIsPending(uri) {
  return (0, _reselect.createSelector)(selectPendingById, function (pendingById) {
    var _parseURI = (0, _lbryURI.parseURI)(uri),
        claimId = _parseURI.claimId;

    return Boolean(pendingById[claimId]);
  });
};

var makeSelectPendingByUri = exports.makeSelectPendingByUri = function makeSelectPendingByUri(uri) {
  return (0, _reselect.createSelector)(selectPendingById, function (pendingById) {
    var _parseURI2 = (0, _lbryURI.parseURI)(uri),
        claimId = _parseURI2.claimId;

    return pendingById[claimId];
  });
};

var makeSelectClaimForUri = exports.makeSelectClaimForUri = function makeSelectClaimForUri(uri) {
  return (0, _reselect.createSelector)(selectClaimsByUri, selectPendingById, function (byUri, pendingById) {
    // Check if a claim is pending first
    // It won't be in claimsByUri because resolving it will return nothing
    var _parseURI3 = (0, _lbryURI.parseURI)(uri),
        claimId = _parseURI3.claimId;

    var pendingClaim = pendingById[claimId];
    if (pendingClaim) {
      return pendingClaim;
    }

    return byUri && byUri[(0, _lbryURI.normalizeURI)(uri)];
  });
};

var selectMyClaimsRaw = exports.selectMyClaimsRaw = (0, _reselect.createSelector)(selectState, function (state) {
  return state.myClaims;
});

var selectAbandoningIds = exports.selectAbandoningIds = (0, _reselect.createSelector)(selectState, function (state) {
  return Object.keys(state.abandoningById || {});
});

var selectMyActiveClaims = exports.selectMyActiveClaims = (0, _reselect.createSelector)(selectMyClaimsRaw, selectAbandoningIds, function (claims, abandoningIds) {
  return new Set(claims && claims.map(function (claim) {
    return claim.claim_id;
  }).filter(function (claimId) {
    return Object.keys(abandoningIds).indexOf(claimId) === -1;
  }));
});

var makeSelectClaimIsMine = exports.makeSelectClaimIsMine = function makeSelectClaimIsMine(rawUri) {
  var uri = (0, _lbryURI.normalizeURI)(rawUri);
  return (0, _reselect.createSelector)(selectClaimsByUri, selectMyActiveClaims, function (claims, myClaims) {
    return claims && claims[uri] && claims[uri].claim_id && myClaims.has(claims[uri].claim_id);
  });
};

var selectAllFetchingChannelClaims = exports.selectAllFetchingChannelClaims = (0, _reselect.createSelector)(selectState, function (state) {
  return state.fetchingChannelClaims || {};
});

var makeSelectFetchingChannelClaims = exports.makeSelectFetchingChannelClaims = function makeSelectFetchingChannelClaims(uri) {
  return (0, _reselect.createSelector)(selectAllFetchingChannelClaims, function (fetching) {
    return fetching && fetching[uri];
  });
};

var makeSelectClaimsInChannelForPage = exports.makeSelectClaimsInChannelForPage = function makeSelectClaimsInChannelForPage(uri, page) {
  return (0, _reselect.createSelector)(selectClaimsById, selectAllClaimsByChannel, function (byId, allClaims) {
    var byChannel = allClaims[uri] || {};
    var claimIds = byChannel[page || 1];

    if (!claimIds) return claimIds;

    return claimIds.map(function (claimId) {
      return byId[claimId];
    });
  });
};

var makeSelectClaimsInChannelForCurrentPage = exports.makeSelectClaimsInChannelForCurrentPage = function makeSelectClaimsInChannelForCurrentPage(uri) {
  var pageSelector = (0, _navigation.makeSelectCurrentParam)('page');

  return (0, _reselect.createSelector)(selectClaimsById, selectAllClaimsByChannel, pageSelector, function (byId, allClaims, page) {
    var byChannel = allClaims[uri] || {};
    var claimIds = byChannel[page || 1];

    if (!claimIds) return claimIds;

    return claimIds.map(function (claimId) {
      return byId[claimId];
    });
  });
};

var makeSelectClaimsInChannelForCurrentPageState = exports.makeSelectClaimsInChannelForCurrentPageState = function makeSelectClaimsInChannelForCurrentPageState(uri) {
  return (0, _reselect.createSelector)(selectClaimsById, selectAllClaimsByChannel, selectCurrentChannelPage, function (byId, allClaims, page) {
    var byChannel = allClaims[uri] || {};
    var claimIds = byChannel[page || 1];

    if (!claimIds) return claimIds;

    return claimIds.map(function (claimId) {
      return byId[claimId];
    });
  });
};

var makeSelectMetadataForUri = exports.makeSelectMetadataForUri = function makeSelectMetadataForUri(uri) {
  return (0, _reselect.createSelector)(makeSelectClaimForUri(uri), function (claim) {
    var metadata = claim && claim.value && claim.value.stream && claim.value.stream.metadata;

    return metadata || (claim === undefined ? undefined : null);
  });
};

var makeSelectTitleForUri = exports.makeSelectTitleForUri = function makeSelectTitleForUri(uri) {
  return (0, _reselect.createSelector)(makeSelectMetadataForUri(uri), function (metadata) {
    return metadata && metadata.title;
  });
};

var makeSelectContentTypeForUri = exports.makeSelectContentTypeForUri = function makeSelectContentTypeForUri(uri) {
  return (0, _reselect.createSelector)(makeSelectClaimForUri(uri), function (claim) {
    var source = claim && claim.value && claim.value.stream && claim.value.stream.source;
    return source ? source.contentType : undefined;
  });
};

var selectIsFetchingClaimListMine = exports.selectIsFetchingClaimListMine = (0, _reselect.createSelector)(selectState, function (state) {
  return state.isFetchingClaimListMine;
});

var selectMyClaims = exports.selectMyClaims = (0, _reselect.createSelector)(selectMyActiveClaims, selectClaimsById, selectAbandoningIds, selectPendingClaims, function (myClaimIds, byId, abandoningIds, pendingClaims) {
  var claims = [];

  myClaimIds.forEach(function (id) {
    var claim = byId[id];

    if (claim && abandoningIds.indexOf(id) === -1) claims.push(claim);
  });

  return [].concat(claims, _toConsumableArray(pendingClaims));
});

var selectMyClaimsWithoutChannels = exports.selectMyClaimsWithoutChannels = (0, _reselect.createSelector)(selectMyClaims, function (myClaims) {
  return myClaims.filter(function (claim) {
    return !claim.name.match(/^@/);
  });
});

var selectAllMyClaimsByOutpoint = exports.selectAllMyClaimsByOutpoint = (0, _reselect.createSelector)(selectMyClaimsRaw, function (claims) {
  return new Set(claims && claims.length ? claims.map(function (claim) {
    return claim.txid + ':' + claim.nout;
  }) : null);
});

var selectMyClaimsOutpoints = exports.selectMyClaimsOutpoints = (0, _reselect.createSelector)(selectMyClaims, function (myClaims) {
  var outpoints = [];

  myClaims.forEach(function (claim) {
    return outpoints.push(claim.txid + ':' + claim.nout);
  });

  return outpoints;
});

var selectFetchingMyChannels = exports.selectFetchingMyChannels = (0, _reselect.createSelector)(selectState, function (state) {
  return state.fetchingMyChannels;
});

var selectMyChannelClaims = exports.selectMyChannelClaims = (0, _reselect.createSelector)(selectState, selectClaimsById, function (state, byId) {
  var ids = state.myChannelClaims || [];
  var claims = [];

  ids.forEach(function (id) {
    if (byId[id]) {
      // I'm not sure why this check is necessary, but it ought to be a quick fix for https://github.com/lbryio/lbry-desktop/issues/544
      claims.push(byId[id]);
    }
  });

  return claims;
});

var selectResolvingUris = exports.selectResolvingUris = (0, _reselect.createSelector)(selectState, function (state) {
  return state.resolvingUris || [];
});

var makeSelectIsUriResolving = exports.makeSelectIsUriResolving = function makeSelectIsUriResolving(uri) {
  return (0, _reselect.createSelector)(selectResolvingUris, function (resolvingUris) {
    return resolvingUris && resolvingUris.indexOf(uri) !== -1;
  });
};

var selectPlayingUri = exports.selectPlayingUri = (0, _reselect.createSelector)(selectState, function (state) {
  return state.playingUri;
});

var selectChannelClaimCounts = exports.selectChannelClaimCounts = (0, _reselect.createSelector)(selectState, function (state) {
  return state.channelClaimCounts || {};
});

var makeSelectTotalItemsForChannel = exports.makeSelectTotalItemsForChannel = function makeSelectTotalItemsForChannel(uri) {
  return (0, _reselect.createSelector)(selectChannelClaimCounts, function (byUri) {
    return byUri && byUri[uri];
  });
};

var makeSelectTotalPagesForChannel = exports.makeSelectTotalPagesForChannel = function makeSelectTotalPagesForChannel(uri) {
  var pageSize = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;
  return (0, _reselect.createSelector)(selectChannelClaimCounts, function (byUri) {
    return byUri && byUri[uri] && Math.ceil(byUri[uri] / pageSize);
  });
};

var makeSelectNsfwCountFromUris = exports.makeSelectNsfwCountFromUris = function makeSelectNsfwCountFromUris(uris) {
  return (0, _reselect.createSelector)(selectClaimsByUri, function (claims) {
    return uris.reduce(function (acc, uri) {
      var claim = claims[uri];
      if ((0, _claim.isClaimNsfw)(claim)) {
        return acc + 1;
      }
      return acc;
    }, 0);
  });
};

var makeSelectNsfwCountForChannel = exports.makeSelectNsfwCountForChannel = function makeSelectNsfwCountForChannel(uri) {
  var pageSelector = (0, _navigation.makeSelectCurrentParam)('page');

  return (0, _reselect.createSelector)(selectClaimsById, selectAllClaimsByChannel, pageSelector, function (byId, allClaims, page) {
    var byChannel = allClaims[uri] || {};
    var claimIds = byChannel[page || 1];

    if (!claimIds) return 0;

    return claimIds.reduce(function (acc, claimId) {
      var claim = byId[claimId];
      if ((0, _claim.isClaimNsfw)(claim)) {
        return acc + 1;
      }
      return acc;
    }, 0);
  });
};

var makeSelectRecommendedContentForUri = exports.makeSelectRecommendedContentForUri = function makeSelectRecommendedContentForUri(uri) {
  return (0, _reselect.createSelector)(makeSelectClaimForUri(uri), _search.selectSearchUrisByQuery, function (claim, searchUrisByQuery) {
    var atVanityURI = !uri.includes('#');

    var recommendedContent = void 0;
    if (claim) {
      // If we are at a vanity uri, build the full uri so we can properly filter
      var currentUri = atVanityURI ? (0, _lbryURI.buildURI)({ claimId: claim.claim_id, claimName: claim.name }) : uri;

      var title = claim.value.stream.metadata.title;


      var searchQuery = (0, _query_params.getSearchQueryString)(title.replace(/\//, ' '));

      var searchUris = searchUrisByQuery[searchQuery];
      if (searchUris) {
        searchUris = searchUris.filter(function (searchUri) {
          return searchUri !== currentUri;
        });
        recommendedContent = searchUris;
      }
    }

    return recommendedContent;
  });
};

var makeSelectFirstRecommendedFileForUri = exports.makeSelectFirstRecommendedFileForUri = function makeSelectFirstRecommendedFileForUri(uri) {
  return (0, _reselect.createSelector)(makeSelectRecommendedContentForUri(uri), function (recommendedContent) {
    return recommendedContent ? recommendedContent[0] : null;
  });
};

// Returns the associated channel uri for a given claim uri
var makeSelectChannelForClaimUri = exports.makeSelectChannelForClaimUri = function makeSelectChannelForClaimUri(uri) {
  var includePrefix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  return (0, _reselect.createSelector)(makeSelectClaimForUri(uri), function (claim) {
    if (!claim) {
      return null;
    }

    var channelName = claim.channel_name,
        value = claim.value;

    var channelClaimId = value && value.publisherSignature && value.publisherSignature.certificateId;

    return channelName && channelClaimId ? (0, _lbryURI.buildURI)({ channelName: channelName, claimId: channelClaimId }, includePrefix) : null;
  });
};

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.selectPageTitle = exports.selectActiveHistoryEntry = exports.selectHistoryStack = exports.selectHistoryIndex = exports.selectIsHome = exports.selectIsForwardDisabled = exports.selectIsBackDisabled = exports.selectPathAfterAuth = exports.makeSelectCurrentParam = exports.selectCurrentParams = exports.selectCurrentPage = exports.computePageFromPath = exports.selectCurrentPath = exports.selectState = undefined;

var _reselect = __webpack_require__(14);

var _query_params = __webpack_require__(15);

var selectState = exports.selectState = function selectState(state) {
  return state.navigation || {};
};

var selectCurrentPath = exports.selectCurrentPath = (0, _reselect.createSelector)(selectState, function (state) {
  return state.currentPath;
});

var computePageFromPath = exports.computePageFromPath = function computePageFromPath(path) {
  return path ? path.replace(/^\//, '').split('?')[0] : '';
};

var selectCurrentPage = exports.selectCurrentPage = (0, _reselect.createSelector)(selectCurrentPath, function (path) {
  return computePageFromPath(path);
});

var selectCurrentParams = exports.selectCurrentParams = (0, _reselect.createSelector)(selectCurrentPath, function (path) {
  if (path === undefined) return {};
  if (!path.match(/\?/)) return {};

  return (0, _query_params.parseQueryParams)(path.split('?')[1]);
});

var makeSelectCurrentParam = exports.makeSelectCurrentParam = function makeSelectCurrentParam(param) {
  return (0, _reselect.createSelector)(selectCurrentParams, function (params) {
    return params ? params[param] : undefined;
  });
};

var selectPathAfterAuth = exports.selectPathAfterAuth = (0, _reselect.createSelector)(selectState, function (state) {
  return state.pathAfterAuth;
});

var selectIsBackDisabled = exports.selectIsBackDisabled = (0, _reselect.createSelector)(selectState, function (state) {
  return state.index === 0;
});

var selectIsForwardDisabled = exports.selectIsForwardDisabled = (0, _reselect.createSelector)(selectState, function (state) {
  return state.index === state.stack.length - 1;
});

var selectIsHome = exports.selectIsHome = (0, _reselect.createSelector)(selectCurrentPage, function (page) {
  return page === 'discover';
});

var selectHistoryIndex = exports.selectHistoryIndex = (0, _reselect.createSelector)(selectState, function (state) {
  return state.index;
});

var selectHistoryStack = exports.selectHistoryStack = (0, _reselect.createSelector)(selectState, function (state) {
  return state.stack;
});

// returns current page attributes (scrollY, path)
var selectActiveHistoryEntry = exports.selectActiveHistoryEntry = (0, _reselect.createSelector)(selectState, function (state) {
  return state.stack[state.index];
});

var selectPageTitle = exports.selectPageTitle = (0, _reselect.createSelector)(selectCurrentPage, function (page) {
  switch (page) {
    default:
      return '';
  }
});

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.defaultMemoize = defaultMemoize;
exports.createSelectorCreator = createSelectorCreator;
exports.createStructuredSelector = createStructuredSelector;
function defaultEqualityCheck(a, b) {
  return a === b;
}

function areArgumentsShallowlyEqual(equalityCheck, prev, next) {
  if (prev === null || next === null || prev.length !== next.length) {
    return false;
  }

  // Do this in a for loop (and not a `forEach` or an `every`) so we can determine equality as fast as possible.
  var length = prev.length;
  for (var i = 0; i < length; i++) {
    if (!equalityCheck(prev[i], next[i])) {
      return false;
    }
  }

  return true;
}

function defaultMemoize(func) {
  var equalityCheck = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultEqualityCheck;

  var lastArgs = null;
  var lastResult = null;
  // we reference arguments instead of spreading them for performance reasons
  return function () {
    if (!areArgumentsShallowlyEqual(equalityCheck, lastArgs, arguments)) {
      // apply arguments instead of spreading for performance.
      lastResult = func.apply(null, arguments);
    }

    lastArgs = arguments;
    return lastResult;
  };
}

function getDependencies(funcs) {
  var dependencies = Array.isArray(funcs[0]) ? funcs[0] : funcs;

  if (!dependencies.every(function (dep) {
    return typeof dep === 'function';
  })) {
    var dependencyTypes = dependencies.map(function (dep) {
      return typeof dep;
    }).join(', ');
    throw new Error('Selector creators expect all input-selectors to be functions, ' + ('instead received the following types: [' + dependencyTypes + ']'));
  }

  return dependencies;
}

function createSelectorCreator(memoize) {
  for (var _len = arguments.length, memoizeOptions = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    memoizeOptions[_key - 1] = arguments[_key];
  }

  return function () {
    for (var _len2 = arguments.length, funcs = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      funcs[_key2] = arguments[_key2];
    }

    var recomputations = 0;
    var resultFunc = funcs.pop();
    var dependencies = getDependencies(funcs);

    var memoizedResultFunc = memoize.apply(undefined, [function () {
      recomputations++;
      // apply arguments instead of spreading for performance.
      return resultFunc.apply(null, arguments);
    }].concat(memoizeOptions));

    // If a selector is called with the exact same arguments we don't need to traverse our dependencies again.
    var selector = defaultMemoize(function () {
      var params = [];
      var length = dependencies.length;

      for (var i = 0; i < length; i++) {
        // apply arguments instead of spreading and mutate a local list of params for performance.
        params.push(dependencies[i].apply(null, arguments));
      }

      // apply arguments instead of spreading for performance.
      return memoizedResultFunc.apply(null, params);
    });

    selector.resultFunc = resultFunc;
    selector.recomputations = function () {
      return recomputations;
    };
    selector.resetRecomputations = function () {
      return recomputations = 0;
    };
    return selector;
  };
}

var createSelector = exports.createSelector = createSelectorCreator(defaultMemoize);

function createStructuredSelector(selectors) {
  var selectorCreator = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : createSelector;

  if (typeof selectors !== 'object') {
    throw new Error('createStructuredSelector expects first argument to be an object ' + ('where each property is a selector, instead received a ' + typeof selectors));
  }
  var objectKeys = Object.keys(selectors);
  return selectorCreator(objectKeys.map(function (key) {
    return selectors[key];
  }), function () {
    for (var _len3 = arguments.length, values = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      values[_key3] = arguments[_key3];
    }

    return values.reduce(function (composition, value, index) {
      composition[objectKeys[index]] = value;
      return composition;
    }, {});
  });
}

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getSearchQueryString = undefined;

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }(); // @flow


exports.parseQueryParams = parseQueryParams;
exports.toQueryString = toQueryString;

var _search = __webpack_require__(16);

var DEFAULT_SEARCH_RESULT_FROM = 0;
var DEFAULT_SEARCH_SIZE = 20;

function parseQueryParams(queryString /*: string*/) {
  if (queryString === '') return {};
  var parts = queryString.split('?').pop().split('&').map(function (p) {
    return p.split('=');
  });

  var params = {};
  parts.forEach(function (array) {
    var _array = _slicedToArray(array, 2),
        first = _array[0],
        second = _array[1];

    params[first] = second;
  });
  return params;
}

function toQueryString(params /*: { [string]: string | number }*/) {
  if (!params) return '';

  var parts = [];
  Object.keys(params).forEach(function (key) {
    if (Object.prototype.hasOwnProperty.call(params, key) && params[key]) {
      parts.push(key + '=' + params[key]);
    }
  });

  return parts.join('&');
}

var getSearchQueryString = exports.getSearchQueryString = function getSearchQueryString(query /*: string*/) {
  var options /*: any*/ = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var includeUserOptions /*: boolean*/ = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  var encodedQuery = encodeURIComponent(query);
  var queryParams = ['s=' + encodedQuery, 'size=' + (options.size || DEFAULT_SEARCH_SIZE), 'from=' + (options.from || DEFAULT_SEARCH_RESULT_FROM)];

  if (includeUserOptions) {
    queryParams.push('claimType=' + options[_search.SEARCH_OPTIONS.CLAIM_TYPE]);

    // If they are only searching for channels, strip out the media info
    if (options[_search.SEARCH_OPTIONS.CLAIM_TYPE] !== _search.SEARCH_OPTIONS.INCLUDE_CHANNELS) {
      queryParams.push('mediaType=' + [_search.SEARCH_OPTIONS.MEDIA_FILE, _search.SEARCH_OPTIONS.MEDIA_AUDIO, _search.SEARCH_OPTIONS.MEDIA_VIDEO, _search.SEARCH_OPTIONS.MEDIA_TEXT, _search.SEARCH_OPTIONS.MEDIA_IMAGE, _search.SEARCH_OPTIONS.MEDIA_APPLICATION].reduce(function (acc, currentOption) {
        return options[currentOption] ? '' + acc + currentOption + ',' : acc;
      }, ''));
    }
  }

  return queryParams.join('&');
};

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var SEARCH_TYPES = exports.SEARCH_TYPES = {
  FILE: 'file',
  CHANNEL: 'channel',
  SEARCH: 'search'
};

var SEARCH_OPTIONS = exports.SEARCH_OPTIONS = {
  RESULT_COUNT: 'size',
  CLAIM_TYPE: 'claimType',
  INCLUDE_FILES: 'file',
  INCLUDE_CHANNELS: 'channel',
  INCLUDE_FILES_AND_CHANNELS: 'file,channel',
  MEDIA_AUDIO: 'audio',
  MEDIA_VIDEO: 'video',
  MEDIA_TEXT: 'text',
  MEDIA_IMAGE: 'image',
  MEDIA_APPLICATION: 'application'
};

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeSelectQueryWithOptions = exports.selectSearchSuggestions = exports.selectSearchBarFocused = exports.selectWunderBarAddress = exports.makeSelectSearchUris = exports.selectSearchUrisByQuery = exports.selectIsSearching = exports.selectSearchQuery = exports.selectSuggestions = exports.selectSearchOptions = exports.selectSearchValue = exports.selectState = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _search = __webpack_require__(16);

var _query_params = __webpack_require__(15);

var _lbryURI = __webpack_require__(3);

var _navigation = __webpack_require__(13);

var _reselect = __webpack_require__(14);

// @flow
/*:: import type { SearchState, SearchOptions, SearchSuggestion } from 'types/Search';*/
/*:: type State = { search: SearchState };*/
var selectState = exports.selectState = function selectState(state /*: State*/) /*: SearchState*/ {
  return state.search;
};

var selectSearchValue /*: (state: State) => string*/ = exports.selectSearchValue = (0, _reselect.createSelector)(selectState, function (state) {
  return state.searchQuery;
});

var selectSearchOptions /*: (state: State) => SearchOptions*/ = exports.selectSearchOptions = (0, _reselect.createSelector)(selectState, function (state) {
  return state.options;
});

var selectSuggestions /*: (
                        state: State
                      ) => { [string]: Array<SearchSuggestion> }*/ = exports.selectSuggestions = (0, _reselect.createSelector)(selectState, function (state) {
  return state.suggestions;
});

var selectSearchQuery /*: (state: State) => ?string*/ = exports.selectSearchQuery = (0, _reselect.createSelector)(_navigation.selectCurrentPage, _navigation.selectCurrentParams, function (page /*: string*/, params /*: ?{ query: string }*/) {
  return page === 'search' ? params && params.query : null;
});

var selectIsSearching /*: (state: State) => boolean*/ = exports.selectIsSearching = (0, _reselect.createSelector)(selectState, function (state) {
  return state.searching;
});

var selectSearchUrisByQuery /*: (
                              state: State
                            ) => { [string]: Array<string> }*/ = exports.selectSearchUrisByQuery = (0, _reselect.createSelector)(selectState, function (state) {
  return state.urisByQuery;
});

var makeSelectSearchUris = exports.makeSelectSearchUris = function makeSelectSearchUris(query
// replace statement below is kind of ugly, and repeated in doSearch action
/*: string*/) /*: ((state: State) => Array<string>)*/ {
  return (0, _reselect.createSelector)(selectSearchUrisByQuery, function (byQuery) {
    return byQuery[query ? query.replace(/^lbry:\/\//i, '').replace(/\//, ' ') : query];
  });
};

var selectWunderBarAddress = exports.selectWunderBarAddress = (0, _reselect.createSelector)(_navigation.selectCurrentPage, selectSearchQuery, _navigation.selectCurrentParams, function (page /*: string*/, query /*: string*/, params /*: { uri: string }*/) {
  // only populate the wunderbar address if we are on the file/channel pages
  // or show the search query
  if (page === 'show') {
    return params.uri;
  }
  return query;
});

var selectSearchBarFocused /*: boolean*/ = exports.selectSearchBarFocused = (0, _reselect.createSelector)(selectState, function (state) {
  return state.focused;
});

var selectSearchSuggestions /*: Array<SearchSuggestion>*/ = exports.selectSearchSuggestions = (0, _reselect.createSelector)(selectSearchValue, selectSuggestions, function (query /*: string*/, suggestions /*: { [string]: Array<string> }*/) {
  if (!query) {
    return [];
  }

  var queryIsPrefix = query === 'lbry:' || query === 'lbry:/' || query === 'lbry://';

  if (query.startsWith('lbry://') && query !== 'lbry://') {
    // If it starts with a prefix, don't show any autocomplete results
    // They are probably typing/pasting in a lbry uri
    return [{
      value: query,
      type: _search.SEARCH_TYPES.FILE
    }];
  } else if (queryIsPrefix) {
    // If it is a prefix, wait until something else comes to figure out what to do
    return [];
  }

  var searchSuggestions = [];
  try {
    var _uri = (0, _lbryURI.normalizeURI)(query);

    var _parseURI = (0, _lbryURI.parseURI)(_uri),
        claimName = _parseURI.claimName,
        isChannel = _parseURI.isChannel;

    searchSuggestions.push({
      value: claimName,
      type: _search.SEARCH_TYPES.SEARCH
    }, {
      value: _uri,
      shorthand: isChannel ? claimName.slice(1) : claimName,
      type: isChannel ? _search.SEARCH_TYPES.CHANNEL : _search.SEARCH_TYPES.FILE
    });
  } catch (e) {
    searchSuggestions.push({
      value: query,
      type: _search.SEARCH_TYPES.SEARCH
    });
  }

  var apiSuggestions = suggestions[query] || [];
  if (apiSuggestions.length) {
    searchSuggestions = searchSuggestions.concat(apiSuggestions.filter(function (suggestion) {
      return suggestion !== query;
    }).map(function (suggestion) {
      // determine if it's a channel
      try {
        var _uri2 = (0, _lbryURI.normalizeURI)(suggestion);

        var _parseURI2 = (0, _lbryURI.parseURI)(_uri2),
            _claimName = _parseURI2.claimName,
            _isChannel = _parseURI2.isChannel;

        return {
          value: _uri2,
          shorthand: _isChannel ? _claimName.slice(1) : _claimName,
          type: _isChannel ? _search.SEARCH_TYPES.CHANNEL : _search.SEARCH_TYPES.FILE
        };
      } catch (e) {
        // search result includes some character that isn't valid in claim names
        return {
          value: suggestion,
          type: _search.SEARCH_TYPES.SEARCH
        };
      }
    }));
  }

  return searchSuggestions;
});

// Creates a query string based on the state in the search reducer
// Can be overrided by passing in custom sizes/from values for other areas pagination
var makeSelectQueryWithOptions = exports.makeSelectQueryWithOptions = function makeSelectQueryWithOptions(customQuery /*: ?string*/, customSize /*: ?number*/, customFrom // If it's a background search, don't use the users settings
/*: ?number*/) {
  var isBackgroundSearch /*: boolean*/ = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  return (0, _reselect.createSelector)(selectSearchQuery, selectSearchOptions, function (query, options) {
    var size = customSize || options[_search.SEARCH_OPTIONS.RESULT_COUNT];

    var queryString = (0, _query_params.getSearchQueryString)(customQuery || query, _extends({}, options, { size: size, from: customFrom }), !isBackgroundSearch);

    return queryString;
  });
};

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var isClaimNsfw = exports.isClaimNsfw = function isClaimNsfw(claim) {
  return claim && claim.value && claim.value.stream && claim.value.stream.metadata.nsfw;
};

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.doUpdateBalance = doUpdateBalance;
exports.doBalanceSubscribe = doBalanceSubscribe;
exports.doFetchTransactions = doFetchTransactions;
exports.doFetchBlock = doFetchBlock;
exports.doGetNewAddress = doGetNewAddress;
exports.doCheckAddressIsMine = doCheckAddressIsMine;
exports.doSendDraftTransaction = doSendDraftTransaction;
exports.doSetDraftTransactionAmount = doSetDraftTransactionAmount;
exports.doSetDraftTransactionAddress = doSetDraftTransactionAddress;
exports.doSendTip = doSendTip;
exports.doWalletEncrypt = doWalletEncrypt;
exports.doWalletUnlock = doWalletUnlock;
exports.doWalletLock = doWalletLock;
exports.doWalletDecrypt = doWalletDecrypt;
exports.doWalletStatus = doWalletStatus;
exports.doSetTransactionListFilter = doSetTransactionListFilter;
exports.doUpdateBlockHeight = doUpdateBlockHeight;

var _action_types = __webpack_require__(2);

var ACTIONS = _interopRequireWildcard(_action_types);

var _lbry = __webpack_require__(9);

var _lbry2 = _interopRequireDefault(_lbry);

var _notifications = __webpack_require__(4);

var _wallet = __webpack_require__(20);

var _formatCredits = __webpack_require__(22);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function doUpdateBalance() {
  return function (dispatch, getState) {
    var _getState = getState(),
        balanceInStore = _getState.wallet.balance;

    _lbry2.default.account_balance().then(function (balanceAsString) {
      var balance = parseFloat(balanceAsString);

      if (balanceInStore !== balance) {
        dispatch({
          type: ACTIONS.UPDATE_BALANCE,
          data: {
            balance: balance
          }
        });
      }
    });
  };
}

function doBalanceSubscribe() {
  return function (dispatch) {
    dispatch(doUpdateBalance());
    setInterval(function () {
      return dispatch(doUpdateBalance());
    }, 5000);
  };
}

function doFetchTransactions() {
  return function (dispatch) {
    dispatch({
      type: ACTIONS.FETCH_TRANSACTIONS_STARTED
    });

    _lbry2.default.utxo_release().then(function () {
      return _lbry2.default.transaction_list();
    }).then(function (results) {
      dispatch({
        type: ACTIONS.FETCH_TRANSACTIONS_COMPLETED,
        data: {
          transactions: results
        }
      });
    });
  };
}

function doFetchBlock(height) {
  return function (dispatch) {
    _lbry2.default.block_show({ height: height }).then(function (block) {
      dispatch({
        type: ACTIONS.FETCH_BLOCK_SUCCESS,
        data: { block: block }
      });
    });
  };
}

function doGetNewAddress() {
  return function (dispatch) {
    dispatch({
      type: ACTIONS.GET_NEW_ADDRESS_STARTED
    });

    // Removed localStorage use, since address is expected to be stored in redux store
    _lbry2.default.address_unused().then(function (address) {
      dispatch({
        type: ACTIONS.GET_NEW_ADDRESS_COMPLETED,
        data: { address: address }
      });
    });
  };
}

function doCheckAddressIsMine(address) {
  return function (dispatch) {
    dispatch({
      type: ACTIONS.CHECK_ADDRESS_IS_MINE_STARTED
    });

    _lbry2.default.address_is_mine({ address: address }).then(function (isMine) {
      if (!isMine) dispatch(doGetNewAddress());

      dispatch({
        type: ACTIONS.CHECK_ADDRESS_IS_MINE_COMPLETED
      });
    });
  };
}

function doSendDraftTransaction(address, amount) {
  return function (dispatch, getState) {
    var state = getState();
    var balance = (0, _wallet.selectBalance)(state);

    if (balance - amount <= 0) {
      dispatch((0, _notifications.doToast)({
        title: 'Insufficient credits',
        message: 'Insufficient credits'
      }));
      return;
    }

    dispatch({
      type: ACTIONS.SEND_TRANSACTION_STARTED
    });

    var successCallback = function successCallback(response) {
      if (response.txid) {
        dispatch({
          type: ACTIONS.SEND_TRANSACTION_COMPLETED
        });
        dispatch((0, _notifications.doToast)({
          message: 'You sent ' + amount + ' LBC',
          linkText: 'History',
          linkTarget: '/wallet'
        }));
      } else {
        dispatch({
          type: ACTIONS.SEND_TRANSACTION_FAILED,
          data: { error: response }
        });
        dispatch((0, _notifications.doToast)({
          message: 'Transaction failed',
          isError: true
        }));
      }
    };

    var errorCallback = function errorCallback(error) {
      dispatch({
        type: ACTIONS.SEND_TRANSACTION_FAILED,
        data: { error: error.message }
      });
      dispatch((0, _notifications.doToast)({
        message: 'Transaction failed',
        isError: true
      }));
    };

    _lbry2.default.wallet_send({
      address: address,
      amount: (0, _formatCredits.creditsToString)(amount)
    }).then(successCallback, errorCallback);
  };
}

function doSetDraftTransactionAmount(amount) {
  return {
    type: ACTIONS.SET_DRAFT_TRANSACTION_AMOUNT,
    data: { amount: amount }
  };
}

function doSetDraftTransactionAddress(address) {
  return {
    type: ACTIONS.SET_DRAFT_TRANSACTION_ADDRESS,
    data: { address: address }
  };
}

function doSendTip(amount, claimId, uri, successCallback, errorCallback) {
  return function (dispatch, getState) {
    var state = getState();
    var balance = (0, _wallet.selectBalance)(state);

    if (balance - amount <= 0) {
      dispatch((0, _notifications.doToast)({
        message: 'Insufficient credits',
        isError: true
      }));
      return;
    }

    var success = function success() {
      dispatch((0, _notifications.doToast)({
        message: __('You sent ' + amount + ' LBC as a tip, Mahalo!'),
        linkText: __('History'),
        linkTarget: __('/wallet')
      }));

      dispatch({
        type: ACTIONS.SUPPORT_TRANSACTION_COMPLETED
      });

      if (successCallback) {
        successCallback();
      }
    };

    var error = function error(err) {
      dispatch((0, _notifications.doToast)({
        message: __('There was an error sending support funds.'),
        isError: true
      }));

      dispatch({
        type: ACTIONS.SUPPORT_TRANSACTION_FAILED,
        data: {
          error: err
        }
      });

      if (errorCallback) {
        errorCallback();
      }
    };

    dispatch({
      type: ACTIONS.SUPPORT_TRANSACTION_STARTED
    });

    _lbry2.default.claim_tip({
      claim_id: claimId,
      amount: (0, _formatCredits.creditsToString)(amount)
    }).then(success, error);
  };
}

function doWalletEncrypt(newPassword) {
  return function (dispatch) {
    dispatch({
      type: ACTIONS.WALLET_ENCRYPT_START
    });

    _lbry2.default.account_encrypt({ new_password: newPassword }).then(function (result) {
      if (result === true) {
        dispatch({
          type: ACTIONS.WALLET_ENCRYPT_COMPLETED,
          result: result
        });
      } else {
        dispatch({
          type: ACTIONS.WALLET_ENCRYPT_FAILED,
          result: result
        });
      }
    });
  };
}

function doWalletUnlock(password) {
  return function (dispatch) {
    dispatch({
      type: ACTIONS.WALLET_UNLOCK_START
    });

    _lbry2.default.account_unlock({ password: password }).then(function (result) {
      if (result === true) {
        dispatch({
          type: ACTIONS.WALLET_UNLOCK_COMPLETED,
          result: result
        });
      } else {
        dispatch({
          type: ACTIONS.WALLET_UNLOCK_FAILED,
          result: result
        });
      }
    });
  };
}

function doWalletLock() {
  return function (dispatch) {
    dispatch({
      type: ACTIONS.WALLET_LOCK_START
    });

    _lbry2.default.wallet_lock().then(function (result) {
      if (result === true) {
        dispatch({
          type: ACTIONS.WALLET_LOCK_COMPLETED,
          result: result
        });
      } else {
        dispatch({
          type: ACTIONS.WALLET_LOCK_FAILED,
          result: result
        });
      }
    });
  };
}

function doWalletDecrypt() {
  return function (dispatch) {
    dispatch({
      type: ACTIONS.WALLET_DECRYPT_START
    });

    _lbry2.default.account_decrypt().then(function (result) {
      if (result === true) {
        dispatch({
          type: ACTIONS.WALLET_DECRYPT_COMPLETED,
          result: result
        });
      } else {
        dispatch({
          type: ACTIONS.WALLET_DECRYPT_FAILED,
          result: result
        });
      }
    });
  };
}

function doWalletStatus() {
  return function (dispatch) {
    dispatch({
      type: ACTIONS.WALLET_STATUS_START
    });

    _lbry2.default.status().then(function (status) {
      if (status && status.wallet) {
        dispatch({
          type: ACTIONS.WALLET_STATUS_COMPLETED,
          result: status.wallet.is_encrypted
        });
      }
    });
  };
}

function doSetTransactionListFilter(filterOption) {
  return {
    type: ACTIONS.SET_TRANSACTION_LIST_FILTER,
    data: filterOption
  };
}

function doUpdateBlockHeight() {
  return function (dispatch) {
    return _lbry2.default.status().then(function (status) {
      if (status.wallet) {
        dispatch({
          type: ACTIONS.UPDATE_CURRENT_HEIGHT,
          data: status.wallet.blocks
        });
      }
    });
  };
}

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.selectTransactionListFilter = exports.makeSelectBlockDate = exports.selectCurrentHeight = exports.selectBlocks = exports.selectDraftTransactionError = exports.selectDraftTransactionAddress = exports.selectDraftTransactionAmount = exports.selectDraftTransaction = exports.selectGettingNewAddress = exports.selectReceiveAddress = exports.selectIsSendingSupport = exports.selectIsFetchingTransactions = exports.selectHasTransactions = exports.selectRecentTransactions = exports.selectTransactionItems = exports.selectTransactionsById = exports.selectBalance = exports.selectWalletLockResult = exports.selectWalletLockSucceeded = exports.selectWalletLockPending = exports.selectWalletUnlockResult = exports.selectWalletUnlockSucceeded = exports.selectWalletUnlockPending = exports.selectWalletDecryptResult = exports.selectWalletDecryptSucceeded = exports.selectWalletDecryptPending = exports.selectWalletEncryptResult = exports.selectWalletEncryptSucceeded = exports.selectWalletEncryptPending = exports.selectWalletIsEncrypted = exports.selectWalletState = exports.selectState = undefined;

var _reselect = __webpack_require__(14);

var _transaction_types = __webpack_require__(21);

var TRANSACTIONS = _interopRequireWildcard(_transaction_types);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var selectState = exports.selectState = function selectState(state) {
  return state.wallet || {};
};

var selectWalletState = exports.selectWalletState = selectState;

var selectWalletIsEncrypted = exports.selectWalletIsEncrypted = (0, _reselect.createSelector)(selectState, function (state) {
  return state.walletIsEncrypted;
});

var selectWalletEncryptPending = exports.selectWalletEncryptPending = (0, _reselect.createSelector)(selectState, function (state) {
  return state.walletEncryptPending;
});

var selectWalletEncryptSucceeded = exports.selectWalletEncryptSucceeded = (0, _reselect.createSelector)(selectState, function (state) {
  return state.walletEncryptSucceded;
});

var selectWalletEncryptResult = exports.selectWalletEncryptResult = (0, _reselect.createSelector)(selectState, function (state) {
  return state.walletEncryptResult;
});

var selectWalletDecryptPending = exports.selectWalletDecryptPending = (0, _reselect.createSelector)(selectState, function (state) {
  return state.walletDecryptPending;
});

var selectWalletDecryptSucceeded = exports.selectWalletDecryptSucceeded = (0, _reselect.createSelector)(selectState, function (state) {
  return state.walletDecryptSucceded;
});

var selectWalletDecryptResult = exports.selectWalletDecryptResult = (0, _reselect.createSelector)(selectState, function (state) {
  return state.walletDecryptResult;
});

var selectWalletUnlockPending = exports.selectWalletUnlockPending = (0, _reselect.createSelector)(selectState, function (state) {
  return state.walletUnlockPending;
});

var selectWalletUnlockSucceeded = exports.selectWalletUnlockSucceeded = (0, _reselect.createSelector)(selectState, function (state) {
  return state.walletUnlockSucceded;
});

var selectWalletUnlockResult = exports.selectWalletUnlockResult = (0, _reselect.createSelector)(selectState, function (state) {
  return state.walletUnlockResult;
});

var selectWalletLockPending = exports.selectWalletLockPending = (0, _reselect.createSelector)(selectState, function (state) {
  return state.walletLockPending;
});

var selectWalletLockSucceeded = exports.selectWalletLockSucceeded = (0, _reselect.createSelector)(selectState, function (state) {
  return state.walletLockSucceded;
});

var selectWalletLockResult = exports.selectWalletLockResult = (0, _reselect.createSelector)(selectState, function (state) {
  return state.walletLockResult;
});

var selectBalance = exports.selectBalance = (0, _reselect.createSelector)(selectState, function (state) {
  return state.balance;
});

var selectTransactionsById = exports.selectTransactionsById = (0, _reselect.createSelector)(selectState, function (state) {
  return state.transactions;
});

var selectTransactionItems = exports.selectTransactionItems = (0, _reselect.createSelector)(selectTransactionsById, function (byId) {
  var items = [];

  Object.keys(byId).forEach(function (txid) {
    var tx = byId[txid];

    // ignore dust/fees
    // it is fee only txn if all infos are also empty
    if (Math.abs(tx.value) === Math.abs(tx.fee) && tx.claim_info.length === 0 && tx.support_info.length === 0 && tx.update_info.length === 0 && tx.abandon_info.length === 0) {
      return;
    }

    var append = [];

    append.push.apply(append, _toConsumableArray(tx.claim_info.map(function (item) {
      return Object.assign({}, tx, item, {
        type: item.claim_name[0] === '@' ? TRANSACTIONS.CHANNEL : TRANSACTIONS.PUBLISH
      });
    })));
    append.push.apply(append, _toConsumableArray(tx.support_info.map(function (item) {
      return Object.assign({}, tx, item, {
        type: !item.is_tip ? TRANSACTIONS.SUPPORT : TRANSACTIONS.TIP
      });
    })));
    append.push.apply(append, _toConsumableArray(tx.update_info.map(function (item) {
      return Object.assign({}, tx, item, { type: TRANSACTIONS.UPDATE });
    })));
    append.push.apply(append, _toConsumableArray(tx.abandon_info.map(function (item) {
      return Object.assign({}, tx, item, { type: TRANSACTIONS.ABANDON });
    })));

    if (!append.length) {
      append.push(Object.assign({}, tx, {
        type: tx.value < 0 ? TRANSACTIONS.SPEND : TRANSACTIONS.RECEIVE
      }));
    }

    items.push.apply(items, _toConsumableArray(append.map(function (item) {
      // value on transaction, amount on outpoint
      // amount is always positive, but should match sign of value
      var balanceDelta = parseFloat(item.balance_delta);
      var value = parseFloat(item.value);
      var amount = balanceDelta || value;
      var fee = parseFloat(tx.fee);

      return {
        txid: txid,
        timestamp: tx.timestamp,
        date: tx.timestamp ? new Date(Number(tx.timestamp) * 1000) : null,
        amount: amount,
        fee: fee,
        claim_id: item.claim_id,
        claim_name: item.claim_name,
        type: item.type || TRANSACTIONS.SPEND,
        nout: item.nout,
        confirmations: tx.confirmations
      };
    })));
  });

  return items.sort(function (tx1, tx2) {
    if (!tx1.timestamp && !tx2.timestamp) {
      return 0;
    } else if (!tx1.timestamp && tx2.timestamp) {
      return -1;
    } else if (tx1.timestamp && !tx2.timestamp) {
      return 1;
    }

    return tx2.timestamp - tx1.timestamp;
  });
});

var selectRecentTransactions = exports.selectRecentTransactions = (0, _reselect.createSelector)(selectTransactionItems, function (transactions) {
  var threshold = new Date();
  threshold.setDate(threshold.getDate() - 7);
  return transactions.filter(function (transaction) {
    if (!transaction.date) {
      return true; // pending transaction
    }

    return transaction.date > threshold;
  });
});

var selectHasTransactions = exports.selectHasTransactions = (0, _reselect.createSelector)(selectTransactionItems, function (transactions) {
  return transactions && transactions.length > 0;
});

var selectIsFetchingTransactions = exports.selectIsFetchingTransactions = (0, _reselect.createSelector)(selectState, function (state) {
  return state.fetchingTransactions;
});

var selectIsSendingSupport = exports.selectIsSendingSupport = (0, _reselect.createSelector)(selectState, function (state) {
  return state.sendingSupport;
});

var selectReceiveAddress = exports.selectReceiveAddress = (0, _reselect.createSelector)(selectState, function (state) {
  return state.receiveAddress;
});

var selectGettingNewAddress = exports.selectGettingNewAddress = (0, _reselect.createSelector)(selectState, function (state) {
  return state.gettingNewAddress;
});

var selectDraftTransaction = exports.selectDraftTransaction = (0, _reselect.createSelector)(selectState, function (state) {
  return state.draftTransaction || {};
});

var selectDraftTransactionAmount = exports.selectDraftTransactionAmount = (0, _reselect.createSelector)(selectDraftTransaction, function (draft) {
  return draft.amount;
});

var selectDraftTransactionAddress = exports.selectDraftTransactionAddress = (0, _reselect.createSelector)(selectDraftTransaction, function (draft) {
  return draft.address;
});

var selectDraftTransactionError = exports.selectDraftTransactionError = (0, _reselect.createSelector)(selectDraftTransaction, function (draft) {
  return draft.error;
});

var selectBlocks = exports.selectBlocks = (0, _reselect.createSelector)(selectState, function (state) {
  return state.blocks;
});

var selectCurrentHeight = exports.selectCurrentHeight = (0, _reselect.createSelector)(selectState, function (state) {
  return state.latestBlock;
});

var makeSelectBlockDate = exports.makeSelectBlockDate = function makeSelectBlockDate(block) {
  return (0, _reselect.createSelector)(selectBlocks, selectCurrentHeight, function (blocks, latestBlock) {
    // If we have the block data, look at the actual date,
    // If not, try to simulate it based on 2.5 minute blocks
    // Adding this on 11/7/2018 because caling block_show for every claim is causing
    // performance issues.
    if (blocks && blocks[block]) {
      return new Date(blocks[block].time * 1000);
    }

    // Pending claim
    if (block < 1) {
      return null;
    }

    var difference = latestBlock - block;
    var msSincePublish = difference * 2.5 * 60 * 1000; // Number of blocks * 2.5 minutes in ms
    var publishDate = Date.now() - msSincePublish;
    return new Date(publishDate);
  });
};

var selectTransactionListFilter = exports.selectTransactionListFilter = (0, _reselect.createSelector)(selectState, function (state) {
  return state.transactionListFilter || '';
});

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
// eslint-disable-next-line import/prefer-default-export
var ALL = exports.ALL = 'all';
var SPEND = exports.SPEND = 'spend';
var RECEIVE = exports.RECEIVE = 'receive';
var PUBLISH = exports.PUBLISH = 'publish';
var CHANNEL = exports.CHANNEL = 'channel';
var TIP = exports.TIP = 'tip';
var SUPPORT = exports.SUPPORT = 'support';
var UPDATE = exports.UPDATE = 'update';
var ABANDON = exports.ABANDON = 'abandon';

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.formatCredits = formatCredits;
exports.formatFullPrice = formatFullPrice;
exports.creditsToString = creditsToString;
function formatCredits(amount, precision) {
  if (Number.isNaN(parseFloat(amount))) return '0';
  return parseFloat(amount).toFixed(precision || 1).replace(/\.?0+$/, '');
}

function formatFullPrice(amount) {
  var precision = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

  var formated = '';

  var quantity = amount.toString().split('.');
  var fraction = quantity[1];

  if (fraction) {
    var decimals = fraction.split('');
    var first = decimals.filter(function (number) {
      return number !== '0';
    })[0];
    var index = decimals.indexOf(first);

    // Set format fraction
    formated = '.' + fraction.substring(0, index + precision);
  }

  return parseFloat(quantity[0] + formated);
}

function creditsToString(amount) {
  var creditString = parseFloat(amount).toFixed(8);
  return creditString;
}

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.doFetchFileInfo = doFetchFileInfo;
exports.doFileList = doFileList;
exports.doFetchFileInfosAndPublishedClaims = doFetchFileInfosAndPublishedClaims;
exports.doSetFileListSort = doSetFileListSort;

var _action_types = __webpack_require__(2);

var ACTIONS = _interopRequireWildcard(_action_types);

var _lbry = __webpack_require__(9);

var _lbry2 = _interopRequireDefault(_lbry);

var _claims = __webpack_require__(8);

var _claims2 = __webpack_require__(12);

var _file_info = __webpack_require__(24);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function doFetchFileInfo(uri) {
  return function (dispatch, getState) {
    var state = getState();
    var claim = (0, _claims2.selectClaimsByUri)(state)[uri];
    var outpoint = claim ? claim.txid + ':' + claim.nout : null;
    var alreadyFetching = !!(0, _file_info.selectUrisLoading)(state)[uri];

    if (!alreadyFetching) {
      dispatch({
        type: ACTIONS.FETCH_FILE_INFO_STARTED,
        data: {
          outpoint: outpoint
        }
      });

      _lbry2.default.file_list({ outpoint: outpoint, full_status: true }).then(function (fileInfos) {
        dispatch({
          type: ACTIONS.FETCH_FILE_INFO_COMPLETED,
          data: {
            outpoint: outpoint,
            fileInfo: fileInfos && fileInfos.length ? fileInfos[0] : null
          }
        });
      });
    }
  };
}

function doFileList() {
  return function (dispatch, getState) {
    var state = getState();
    var isFetching = (0, _file_info.selectIsFetchingFileList)(state);

    if (!isFetching) {
      dispatch({
        type: ACTIONS.FILE_LIST_STARTED
      });

      _lbry2.default.file_list().then(function (fileInfos) {
        dispatch({
          type: ACTIONS.FILE_LIST_SUCCEEDED,
          data: {
            fileInfos: fileInfos
          }
        });
      });
    }
  };
}

function doFetchFileInfosAndPublishedClaims() {
  return function (dispatch, getState) {
    var state = getState();
    var isFetchingClaimListMine = (0, _claims2.selectIsFetchingClaimListMine)(state);
    var isFetchingFileInfo = (0, _file_info.selectIsFetchingFileList)(state);

    if (!isFetchingClaimListMine) dispatch((0, _claims.doFetchClaimListMine)());
    if (!isFetchingFileInfo) dispatch(doFileList());
  };
}

function doSetFileListSort(page, value) {
  return {
    type: ACTIONS.SET_FILE_LIST_SORT,
    data: { page: page, value: value }
  };
}

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.selectFileListDownloadedSort = exports.selectFileListPublishedSort = exports.selectSearchDownloadUris = exports.selectTotalDownloadProgress = exports.selectDownloadingFileInfos = exports.selectFileInfosDownloaded = exports.makeSelectLoadingForUri = exports.selectUrisLoading = exports.makeSelectDownloadingForUri = exports.selectDownloadingByOutpoint = exports.makeSelectFileInfoForUri = exports.selectIsFetchingFileListDownloadedOrPublished = exports.selectIsFetchingFileList = exports.selectFileInfosByOutpoint = exports.selectState = undefined;

var _claims = __webpack_require__(12);

var _reselect = __webpack_require__(14);

var _lbryURI = __webpack_require__(3);

var selectState = exports.selectState = function selectState(state) {
  return state.fileInfo || {};
};

var selectFileInfosByOutpoint = exports.selectFileInfosByOutpoint = (0, _reselect.createSelector)(selectState, function (state) {
  return state.byOutpoint || {};
});

var selectIsFetchingFileList = exports.selectIsFetchingFileList = (0, _reselect.createSelector)(selectState, function (state) {
  return state.isFetchingFileList;
});

var selectIsFetchingFileListDownloadedOrPublished = exports.selectIsFetchingFileListDownloadedOrPublished = (0, _reselect.createSelector)(selectIsFetchingFileList, _claims.selectIsFetchingClaimListMine, function (isFetchingFileList, isFetchingClaimListMine) {
  return isFetchingFileList || isFetchingClaimListMine;
});

var makeSelectFileInfoForUri = exports.makeSelectFileInfoForUri = function makeSelectFileInfoForUri(uri) {
  return (0, _reselect.createSelector)(_claims.selectClaimsByUri, selectFileInfosByOutpoint, function (claims, byOutpoint) {
    var claim = claims[uri];
    var outpoint = claim ? claim.txid + ':' + claim.nout : undefined;
    return outpoint ? byOutpoint[outpoint] : undefined;
  });
};

var selectDownloadingByOutpoint = exports.selectDownloadingByOutpoint = (0, _reselect.createSelector)(selectState, function (state) {
  return state.downloadingByOutpoint || {};
});

var makeSelectDownloadingForUri = exports.makeSelectDownloadingForUri = function makeSelectDownloadingForUri(uri) {
  return (0, _reselect.createSelector)(selectDownloadingByOutpoint, makeSelectFileInfoForUri(uri), function (byOutpoint, fileInfo) {
    if (!fileInfo) return false;
    return byOutpoint[fileInfo.outpoint];
  });
};

var selectUrisLoading = exports.selectUrisLoading = (0, _reselect.createSelector)(selectState, function (state) {
  return state.urisLoading || {};
});

var makeSelectLoadingForUri = exports.makeSelectLoadingForUri = function makeSelectLoadingForUri(uri) {
  return (0, _reselect.createSelector)(selectUrisLoading, function (byUri) {
    return byUri && byUri[uri];
  });
};

var selectFileInfosDownloaded = exports.selectFileInfosDownloaded = (0, _reselect.createSelector)(selectFileInfosByOutpoint, _claims.selectMyClaims, function (byOutpoint, myClaims) {
  return Object.values(byOutpoint).filter(function (fileInfo) {
    var myClaimIds = myClaims.map(function (claim) {
      return claim.claim_id;
    });

    return fileInfo && myClaimIds.indexOf(fileInfo.claim_id) === -1 && (fileInfo.completed || fileInfo.written_bytes);
  });
});

// export const selectFileInfoForUri = (state, props) => {
//   const claims = selectClaimsByUri(state),
//     claim = claims[props.uri],
//     fileInfos = selectAllFileInfos(state),
//     outpoint = claim ? `${claim.txid}:${claim.nout}` : undefined;

//   return outpoint && fileInfos ? fileInfos[outpoint] : undefined;
// };

var selectDownloadingFileInfos = exports.selectDownloadingFileInfos = (0, _reselect.createSelector)(selectDownloadingByOutpoint, selectFileInfosByOutpoint, function (downloadingByOutpoint, fileInfosByOutpoint) {
  var outpoints = Object.keys(downloadingByOutpoint);
  var fileInfos = [];

  outpoints.forEach(function (outpoint) {
    var fileInfo = fileInfosByOutpoint[outpoint];

    if (fileInfo) fileInfos.push(fileInfo);
  });

  return fileInfos;
});

var selectTotalDownloadProgress = exports.selectTotalDownloadProgress = (0, _reselect.createSelector)(selectDownloadingFileInfos, function (fileInfos) {
  var progress = [];

  fileInfos.forEach(function (fileInfo) {
    progress.push(fileInfo.written_bytes / fileInfo.total_bytes * 100);
  });

  var totalProgress = progress.reduce(function (a, b) {
    return a + b;
  }, 0);

  if (fileInfos.length > 0) return totalProgress / fileInfos.length / 100.0;
  return -1;
});

var selectSearchDownloadUris = exports.selectSearchDownloadUris = function selectSearchDownloadUris(query) {
  return (0, _reselect.createSelector)(selectFileInfosDownloaded, _claims.selectClaimsById, function (fileInfos, claimsById) {
    if (!query || !fileInfos.length) {
      return null;
    }

    var queryParts = query.toLowerCase().split(' ');
    var searchQueryDictionary = {};
    queryParts.forEach(function (subQuery) {
      searchQueryDictionary[subQuery] = subQuery;
    });

    var arrayContainsQueryPart = function arrayContainsQueryPart(array) {
      for (var i = 0; i < array.length; i += 1) {
        var subQuery = array[i];
        if (searchQueryDictionary[subQuery]) {
          return true;
        }
      }
      return false;
    };

    var downloadResultsFromQuery = [];
    fileInfos.forEach(function (fileInfo) {
      var channelName = fileInfo.channel_name,
          claimName = fileInfo.claim_name,
          metadata = fileInfo.metadata;
      var author = metadata.author,
          description = metadata.description,
          title = metadata.title;


      if (channelName) {
        var lowerCaseChannel = channelName.toLowerCase();
        var strippedOutChannelName = lowerCaseChannel.slice(1); // trim off the @
        if (searchQueryDictionary[channelName] || searchQueryDictionary[strippedOutChannelName]) {
          downloadResultsFromQuery.push(fileInfo);
          return;
        }
      }

      var nameParts = claimName.toLowerCase().split('-');
      if (arrayContainsQueryPart(nameParts)) {
        downloadResultsFromQuery.push(fileInfo);
        return;
      }

      var titleParts = title.toLowerCase().split(' ');
      if (arrayContainsQueryPart(titleParts)) {
        downloadResultsFromQuery.push(fileInfo);
        return;
      }

      if (author) {
        var authorParts = author.toLowerCase().split(' ');
        if (arrayContainsQueryPart(authorParts)) {
          downloadResultsFromQuery.push(fileInfo);
          return;
        }
      }

      if (description) {
        var descriptionParts = description.toLowerCase().split(' ');
        if (arrayContainsQueryPart(descriptionParts)) {
          downloadResultsFromQuery.push(fileInfo);
        }
      }
    });

    return downloadResultsFromQuery.length ? downloadResultsFromQuery.map(function (fileInfo) {
      var channelName = fileInfo.channel_name,
          claimId = fileInfo.claim_id,
          claimName = fileInfo.claim_name;


      var uriParams = {};

      if (channelName) {
        var claim = claimsById[claimId];
        if (claim && claim.value) {
          uriParams.claimId = claim.value.publisherSignature.certificateId;
        } else {
          uriParams.claimId = claimId;
        }
        uriParams.channelName = channelName;
        uriParams.contentName = claimName;
      } else {
        uriParams.claimId = claimId;
        uriParams.claimName = claimName;
      }

      var uri = (0, _lbryURI.buildURI)(uriParams);
      return uri;
    }) : null;
  });
};

var selectFileListPublishedSort = exports.selectFileListPublishedSort = (0, _reselect.createSelector)(selectState, function (state) {
  return state.fileListPublishedSort;
});

var selectFileListDownloadedSort = exports.selectFileListDownloadedSort = (0, _reselect.createSelector)(selectState, function (state) {
  return state.fileListDownloadedSort;
});

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.doUpdateSearchOptions = exports.doBlurSearchInput = exports.doFocusSearchInput = exports.doUpdateSearchQuery = exports.getSearchSuggestions = exports.doSearch = exports.setSearchApi = undefined;

var _action_types = __webpack_require__(2);

var ACTIONS = _interopRequireWildcard(_action_types);

var _lbryURI = __webpack_require__(3);

var _claims = __webpack_require__(8);

var _search = __webpack_require__(17);

var _batchActions = __webpack_require__(26);

var _debounce = __webpack_require__(27);

var _debounce2 = _interopRequireDefault(_debounce);

var _handleFetch = __webpack_require__(28);

var _handleFetch2 = _interopRequireDefault(_handleFetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

// @flow
/*:: import type { SearchState, SearchOptions } from 'types/Search';*/


var DEBOUNCED_SEARCH_SUGGESTION_MS = 300;
/*:: type Dispatch = (action: any) => any;*/


// We can't use env's because they aren't passed into node_modules
/*:: type GetState = () => { search: SearchState };*/
var CONNECTION_STRING = 'https://lighthouse.lbry.io/';

var setSearchApi = exports.setSearchApi = function setSearchApi(endpoint /*: string*/) {
  CONNECTION_STRING = endpoint.replace(/\/*$/, '/'); // exactly one slash at the end;
};

var doSearch = exports.doSearch = function doSearch(rawQuery /*: string*/, size /*: ?number*/, from /*: ?number*/) {
  var isBackgroundSearch /*: boolean*/ = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  return function (dispatch /*: Dispatch*/, getState /*: GetState*/) {
    var query = rawQuery.replace(/^lbry:\/\//i, '').replace(/\//, ' ');

    if (!query) {
      dispatch({
        type: ACTIONS.SEARCH_FAIL
      });
      return;
    }

    var state = getState();
    var queryWithOptions = (0, _search.makeSelectQueryWithOptions)(query, size, from, isBackgroundSearch)(state);

    // If we have already searched for something, we don't need to do anything
    var urisForQuery = (0, _search.makeSelectSearchUris)(queryWithOptions)(state);
    if (urisForQuery && !!urisForQuery.length) {
      return;
    }

    dispatch({
      type: ACTIONS.SEARCH_START
    });

    // If the user is on the file page with a pre-populated uri and they select
    // the search option without typing anything, searchQuery will be empty
    // We need to populate it so the input is filled on the search page
    // isBackgroundSearch means the search is happening in the background, don't update the search query
    if (!state.search.searchQuery && !isBackgroundSearch) {
      dispatch({
        type: ACTIONS.UPDATE_SEARCH_QUERY,
        data: { searchQuery: query }
      });
    }

    fetch(CONNECTION_STRING + 'search?' + queryWithOptions).then(_handleFetch2.default).then(function (data) {
      var uris = [];
      var actions = [];

      data.forEach(function (result) {
        var uri = (0, _lbryURI.buildURI)({
          claimName: result.name,
          claimId: result.claimId
        });
        actions.push((0, _claims.doResolveUri)(uri));
        uris.push(uri);
      });

      actions.push({
        type: ACTIONS.SEARCH_SUCCESS,
        data: {
          query: queryWithOptions,
          uris: uris
        }
      });
      dispatch(_batchActions.batchActions.apply(undefined, actions));
    }).catch(function () {
      dispatch({
        type: ACTIONS.SEARCH_FAIL
      });
    });
  };
};

var getSearchSuggestions = exports.getSearchSuggestions = function getSearchSuggestions(value /*: string*/) {
  return function (dispatch /*: Dispatch*/, getState /*: GetState*/) {
    var query = value.trim();

    // strip out any basic stuff for more accurate search results
    var searchValue = query.replace(/lbry:\/\//g, '').replace(/-/g, ' ');
    if (searchValue.includes('#')) {
      // This should probably be more robust, but I think it's fine for now
      // Remove everything after # to get rid of the claim id
      searchValue = searchValue.substring(0, searchValue.indexOf('#'));
    }

    var suggestions = (0, _search.selectSuggestions)(getState());
    if (suggestions[searchValue]) {
      return;
    }

    fetch(CONNECTION_STRING + 'autocomplete?s=' + searchValue).then(_handleFetch2.default).then(function (apiSuggestions) {
      dispatch({
        type: ACTIONS.UPDATE_SEARCH_SUGGESTIONS,
        data: {
          query: searchValue,
          suggestions: apiSuggestions
        }
      });
    }).catch(function () {
      // If the fetch fails, do nothing
      // Basic search suggestions are already populated at this point
    });
  };
};

var throttledSearchSuggestions = (0, _debounce2.default)(function (dispatch, query) {
  dispatch(getSearchSuggestions(query));
}, DEBOUNCED_SEARCH_SUGGESTION_MS);

var doUpdateSearchQuery = exports.doUpdateSearchQuery = function doUpdateSearchQuery(query /*: string*/, shouldSkipSuggestions /*: ?boolean*/) {
  return function (dispatch /*: Dispatch*/) {
    dispatch({
      type: ACTIONS.UPDATE_SEARCH_QUERY,
      data: { query: query }
    });

    // Don't fetch new suggestions if the user just added a space
    if (!query.endsWith(' ') || !shouldSkipSuggestions) {
      throttledSearchSuggestions(dispatch, query);
    }
  };
};

var doFocusSearchInput = exports.doFocusSearchInput = function doFocusSearchInput() {
  return function (dispatch /*: Dispatch*/) {
    return dispatch({
      type: ACTIONS.SEARCH_FOCUS
    });
  };
};

var doBlurSearchInput = exports.doBlurSearchInput = function doBlurSearchInput() {
  return function (dispatch /*: Dispatch*/) {
    return dispatch({
      type: ACTIONS.SEARCH_BLUR
    });
  };
};

var doUpdateSearchOptions = exports.doUpdateSearchOptions = function doUpdateSearchOptions(newOptions /*: SearchOptions*/) {
  return function (dispatch /*: Dispatch*/, getState /*: GetState*/) {
    var state = getState();
    var searchQuery = (0, _search.selectSearchQuery)(state);

    dispatch({
      type: ACTIONS.UPDATE_SEARCH_OPTIONS,
      data: newOptions
    });

    if (searchQuery) {
      // After updating, perform a search with the new options
      dispatch(doSearch(searchQuery));
    }
  };
};

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.batchActions = batchActions;
// https://github.com/reactjs/redux/issues/911
function batchActions() {
  for (var _len = arguments.length, actions = Array(_len), _key = 0; _key < _len; _key++) {
    actions[_key] = arguments[_key];
  }

  return {
    type: 'BATCH_ACTIONS',
    actions: actions
  };
}

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = debouce;
// Returns a function, that, as long as it continues to be invoked, will not
// be triggered. The function will be called after it stops being called for
// N milliseconds. If `immediate` is passed, trigger the function on the
// leading edge, instead of the trailing.
function debouce(func, wait, immediate) {
  var timeout = void 0;

  return function () {
    var context = this;
    var args = arguments;
    var later = function later() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };

    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = handleFetchResponse;
function handleFetchResponse(response) {
  return response.status === 200 ? Promise.resolve(response.json()) : Promise.reject(new Error(response.statusText));
}

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.savePosition = savePosition;

var _action_types = __webpack_require__(2);

var ACTIONS = _interopRequireWildcard(_action_types);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function savePosition(claimId /*: string*/, outpoint /*: string*/, position /*: number*/) {
  return function (dispatch) {
    dispatch({
      type: ACTIONS.SET_CONTENT_POSITION,
      data: { claimId: claimId, outpoint: outpoint, position: position }
    });
  };
}

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

exports.claimsReducer = claimsReducer;

var _action_types = __webpack_require__(2);

var ACTIONS = _interopRequireWildcard(_action_types);

var _lbryURI = __webpack_require__(3);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var reducers = {};

var defaultState = {
  channelClaimCounts: {}
};

reducers[ACTIONS.RESOLVE_URIS_COMPLETED] = function (state, action) {
  var resolveInfo = action.data.resolveInfo;

  var byUri = Object.assign({}, state.claimsByUri);
  var byId = Object.assign({}, state.byId);
  var channelClaimCounts = Object.assign({}, state.channelClaimCounts);

  Object.entries(resolveInfo).forEach(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        uri = _ref2[0],
        _ref2$ = _ref2[1],
        certificate = _ref2$.certificate,
        claimsInChannel = _ref2$.claimsInChannel;

    if (certificate && !Number.isNaN(claimsInChannel)) {
      channelClaimCounts[uri] = claimsInChannel;
    }
  });

  Object.entries(resolveInfo).forEach(function (_ref3) {
    var _ref4 = _slicedToArray(_ref3, 2),
        uri = _ref4[0],
        _ref4$ = _ref4[1],
        certificate = _ref4$.certificate,
        claim = _ref4$.claim;

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
    byId: byId,
    claimsByUri: byUri,
    channelClaimCounts: channelClaimCounts,
    resolvingUris: (state.resolvingUris || []).filter(function (uri) {
      return !resolveInfo[uri];
    })
  });
};

reducers[ACTIONS.FETCH_CLAIM_LIST_MINE_STARTED] = function (state) {
  return Object.assign({}, state, {
    isFetchingClaimListMine: true
  });
};

reducers[ACTIONS.FETCH_CLAIM_LIST_MINE_COMPLETED] = function (state, action) {
  var claims = action.data.claims;

  var byId = Object.assign({}, state.byId);
  var byUri = Object.assign({}, state.claimsByUri);
  var pendingById = Object.assign({}, state.pendingById);

  claims.forEach(function (claim) {
    var uri = (0, _lbryURI.buildURI)({ claimName: claim.name, claimId: claim.claim_id });

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
  Object.values(pendingById).filter(function (pendingClaim) {
    return byId[pendingClaim.claim_id];
  }).forEach(function (pendingClaim) {
    delete pendingById[pendingClaim.claim_id];
  });

  return Object.assign({}, state, {
    isFetchingClaimListMine: false,
    myClaims: claims,
    byId: byId,
    claimsByUri: byUri,
    pendingById: pendingById
  });
};

reducers[ACTIONS.FETCH_CHANNEL_LIST_STARTED] = function (state) {
  return Object.assign({}, state, { fetchingMyChannels: true });
};

reducers[ACTIONS.FETCH_CHANNEL_LIST_COMPLETED] = function (state, action) {
  var claims = action.data.claims;

  var myChannelClaims = new Set(state.myChannelClaims);
  var byId = Object.assign({}, state.byId);

  claims.forEach(function (claim) {
    myChannelClaims.add(claim.claim_id);
    byId[claim.claim_id] = claim;
  });

  return Object.assign({}, state, {
    byId: byId,
    fetchingMyChannels: false,
    myChannelClaims: myChannelClaims
  });
};

reducers[ACTIONS.FETCH_CHANNEL_CLAIMS_STARTED] = function (state, action) {
  var _action$data = action.data,
      uri = _action$data.uri,
      page = _action$data.page;

  var fetchingChannelClaims = Object.assign({}, state.fetchingChannelClaims);

  fetchingChannelClaims[uri] = page;

  return Object.assign({}, state, {
    fetchingChannelClaims: fetchingChannelClaims,
    currentChannelPage: page
  });
};

reducers[ACTIONS.FETCH_CHANNEL_CLAIMS_COMPLETED] = function (state, action) {
  var _action$data2 = action.data,
      uri = _action$data2.uri,
      claims = _action$data2.claims,
      page = _action$data2.page;


  var claimsByChannel = Object.assign({}, state.claimsByChannel);
  var byChannel = Object.assign({}, claimsByChannel[uri]);
  var allClaimIds = new Set(byChannel.all);
  var currentPageClaimIds = [];
  var byId = Object.assign({}, state.byId);
  var fetchingChannelClaims = Object.assign({}, state.fetchingChannelClaims);
  var claimsByUri = Object.assign({}, state.claimsByUri);

  if (claims !== undefined) {
    claims.forEach(function (claim) {
      allClaimIds.add(claim.claim_id);
      currentPageClaimIds.push(claim.claim_id);
      byId[claim.claim_id] = claim;
      claimsByUri['lbry://' + claim.name + '#' + claim.claim_id] = claim.claim_id;
    });
  }

  byChannel.all = allClaimIds;
  byChannel[page] = currentPageClaimIds;
  claimsByChannel[uri] = byChannel;
  delete fetchingChannelClaims[uri];

  return Object.assign({}, state, {
    claimsByChannel: claimsByChannel,
    byId: byId,
    fetchingChannelClaims: fetchingChannelClaims,
    claimsByUri: claimsByUri,
    currentChannelPage: page
  });
};

reducers[ACTIONS.ABANDON_CLAIM_STARTED] = function (state, action) {
  var claimId = action.data.claimId;

  var abandoningById = Object.assign({}, state.abandoningById);

  abandoningById[claimId] = true;

  return Object.assign({}, state, {
    abandoningById: abandoningById
  });
};

reducers[ACTIONS.ABANDON_CLAIM_SUCCEEDED] = function (state, action) {
  var claimId = action.data.claimId;

  var byId = Object.assign({}, state.byId);
  var claimsByUri = Object.assign({}, state.claimsByUri);

  Object.keys(claimsByUri).forEach(function (uri) {
    if (claimsByUri[uri] === claimId) {
      delete claimsByUri[uri];
    }
  });

  delete byId[claimId];

  return Object.assign({}, state, {
    byId: byId,
    claimsByUri: claimsByUri
  });
};

reducers[ACTIONS.CREATE_CHANNEL_COMPLETED] = function (state, action) {
  var channelClaim = action.data.channelClaim;

  var byId = Object.assign({}, state.byId);
  var myChannelClaims = new Set(state.myChannelClaims);

  byId[channelClaim.claim_id] = channelClaim;
  myChannelClaims.add(channelClaim.claim_id);

  return Object.assign({}, state, {
    byId: byId,
    myChannelClaims: myChannelClaims
  });
};

reducers[ACTIONS.RESOLVE_URIS_STARTED] = function (state, action) {
  var uris = action.data.uris;


  var oldResolving = state.resolvingUris || [];
  var newResolving = Object.assign([], oldResolving);

  uris.forEach(function (uri) {
    if (!newResolving.includes(uri)) {
      newResolving.push(uri);
    }
  });

  return Object.assign({}, state, {
    resolvingUris: newResolving
  });
};

reducers[ACTIONS.FETCH_CHANNEL_CLAIM_COUNT_COMPLETED] = function (state, action) {
  var channelClaimCounts = Object.assign({}, state.channelClaimCounts);
  var _action$data3 = action.data,
      uri = _action$data3.uri,
      totalClaims = _action$data3.totalClaims;


  channelClaimCounts[uri] = totalClaims;

  return Object.assign({}, state, {
    channelClaimCounts: channelClaimCounts
  });
};

function claimsReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;
  var action = arguments[1];

  var handler = reducers[action.type];
  if (handler) return handler(state, action);
  return state;
}

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.fileInfoReducer = fileInfoReducer;

var _action_types = __webpack_require__(2);

var ACTIONS = _interopRequireWildcard(_action_types);

var _sort_options = __webpack_require__(32);

var SORT_OPTIONS = _interopRequireWildcard(_sort_options);

var _pages = __webpack_require__(33);

var PAGES = _interopRequireWildcard(_pages);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var reducers = {};
var defaultState = {
  fileListPublishedSort: SORT_OPTIONS.DATE_NEW,
  fileListDownloadedSort: SORT_OPTIONS.DATE_NEW
};

reducers[ACTIONS.FILE_LIST_STARTED] = function (state) {
  return Object.assign({}, state, {
    isFetchingFileList: true
  });
};

reducers[ACTIONS.FILE_LIST_SUCCEEDED] = function (state, action) {
  var fileInfos = action.data.fileInfos;

  var newByOutpoint = Object.assign({}, state.byOutpoint);
  var pendingByOutpoint = Object.assign({}, state.pendingByOutpoint);

  fileInfos.forEach(function (fileInfo) {
    var outpoint = fileInfo.outpoint;


    if (outpoint) newByOutpoint[fileInfo.outpoint] = fileInfo;
  });

  return Object.assign({}, state, {
    isFetchingFileList: false,
    byOutpoint: newByOutpoint,
    pendingByOutpoint: pendingByOutpoint
  });
};

reducers[ACTIONS.FETCH_FILE_INFO_STARTED] = function (state, action) {
  var outpoint = action.data.outpoint;

  var newFetching = Object.assign({}, state.fetching);

  newFetching[outpoint] = true;

  return Object.assign({}, state, {
    fetching: newFetching
  });
};

reducers[ACTIONS.FETCH_FILE_INFO_COMPLETED] = function (state, action) {
  var _action$data = action.data,
      fileInfo = _action$data.fileInfo,
      outpoint = _action$data.outpoint;


  var newByOutpoint = Object.assign({}, state.byOutpoint);
  var newFetching = Object.assign({}, state.fetching);

  newByOutpoint[outpoint] = fileInfo;
  delete newFetching[outpoint];

  return Object.assign({}, state, {
    byOutpoint: newByOutpoint,
    fetching: newFetching
  });
};

reducers[ACTIONS.DOWNLOADING_STARTED] = function (state, action) {
  var _action$data2 = action.data,
      uri = _action$data2.uri,
      outpoint = _action$data2.outpoint,
      fileInfo = _action$data2.fileInfo;


  var newByOutpoint = Object.assign({}, state.byOutpoint);
  var newDownloading = Object.assign({}, state.downloadingByOutpoint);
  var newLoading = Object.assign({}, state.urisLoading);

  newDownloading[outpoint] = true;
  newByOutpoint[outpoint] = fileInfo;
  delete newLoading[uri];

  return Object.assign({}, state, {
    downloadingByOutpoint: newDownloading,
    urisLoading: newLoading,
    byOutpoint: newByOutpoint
  });
};

reducers[ACTIONS.DOWNLOADING_PROGRESSED] = function (state, action) {
  var _action$data3 = action.data,
      outpoint = _action$data3.outpoint,
      fileInfo = _action$data3.fileInfo;


  var newByOutpoint = Object.assign({}, state.byOutpoint);
  var newDownloading = Object.assign({}, state.downloadingByOutpoint);

  newByOutpoint[outpoint] = fileInfo;
  newDownloading[outpoint] = true;

  return Object.assign({}, state, {
    byOutpoint: newByOutpoint,
    downloadingByOutpoint: newDownloading
  });
};

reducers[ACTIONS.DOWNLOADING_CANCELED] = function (state, action) {
  var outpoint = action.data.outpoint;


  var newDownloading = Object.assign({}, state.downloadingByOutpoint);
  delete newDownloading[outpoint];

  return Object.assign({}, state, {
    downloadingByOutpoint: newDownloading
  });
};

reducers[ACTIONS.DOWNLOADING_COMPLETED] = function (state, action) {
  var _action$data4 = action.data,
      outpoint = _action$data4.outpoint,
      fileInfo = _action$data4.fileInfo;


  var newByOutpoint = Object.assign({}, state.byOutpoint);
  var newDownloading = Object.assign({}, state.downloadingByOutpoint);

  newByOutpoint[outpoint] = fileInfo;
  delete newDownloading[outpoint];

  return Object.assign({}, state, {
    byOutpoint: newByOutpoint,
    downloadingByOutpoint: newDownloading
  });
};

reducers[ACTIONS.FILE_DELETE] = function (state, action) {
  var outpoint = action.data.outpoint;


  var newByOutpoint = Object.assign({}, state.byOutpoint);
  var downloadingByOutpoint = Object.assign({}, state.downloadingByOutpoint);

  delete newByOutpoint[outpoint];
  delete downloadingByOutpoint[outpoint];

  return Object.assign({}, state, {
    byOutpoint: newByOutpoint,
    downloadingByOutpoint: downloadingByOutpoint
  });
};

reducers[ACTIONS.LOADING_VIDEO_STARTED] = function (state, action) {
  var uri = action.data.uri;


  var newLoading = Object.assign({}, state.urisLoading);
  newLoading[uri] = true;

  var newErrors = _extends({}, state.errors);
  if (uri in newErrors) delete newErrors[uri];

  return Object.assign({}, state, {
    urisLoading: newLoading,
    errors: _extends({}, newErrors)
  });
};

reducers[ACTIONS.LOADING_VIDEO_FAILED] = function (state, action) {
  var uri = action.data.uri;


  var newLoading = Object.assign({}, state.urisLoading);
  delete newLoading[uri];

  var newErrors = _extends({}, state.errors);
  newErrors[uri] = true;

  return Object.assign({}, state, {
    urisLoading: newLoading,
    errors: _extends({}, newErrors)
  });
};

reducers[ACTIONS.FETCH_DATE] = function (state, action) {
  var time = action.data.time;

  if (time) {
    return Object.assign({}, state, {
      publishedDate: time
    });
  }
  return null;
};

reducers[ACTIONS.SET_FILE_LIST_SORT] = function (state, action) {
  var _pageSortStates;

  var pageSortStates = (_pageSortStates = {}, _defineProperty(_pageSortStates, PAGES.PUBLISHED, 'fileListPublishedSort'), _defineProperty(_pageSortStates, PAGES.DOWNLOADED, 'fileListDownloadedSort'), _pageSortStates);
  var pageSortState = pageSortStates[action.data.page];
  var value = action.data.value;


  return Object.assign({}, state, _defineProperty({}, pageSortState, value));
};

function fileInfoReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;
  var action = arguments[1];

  var handler = reducers[action.type];
  if (handler) return handler(state, action);
  return state;
}

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var DATE_NEW = exports.DATE_NEW = 'dateNew';
var DATE_OLD = exports.DATE_OLD = 'dateOld';
var TITLE = exports.TITLE = 'title';
var FILENAME = exports.FILENAME = 'filename';

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var AUTH = exports.AUTH = 'auth';
var BACKUP = exports.BACKUP = 'backup';
var CHANNEL = exports.CHANNEL = 'channel';
var DISCOVER = exports.DISCOVER = 'discover';
var FILE = exports.FILE = 'file';
var DOWNLOADED = exports.DOWNLOADED = 'downloaded';
var PUBLISHED = exports.PUBLISHED = 'published';
var GET_CREDITS = exports.GET_CREDITS = 'getcredits';
var HELP = exports.HELP = 'help';
var INVITE = exports.INVITE = 'invite';
var PUBLISH = exports.PUBLISH = 'publish';
var REPORT = exports.REPORT = 'report';
var REWARDS = exports.REWARDS = 'rewards';
var SEARCH = exports.SEARCH = 'search';
var SEND_CREDITS = exports.SEND_CREDITS = 'send';
var SETTINGS = exports.SETTINGS = 'settings';
var SHOW = exports.SHOW = 'show';
var SUBSCRIPTIONS = exports.SUBSCRIPTIONS = 'subscriptions';
var TRANSACTION_HISTORY = exports.TRANSACTION_HISTORY = 'history';
var HISTORY = exports.HISTORY = 'user_history';
var WALLET = exports.WALLET = 'wallet';

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.notificationsReducer = undefined;

var _handleActions;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _action_types = __webpack_require__(2);

var ACTIONS = _interopRequireWildcard(_action_types);

var _reduxUtils = __webpack_require__(35);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// @flow
/*:: import type {
  NotificationState,
  DoToast,
  DoError,
  DoNotification,
  DoEditNotification,
  DoDeleteNotification,
} from 'types/Notification';*/


var defaultState /*: NotificationState*/ = {
  notifications: [],
  toasts: [],
  errors: []
};

var notificationsReducer = (0, _reduxUtils.handleActions)((_handleActions = {}, _defineProperty(_handleActions, ACTIONS.CREATE_TOAST, function (state /*: NotificationState*/, action /*: DoToast*/) {
  var toast = action.data;
  var newToasts = state.toasts.slice();
  newToasts.push(toast);

  return _extends({}, state, {
    toasts: newToasts
  });
}), _defineProperty(_handleActions, ACTIONS.DISMISS_TOAST, function (state /*: NotificationState*/) {
  var newToasts = state.toasts.slice();
  newToasts.shift();

  return _extends({}, state, {
    toasts: newToasts
  });
}), _defineProperty(_handleActions, ACTIONS.CREATE_NOTIFICATION, function (state /*: NotificationState*/, action /*: DoNotification*/) {
  var notification = action.data;
  var newNotifications = state.notifications.slice();
  newNotifications.push(notification);

  return _extends({}, state, {
    notifications: newNotifications
  });
}), _defineProperty(_handleActions, ACTIONS.EDIT_NOTIFICATION, function (state /*: NotificationState*/, action /*: DoEditNotification*/) {
  var notification = action.data.notification;

  var notifications = state.notifications.slice();

  notifications = notifications.map(function (pastNotification) {
    return pastNotification.id === notification.id ? notification : pastNotification;
  });

  return _extends({}, state, {
    notifications: notifications
  });
}), _defineProperty(_handleActions, ACTIONS.DELETE_NOTIFICATION, function (state /*: NotificationState*/, action /*: DoDeleteNotification*/) {
  var id = action.data.id;

  var newNotifications = state.notifications.slice();
  newNotifications = newNotifications.filter(function (notification) {
    return notification.id !== id;
  });

  return _extends({}, state, {
    notifications: newNotifications
  });
}), _defineProperty(_handleActions, ACTIONS.CREATE_ERROR, function (state /*: NotificationState*/, action /*: DoError*/) {
  var error = action.data;
  var newErrors = state.errors.slice();
  newErrors.push(error);

  return _extends({}, state, {
    errors: newErrors
  });
}), _defineProperty(_handleActions, ACTIONS.DISMISS_ERROR, function (state /*: NotificationState*/) {
  var newErrors = state.errors.slice();
  newErrors.shift();

  return _extends({}, state, {
    errors: newErrors
  });
}), _handleActions), defaultState);

exports.notificationsReducer = notificationsReducer;

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
// util for creating reducers
// based off of redux-actions
// https://redux-actions.js.org/docs/api/handleAction.html#handleactions

// eslint-disable-next-line import/prefer-default-export
var handleActions = exports.handleActions = function handleActions(actionMap, defaultState) {
  return function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;
    var action = arguments[1];

    var handler = actionMap[action.type];

    if (handler) {
      var newState = handler(state, action);
      return Object.assign({}, state, newState);
    }

    // just return the original state if no handler
    // returning a copy here breaks redux-persist
    return state;
  };
};

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.searchReducer = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _options, _handleActions;

var _action_types = __webpack_require__(2);

var ACTIONS = _interopRequireWildcard(_action_types);

var _reduxUtils = __webpack_require__(35);

var _search = __webpack_require__(16);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; } // @flow


/*:: import type {
  SearchState,
  SearchSuccess,
  UpdateSearchQuery,
  UpdateSearchSuggestions,
  HistoryNavigate,
  UpdateSearchOptions,
} from 'types/Search';*/


var defaultState = {
  isActive: false, // does the user have any typed text in the search input
  focused: false, // is the search input focused
  searchQuery: '', // needs to be an empty string for input focusing
  options: (_options = {}, _defineProperty(_options, _search.SEARCH_OPTIONS.RESULT_COUNT, 30), _defineProperty(_options, _search.SEARCH_OPTIONS.CLAIM_TYPE, _search.SEARCH_OPTIONS.INCLUDE_FILES_AND_CHANNELS), _defineProperty(_options, _search.SEARCH_OPTIONS.MEDIA_AUDIO, true), _defineProperty(_options, _search.SEARCH_OPTIONS.MEDIA_VIDEO, true), _defineProperty(_options, _search.SEARCH_OPTIONS.MEDIA_TEXT, true), _defineProperty(_options, _search.SEARCH_OPTIONS.MEDIA_IMAGE, true), _defineProperty(_options, _search.SEARCH_OPTIONS.MEDIA_APPLICATION, true), _options),
  suggestions: {},
  urisByQuery: {}
};

var searchReducer = exports.searchReducer = (0, _reduxUtils.handleActions)((_handleActions = {}, _defineProperty(_handleActions, ACTIONS.SEARCH_START, function (state /*: SearchState*/) /*: SearchState*/ {
  return _extends({}, state, {
    searching: true
  });
}), _defineProperty(_handleActions, ACTIONS.SEARCH_SUCCESS, function (state /*: SearchState*/, action /*: SearchSuccess*/) /*: SearchState*/ {
  var _action$data = action.data,
      query = _action$data.query,
      uris = _action$data.uris;


  return _extends({}, state, {
    searching: false,
    urisByQuery: Object.assign({}, state.urisByQuery, _defineProperty({}, query, uris))
  });
}), _defineProperty(_handleActions, ACTIONS.SEARCH_FAIL, function (state /*: SearchState*/) /*: SearchState*/ {
  return _extends({}, state, {
    searching: false
  });
}), _defineProperty(_handleActions, ACTIONS.UPDATE_SEARCH_QUERY, function (state /*: SearchState*/, action /*: UpdateSearchQuery*/) /*: SearchState*/ {
  return _extends({}, state, {
    searchQuery: action.data.query,
    isActive: true
  });
}), _defineProperty(_handleActions, ACTIONS.UPDATE_SEARCH_SUGGESTIONS, function (state /*: SearchState*/, action /*: UpdateSearchSuggestions*/) /*: SearchState*/ {
  return _extends({}, state, {
    suggestions: _extends({}, state.suggestions, _defineProperty({}, action.data.query, action.data.suggestions))
  });
}), _defineProperty(_handleActions, ACTIONS.HISTORY_NAVIGATE, function (state /*: SearchState*/, action /*: HistoryNavigate*/) /*: SearchState*/ {
  var url = action.data.url;

  return _extends({}, state, {
    searchQuery: url.indexOf('/search') === 0 ? url.slice(14) : '',
    isActive: url.indexOf('/search') === 0,
    suggestions: {}
  });
}), _defineProperty(_handleActions, ACTIONS.DISMISS_NOTIFICATION, function (state /*: SearchState*/) /*: SearchState*/ {
  return _extends({}, state, {
    isActive: false
  });
}), _defineProperty(_handleActions, ACTIONS.SEARCH_FOCUS, function (state /*: SearchState*/) /*: SearchState*/ {
  return _extends({}, state, {
    focused: true
  });
}), _defineProperty(_handleActions, ACTIONS.SEARCH_BLUR, function (state /*: SearchState*/) /*: SearchState*/ {
  return _extends({}, state, {
    focused: false
  });
}), _defineProperty(_handleActions, ACTIONS.UPDATE_SEARCH_OPTIONS, function (state /*: SearchState*/, action /*: UpdateSearchOptions*/) /*: SearchState*/ {
  var oldOptions = state.options;

  var newOptions = action.data;
  var options = _extends({}, oldOptions, newOptions);
  return _extends({}, state, {
    options: options
  });
}), _handleActions), defaultState);

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.walletReducer = walletReducer;

var _action_types = __webpack_require__(2);

var ACTIONS = _interopRequireWildcard(_action_types);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var reducers = {}; // @flow

var buildDraftTransaction = function buildDraftTransaction() {
  return {
    amount: undefined,
    address: undefined
  };
};

// TODO: Split into common success and failure types
// See details in https://github.com/lbryio/lbry/issues/1307
/*:: type ActionResult = {
  type: any,
  result: any,
};*/
/*:: type WalletState = {
  balance: any,
  blocks: any,
  latestBlock: ?number,
  transactions: any,
  fetchingTransactions: boolean,
  gettingNewAddress: boolean,
  draftTransaction: any,
  sendingSupport: boolean,
  walletIsEncrypted: boolean,
  walletEncryptPending: boolean,
  walletEncryptSucceded: ?boolean,
  walletEncryptResult: ?boolean,
  walletDecryptPending: boolean,
  walletDecryptSucceded: ?boolean,
  walletDecryptResult: ?boolean,
  walletUnlockPending: boolean,
  walletUnlockSucceded: ?boolean,
  walletUnlockResult: ?boolean,
  walletLockPending: boolean,
  walletLockSucceded: ?boolean,
  walletLockResult: ?boolean,
};*/


var defaultState = {
  balance: undefined,
  blocks: {},
  latestBlock: undefined,
  transactions: {},
  fetchingTransactions: false,
  gettingNewAddress: false,
  draftTransaction: buildDraftTransaction(),
  sendingSupport: false,
  walletIsEncrypted: false,
  walletEncryptPending: false,
  walletEncryptSucceded: null,
  walletEncryptResult: null,
  walletDecryptPending: false,
  walletDecryptSucceded: null,
  walletDecryptResult: null,
  walletUnlockPending: false,
  walletUnlockSucceded: null,
  walletUnlockResult: null,
  walletLockPending: false,
  walletLockSucceded: null,
  walletLockResult: null,
  transactionListFilter: 'all'
};

reducers[ACTIONS.FETCH_TRANSACTIONS_STARTED] = function (state /*: WalletState*/) {
  return Object.assign({}, state, {
    fetchingTransactions: true
  });
};

reducers[ACTIONS.FETCH_TRANSACTIONS_COMPLETED] = function (state /*: WalletState*/, action) {
  var byId = Object.assign({}, state.transactions);

  var transactions = action.data.transactions;


  transactions.forEach(function (transaction) {
    byId[transaction.txid] = transaction;
  });

  return Object.assign({}, state, {
    transactions: byId,
    fetchingTransactions: false
  });
};

reducers[ACTIONS.GET_NEW_ADDRESS_STARTED] = function (state /*: WalletState*/) {
  return Object.assign({}, state, {
    gettingNewAddress: true
  });
};

reducers[ACTIONS.GET_NEW_ADDRESS_COMPLETED] = function (state /*: WalletState*/, action) {
  var address = action.data.address;

  // Say no to localStorage!

  return Object.assign({}, state, {
    gettingNewAddress: false,
    receiveAddress: address
  });
};

reducers[ACTIONS.UPDATE_BALANCE] = function (state /*: WalletState*/, action) {
  return Object.assign({}, state, {
    balance: action.data.balance
  });
};

reducers[ACTIONS.CHECK_ADDRESS_IS_MINE_STARTED] = function (state /*: WalletState*/) {
  return Object.assign({}, state, {
    checkingAddressOwnership: true
  });
};

reducers[ACTIONS.CHECK_ADDRESS_IS_MINE_COMPLETED] = function (state /*: WalletState*/) {
  return Object.assign({}, state, {
    checkingAddressOwnership: false
  });
};

reducers[ACTIONS.SET_DRAFT_TRANSACTION_AMOUNT] = function (state /*: WalletState*/, action) {
  var oldDraft = state.draftTransaction;
  var newDraft = Object.assign({}, oldDraft, {
    amount: parseFloat(action.data.amount)
  });

  return Object.assign({}, state, {
    draftTransaction: newDraft
  });
};

reducers[ACTIONS.SET_DRAFT_TRANSACTION_ADDRESS] = function (state /*: WalletState*/, action) {
  var oldDraft = state.draftTransaction;
  var newDraft = Object.assign({}, oldDraft, {
    address: action.data.address
  });

  return Object.assign({}, state, {
    draftTransaction: newDraft
  });
};

reducers[ACTIONS.SEND_TRANSACTION_STARTED] = function (state /*: WalletState*/) {
  var newDraftTransaction = Object.assign({}, state.draftTransaction, {
    sending: true
  });

  return Object.assign({}, state, {
    draftTransaction: newDraftTransaction
  });
};

reducers[ACTIONS.SEND_TRANSACTION_COMPLETED] = function (state /*: WalletState*/) {
  return Object.assign({}, state, {
    draftTransaction: buildDraftTransaction()
  });
};

reducers[ACTIONS.SEND_TRANSACTION_FAILED] = function (state /*: WalletState*/, action) {
  var newDraftTransaction = Object.assign({}, state.draftTransaction, {
    sending: false,
    error: action.data.error
  });

  return Object.assign({}, state, {
    draftTransaction: newDraftTransaction
  });
};

reducers[ACTIONS.SUPPORT_TRANSACTION_STARTED] = function (state /*: WalletState*/) {
  return Object.assign({}, state, {
    sendingSupport: true
  });
};

reducers[ACTIONS.SUPPORT_TRANSACTION_COMPLETED] = function (state /*: WalletState*/) {
  return Object.assign({}, state, {
    sendingSupport: false
  });
};

reducers[ACTIONS.SUPPORT_TRANSACTION_FAILED] = function (state /*: WalletState*/, action) {
  return Object.assign({}, state, {
    error: action.data.error,
    sendingSupport: false
  });
};

reducers[ACTIONS.FETCH_BLOCK_SUCCESS] = function (state /*: WalletState*/, action) {
  var _action$data = action.data,
      block = _action$data.block,
      height = _action$data.block.height;

  var blocks = Object.assign({}, state.blocks);

  blocks[height] = block;

  return Object.assign({}, state, { blocks: blocks });
};

reducers[ACTIONS.WALLET_STATUS_COMPLETED] = function (state /*: WalletState*/, action) {
  return Object.assign({}, state, {
    walletIsEncrypted: action.result
  });
};

reducers[ACTIONS.WALLET_ENCRYPT_START] = function (state /*: WalletState*/) {
  return Object.assign({}, state, {
    walletEncryptPending: true,
    walletEncryptSucceded: null,
    walletEncryptResult: null
  });
};

reducers[ACTIONS.WALLET_ENCRYPT_COMPLETED] = function (state /*: WalletState*/, action /*: ActionResult*/) {
  return Object.assign({}, state, {
    walletEncryptPending: false,
    walletEncryptSucceded: true,
    walletEncryptResult: action.result
  });
};

reducers[ACTIONS.WALLET_ENCRYPT_FAILED] = function (state /*: WalletState*/, action /*: ActionResult*/) {
  return Object.assign({}, state, {
    walletEncryptPending: false,
    walletEncryptSucceded: false,
    walletEncryptResult: action.result
  });
};

reducers[ACTIONS.WALLET_DECRYPT_START] = function (state /*: WalletState*/) {
  return Object.assign({}, state, {
    walletDecryptPending: true,
    walletDecryptSucceded: null,
    walletDecryptResult: null
  });
};

reducers[ACTIONS.WALLET_DECRYPT_COMPLETED] = function (state /*: WalletState*/, action /*: ActionResult*/) {
  return Object.assign({}, state, {
    walletDecryptPending: false,
    walletDecryptSucceded: true,
    walletDecryptResult: action.result
  });
};

reducers[ACTIONS.WALLET_DECRYPT_FAILED] = function (state /*: WalletState*/, action /*: ActionResult*/) {
  return Object.assign({}, state, {
    walletDecryptPending: false,
    walletDecryptSucceded: false,
    walletDecryptResult: action.result
  });
};

reducers[ACTIONS.WALLET_UNLOCK_START] = function (state /*: WalletState*/) {
  return Object.assign({}, state, {
    walletUnlockPending: true,
    walletUnlockSucceded: null,
    walletUnlockResult: null
  });
};

reducers[ACTIONS.WALLET_UNLOCK_COMPLETED] = function (state /*: WalletState*/, action /*: ActionResult*/) {
  return Object.assign({}, state, {
    walletUnlockPending: false,
    walletUnlockSucceded: true,
    walletUnlockResult: action.result
  });
};

reducers[ACTIONS.WALLET_UNLOCK_FAILED] = function (state /*: WalletState*/, action /*: ActionResult*/) {
  return Object.assign({}, state, {
    walletUnlockPending: false,
    walletUnlockSucceded: false,
    walletUnlockResult: action.result
  });
};

reducers[ACTIONS.WALLET_LOCK_START] = function (state /*: WalletState*/) {
  return Object.assign({}, state, {
    walletLockPending: false,
    walletLockSucceded: null,
    walletLockResult: null
  });
};

reducers[ACTIONS.WALLET_LOCK_COMPLETED] = function (state /*: WalletState*/, action /*: ActionResult*/) {
  return Object.assign({}, state, {
    walletLockPending: false,
    walletLockSucceded: true,
    walletLockResult: action.result
  });
};

reducers[ACTIONS.WALLET_LOCK_FAILED] = function (state /*: WalletState*/, action /*: ActionResult*/) {
  return Object.assign({}, state, {
    walletLockPending: false,
    walletLockSucceded: false,
    walletLockResult: action.result
  });
};

reducers[ACTIONS.SET_TRANSACTION_LIST_FILTER] = function (state /*: WalletState*/, action /*: {}*/) {
  return Object.assign({}, state, {
    transactionListFilter: action.data
  });
};

reducers[ACTIONS.UPDATE_CURRENT_HEIGHT] = function (state /*: WalletState*/, action /*: { data: number }*/) {
  return Object.assign({}, state, {
    latestBlock: action.data
  });
};

function walletReducer() {
  var state /*: WalletState*/ = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;
  var action /*: ActionResult*/ = arguments[1];

  var handler = reducers[action.type];
  if (handler) return handler(state, action);
  return state;
}

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.contentReducer = contentReducer;

var _action_types = __webpack_require__(2);

var ACTIONS = _interopRequireWildcard(_action_types);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var reducers = {};
var defaultState = {
  positions: {}
};

reducers[ACTIONS.SET_CONTENT_POSITION] = function (state, action) {
  var _action$data = action.data,
      claimId = _action$data.claimId,
      outpoint = _action$data.outpoint,
      position = _action$data.position;

  return _extends({}, state, {
    positions: _extends({}, state.positions, _defineProperty({}, claimId, _extends({}, state.positions[claimId], _defineProperty({}, outpoint, position))))
  });
};

function contentReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;
  var action = arguments[1];

  var handler = reducers[action.type];
  if (handler) return handler(state, action);
  return state;
}

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeSelectContentPositionForUri = exports.selectState = undefined;

var _reselect = __webpack_require__(14);

var _claims = __webpack_require__(12);

var selectState = exports.selectState = function selectState(state /*: any*/) {
  return state.content || {};
};

var makeSelectContentPositionForUri = exports.makeSelectContentPositionForUri = function makeSelectContentPositionForUri(uri /*: string*/) {
  return (0, _reselect.createSelector)(selectState, (0, _claims.makeSelectClaimForUri)(uri), function (state, claim) {
    if (!claim) {
      return null;
    }
    var outpoint = claim.txid + ':' + claim.nout;
    var id = claim.claim_id;
    return state.positions[id] ? state.positions[id][outpoint] : null;
  });
};

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.selectError = exports.selectToast = exports.selectState = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _reselect = __webpack_require__(14);

var selectState = exports.selectState = function selectState(state) {
  return state.notifications || {};
};

var selectToast = exports.selectToast = (0, _reselect.createSelector)(selectState, function (state) {
  if (state.toasts.length) {
    var _state$toasts$ = state.toasts[0],
        id = _state$toasts$.id,
        params = _state$toasts$.params;

    return _extends({
      id: id
    }, params);
  }

  return null;
});

var selectError = exports.selectError = (0, _reselect.createSelector)(selectState, function (state) {
  if (state.errors.length) {
    var error = state.errors[0].error;

    return {
      error: error
    };
  }

  return null;
});

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var API_DOWN = exports.API_DOWN = 'apiDown';
var READY = exports.READY = 'ready';
var IN_PROGRESS = exports.IN_PROGRESS = 'inProgress';
var COMPLETE = exports.COMPLETE = 'complete';
var MANUAL = exports.MANUAL = 'manual';

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
/* hardcoded names still exist for these in reducers/settings.js - only discovered when debugging */
/* Many SETTINGS are stored in the localStorage by their name -
    be careful about changing the value of a SETTINGS constant, as doing so can invalidate existing SETTINGS */
var CREDIT_REQUIRED_ACKNOWLEDGED = exports.CREDIT_REQUIRED_ACKNOWLEDGED = 'credit_required_acknowledged';
var NEW_USER_ACKNOWLEDGED = exports.NEW_USER_ACKNOWLEDGED = 'welcome_acknowledged';
var EMAIL_COLLECTION_ACKNOWLEDGED = exports.EMAIL_COLLECTION_ACKNOWLEDGED = 'email_collection_acknowledged';
var LANGUAGE = exports.LANGUAGE = 'language';
var SHOW_NSFW = exports.SHOW_NSFW = 'showNsfw';
var SHOW_UNAVAILABLE = exports.SHOW_UNAVAILABLE = 'showUnavailable';
var INSTANT_PURCHASE_ENABLED = exports.INSTANT_PURCHASE_ENABLED = 'instantPurchaseEnabled';
var INSTANT_PURCHASE_MAX = exports.INSTANT_PURCHASE_MAX = 'instantPurchaseMax';
var THEME = exports.THEME = 'theme';
var THEMES = exports.THEMES = 'themes';
var AUTOMATIC_DARK_MODE_ENABLED = exports.AUTOMATIC_DARK_MODE_ENABLED = 'automaticDarkModeEnabled';

// mobile settings
var BACKGROUND_PLAY_ENABLED = exports.BACKGROUND_PLAY_ENABLED = 'backgroundPlayEnabled';
var FOREGROUND_NOTIFICATION_ENABLED = exports.FOREGROUND_NOTIFICATION_ENABLED = 'foregroundNotificationEnabled';
var KEEP_DAEMON_RUNNING = exports.KEEP_DAEMON_RUNNING = 'keepDaemonRunning';

/***/ })
/******/ ]);
});