(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(typeof self !== 'undefined' ? self : this, function() {
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 14);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var OPEN_MODAL = exports.OPEN_MODAL = 'OPEN_MODAL';
var CLOSE_MODAL = exports.CLOSE_MODAL = 'CLOSE_MODAL';
var SHOW_SNACKBAR = exports.SHOW_SNACKBAR = 'SHOW_SNACKBAR';
var REMOVE_SNACKBAR_SNACK = exports.REMOVE_SNACKBAR_SNACK = 'REMOVE_SNACKBAR_SNACK';
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

// Wallet
var GET_NEW_ADDRESS_STARTED = exports.GET_NEW_ADDRESS_STARTED = 'GET_NEW_ADDRESS_STARTED';
var GET_NEW_ADDRESS_COMPLETED = exports.GET_NEW_ADDRESS_COMPLETED = 'GET_NEW_ADDRESS_COMPLETED';
var FETCH_TRANSACTIONS_STARTED = exports.FETCH_TRANSACTIONS_STARTED = 'FETCH_TRANSACTIONS_STARTED';
var FETCH_TRANSACTIONS_COMPLETED = exports.FETCH_TRANSACTIONS_COMPLETED = 'FETCH_TRANSACTIONS_COMPLETED';
var UPDATE_BALANCE = exports.UPDATE_BALANCE = 'UPDATE_BALANCE';
var CHECK_ADDRESS_IS_MINE_STARTED = exports.CHECK_ADDRESS_IS_MINE_STARTED = 'CHECK_ADDRESS_IS_MINE_STARTED';
var CHECK_ADDRESS_IS_MINE_COMPLETED = exports.CHECK_ADDRESS_IS_MINE_COMPLETED = 'CHECK_ADDRESS_IS_MINE_COMPLETED';
var SET_DRAFT_TRANSACTION_AMOUNT = exports.SET_DRAFT_TRANSACTION_AMOUNT = 'SET_DRAFT_TRANSACTION_AMOUNT';
var SET_DRAFT_TRANSACTION_ADDRESS = exports.SET_DRAFT_TRANSACTION_ADDRESS = 'SET_DRAFT_TRANSACTION_ADDRESS';
var SEND_TRANSACTION_STARTED = exports.SEND_TRANSACTION_STARTED = 'SEND_TRANSACTION_STARTED';
var SEND_TRANSACTION_COMPLETED = exports.SEND_TRANSACTION_COMPLETED = 'SEND_TRANSACTION_COMPLETED';
var SEND_TRANSACTION_FAILED = exports.SEND_TRANSACTION_FAILED = 'SEND_TRANSACTION_FAILED';
var FETCH_BLOCK_SUCCESS = exports.FETCH_BLOCK_SUCCESS = 'FETCH_BLOCK_SUCCESS';
var SUPPORT_TRANSACTION_STARTED = exports.SUPPORT_TRANSACTION_STARTED = 'SUPPORT_TRANSACTION_STARTED';
var SUPPORT_TRANSACTION_COMPLETED = exports.SUPPORT_TRANSACTION_COMPLETED = 'SUPPORT_TRANSACTION_COMPLETED';
var SUPPORT_TRANSACTION_FAILED = exports.SUPPORT_TRANSACTION_FAILED = 'SUPPORT_TRANSACTION_FAILED';

// Claims
var FETCH_FEATURED_CONTENT_STARTED = exports.FETCH_FEATURED_CONTENT_STARTED = 'FETCH_FEATURED_CONTENT_STARTED';
var FETCH_FEATURED_CONTENT_COMPLETED = exports.FETCH_FEATURED_CONTENT_COMPLETED = 'FETCH_FEATURED_CONTENT_COMPLETED';
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
var FETCH_CHANNEL_LIST_MINE_STARTED = exports.FETCH_CHANNEL_LIST_MINE_STARTED = 'FETCH_CHANNEL_LIST_MINE_STARTED';
var FETCH_CHANNEL_LIST_MINE_COMPLETED = exports.FETCH_CHANNEL_LIST_MINE_COMPLETED = 'FETCH_CHANNEL_LIST_MINE_COMPLETED';
var CREATE_CHANNEL_STARTED = exports.CREATE_CHANNEL_STARTED = 'CREATE_CHANNEL_STARTED';
var CREATE_CHANNEL_COMPLETED = exports.CREATE_CHANNEL_COMPLETED = 'CREATE_CHANNEL_COMPLETED';
var PUBLISH_STARTED = exports.PUBLISH_STARTED = 'PUBLISH_STARTED';
var PUBLISH_COMPLETED = exports.PUBLISH_COMPLETED = 'PUBLISH_COMPLETED';
var PUBLISH_FAILED = exports.PUBLISH_FAILED = 'PUBLISH_FAILED';
var SET_PLAYING_URI = exports.SET_PLAYING_URI = 'PLAY_URI';

// Files
var FILE_LIST_STARTED = exports.FILE_LIST_STARTED = 'FILE_LIST_STARTED';
var FILE_LIST_SUCCEEDED = exports.FILE_LIST_SUCCEEDED = 'FILE_LIST_SUCCEEDED';
var FETCH_FILE_INFO_STARTED = exports.FETCH_FILE_INFO_STARTED = 'FETCH_FILE_INFO_STARTED';
var FETCH_FILE_INFO_COMPLETED = exports.FETCH_FILE_INFO_COMPLETED = 'FETCH_FILE_INFO_COMPLETED';
var FETCH_COST_INFO_STARTED = exports.FETCH_COST_INFO_STARTED = 'FETCH_COST_INFO_STARTED';
var FETCH_COST_INFO_COMPLETED = exports.FETCH_COST_INFO_COMPLETED = 'FETCH_COST_INFO_COMPLETED';
var LOADING_VIDEO_STARTED = exports.LOADING_VIDEO_STARTED = 'LOADING_VIDEO_STARTED';
var LOADING_VIDEO_COMPLETED = exports.LOADING_VIDEO_COMPLETED = 'LOADING_VIDEO_COMPLETED';
var LOADING_VIDEO_FAILED = exports.LOADING_VIDEO_FAILED = 'LOADING_VIDEO_FAILED';
var DOWNLOADING_STARTED = exports.DOWNLOADING_STARTED = 'DOWNLOADING_STARTED';
var DOWNLOADING_PROGRESSED = exports.DOWNLOADING_PROGRESSED = 'DOWNLOADING_PROGRESSED';
var DOWNLOADING_COMPLETED = exports.DOWNLOADING_COMPLETED = 'DOWNLOADING_COMPLETED';
var PLAY_VIDEO_STARTED = exports.PLAY_VIDEO_STARTED = 'PLAY_VIDEO_STARTED';
var FETCH_AVAILABILITY_STARTED = exports.FETCH_AVAILABILITY_STARTED = 'FETCH_AVAILABILITY_STARTED';
var FETCH_AVAILABILITY_COMPLETED = exports.FETCH_AVAILABILITY_COMPLETED = 'FETCH_AVAILABILITY_COMPLETED';
var FILE_DELETE = exports.FILE_DELETE = 'FILE_DELETE';

// Search
var SEARCH_STARTED = exports.SEARCH_STARTED = 'SEARCH_STARTED';
var SEARCH_COMPLETED = exports.SEARCH_COMPLETED = 'SEARCH_COMPLETED';
var SEARCH_CANCELLED = exports.SEARCH_CANCELLED = 'SEARCH_CANCELLED';

// Settings
var DAEMON_SETTINGS_RECEIVED = exports.DAEMON_SETTINGS_RECEIVED = 'DAEMON_SETTINGS_RECEIVED';
var CLIENT_SETTING_CHANGED = exports.CLIENT_SETTING_CHANGED = 'CLIENT_SETTING_CHANGED';

// User
var AUTHENTICATION_STARTED = exports.AUTHENTICATION_STARTED = 'AUTHENTICATION_STARTED';
var AUTHENTICATION_SUCCESS = exports.AUTHENTICATION_SUCCESS = 'AUTHENTICATION_SUCCESS';
var AUTHENTICATION_FAILURE = exports.AUTHENTICATION_FAILURE = 'AUTHENTICATION_FAILURE';
var USER_EMAIL_DECLINE = exports.USER_EMAIL_DECLINE = 'USER_EMAIL_DECLINE';
var USER_EMAIL_NEW_STARTED = exports.USER_EMAIL_NEW_STARTED = 'USER_EMAIL_NEW_STARTED';
var USER_EMAIL_NEW_SUCCESS = exports.USER_EMAIL_NEW_SUCCESS = 'USER_EMAIL_NEW_SUCCESS';
var USER_EMAIL_NEW_EXISTS = exports.USER_EMAIL_NEW_EXISTS = 'USER_EMAIL_NEW_EXISTS';
var USER_EMAIL_NEW_FAILURE = exports.USER_EMAIL_NEW_FAILURE = 'USER_EMAIL_NEW_FAILURE';
var USER_EMAIL_VERIFY_STARTED = exports.USER_EMAIL_VERIFY_STARTED = 'USER_EMAIL_VERIFY_STARTED';
var USER_EMAIL_VERIFY_SUCCESS = exports.USER_EMAIL_VERIFY_SUCCESS = 'USER_EMAIL_VERIFY_SUCCESS';
var USER_EMAIL_VERIFY_FAILURE = exports.USER_EMAIL_VERIFY_FAILURE = 'USER_EMAIL_VERIFY_FAILURE';
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

// Video controls
var SET_VIDEO_PAUSE = exports.SET_VIDEO_PAUSE = 'SET_VIDEO_PAUSE';

// Media controls
var MEDIA_PLAY = exports.MEDIA_PLAY = 'MEDIA_PLAY';
var MEDIA_PAUSE = exports.MEDIA_PAUSE = 'MEDIA_PAUSE';
var MEDIA_POSITION = exports.MEDIA_POSITION = 'MEDIA_POSITION';

// Notifications
var NOTIFICATION_CREATED = exports.NOTIFICATION_CREATED = 'NOTIFICATION_CREATED';
var NOTIFICATION_DISPLAYED = exports.NOTIFICATION_DISPLAYED = 'NOTIFICATION_DISPLAYED';

/***/ }),
/* 1 */
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
/* 2 */
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
var channelNameMinLength = 1;
var claimIdMaxLength = 40;

var regexInvalidURI = exports.regexInvalidURI = /[^A-Za-z0-9-]/g;
var regexAddress = exports.regexAddress = /^b(?=[^0OIl]{32,33})[0-9A-Za-z]{32,33}$/;

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
  '([^:$#/]*)' + // name (stops at the first separator or end)
  '([:$#]?)([^/]*)' + // modifier separator, modifier (stops at the first path separator or end)
  '(/?)(.*)' // path separator, path
  );

  var _componentsRegex$exec = componentsRegex.exec(URI).slice(1).map(function (match) {
    return match || null;
  }),
      _componentsRegex$exec2 = _slicedToArray(_componentsRegex$exec, 6),
      proto = _componentsRegex$exec2[0],
      name = _componentsRegex$exec2[1],
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
  if (!name) {
    throw new Error(__('URI does not include name.'));
  }

  var isChannel = name.startsWith('@');
  var channelName = isChannel ? name.slice(1) : name;

  if (isChannel) {
    if (!channelName) {
      throw new Error(__('No channel name after @.'));
    }

    if (channelName.length < channelNameMinLength) {
      throw new Error(__('Channel names must be at least %s characters.', channelNameMinLength));
    }

    contentName = path;
  }

  var nameBadChars = (channelName || name).match(regexInvalidURI);
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

  if (claimId && (claimId.length > claimIdMaxLength || !claimId.match(/^[0-9a-f]+$/)) && !claimId.match(/^pending/) // ought to be dropped when savePendingPublish drops hack
  ) {
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
    name: name,
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
  var claimId = URIObj.claimId,
      claimSequence = URIObj.claimSequence,
      bidPosition = URIObj.bidPosition,
      contentName = URIObj.contentName,
      channelName = URIObj.channelName;
  var name = URIObj.name,
      path = URIObj.path;


  if (channelName) {
    var channelNameFormatted = channelName.startsWith('@') ? channelName : '@' + channelName;
    if (!name) {
      name = channelNameFormatted;
    } else if (name !== channelNameFormatted) {
      throw new Error(__('Received a channel content URI, but name and channelName do not match. "name" represents the value in the name position of the URI (lbry://name...), which for channel content will be the channel name. In most cases, to construct a channel URI you should just pass channelName and contentName.'));
    }
  }

  if (contentName) {
    if (!name) {
      name = contentName;
    } else if (!path) {
      path = contentName;
    }
    if (path && path !== contentName) {
      throw new Error(__('Path and contentName do not match. Only one is required; most likely you wanted contentName.'));
    }
  }

  return (includeProto ? 'lbry://' : '') + name + (claimId ? '#' + claimId : '') + (claimSequence ? ':' + claimSequence : '') + (bidPosition ? '' + bidPosition : '') + (path ? '/' + path : '');
}

/* Takes a parseable LBRY URI and converts it to standard, canonical format */
function normalizeURI(URI) {
  if (URI.match(/pending_claim/)) return URI;

  var _parseURI = parseURI(URI),
      name = _parseURI.name,
      path = _parseURI.path,
      bidPosition = _parseURI.bidPosition,
      claimSequence = _parseURI.claimSequence,
      claimId = _parseURI.claimId;

  return buildURI({ name: name, path: path, claimSequence: claimSequence, bidPosition: bidPosition, claimId: claimId });
}

function isURIValid(URI) {
  var parts = void 0;
  try {
    parts = parseURI(normalizeURI(URI));
  } catch (error) {
    return false;
  }
  return parts && parts.name;
}

function isNameValid(name) {
  var checkCase = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

  var regexp = new RegExp('^[a-z0-9-]+$', checkCase ? '' : 'i');
  return regexp.test(name);
}

function isURIClaimable(URI) {
  var parts = void 0;
  try {
    parts = parseURI(normalizeURI(URI));
  } catch (error) {
    return false;
  }
  return parts && parts.name && !parts.claimId && !parts.bidPosition && !parts.claimSequence && !parts.isChannel && !parts.path;
}

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.selectRewardContentClaimIds = exports.makeSelectTotalPagesForChannel = exports.makeSelectTotalItemsForChannel = exports.selectChannelClaimCounts = exports.selectPlayingUri = exports.selectFetchingFeaturedUris = exports.selectFeaturedUris = exports.makeSelectIsUriResolving = exports.selectResolvingUris = exports.selectMyChannelClaims = exports.selectFetchingMyChannels = exports.selectMyClaimsOutpoints = exports.selectAllMyClaimsByOutpoint = exports.selectMyClaimsWithoutChannels = exports.selectMyClaims = exports.selectPendingClaims = exports.selectIsFetchingClaimListMine = exports.makeSelectContentTypeForUri = exports.makeSelectTitleForUri = exports.makeSelectMetadataForUri = exports.makeSelectClaimsInChannelForCurrentPage = exports.makeSelectFetchingChannelClaims = exports.selectAllFetchingChannelClaims = exports.makeSelectClaimIsMine = exports.selectMyActiveClaims = exports.selectAbandoningIds = exports.selectMyClaimsRaw = exports.makeSelectClaimForUri = exports.selectAllClaimsByChannel = exports.selectClaimsByUri = exports.selectClaimsById = undefined;

var _lbryURI = __webpack_require__(2);

var _navigation = __webpack_require__(4);

var _reselect = __webpack_require__(1);

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var selectState = function selectState(state) {
  return state.claims || {};
};

var selectClaimsById = exports.selectClaimsById = (0, _reselect.createSelector)(selectState, function (state) {
  return state.byId || {};
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

var makeSelectClaimForUri = exports.makeSelectClaimForUri = function makeSelectClaimForUri(uri) {
  return (0, _reselect.createSelector)(selectClaimsByUri, function (claims) {
    return claims && claims[(0, _lbryURI.normalizeURI)(uri)];
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

var selectPendingClaims = exports.selectPendingClaims = (0, _reselect.createSelector)(selectState, function (state) {
  return Object.values(state.pendingById || {});
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
      // I'm not sure why this check is necessary, but it ought to be a quick fix for https://github.com/lbryio/lbry-app/issues/544
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

var selectFeaturedUris = exports.selectFeaturedUris = (0, _reselect.createSelector)(selectState, function (state) {
  return state.featuredUris;
});

var selectFetchingFeaturedUris = exports.selectFetchingFeaturedUris = (0, _reselect.createSelector)(selectState, function (state) {
  return state.fetchingFeaturedContent;
});

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
  return (0, _reselect.createSelector)(selectChannelClaimCounts, function (byUri) {
    return byUri && byUri[uri] && Math.ceil(byUri[uri] / 10);
  });
};

var selectRewardContentClaimIds = exports.selectRewardContentClaimIds = (0, _reselect.createSelector)(selectState, function (state) {
  return state.rewardedContentClaimIds;
});

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.selectActiveHistoryEntry = exports.selectHistoryStack = exports.selectHistoryIndex = exports.selectIsForwardDisabled = exports.selectIsBackDisabled = exports.selectPathAfterAuth = exports.selectPageTitle = exports.selectHeaderLinks = exports.makeSelectCurrentParam = exports.selectCurrentParams = exports.selectCurrentPage = exports.computePageFromPath = exports.selectCurrentPath = exports.selectState = undefined;

var _reselect = __webpack_require__(1);

var _lbryURI = __webpack_require__(2);

var _query_params = __webpack_require__(11);

var selectState = exports.selectState = function selectState(state) {
  return state.navigation || {};
};

var selectCurrentPath = exports.selectCurrentPath = (0, _reselect.createSelector)(selectState, function (state) {
  return state.currentPath;
});

var computePageFromPath = exports.computePageFromPath = function computePageFromPath(path) {
  return path.replace(/^\//, '').split('?')[0];
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

var selectHeaderLinks = exports.selectHeaderLinks = (0, _reselect.createSelector)(selectCurrentPage, function (page) {
  // This contains intentional fall throughs
  switch (page) {
    case 'wallet':
    case 'history':
    case 'send':
    case 'getcredits':
    case 'invite':
    case 'rewards':
    case 'backup':
      return {
        wallet: __('Overview'),
        getcredits: __('Get Credits'),
        send: __('Send / Receive'),
        rewards: __('Rewards'),
        invite: __('Invites'),
        history: __('History')
      };
    case 'downloaded':
    case 'published':
      return {
        downloaded: __('Downloaded'),
        published: __('Published')
      };
    case 'settings':
    case 'help':
      return {
        settings: __('Settings'),
        help: __('Help')
      };
    case 'discover':
    case 'subscriptions':
      return {
        discover: __('Discover'),
        subscriptions: __('Subscriptions')
      };
    default:
      return null;
  }
});

var selectPageTitle = exports.selectPageTitle = (0, _reselect.createSelector)(selectCurrentPage, selectCurrentParams, function (page, params) {
  switch (page) {
    case 'settings':
      return __('Settings');
    case 'report':
      return __('Report');
    case 'wallet':
      return __('Wallet');
    case 'send':
      return __('Send or Receive LBRY Credits');
    case 'getcredits':
      return __('Get LBRY Credits');
    case 'backup':
      return __('Backup Your Wallet');
    case 'rewards':
      return __('Rewards');
    case 'invite':
      return __('Invites');
    case 'start':
      return __('Start');
    case 'publish':
      return params.id ? __('Edit') : __('Publish');
    case 'help':
      return __('Help');
    case 'developer':
      return __('Developer');
    case 'show':
      {
        var parts = [(0, _lbryURI.normalizeURI)(params.uri)];
        // If the params has any keys other than "uri"
        if (Object.keys(params).length > 1) {
          parts.push((0, _query_params.toQueryString)(Object.assign({}, params, { uri: null })));
        }
        return parts.join('?');
      }
    case 'downloaded':
      return __('Downloads & Purchases');
    case 'published':
      return __('Publications');
    case 'search':
      return params.query ? __('Search results for %s', params.query) : __('Search');
    case 'subscriptions':
      return __('Your Subscriptions');
    case 'discover':
    case false:
    case null:
    case '':
      return '';
    default:
      return page[0].toUpperCase() + (page.length > 0 ? page.substr(1) : '');
  }
});

var selectPathAfterAuth = exports.selectPathAfterAuth = (0, _reselect.createSelector)(selectState, function (state) {
  return state.pathAfterAuth;
});

var selectIsBackDisabled = exports.selectIsBackDisabled = (0, _reselect.createSelector)(selectState, function (state) {
  return state.index === 0;
});

var selectIsForwardDisabled = exports.selectIsForwardDisabled = (0, _reselect.createSelector)(selectState, function (state) {
  return state.index === state.stack.length - 1;
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

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsonrpc = __webpack_require__(16);

var _jsonrpc2 = _interopRequireDefault(_jsonrpc);

__webpack_require__(17);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var CHECK_DAEMON_STARTED_TRY_NUMBER = 200;

var Lbry = {
  isConnected: false,
  daemonConnectionString: 'http://localhost:5279',
  pendingPublishTimeout: 20 * 60 * 1000
};

function apiCall(method, params, resolve, reject) {
  return _jsonrpc2.default.call(Lbry.daemonConnectionString, method, params, resolve, reject, reject);
}

function getLocal(key) {
  var fallback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;

  // const itemRaw = localStorage.getItem(key);
  var itemRaw = null;
  return itemRaw === null ? fallback : JSON.parse(itemRaw);
}

function setLocal(key, value) {}
// localStorage.setItem(key, JSON.stringify(value));


/**
 * Records a publish attempt in local storage. Returns a dictionary with all the data needed to
 * needed to make a dummy claim or file info object.
 */
var pendingId = 0;
function savePendingPublish(_ref) {
  var name = _ref.name,
      channelName = _ref.channelName;

  pendingId += 1;
  var pendingPublishes = getLocal('pendingPublishes') || [];
  var newPendingPublish = {
    name: name,
    channelName: channelName,
    claim_id: 'pending-' + pendingId,
    txid: 'pending-' + pendingId,
    nout: 0,
    outpoint: 'pending-' + pendingId + ':0',
    time: Date.now()
  };
  setLocal('pendingPublishes', [].concat(_toConsumableArray(pendingPublishes), [newPendingPublish]));
  return newPendingPublish;
}

/**
 * If there is a pending publish with the given name or outpoint, remove it.
 * A channel name may also be provided along with name.
 */
function removePendingPublishIfNeeded(_ref2) {
  var name = _ref2.name,
      channelName = _ref2.channelName,
      outpoint = _ref2.outpoint;

  function pubMatches(pub) {
    return pub.outpoint === outpoint || pub.name === name && (!channelName || pub.channel_name === channelName);
  }

  setLocal('pendingPublishes', Lbry.getPendingPublishes().filter(function (pub) {
    return !pubMatches(pub);
  }));
}

/**
 * Gets the current list of pending publish attempts. Filters out any that have timed out and
 * removes them from the list.
 */
Lbry.getPendingPublishes = function () {
  var pendingPublishes = getLocal('pendingPublishes') || [];
  var newPendingPublishes = pendingPublishes.filter(function (pub) {
    return Date.now() - pub.time <= Lbry.pendingPublishTimeout;
  });
  setLocal('pendingPublishes', newPendingPublishes);
  return newPendingPublishes;
};

/**
 * Gets a pending publish attempt by its name or (fake) outpoint. A channel name can also be
 * provided along withe the name. If no pending publish is found, returns null.
 */
function getPendingPublish(_ref3) {
  var name = _ref3.name,
      channelName = _ref3.channelName,
      outpoint = _ref3.outpoint;

  var pendingPublishes = Lbry.getPendingPublishes();
  return pendingPublishes.find(function (pub) {
    return pub.outpoint === outpoint || pub.name === name && (!channelName || pub.channel_name === channelName);
  }) || null;
}

function pendingPublishToDummyClaim(_ref4) {
  var channelName = _ref4.channelName,
      name = _ref4.name,
      outpoint = _ref4.outpoint,
      claimId = _ref4.claimId,
      txid = _ref4.txid,
      nout = _ref4.nout;

  return { name: name, outpoint: outpoint, claimId: claimId, txid: txid, nout: nout, channelName: channelName };
}

function pendingPublishToDummyFileInfo(_ref5) {
  var name = _ref5.name,
      outpoint = _ref5.outpoint,
      claimId = _ref5.claimId;

  return { name: name, outpoint: outpoint, claimId: claimId, metadata: null };
}

// core
Lbry.connectPromise = null;
Lbry.connect = function () {
  if (Lbry.connectPromise === null) {
    Lbry.connectPromise = new Promise(function (resolve, reject) {
      var tryNum = 0;

      var checkDaemonStarted = function checkDaemonStarted(resolve, reject) {
        tryNum += 1;
        new Promise(function () {
          apiCall('status', {}, resolve, reject);
        });
      };

      // Check every half second to see if the daemon is accepting connections
      checkDaemonStarted(resolve, function () {
        if (tryNum <= CHECK_DAEMON_STARTED_TRY_NUMBER) {
          setTimeout(checkDaemonStarted, tryNum < 50 ? 400 : 1000);
        } else {
          reject(new Error('Unable to connect to LBRY'));
        }
      });
    });
  }

  return Lbry.connectPromise;
};

/**
 * Publishes a file. The optional fileListedCallback is called when the file becomes available in
 * lbry.file_list() during the publish process.
 *
 * This currently includes a work-around to cache the file in local storage so that the pending
 * publish can appear in the UI immediately.
 */
Lbry.publishDeprecated = function (params, fileListedCallback, publishedCallback, errorCallback) {
  // Give a short grace period in case publish() returns right away or (more likely) gives an error
  var returnPendingTimeout = setTimeout(function () {
    var name = params.name,
        channelName = params.channel_name;

    if (publishedCallback || fileListedCallback) {
      savePendingPublish({
        name: name,
        channelName: channelName
      });
      publishedCallback(true);
    }
  }, 2000, { once: true });

  // eslint-disable-next-line no-use-before-define
  lbryProxy.publish(params).then(function (result) {
    if (returnPendingTimeout) clearTimeout(returnPendingTimeout);
    publishedCallback(result);
  }, function (err) {
    if (returnPendingTimeout) clearTimeout(returnPendingTimeout);
    errorCallback(err);
  });
};

Lbry.getMediaType = function (contentType, fileName) {
  if (contentType) {
    return (/^[^/]+/.exec(contentType)[0]
    );
  } else if (fileName) {
    var dotIndex = fileName.lastIndexOf('.');
    if (dotIndex === -1) {
      return 'unknown';
    }

    var ext = fileName.substr(dotIndex + 1);
    if (/^mp4|m4v|webm|flv|f4v|ogv$/i.test(ext)) {
      return 'video';
    } else if (/^mp3|m4a|aac|wav|flac|ogg|opus$/i.test(ext)) {
      return 'audio';
    } else if (/^html|htm|xml|pdf|odf|doc|docx|md|markdown|txt|epub|org$/i.test(ext)) {
      return 'document';
    }
    return 'unknown';
  }
  return 'unknown';
};

/**
 * Wrappers for API methods to simulate missing or future behavior. Unlike the old-style stubs,
 * these are designed to be transparent wrappers around the corresponding API methods.
 */
Lbry.status = function () {
  return new Promise(function (resolve, reject) {
    apiCall('status', {}, function (status) {
      resolve(status);
    }, reject);
  });
};

/**
 * Returns results from the file_list API method, plus dummy entries for pending publishes.
 * (If a real publish with the same name is found, the pending publish will be ignored and removed.)
 */
Lbry.file_list = function () {
  var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return new Promise(function (resolve, reject) {
    var name = params.name,
        channelName = params.channel_name,
        outpoint = params.outpoint;

    /**
     * If we're searching by outpoint, check first to see if there's a matching pending publish.
     * Pending publishes use their own faux outpoints that are always unique, so we don't need
     * to check if there's a real file.
     */

    if (outpoint) {
      var pendingPublish = getPendingPublish({ outpoint: outpoint });
      if (pendingPublish) {
        resolve([pendingPublishToDummyFileInfo(pendingPublish)]);
        return;
      }
    }

    apiCall('file_list', params, function (fileInfos) {
      removePendingPublishIfNeeded({ name: name, channelName: channelName, outpoint: outpoint });

      // if a naked file_list call, append the pending file infos
      if (!name && !channelName && !outpoint) {
        var dummyFileInfos = Lbry.getPendingPublishes().map(pendingPublishToDummyFileInfo);

        resolve([].concat(_toConsumableArray(fileInfos), _toConsumableArray(dummyFileInfos)));
      } else {
        resolve(fileInfos);
      }
    }, reject);
  });
};

Lbry.claim_list_mine = function () {
  var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return new Promise(function (resolve, reject) {
    apiCall('claim_list_mine', params, function (claims) {
      claims.forEach(function (_ref6) {
        var name = _ref6.name,
            channelName = _ref6.channel_name,
            txid = _ref6.txid,
            nout = _ref6.nout;

        removePendingPublishIfNeeded({
          name: name,
          channelName: channelName,
          outpoint: txid + ':' + nout
        });
      });

      var dummyClaims = Lbry.getPendingPublishes().map(pendingPublishToDummyClaim);
      resolve([].concat(_toConsumableArray(claims), _toConsumableArray(dummyClaims)));
    }, reject);
  });
};

Lbry.resolve = function () {
  var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return new Promise(function (resolve, reject) {
    apiCall('resolve', params, function (data) {
      if ('uri' in params) {
        // If only a single URI was requested, don't nest the results in an object
        resolve(data && data[params.uri] ? data[params.uri] : {});
      } else {
        resolve(data || {});
      }
    }, reject);
  });
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
/* 6 */
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
exports.doFetchFeaturedUris = doFetchFeaturedUris;
exports.doFetchRewardedContent = doFetchRewardedContent;

var _action_types = __webpack_require__(0);

var ACTIONS = _interopRequireWildcard(_action_types);

var _lbry = __webpack_require__(5);

var _lbry2 = _interopRequireDefault(_lbry);

var _lbryapi = __webpack_require__(7);

var _lbryapi2 = _interopRequireDefault(_lbryapi);

var _lbryURI = __webpack_require__(2);

var _claims = __webpack_require__(3);

var _batchActions = __webpack_require__(8);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function doResolveUris(uris) {
  return function (dispatch, getState) {
    var normalizedUris = uris.map(_lbryURI.normalizeURI);
    var state = getState();

    // Filter out URIs that are already resolving
    var resolvingUris = (0, _claims.selectResolvingUris)(state);
    var urisToResolve = normalizedUris.filter(function (uri) {
      return !resolvingUris.includes(uri);
    });

    if (urisToResolve.length === 0) {
      return;
    }

    dispatch({
      type: ACTIONS.RESOLVE_URIS_STARTED,
      data: { uris: normalizedUris }
    });

    var resolveInfo = {};
    _lbry2.default.resolve({ uris: urisToResolve }).then(function (result) {
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
        claimId = _myClaims$find.claim_id,
        name = _myClaims$find.name;

    dispatch({
      type: ACTIONS.ABANDON_CLAIM_STARTED,
      data: {
        claimId: claimId
      }
    });

    var errorCallback = function errorCallback() {
      // dispatch(doOpenModal(MODALS.TRANSACTION_FAILED));
    };

    var successCallback = function successCallback(results) {
      if (results.txid) {
        dispatch({
          type: ACTIONS.ABANDON_CLAIM_SUCCEEDED,
          data: {
            claimId: claimId
          }
        });
        dispatch(doResolveUri((0, _lbryURI.buildURI)({ name: name, claimId: claimId })));
        dispatch(doFetchClaimListMine());
      } else {
        // dispatch(doOpenModal(MODALS.TRANSACTION_FAILED));
      }
    };

    _lbry2.default.claim_abandon({
      txid: txid,
      nout: nout
    }).then(successCallback, errorCallback);
  };
}

function doFetchFeaturedUris() {
  return function (dispatch) {
    dispatch({
      type: ACTIONS.FETCH_FEATURED_CONTENT_STARTED
    });

    var success = function success(_ref4) {
      var Uris = _ref4.Uris;

      var urisToResolve = [];
      Object.keys(Uris).forEach(function (category) {
        urisToResolve = [].concat(_toConsumableArray(urisToResolve), _toConsumableArray(Uris[category]));
      });

      var actions = [doResolveUris(urisToResolve), {
        type: ACTIONS.FETCH_FEATURED_CONTENT_COMPLETED,
        data: {
          uris: Uris,
          success: true
        }
      }];
      dispatch(_batchActions.batchActions.apply(undefined, actions));
    };

    var failure = function failure() {
      dispatch({
        type: ACTIONS.FETCH_FEATURED_CONTENT_COMPLETED,
        data: {
          uris: {}
        }
      });
    };

    _lbryapi2.default.call('file', 'list_homepage').then(success, failure);
  };
}

function doFetchRewardedContent() {
  return function (dispatch) {
    var success = function success(nameToClaimId) {
      dispatch({
        type: ACTIONS.FETCH_REWARD_CONTENT_COMPLETED,
        data: {
          claimIds: Object.values(nameToClaimId),
          success: true
        }
      });
    };

    var failure = function failure() {
      dispatch({
        type: ACTIONS.FETCH_REWARD_CONTENT_COMPLETED,
        data: {
          claimIds: [],
          success: false
        }
      });
    };

    _lbryapi2.default.call('reward', 'list_featured').then(success, failure);
  };
}

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _querystring = __webpack_require__(20);

var _querystring2 = _interopRequireDefault(_querystring);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Lbryapi = {
  enabled: true,
  exchangePromise: null,
  exchangeLastFetched: null
};

var CONNECTION_STRING = process.env.LBRY_APP_API_URL ? process.env.LBRY_APP_API_URL.replace(/\/*$/, '/') // exactly one slash at the end
: 'https://api.lbry.io/';

var EXCHANGE_RATE_TIMEOUT = 20 * 60 * 1000;

Lbryapi.getExchangeRates = function () {
  if (!Lbryapi.exchangeLastFetched || Date.now() - Lbryapi.exchangeLastFetched > EXCHANGE_RATE_TIMEOUT) {
    Lbryapi.exchangePromise = new Promise(function (resolve, reject) {
      Lbryapi.call('lbc', 'exchange_rate', {}, 'get', true).then(function (_ref) {
        var LBC_USD = _ref.lbc_usd,
            LBC_BTC = _ref.lbc_btc,
            BTC_USD = _ref.btc_usd;

        var rates = { LBC_USD: LBC_USD, LBC_BTC: LBC_BTC, BTC_USD: BTC_USD };
        resolve(rates);
      }).catch(reject);
    });
    Lbryapi.exchangeLastFetched = Date.now();
  }
  return Lbryapi.exchangePromise;
};

Lbryapi.call = function (resource, action) {
  var params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var method = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'get';

  if (!Lbryapi.enabled) {
    return Promise.reject(new Error(__('LBRY internal API is disabled')));
  }

  if (!(method === 'get' || method === 'post')) {
    return Promise.reject(new Error(__('Invalid method')));
  }

  function checkAndParse(response) {
    if (response.status >= 200 && response.status < 300) {
      return response.json();
    }
    return response.json().then(function (json) {
      var error = void 0;
      if (json.error) {
        error = new Error(json.error);
      } else {
        error = new Error('Unknown API error signature');
      }
      error.response = response; // This is primarily a hack used in actions/user.js
      return Promise.reject(error);
    });
  }

  function makeRequest(url, options) {
    return fetch(url, options).then(checkAndParse);
  }

  var fullParams = _extends({}, params);
  var qs = _querystring2.default.stringify(fullParams);
  var url = '' + CONNECTION_STRING + resource + '/' + action + '?' + qs;

  var options = {
    method: 'GET'
  };

  if (method === 'post') {
    options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: qs
    };
    url = '' + CONNECTION_STRING + resource + '/' + action;
  }

  return makeRequest(url, options).then(function (response) {
    return response.data;
  });
};

exports.default = Lbryapi;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(19)))

/***/ }),
/* 8 */
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
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.doOpenModal = doOpenModal;
exports.doCloseModal = doCloseModal;
exports.doShowSnackBar = doShowSnackBar;

var _action_types = __webpack_require__(0);

var ACTIONS = _interopRequireWildcard(_action_types);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function doOpenModal(modal) {
  var modalProps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  return {
    type: ACTIONS.OPEN_MODAL,
    data: {
      modal: modal,
      modalProps: modalProps
    }
  };
}

function doCloseModal() {
  return {
    type: ACTIONS.CLOSE_MODAL
  };
}

function doShowSnackBar(data) {
  return {
    type: ACTIONS.SHOW_SNACKBAR,
    data: data
  };
}

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

exports.parseQueryParams = parseQueryParams;
exports.toQueryString = toQueryString;
function parseQueryParams(queryString) {
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

function toQueryString(params) {
  if (!params) return '';

  var parts = [];
  Object.keys(params).forEach(function (key) {
    if (Object.prototype.hasOwnProperty.call(params, key) && params[key]) {
      parts.push(key + '=' + params[key]);
    }
  });

  return parts.join('&');
}

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.selectTotalDownloadProgress = exports.selectDownloadingFileInfos = exports.selectFileInfosDownloaded = exports.makeSelectLoadingForUri = exports.selectUrisLoading = exports.makeSelectDownloadingForUri = exports.selectDownloadingByOutpoint = exports.makeSelectFileInfoForUri = exports.selectIsFetchingFileListDownloadedOrPublished = exports.selectIsFetchingFileList = exports.selectFileInfosByOutpoint = exports.selectState = undefined;

var _claims = __webpack_require__(3);

var _reselect = __webpack_require__(1);

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

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeSelectBlockDate = exports.selectBlocks = exports.selectDraftTransactionError = exports.selectDraftTransactionAddress = exports.selectDraftTransactionAmount = exports.selectDraftTransaction = exports.selectGettingNewAddress = exports.selectReceiveAddress = exports.selectIsSendingSupport = exports.selectIsFetchingTransactions = exports.selectHasTransactions = exports.selectRecentTransactions = exports.selectTransactionItems = exports.selectTransactionsById = exports.selectBalance = exports.selectState = undefined;

var _reselect = __webpack_require__(1);

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var selectState = exports.selectState = function selectState(state) {
  return state.wallet || {};
};

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
    if (Math.abs(tx.value) === Math.abs(tx.fee) && tx.claim_info.length === 0 && tx.support_info.length === 0 && tx.update_info.length === 0) {
      return;
    }

    var append = [];

    append.push.apply(append, _toConsumableArray(tx.claim_info.map(function (item) {
      return Object.assign({}, tx, item, {
        type: item.claim_name[0] === '@' ? 'channel' : 'publish'
      });
    })));
    append.push.apply(append, _toConsumableArray(tx.support_info.map(function (item) {
      return Object.assign({}, tx, item, {
        type: !item.is_tip ? 'support' : 'tip'
      });
    })));
    append.push.apply(append, _toConsumableArray(tx.update_info.map(function (item) {
      return Object.assign({}, tx, item, { type: 'update' });
    })));

    if (!append.length) {
      append.push(Object.assign({}, tx, {
        type: tx.value < 0 ? 'spend' : 'receive'
      }));
    }

    items.push.apply(items, _toConsumableArray(append.map(function (item) {
      // value on transaction, amount on outpoint
      // amount is always positive, but should match sign of value
      var amount = parseFloat(item.balance_delta ? item.balance_delta : item.value);

      return {
        txid: txid,
        date: tx.timestamp ? new Date(Number(tx.timestamp) * 1000) : null,
        amount: amount,
        fee: amount < 0 ? -1 * tx.fee / append.length : 0,
        claim_id: item.claim_id,
        claim_name: item.claim_name,
        type: item.type || 'send',
        nout: item.nout
      };
    })));
  });
  return items.reverse();
});

var selectRecentTransactions = exports.selectRecentTransactions = (0, _reselect.createSelector)(selectTransactionItems, function (transactions) {
  var threshold = new Date();
  threshold.setDate(threshold.getDate() - 7);
  return transactions.filter(function (transaction) {
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

var makeSelectBlockDate = exports.makeSelectBlockDate = function makeSelectBlockDate(block) {
  return (0, _reselect.createSelector)(selectBlocks, function (blocks) {
    return blocks && blocks[block] ? new Date(blocks[block].time * 1000) : undefined;
  });
};

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.selectBlocks = exports.selectDraftTransactionError = exports.selectDraftTransactionAddress = exports.selectDraftTransactionAmount = exports.selectDraftTransaction = exports.selectGettingNewAddress = exports.selectReceiveAddress = exports.selectIsSendingSupport = exports.selectIsFetchingTransactions = exports.selectHasTransactions = exports.selectRecentTransactions = exports.selectTransactionItems = exports.selectTransactionsById = exports.selectBalance = exports.makeSelectBlockDate = exports.selectWunderBarIcon = exports.selectWunderBarAddress = exports.selectSearchUrisByQuery = exports.selectIsSearching = exports.selectSearchQuery = exports.makeSelectSearchUris = exports.selectActiveHistoryEntry = exports.selectHistoryStack = exports.selectHistoryIndex = exports.selectIsForwardDisabled = exports.selectIsBackDisabled = exports.selectPathAfterAuth = exports.selectPageTitle = exports.selectHeaderLinks = undefined;
exports.selectCurrentParams = exports.selectCurrentPage = exports.selectCurrentPath = exports.makeSelectCurrentParam = exports.computePageFromPath = exports.selectTotalDownloadProgress = exports.selectDownloadingFileInfos = exports.selectFileInfosDownloaded = exports.selectUrisLoading = exports.selectDownloadingByOutpoint = exports.selectIsFetchingFileListDownloadedOrPublished = exports.selectIsFetchingFileList = exports.selectFileInfosByOutpoint = exports.makeSelectLoadingForUri = exports.makeSelectDownloadingForUri = exports.makeSelectFileInfoForUri = exports.selectFetchingCostInfo = exports.selectCostForCurrentPageUri = exports.selectAllCostInfoByUri = exports.makeSelectCostInfoForUri = exports.makeSelectFetchingCostInfoForUri = exports.selectRewardContentClaimIds = exports.selectChannelClaimCounts = exports.selectPlayingUri = exports.selectFetchingFeaturedUris = exports.selectFeaturedUris = exports.selectResolvingUris = exports.selectMyChannelClaims = exports.selectFetchingMyChannels = exports.selectMyClaimsOutpoints = exports.selectAllMyClaimsByOutpoint = exports.selectMyClaimsWithoutChannels = exports.selectMyClaims = exports.selectPendingClaims = exports.selectIsFetchingClaimListMine = exports.selectAllFetchingChannelClaims = exports.selectMyActiveClaims = exports.selectAbandoningIds = exports.selectMyClaimsRaw = exports.selectAllClaimsByChannel = exports.selectClaimsByUri = exports.selectClaimsById = exports.makeSelectTotalPagesForChannel = exports.makeSelectTotalItemsForChannel = exports.makeSelectIsUriResolving = exports.makeSelectContentTypeForUri = exports.makeSelectTitleForUri = exports.makeSelectMetadataForUri = exports.makeSelectClaimsInChannelForCurrentPage = exports.makeSelectFetchingChannelClaims = exports.makeSelectClaimIsMine = exports.makeSelectClaimForUri = exports.selectNotification = exports.walletReducer = exports.searchReducer = exports.notificationsReducer = exports.fileInfoReducer = exports.costInfoReducer = exports.claimsReducer = exports.formatFullPrice = exports.formatCredits = exports.toQueryString = exports.parseQueryParams = exports.batchActions = exports.doSendSupport = exports.doSetDraftTransactionAddress = exports.doSetDraftTransactionAmount = exports.doSendDraftTransaction = exports.doCheckAddressIsMine = exports.doGetNewAddress = exports.doFetchBlock = exports.doFetchTransactions = exports.doBalanceSubscribe = exports.doUpdateBalance = exports.doSearch = exports.doFetchFileInfosAndPublishedClaims = exports.doFileList = exports.doFetchFileInfo = exports.doFetchCostInfoForUri = exports.doFetchRewardedContent = exports.doFetchFeaturedUris = exports.doResolveUri = exports.doResolveUris = exports.doAbandonClaim = exports.doFetchClaimListMine = exports.doShowSnackBar = exports.doCloseModal = exports.doOpenModal = exports.doNotify = exports.isURIClaimable = exports.isURIValid = exports.normalizeURI = exports.buildURI = exports.parseURI = exports.regexAddress = exports.regexInvalidURI = exports.Lbryapi = exports.Lbry = exports.ACTIONS = exports.Notification = undefined;

var _Notification = __webpack_require__(9);

Object.defineProperty(exports, 'Notification', {
  enumerable: true,
  get: function get() {
    return _Notification.Notification;
  }
});

var _lbryURI = __webpack_require__(2);

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

var _notifications = __webpack_require__(15);

Object.defineProperty(exports, 'doNotify', {
  enumerable: true,
  get: function get() {
    return _notifications.doNotify;
  }
});

var _app = __webpack_require__(10);

Object.defineProperty(exports, 'doOpenModal', {
  enumerable: true,
  get: function get() {
    return _app.doOpenModal;
  }
});
Object.defineProperty(exports, 'doCloseModal', {
  enumerable: true,
  get: function get() {
    return _app.doCloseModal;
  }
});
Object.defineProperty(exports, 'doShowSnackBar', {
  enumerable: true,
  get: function get() {
    return _app.doShowSnackBar;
  }
});

var _claims = __webpack_require__(6);

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
Object.defineProperty(exports, 'doFetchFeaturedUris', {
  enumerable: true,
  get: function get() {
    return _claims.doFetchFeaturedUris;
  }
});
Object.defineProperty(exports, 'doFetchRewardedContent', {
  enumerable: true,
  get: function get() {
    return _claims.doFetchRewardedContent;
  }
});

var _cost_info = __webpack_require__(23);

Object.defineProperty(exports, 'doFetchCostInfoForUri', {
  enumerable: true,
  get: function get() {
    return _cost_info.doFetchCostInfoForUri;
  }
});

var _file_info = __webpack_require__(24);

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

var _search = __webpack_require__(25);

Object.defineProperty(exports, 'doSearch', {
  enumerable: true,
  get: function get() {
    return _search.doSearch;
  }
});

var _wallet = __webpack_require__(26);

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
Object.defineProperty(exports, 'doSendSupport', {
  enumerable: true,
  get: function get() {
    return _wallet.doSendSupport;
  }
});

var _batchActions = __webpack_require__(8);

Object.defineProperty(exports, 'batchActions', {
  enumerable: true,
  get: function get() {
    return _batchActions.batchActions;
  }
});

var _query_params = __webpack_require__(11);

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

var _formatCredits = __webpack_require__(28);

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

var _claims2 = __webpack_require__(29);

Object.defineProperty(exports, 'claimsReducer', {
  enumerable: true,
  get: function get() {
    return _claims2.claimsReducer;
  }
});

var _cost_info2 = __webpack_require__(30);

Object.defineProperty(exports, 'costInfoReducer', {
  enumerable: true,
  get: function get() {
    return _cost_info2.costInfoReducer;
  }
});

var _file_info2 = __webpack_require__(31);

Object.defineProperty(exports, 'fileInfoReducer', {
  enumerable: true,
  get: function get() {
    return _file_info2.fileInfoReducer;
  }
});

var _notifications2 = __webpack_require__(32);

Object.defineProperty(exports, 'notificationsReducer', {
  enumerable: true,
  get: function get() {
    return _notifications2.notificationsReducer;
  }
});

var _search2 = __webpack_require__(33);

Object.defineProperty(exports, 'searchReducer', {
  enumerable: true,
  get: function get() {
    return _search2.searchReducer;
  }
});

var _wallet2 = __webpack_require__(34);

Object.defineProperty(exports, 'walletReducer', {
  enumerable: true,
  get: function get() {
    return _wallet2.walletReducer;
  }
});

var _notifications3 = __webpack_require__(35);

Object.defineProperty(exports, 'selectNotification', {
  enumerable: true,
  get: function get() {
    return _notifications3.selectNotification;
  }
});

var _claims3 = __webpack_require__(3);

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
Object.defineProperty(exports, 'selectRewardContentClaimIds', {
  enumerable: true,
  get: function get() {
    return _claims3.selectRewardContentClaimIds;
  }
});

var _cost_info3 = __webpack_require__(36);

Object.defineProperty(exports, 'makeSelectFetchingCostInfoForUri', {
  enumerable: true,
  get: function get() {
    return _cost_info3.makeSelectFetchingCostInfoForUri;
  }
});
Object.defineProperty(exports, 'makeSelectCostInfoForUri', {
  enumerable: true,
  get: function get() {
    return _cost_info3.makeSelectCostInfoForUri;
  }
});
Object.defineProperty(exports, 'selectAllCostInfoByUri', {
  enumerable: true,
  get: function get() {
    return _cost_info3.selectAllCostInfoByUri;
  }
});
Object.defineProperty(exports, 'selectCostForCurrentPageUri', {
  enumerable: true,
  get: function get() {
    return _cost_info3.selectCostForCurrentPageUri;
  }
});
Object.defineProperty(exports, 'selectFetchingCostInfo', {
  enumerable: true,
  get: function get() {
    return _cost_info3.selectFetchingCostInfo;
  }
});

var _file_info3 = __webpack_require__(12);

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

var _navigation = __webpack_require__(4);

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

var _search3 = __webpack_require__(37);

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
Object.defineProperty(exports, 'selectWunderBarIcon', {
  enumerable: true,
  get: function get() {
    return _search3.selectWunderBarIcon;
  }
});

var _wallet3 = __webpack_require__(13);

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

var _action_types = __webpack_require__(0);

var ACTIONS = _interopRequireWildcard(_action_types);

var _lbry = __webpack_require__(5);

var _lbry2 = _interopRequireDefault(_lbry);

var _lbryapi = __webpack_require__(7);

var _lbryapi2 = _interopRequireDefault(_lbryapi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

// constants
exports.ACTIONS = ACTIONS;

// common

exports.Lbry = _lbry2.default;
exports.Lbryapi = _lbryapi2.default;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.doNotify = doNotify;

var _action_types = __webpack_require__(0);

var ACTIONS = _interopRequireWildcard(_action_types);

var _Notification = __webpack_require__(9);

var _Notification2 = _interopRequireDefault(_Notification);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function doNotify(data) {
  return {
    type: ACTIONS.CREATE_NOTIFICATION,
    data: data
  };
}

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var jsonrpc = {};

jsonrpc.call = function (connectionString, method, params, callback, errorCallback, connectFailedCallback) {
  function checkAndParse(response) {
    if (response.status >= 200 && response.status < 300) {
      return response.json();
    }
    return response.json().then(function (json) {
      var error = void 0;
      if (json.error) {
        error = new Error(json.error);
      } else {
        error = new Error('Protocol error with unknown response signature');
      }
      return Promise.reject(error);
    });
  }

  var url = connectionString;
  var options = {
    method: 'POST',
    body: JSON.stringify({
      jsonrpc: '2.0',
      method: method,
      params: params,
      id: new Date().getTime()
    })
  };

  return fetch(url, options).then(checkAndParse).then(function (response) {
    var error = response.error || response.result && response.result.error;

    if (!error && typeof callback === 'function') {
      return callback(response.result);
    }

    if (error && typeof errorCallback === 'function') {
      return errorCallback(error);
    }

    var errorEvent = new CustomEvent('unhandledError', {
      detail: {
        connectionString: connectionString,
        method: method,
        params: params,
        code: error.code,
        message: error.message || error,
        data: error.data
      }
    });
    document.dispatchEvent(errorEvent);

    return Promise.resolve();
  }).catch(function (error) {
    if (connectFailedCallback) {
      return connectFailedCallback(error);
    }

    var errorEvent = new CustomEvent('unhandledError', {
      detail: {
        connectionString: connectionString,
        method: method,
        params: params,
        code: error.response && error.response.status,
        message: __('Connection to API server failed')
      }
    });
    document.dispatchEvent(errorEvent);
    return Promise.resolve();
  });
};

exports.default = jsonrpc;

/***/ }),
/* 17 */
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

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(18)))

/***/ }),
/* 18 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 19 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.decode = exports.parse = __webpack_require__(21);
exports.encode = exports.stringify = __webpack_require__(22);


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



// If obj.hasOwnProperty has been overridden, then calling
// obj.hasOwnProperty(prop) will break.
// See: https://github.com/joyent/node/issues/1707
function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

module.exports = function(qs, sep, eq, options) {
  sep = sep || '&';
  eq = eq || '=';
  var obj = {};

  if (typeof qs !== 'string' || qs.length === 0) {
    return obj;
  }

  var regexp = /\+/g;
  qs = qs.split(sep);

  var maxKeys = 1000;
  if (options && typeof options.maxKeys === 'number') {
    maxKeys = options.maxKeys;
  }

  var len = qs.length;
  // maxKeys <= 0 means that we should not limit keys count
  if (maxKeys > 0 && len > maxKeys) {
    len = maxKeys;
  }

  for (var i = 0; i < len; ++i) {
    var x = qs[i].replace(regexp, '%20'),
        idx = x.indexOf(eq),
        kstr, vstr, k, v;

    if (idx >= 0) {
      kstr = x.substr(0, idx);
      vstr = x.substr(idx + 1);
    } else {
      kstr = x;
      vstr = '';
    }

    k = decodeURIComponent(kstr);
    v = decodeURIComponent(vstr);

    if (!hasOwnProperty(obj, k)) {
      obj[k] = v;
    } else if (isArray(obj[k])) {
      obj[k].push(v);
    } else {
      obj[k] = [obj[k], v];
    }
  }

  return obj;
};

var isArray = Array.isArray || function (xs) {
  return Object.prototype.toString.call(xs) === '[object Array]';
};


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



var stringifyPrimitive = function(v) {
  switch (typeof v) {
    case 'string':
      return v;

    case 'boolean':
      return v ? 'true' : 'false';

    case 'number':
      return isFinite(v) ? v : '';

    default:
      return '';
  }
};

module.exports = function(obj, sep, eq, name) {
  sep = sep || '&';
  eq = eq || '=';
  if (obj === null) {
    obj = undefined;
  }

  if (typeof obj === 'object') {
    return map(objectKeys(obj), function(k) {
      var ks = encodeURIComponent(stringifyPrimitive(k)) + eq;
      if (isArray(obj[k])) {
        return map(obj[k], function(v) {
          return ks + encodeURIComponent(stringifyPrimitive(v));
        }).join(sep);
      } else {
        return ks + encodeURIComponent(stringifyPrimitive(obj[k]));
      }
    }).join(sep);

  }

  if (!name) return '';
  return encodeURIComponent(stringifyPrimitive(name)) + eq +
         encodeURIComponent(stringifyPrimitive(obj));
};

var isArray = Array.isArray || function (xs) {
  return Object.prototype.toString.call(xs) === '[object Array]';
};

function map (xs, f) {
  if (xs.map) return xs.map(f);
  var res = [];
  for (var i = 0; i < xs.length; i++) {
    res.push(f(xs[i], i));
  }
  return res;
}

var objectKeys = Object.keys || function (obj) {
  var res = [];
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) res.push(key);
  }
  return res;
};


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.doFetchCostInfoForUri = doFetchCostInfoForUri;

var _action_types = __webpack_require__(0);

var ACTIONS = _interopRequireWildcard(_action_types);

var _lbryapi = __webpack_require__(7);

var _lbryapi2 = _interopRequireDefault(_lbryapi);

var _claims = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

// eslint-disable-next-line import/prefer-default-export
function doFetchCostInfoForUri(uri) {
  return function (dispatch, getState) {
    var state = getState();
    var claim = (0, _claims.selectClaimsByUri)(state)[uri];

    if (!claim) return;

    function resolve(costInfo) {
      dispatch({
        type: ACTIONS.FETCH_COST_INFO_COMPLETED,
        data: {
          uri: uri,
          costInfo: costInfo
        }
      });
    }

    var fee = claim.value && claim.value.stream && claim.value.stream.metadata ? claim.value.stream.metadata.fee : undefined;

    if (fee === undefined) {
      resolve({ cost: 0, includesData: true });
    } else if (fee.currency === 'LBC') {
      resolve({ cost: fee.amount, includesData: true });
    } else {
      _lbryapi2.default.getExchangeRates().then(function (_ref) {
        var LBC_USD = _ref.LBC_USD;

        resolve({ cost: fee.amount / LBC_USD, includesData: true });
      });
    }
  };
}

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.doFetchFileInfo = doFetchFileInfo;
exports.doFileList = doFileList;
exports.doFetchFileInfosAndPublishedClaims = doFetchFileInfosAndPublishedClaims;

var _action_types = __webpack_require__(0);

var ACTIONS = _interopRequireWildcard(_action_types);

var _lbry = __webpack_require__(5);

var _lbry2 = _interopRequireDefault(_lbry);

var _claims = __webpack_require__(6);

var _claims2 = __webpack_require__(3);

var _file_info = __webpack_require__(12);

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

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.doSearch = doSearch;

var _action_types = __webpack_require__(0);

var ACTIONS = _interopRequireWildcard(_action_types);

var _lbryURI = __webpack_require__(2);

var _claims = __webpack_require__(6);

var _navigation = __webpack_require__(4);

var _batchActions = __webpack_require__(8);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

// eslint-disable-next-line import/prefer-default-export
function doSearch(rawQuery, currentPageNotSearchHandler) {
  return function (dispatch, getState) {
    var state = getState();
    var page = (0, _navigation.selectCurrentPage)(state);

    var query = rawQuery.replace(/^lbry:\/\//i, '');

    if (!query) {
      dispatch({
        type: ACTIONS.SEARCH_CANCELLED
      });
      return;
    }

    dispatch({
      type: ACTIONS.SEARCH_STARTED,
      data: { query: query }
    });

    if (page !== 'search') {
      if (currentPageNotSearchHandler) {
        currentPageNotSearchHandler();
      }
    } else {
      fetch('https://lighthouse.lbry.io/search?s=' + query).then(function (response) {
        return response.status === 200 ? Promise.resolve(response.json()) : Promise.reject(new Error(response.statusText));
      }).then(function (data) {
        var uris = [];
        var actions = [];

        data.forEach(function (result) {
          var uri = (0, _lbryURI.buildURI)({
            name: result.name,
            claimId: result.claimId
          });
          actions.push((0, _claims.doResolveUri)(uri));
          uris.push(uri);
        });

        actions.push({
          type: ACTIONS.SEARCH_COMPLETED,
          data: {
            query: query,
            uris: uris
          }
        });
        dispatch(_batchActions.batchActions.apply(undefined, actions));
      }).catch(function () {
        dispatch({
          type: ACTIONS.SEARCH_CANCELLED
        });
      });
    }
  };
}

/***/ }),
/* 26 */
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
exports.doSendSupport = doSendSupport;

var _action_types = __webpack_require__(0);

var ACTIONS = _interopRequireWildcard(_action_types);

var _modal_types = __webpack_require__(27);

var MODALS = _interopRequireWildcard(_modal_types);

var _lbry = __webpack_require__(5);

var _lbry2 = _interopRequireDefault(_lbry);

var _app = __webpack_require__(10);

var _wallet = __webpack_require__(13);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function doUpdateBalance() {
  return function (dispatch) {
    _lbry2.default.wallet_balance().then(function (balance) {
      return dispatch({
        type: ACTIONS.UPDATE_BALANCE,
        data: {
          balance: balance
        }
      });
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

    _lbry2.default.transaction_list({ include_tip_info: true }).then(function (results) {
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

    _lbry2.default.wallet_new_address().then(function (address) {
      // localStorage.setItem('wallet_address', address);
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

    _lbry2.default.wallet_is_address_mine({ address: address }).then(function (isMine) {
      if (!isMine) dispatch(doGetNewAddress());

      dispatch({
        type: ACTIONS.CHECK_ADDRESS_IS_MINE_COMPLETED
      });
    });
  };
}

function doSendDraftTransaction() {
  return function (dispatch, getState) {
    var state = getState();
    var draftTx = (0, _wallet.selectDraftTransaction)(state);
    var balance = (0, _wallet.selectBalance)(state);
    var amount = (0, _wallet.selectDraftTransactionAmount)(state);

    if (balance - amount <= 0) {
      dispatch((0, _app.doOpenModal)(MODALS.INSUFFICIENT_CREDITS));
      return;
    }

    dispatch({
      type: ACTIONS.SEND_TRANSACTION_STARTED
    });

    var successCallback = function successCallback(results) {
      if (results === true) {
        dispatch({
          type: ACTIONS.SEND_TRANSACTION_COMPLETED
        });
        dispatch((0, _app.doShowSnackBar)({
          message: __('You sent ' + amount + ' LBC'),
          linkText: __('History'),
          linkTarget: __('/wallet')
        }));
      } else {
        dispatch({
          type: ACTIONS.SEND_TRANSACTION_FAILED,
          data: { error: results }
        });
        dispatch((0, _app.doOpenModal)(MODALS.TRANSACTION_FAILED));
      }
    };

    var errorCallback = function errorCallback(error) {
      dispatch({
        type: ACTIONS.SEND_TRANSACTION_FAILED,
        data: { error: error.message }
      });
      dispatch((0, _app.doOpenModal)(MODALS.TRANSACTION_FAILED));
    };

    _lbry2.default.wallet_send({
      amount: draftTx.amount,
      address: draftTx.address
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

function doSendSupport(amount, claimId, uri, successCallback, errorCallback) {
  return function (dispatch, getState) {
    var state = getState();
    var balance = (0, _wallet.selectBalance)(state);

    if (balance - amount <= 0) {
      dispatch((0, _app.doOpenModal)(MODALS.INSUFFICIENT_CREDITS));
      return;
    }

    dispatch({
      type: ACTIONS.SUPPORT_TRANSACTION_STARTED
    });

    _lbry2.default.wallet_send({
      claim_id: claimId,
      amount: amount
    }).then(successCallback, errorCallback);
  };
}

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var CONFIRM_FILE_REMOVE = exports.CONFIRM_FILE_REMOVE = 'confirmFileRemove';
var INCOMPATIBLE_DAEMON = exports.INCOMPATIBLE_DAEMON = 'incompatibleDaemon';
var FILE_TIMEOUT = exports.FILE_TIMEOUT = 'file_timeout';
var DOWNLOADING = exports.DOWNLOADING = 'downloading';
var ERROR = exports.ERROR = 'error';
var INSUFFICIENT_CREDITS = exports.INSUFFICIENT_CREDITS = 'insufficient_credits';
var UPGRADE = exports.UPGRADE = 'upgrade';
var WELCOME = exports.WELCOME = 'welcome';
var EMAIL_COLLECTION = exports.EMAIL_COLLECTION = 'email_collection';
var FIRST_REWARD = exports.FIRST_REWARD = 'first_reward';
var AUTHENTICATION_FAILURE = exports.AUTHENTICATION_FAILURE = 'auth_failure';
var TRANSACTION_FAILED = exports.TRANSACTION_FAILED = 'transaction_failed';
var REWARD_APPROVAL_REQUIRED = exports.REWARD_APPROVAL_REQUIRED = 'reward_approval_required';
var AFFIRM_PURCHASE = exports.AFFIRM_PURCHASE = 'affirm_purchase';
var CONFIRM_CLAIM_REVOKE = exports.CONFIRM_CLAIM_REVOKE = 'confirmClaimRevoke';

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.formatCredits = formatCredits;
exports.formatFullPrice = formatFullPrice;
function formatCredits(amount, precision) {
  return amount.toFixed(precision || 1).replace(/\.?0+$/, '');
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

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

exports.claimsReducer = claimsReducer;

var _action_types = __webpack_require__(0);

var ACTIONS = _interopRequireWildcard(_action_types);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var reducers = {};

var defaultState = {
  rewardedContentClaimIds: [],
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
  var pendingById = Object.assign({}, state.pendingById);

  claims.filter(function (claim) {
    return claim.category && claim.category.match(/claim/);
  }).forEach(function (claim) {
    byId[claim.claim_id] = claim;

    var pending = Object.values(pendingById).find(function (pendingClaim) {
      return pendingClaim.name === claim.name && pendingClaim.channel_name === claim.channel_name;
    });

    if (pending) {
      delete pendingById[pending.claim_id];
    }
  });

  // Remove old timed out pending publishes
  Object.values(pendingById).filter(function (pendingClaim) {
    return Date.now() - pendingClaim.time >= 20 * 60 * 1000;
  }).forEach(function (pendingClaim) {
    delete pendingById[pendingClaim.claim_id];
  });

  return Object.assign({}, state, {
    isFetchingClaimListMine: false,
    myClaims: claims,
    byId: byId,
    pendingById: pendingById
  });
};

reducers[ACTIONS.FETCH_CHANNEL_LIST_MINE_STARTED] = function (state) {
  return Object.assign({}, state, { fetchingMyChannels: true });
};

reducers[ACTIONS.FETCH_CHANNEL_LIST_MINE_COMPLETED] = function (state, action) {
  var claims = action.data.claims;

  var myChannelClaims = new Set(state.myChannelClaims);
  var byId = Object.assign({}, state.byId);

  claims.forEach(function (claim) {
    myChannelClaims.add(claim.claim_id);
    byId[claims.claim_id] = claim;
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
    fetchingChannelClaims: fetchingChannelClaims
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

  if (claims !== undefined) {
    claims.forEach(function (claim) {
      allClaimIds.add(claim.claim_id);
      currentPageClaimIds.push(claim.claim_id);
      byId[claim.claim_id] = claim;
    });
  }

  byChannel.all = allClaimIds;
  byChannel[page] = currentPageClaimIds;
  claimsByChannel[uri] = byChannel;
  delete fetchingChannelClaims[uri];

  return Object.assign({}, state, {
    claimsByChannel: claimsByChannel,
    byId: byId,
    fetchingChannelClaims: fetchingChannelClaims
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

reducers[ACTIONS.FETCH_FEATURED_CONTENT_STARTED] = function (state) {
  return Object.assign({}, state, {
    fetchingFeaturedContent: true
  });
};

reducers[ACTIONS.FETCH_FEATURED_CONTENT_COMPLETED] = function (state, action) {
  var _action$data3 = action.data,
      uris = _action$data3.uris,
      success = _action$data3.success;


  return Object.assign({}, state, {
    fetchingFeaturedContent: false,
    fetchingFeaturedContentFailed: !success,
    featuredUris: uris
  });
};

reducers[ACTIONS.FETCH_REWARD_CONTENT_COMPLETED] = function (state, action) {
  var claimIds = action.data.claimIds;


  return Object.assign({}, state, {
    rewardedContentClaimIds: claimIds
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
  var _action$data4 = action.data,
      uri = _action$data4.uri,
      totalClaims = _action$data4.totalClaims;


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
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.costInfoReducer = costInfoReducer;

var _action_types = __webpack_require__(0);

var ACTIONS = _interopRequireWildcard(_action_types);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var reducers = {};
var defaultState = {};

reducers[ACTIONS.FETCH_COST_INFO_STARTED] = function (state, action) {
  var uri = action.data.uri;

  var newFetching = Object.assign({}, state.fetching);
  newFetching[uri] = true;

  return Object.assign({}, state, {
    fetching: newFetching
  });
};

reducers[ACTIONS.FETCH_COST_INFO_COMPLETED] = function (state, action) {
  var _action$data = action.data,
      uri = _action$data.uri,
      costInfo = _action$data.costInfo;

  var newByUri = Object.assign({}, state.byUri);
  var newFetching = Object.assign({}, state.fetching);

  newByUri[uri] = costInfo;
  delete newFetching[uri];

  return Object.assign({}, state, {
    byUri: newByUri,
    fetching: newFetching
  });
};

function costInfoReducer() {
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
exports.fileInfoReducer = fileInfoReducer;

var _action_types = __webpack_require__(0);

var ACTIONS = _interopRequireWildcard(_action_types);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var reducers = {};
var defaultState = {};

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

  return Object.assign({}, state, {
    urisLoading: newLoading
  });
};

reducers[ACTIONS.LOADING_VIDEO_FAILED] = function (state, action) {
  var uri = action.data.uri;


  var newLoading = Object.assign({}, state.urisLoading);

  delete newLoading[uri];

  return Object.assign({}, state, {
    urisLoading: newLoading
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
exports.notificationsReducer = notificationsReducer;

var _action_types = __webpack_require__(0);

var ACTIONS = _interopRequireWildcard(_action_types);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var reducers = {};

var defaultState = {
  // First-in, first-out
  queue: []
};

reducers[ACTIONS.NOTIFICATION_CREATED] = function (state, action) {
  var _action$data = action.data,
      title = _action$data.title,
      message = _action$data.message,
      type = _action$data.type,
      errorCode = _action$data.errorCode,
      displayType = _action$data.displayType;

  var queue = Object.assign([], state.queue);
  queue.push({
    title: title,
    message: message,
    type: type,
    errorCode: errorCode,
    displayType: displayType
  });

  return Object.assign({}, state, {
    queue: queue
  });
};

reducers[ACTIONS.NOTIFICATION_DISPLAYED] = function (state) {
  var queue = Object.assign([], state.queue);
  queue.shift();

  return Object.assign({}, state, {
    queue: queue
  });
};

function notificationsReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;
  var action = arguments[1];

  var handler = reducers[action.type];
  if (handler) return handler(state, action);
  return state;
}

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.searchReducer = searchReducer;

var _action_types = __webpack_require__(0);

var ACTIONS = _interopRequireWildcard(_action_types);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var reducers = {};
var defaultState = {
  urisByQuery: {},
  searching: false
};

reducers[ACTIONS.SEARCH_STARTED] = function (state) {
  return Object.assign({}, state, {
    searching: true
  });
};

reducers[ACTIONS.SEARCH_COMPLETED] = function (state, action) {
  var _action$data = action.data,
      query = _action$data.query,
      uris = _action$data.uris;


  return Object.assign({}, state, {
    searching: false,
    urisByQuery: Object.assign({}, state.urisByQuery, _defineProperty({}, query, uris))
  });
};

reducers[ACTIONS.SEARCH_CANCELLED] = function (state) {
  return Object.assign({}, state, {
    searching: false
  });
};

function searchReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;
  var action = arguments[1];

  var handler = reducers[action.type];
  if (handler) return handler(state, action);
  return state;
}

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.walletReducer = walletReducer;

var _action_types = __webpack_require__(0);

var ACTIONS = _interopRequireWildcard(_action_types);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var reducers = {};
var receiveAddress = null; // localStorage.getItem('receiveAddress');
var buildDraftTransaction = function buildDraftTransaction() {
  return {
    amount: undefined,
    address: undefined
  };
};

var defaultState = {
  balance: undefined,
  blocks: {},
  transactions: {},
  fetchingTransactions: false,
  receiveAddress: receiveAddress,
  gettingNewAddress: false,
  draftTransaction: buildDraftTransaction(),
  sendingSupport: false
};

reducers[ACTIONS.FETCH_TRANSACTIONS_STARTED] = function (state) {
  return Object.assign({}, state, {
    fetchingTransactions: true
  });
};

reducers[ACTIONS.FETCH_TRANSACTIONS_COMPLETED] = function (state, action) {
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

reducers[ACTIONS.GET_NEW_ADDRESS_STARTED] = function (state) {
  return Object.assign({}, state, {
    gettingNewAddress: true
  });
};

reducers[ACTIONS.GET_NEW_ADDRESS_COMPLETED] = function (state, action) {
  var address = action.data.address;

  // localStorage.setItem('receiveAddress', address);

  return Object.assign({}, state, {
    gettingNewAddress: false,
    receiveAddress: address
  });
};

reducers[ACTIONS.UPDATE_BALANCE] = function (state, action) {
  return Object.assign({}, state, {
    balance: action.data.balance
  });
};

reducers[ACTIONS.CHECK_ADDRESS_IS_MINE_STARTED] = function (state) {
  return Object.assign({}, state, {
    checkingAddressOwnership: true
  });
};

reducers[ACTIONS.CHECK_ADDRESS_IS_MINE_COMPLETED] = function (state) {
  return Object.assign({}, state, {
    checkingAddressOwnership: false
  });
};

reducers[ACTIONS.SET_DRAFT_TRANSACTION_AMOUNT] = function (state, action) {
  var oldDraft = state.draftTransaction;
  var newDraft = Object.assign({}, oldDraft, {
    amount: parseFloat(action.data.amount)
  });

  return Object.assign({}, state, {
    draftTransaction: newDraft
  });
};

reducers[ACTIONS.SET_DRAFT_TRANSACTION_ADDRESS] = function (state, action) {
  var oldDraft = state.draftTransaction;
  var newDraft = Object.assign({}, oldDraft, {
    address: action.data.address
  });

  return Object.assign({}, state, {
    draftTransaction: newDraft
  });
};

reducers[ACTIONS.SEND_TRANSACTION_STARTED] = function (state) {
  var newDraftTransaction = Object.assign({}, state.draftTransaction, {
    sending: true
  });

  return Object.assign({}, state, {
    draftTransaction: newDraftTransaction
  });
};

reducers[ACTIONS.SEND_TRANSACTION_COMPLETED] = function (state) {
  return Object.assign({}, state, {
    draftTransaction: buildDraftTransaction()
  });
};

reducers[ACTIONS.SEND_TRANSACTION_FAILED] = function (state, action) {
  var newDraftTransaction = Object.assign({}, state.draftTransaction, {
    sending: false,
    error: action.data.error
  });

  return Object.assign({}, state, {
    draftTransaction: newDraftTransaction
  });
};

reducers[ACTIONS.SUPPORT_TRANSACTION_STARTED] = function (state) {
  return Object.assign({}, state, {
    sendingSupport: true
  });
};

reducers[ACTIONS.SUPPORT_TRANSACTION_COMPLETED] = function (state) {
  return Object.assign({}, state, {
    sendingSupport: false
  });
};

reducers[ACTIONS.SUPPORT_TRANSACTION_FAILED] = function (state, action) {
  return Object.assign({}, state, {
    error: action.data.error,
    sendingSupport: false
  });
};

reducers[ACTIONS.FETCH_BLOCK_SUCCESS] = function (state, action) {
  var _action$data = action.data,
      block = _action$data.block,
      height = _action$data.block.height;

  var blocks = Object.assign({}, state.blocks);

  blocks[height] = block;

  return Object.assign({}, state, { blocks: blocks });
};

function walletReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;
  var action = arguments[1];

  var handler = reducers[action.type];
  if (handler) return handler(state, action);
  return state;
}

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.selectNotification = exports.selectState = undefined;

var _reselect = __webpack_require__(1);

var selectState = exports.selectState = function selectState(state) {
  return state.notifications || {};
};

var selectNotification = exports.selectNotification = (0, _reselect.createSelector)(selectState, function (state) {
  return state.queue.length > 0 ? state.queue[0] : {};
});

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeSelectFetchingCostInfoForUri = exports.selectFetchingCostInfo = exports.selectCostForCurrentPageUri = exports.makeSelectCostInfoForUri = exports.selectAllCostInfoByUri = exports.selectState = undefined;

var _reselect = __webpack_require__(1);

var _navigation = __webpack_require__(4);

var selectState = exports.selectState = function selectState(state) {
  return state.costInfo || {};
};

var selectAllCostInfoByUri = exports.selectAllCostInfoByUri = (0, _reselect.createSelector)(selectState, function (state) {
  return state.byUri || {};
});

var makeSelectCostInfoForUri = exports.makeSelectCostInfoForUri = function makeSelectCostInfoForUri(uri) {
  return (0, _reselect.createSelector)(selectAllCostInfoByUri, function (costInfos) {
    return costInfos && costInfos[uri];
  });
};

var selectCostForCurrentPageUri = exports.selectCostForCurrentPageUri = (0, _reselect.createSelector)(selectAllCostInfoByUri, _navigation.selectCurrentParams, function (costInfo, params) {
  return params.uri && costInfo[params.uri] ? costInfo[params.uri].cost : undefined;
});

var selectFetchingCostInfo = exports.selectFetchingCostInfo = (0, _reselect.createSelector)(selectState, function (state) {
  return state.fetching || {};
});

var makeSelectFetchingCostInfoForUri = exports.makeSelectFetchingCostInfoForUri = function makeSelectFetchingCostInfoForUri(uri) {
  return (0, _reselect.createSelector)(selectFetchingCostInfo, function (fetchingByUri) {
    return fetchingByUri && fetchingByUri[uri];
  });
};

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.selectWunderBarIcon = exports.selectWunderBarAddress = exports.makeSelectSearchUris = exports.selectSearchUrisByQuery = exports.selectIsSearching = exports.selectSearchQuery = exports.selectState = undefined;

var _navigation = __webpack_require__(4);

var _reselect = __webpack_require__(1);

var selectState = exports.selectState = function selectState(state) {
  return state.search || {};
};

var selectSearchQuery = exports.selectSearchQuery = (0, _reselect.createSelector)(_navigation.selectCurrentPage, _navigation.selectCurrentParams, function (page, params) {
  return page === 'search' ? params && params.query : null;
});

var selectIsSearching = exports.selectIsSearching = (0, _reselect.createSelector)(selectState, function (state) {
  return state.searching;
});

var selectSearchUrisByQuery = exports.selectSearchUrisByQuery = (0, _reselect.createSelector)(selectState, function (state) {
  return state.urisByQuery;
});

var makeSelectSearchUris = exports.makeSelectSearchUris = function makeSelectSearchUris(query) {
  return (
    // replace statement below is kind of ugly, and repeated in doSearch action
    (0, _reselect.createSelector)(selectSearchUrisByQuery, function (byQuery) {
      return byQuery[query ? query.replace(/^lbry:\/\//i, '') : query];
    })
  );
};

var selectWunderBarAddress = exports.selectWunderBarAddress = (0, _reselect.createSelector)(_navigation.selectCurrentPage, _navigation.selectPageTitle, selectSearchQuery, function (page, title, query) {
  return page !== 'search' ? title : query || title;
});

var selectWunderBarIcon = exports.selectWunderBarIcon = (0, _reselect.createSelector)(_navigation.selectCurrentPage, _navigation.selectCurrentParams, function (page, params) {
  switch (page) {
    case 'auth':
      return 'icon-user';
    case 'settings':
      return 'icon-gear';
    case 'help':
      return 'icon-question';
    case 'report':
      return 'icon-file';
    case 'downloaded':
      return 'icon-folder';
    case 'published':
      return 'icon-folder';
    case 'history':
      return 'icon-history';
    case 'send':
      return 'icon-send';
    case 'rewards':
      return 'icon-rocket';
    case 'invite':
      return 'icon-envelope-open';
    case 'getcredits':
      return 'icon-shopping-cart';
    case 'wallet':
    case 'backup':
      return 'icon-bank';
    case 'show':
      return 'icon-file';
    case 'publish':
      return params.id ? __('icon-pencil') : __('icon-upload');
    case 'developer':
      return 'icon-code';
    case 'discover':
    case 'search':
      return 'icon-search';
    case 'subscriptions':
      return 'icon-th-list';
    default:
      return 'icon-file';
  }
});

/***/ })
/******/ ]);
});