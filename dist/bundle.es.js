'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

require('proxy-polyfill');
var reselect = require('reselect');
var uuid = _interopDefault(require('uuid/v4'));

const MINIMUM_PUBLISH_BID = 0.00000001;

const CHANNEL_ANONYMOUS = 'anonymous';
const CHANNEL_NEW = 'new';
const PAGE_SIZE = 20;

var claim = /*#__PURE__*/Object.freeze({
  MINIMUM_PUBLISH_BID: MINIMUM_PUBLISH_BID,
  CHANNEL_ANONYMOUS: CHANNEL_ANONYMOUS,
  CHANNEL_NEW: CHANNEL_NEW,
  PAGE_SIZE: PAGE_SIZE
});

const WINDOW_FOCUSED = 'WINDOW_FOCUSED';
const DAEMON_READY = 'DAEMON_READY';
const DAEMON_VERSION_MATCH = 'DAEMON_VERSION_MATCH';
const DAEMON_VERSION_MISMATCH = 'DAEMON_VERSION_MISMATCH';
const VOLUME_CHANGED = 'VOLUME_CHANGED';

// Navigation
const CHANGE_AFTER_AUTH_PATH = 'CHANGE_AFTER_AUTH_PATH';
const WINDOW_SCROLLED = 'WINDOW_SCROLLED';
const HISTORY_NAVIGATE = 'HISTORY_NAVIGATE';

// Upgrades
const UPGRADE_CANCELLED = 'UPGRADE_CANCELLED';
const DOWNLOAD_UPGRADE = 'DOWNLOAD_UPGRADE';
const UPGRADE_DOWNLOAD_STARTED = 'UPGRADE_DOWNLOAD_STARTED';
const UPGRADE_DOWNLOAD_COMPLETED = 'UPGRADE_DOWNLOAD_COMPLETED';
const UPGRADE_DOWNLOAD_PROGRESSED = 'UPGRADE_DOWNLOAD_PROGRESSED';
const CHECK_UPGRADE_AVAILABLE = 'CHECK_UPGRADE_AVAILABLE';
const CHECK_UPGRADE_START = 'CHECK_UPGRADE_START';
const CHECK_UPGRADE_SUCCESS = 'CHECK_UPGRADE_SUCCESS';
const CHECK_UPGRADE_FAIL = 'CHECK_UPGRADE_FAIL';
const CHECK_UPGRADE_SUBSCRIBE = 'CHECK_UPGRADE_SUBSCRIBE';
const UPDATE_VERSION = 'UPDATE_VERSION';
const UPDATE_REMOTE_VERSION = 'UPDATE_REMOTE_VERSION';
const SKIP_UPGRADE = 'SKIP_UPGRADE';
const START_UPGRADE = 'START_UPGRADE';
const AUTO_UPDATE_DECLINED = 'AUTO_UPDATE_DECLINED';
const AUTO_UPDATE_DOWNLOADED = 'AUTO_UPDATE_DOWNLOADED';
const CLEAR_UPGRADE_TIMER = 'CLEAR_UPGRADE_TIMER';

// Wallet
const GET_NEW_ADDRESS_STARTED = 'GET_NEW_ADDRESS_STARTED';
const GET_NEW_ADDRESS_COMPLETED = 'GET_NEW_ADDRESS_COMPLETED';
const FETCH_TRANSACTIONS_STARTED = 'FETCH_TRANSACTIONS_STARTED';
const FETCH_TRANSACTIONS_COMPLETED = 'FETCH_TRANSACTIONS_COMPLETED';
const FETCH_SUPPORTS_STARTED = 'FETCH_SUPPORTS_STARTED';
const FETCH_SUPPORTS_COMPLETED = 'FETCH_SUPPORTS_COMPLETED';
const ABANDON_SUPPORT_STARTED = 'ABANDON_SUPPORT_STARTED';
const ABANDON_SUPPORT_COMPLETED = 'ABANDON_SUPPORT_COMPLETED';
const UPDATE_BALANCE = 'UPDATE_BALANCE';
const UPDATE_TOTAL_BALANCE = 'UPDATE_TOTAL_BALANCE';
const CHECK_ADDRESS_IS_MINE_STARTED = 'CHECK_ADDRESS_IS_MINE_STARTED';
const CHECK_ADDRESS_IS_MINE_COMPLETED = 'CHECK_ADDRESS_IS_MINE_COMPLETED';
const SEND_TRANSACTION_STARTED = 'SEND_TRANSACTION_STARTED';
const SEND_TRANSACTION_COMPLETED = 'SEND_TRANSACTION_COMPLETED';
const SEND_TRANSACTION_FAILED = 'SEND_TRANSACTION_FAILED';
const SUPPORT_TRANSACTION_STARTED = 'SUPPORT_TRANSACTION_STARTED';
const SUPPORT_TRANSACTION_COMPLETED = 'SUPPORT_TRANSACTION_COMPLETED';
const SUPPORT_TRANSACTION_FAILED = 'SUPPORT_TRANSACTION_FAILED';
const WALLET_ENCRYPT_START = 'WALLET_ENCRYPT_START';
const WALLET_ENCRYPT_COMPLETED = 'WALLET_ENCRYPT_COMPLETED';
const WALLET_ENCRYPT_FAILED = 'WALLET_ENCRYPT_FAILED';
const WALLET_UNLOCK_START = 'WALLET_UNLOCK_START';
const WALLET_UNLOCK_COMPLETED = 'WALLET_UNLOCK_COMPLETED';
const WALLET_UNLOCK_FAILED = 'WALLET_UNLOCK_FAILED';
const WALLET_DECRYPT_START = 'WALLET_DECRYPT_START';
const WALLET_DECRYPT_COMPLETED = 'WALLET_DECRYPT_COMPLETED';
const WALLET_DECRYPT_FAILED = 'WALLET_DECRYPT_FAILED';
const WALLET_LOCK_START = 'WALLET_LOCK_START';
const WALLET_LOCK_COMPLETED = 'WALLET_LOCK_COMPLETED';
const WALLET_LOCK_FAILED = 'WALLET_LOCK_FAILED';
const WALLET_STATUS_START = 'WALLET_STATUS_START';
const WALLET_STATUS_COMPLETED = 'WALLET_STATUS_COMPLETED';
const SET_TRANSACTION_LIST_FILTER = 'SET_TRANSACTION_LIST_FILTER';
const UPDATE_CURRENT_HEIGHT = 'UPDATE_CURRENT_HEIGHT';
const SET_DRAFT_TRANSACTION_AMOUNT = 'SET_DRAFT_TRANSACTION_AMOUNT';
const SET_DRAFT_TRANSACTION_ADDRESS = 'SET_DRAFT_TRANSACTION_ADDRESS';

// Claims
const RESOLVE_URIS_STARTED = 'RESOLVE_URIS_STARTED';
const RESOLVE_URIS_COMPLETED = 'RESOLVE_URIS_COMPLETED';
const FETCH_CHANNEL_CLAIMS_STARTED = 'FETCH_CHANNEL_CLAIMS_STARTED';
const FETCH_CHANNEL_CLAIMS_COMPLETED = 'FETCH_CHANNEL_CLAIMS_COMPLETED';
const FETCH_CLAIM_LIST_MINE_STARTED = 'FETCH_CLAIM_LIST_MINE_STARTED';
const FETCH_CLAIM_LIST_MINE_COMPLETED = 'FETCH_CLAIM_LIST_MINE_COMPLETED';
const ABANDON_CLAIM_STARTED = 'ABANDON_CLAIM_STARTED';
const ABANDON_CLAIM_SUCCEEDED = 'ABANDON_CLAIM_SUCCEEDED';
const FETCH_CHANNEL_LIST_STARTED = 'FETCH_CHANNEL_LIST_STARTED';
const FETCH_CHANNEL_LIST_COMPLETED = 'FETCH_CHANNEL_LIST_COMPLETED';
const CREATE_CHANNEL_STARTED = 'CREATE_CHANNEL_STARTED';
const CREATE_CHANNEL_COMPLETED = 'CREATE_CHANNEL_COMPLETED';
const CREATE_CHANNEL_FAILED = 'CREATE_CHANNEL_FAILED';
const UPDATE_CHANNEL_STARTED = 'UPDATE_CHANNEL_STARTED';
const UPDATE_CHANNEL_COMPLETED = 'UPDATE_CHANNEL_COMPLETED';
const UPDATE_CHANNEL_FAILED = 'UPDATE_CHANNEL_FAILED';
const PUBLISH_STARTED = 'PUBLISH_STARTED';
const PUBLISH_COMPLETED = 'PUBLISH_COMPLETED';
const PUBLISH_FAILED = 'PUBLISH_FAILED';
const SET_PLAYING_URI = 'SET_PLAYING_URI';
const SET_CONTENT_POSITION = 'SET_CONTENT_POSITION';
const SET_CONTENT_LAST_VIEWED = 'SET_CONTENT_LAST_VIEWED';
const CLEAR_CONTENT_HISTORY_URI = 'CLEAR_CONTENT_HISTORY_URI';
const CLEAR_CONTENT_HISTORY_ALL = 'CLEAR_CONTENT_HISTORY_ALL';
const CLAIM_SEARCH_STARTED = 'CLAIM_SEARCH_STARTED';
const CLAIM_SEARCH_COMPLETED = 'CLAIM_SEARCH_COMPLETED';
const CLAIM_SEARCH_FAILED = 'CLAIM_SEARCH_FAILED';

// Comments
const COMMENT_LIST_STARTED = 'COMMENT_LIST_STARTED';
const COMMENT_LIST_COMPLETED = 'COMMENT_LIST_COMPLETED';
const COMMENT_LIST_FAILED = 'COMMENT_LIST_FAILED';
const COMMENT_CREATE_STARTED = 'COMMENT_CREATE_STARTED';
const COMMENT_CREATE_COMPLETED = 'COMMENT_CREATE_COMPLETED';
const COMMENT_CREATE_FAILED = 'COMMENT_CREATE_FAILED';

// Files
const FILE_LIST_STARTED = 'FILE_LIST_STARTED';
const FILE_LIST_SUCCEEDED = 'FILE_LIST_SUCCEEDED';
const FETCH_FILE_INFO_STARTED = 'FETCH_FILE_INFO_STARTED';
const FETCH_FILE_INFO_COMPLETED = 'FETCH_FILE_INFO_COMPLETED';
const LOADING_VIDEO_STARTED = 'LOADING_VIDEO_STARTED';
const LOADING_VIDEO_COMPLETED = 'LOADING_VIDEO_COMPLETED';
const LOADING_VIDEO_FAILED = 'LOADING_VIDEO_FAILED';
const DOWNLOADING_STARTED = 'DOWNLOADING_STARTED';
const DOWNLOADING_PROGRESSED = 'DOWNLOADING_PROGRESSED';
const DOWNLOADING_COMPLETED = 'DOWNLOADING_COMPLETED';
const DOWNLOADING_CANCELED = 'DOWNLOADING_CANCELED';
const PLAY_VIDEO_STARTED = 'PLAY_VIDEO_STARTED';
const FETCH_AVAILABILITY_STARTED = 'FETCH_AVAILABILITY_STARTED';
const FETCH_AVAILABILITY_COMPLETED = 'FETCH_AVAILABILITY_COMPLETED';
const FILE_DELETE = 'FILE_DELETE';
const SET_FILE_LIST_SORT = 'SET_FILE_LIST_SORT';
const PURCHASE_URI_STARTED = 'PURCHASE_URI_STARTED';
const PURCHASE_URI_COMPLETED = 'PURCHASE_URI_COMPLETED';
const PURCHASE_URI_FAILED = 'PURCHASE_URI_FAILED';
const DELETE_PURCHASED_URI = 'DELETE_PURCHASED_URI';
const LOADING_FILE_STARTED = 'LOADING_FILE_STARTED';
const LOADING_FILE_COMPLETED = 'LOADING_FILE_COMPLETED';
const LOADING_FILE_FAILED = 'LOADING_FILE_FAILED';

// Search
const SEARCH_START = 'SEARCH_START';
const SEARCH_SUCCESS = 'SEARCH_SUCCESS';
const SEARCH_FAIL = 'SEARCH_FAIL';
const UPDATE_SEARCH_QUERY = 'UPDATE_SEARCH_QUERY';
const UPDATE_SEARCH_OPTIONS = 'UPDATE_SEARCH_OPTIONS';
const UPDATE_SEARCH_SUGGESTIONS = 'UPDATE_SEARCH_SUGGESTIONS';
const SEARCH_FOCUS = 'SEARCH_FOCUS';
const SEARCH_BLUR = 'SEARCH_BLUR';

// Settings
const DAEMON_SETTINGS_RECEIVED = 'DAEMON_SETTINGS_RECEIVED';
const CLIENT_SETTING_CHANGED = 'CLIENT_SETTING_CHANGED';
const UPDATE_IS_NIGHT = 'UPDATE_IS_NIGHT';

// User
const AUTHENTICATION_STARTED = 'AUTHENTICATION_STARTED';
const AUTHENTICATION_SUCCESS = 'AUTHENTICATION_SUCCESS';
const AUTHENTICATION_FAILURE = 'AUTHENTICATION_FAILURE';
const USER_EMAIL_DECLINE = 'USER_EMAIL_DECLINE';
const USER_EMAIL_NEW_STARTED = 'USER_EMAIL_NEW_STARTED';
const USER_EMAIL_NEW_SUCCESS = 'USER_EMAIL_NEW_SUCCESS';
const USER_EMAIL_NEW_EXISTS = 'USER_EMAIL_NEW_EXISTS';
const USER_EMAIL_NEW_FAILURE = 'USER_EMAIL_NEW_FAILURE';
const USER_EMAIL_VERIFY_SET = 'USER_EMAIL_VERIFY_SET';
const USER_EMAIL_VERIFY_STARTED = 'USER_EMAIL_VERIFY_STARTED';
const USER_EMAIL_VERIFY_SUCCESS = 'USER_EMAIL_VERIFY_SUCCESS';
const USER_EMAIL_VERIFY_FAILURE = 'USER_EMAIL_VERIFY_FAILURE';
const USER_EMAIL_VERIFY_RETRY = 'USER_EMAIL_VERIFY_RETRY';
const USER_PHONE_RESET = 'USER_PHONE_RESET';
const USER_PHONE_NEW_STARTED = 'USER_PHONE_NEW_STARTED';
const USER_PHONE_NEW_SUCCESS = 'USER_PHONE_NEW_SUCCESS';
const USER_PHONE_NEW_FAILURE = 'USER_PHONE_NEW_FAILURE';
const USER_PHONE_VERIFY_STARTED = 'USER_PHONE_VERIFY_STARTED';
const USER_PHONE_VERIFY_SUCCESS = 'USER_PHONE_VERIFY_SUCCESS';
const USER_PHONE_VERIFY_FAILURE = 'USER_PHONE_VERIFY_FAILURE';
const USER_IDENTITY_VERIFY_STARTED = 'USER_IDENTITY_VERIFY_STARTED';
const USER_IDENTITY_VERIFY_SUCCESS = 'USER_IDENTITY_VERIFY_SUCCESS';
const USER_IDENTITY_VERIFY_FAILURE = 'USER_IDENTITY_VERIFY_FAILURE';
const USER_FETCH_STARTED = 'USER_FETCH_STARTED';
const USER_FETCH_SUCCESS = 'USER_FETCH_SUCCESS';
const USER_FETCH_FAILURE = 'USER_FETCH_FAILURE';
const USER_INVITE_STATUS_FETCH_STARTED = 'USER_INVITE_STATUS_FETCH_STARTED';
const USER_INVITE_STATUS_FETCH_SUCCESS = 'USER_INVITE_STATUS_FETCH_SUCCESS';
const USER_INVITE_STATUS_FETCH_FAILURE = 'USER_INVITE_STATUS_FETCH_FAILURE';
const USER_INVITE_NEW_STARTED = 'USER_INVITE_NEW_STARTED';
const USER_INVITE_NEW_SUCCESS = 'USER_INVITE_NEW_SUCCESS';
const USER_INVITE_NEW_FAILURE = 'USER_INVITE_NEW_FAILURE';
const FETCH_ACCESS_TOKEN_SUCCESS = 'FETCH_ACCESS_TOKEN_SUCCESS';

// Rewards
const FETCH_REWARDS_STARTED = 'FETCH_REWARDS_STARTED';
const FETCH_REWARDS_COMPLETED = 'FETCH_REWARDS_COMPLETED';
const CLAIM_REWARD_STARTED = 'CLAIM_REWARD_STARTED';
const CLAIM_REWARD_SUCCESS = 'CLAIM_REWARD_SUCCESS';
const CLAIM_REWARD_FAILURE = 'CLAIM_REWARD_FAILURE';
const CLAIM_REWARD_CLEAR_ERROR = 'CLAIM_REWARD_CLEAR_ERROR';
const FETCH_REWARD_CONTENT_COMPLETED = 'FETCH_REWARD_CONTENT_COMPLETED';

// Language
const DOWNLOAD_LANGUAGE_SUCCEEDED = 'DOWNLOAD_LANGUAGE_SUCCEEDED';
const DOWNLOAD_LANGUAGE_FAILED = 'DOWNLOAD_LANGUAGE_FAILED';

// Subscriptions
const CHANNEL_SUBSCRIBE = 'CHANNEL_SUBSCRIBE';
const CHANNEL_UNSUBSCRIBE = 'CHANNEL_UNSUBSCRIBE';
const HAS_FETCHED_SUBSCRIPTIONS = 'HAS_FETCHED_SUBSCRIPTIONS';
const SET_SUBSCRIPTION_LATEST = 'SET_SUBSCRIPTION_LATEST';
const SET_SUBSCRIPTION_NOTIFICATION = 'SET_SUBSCRIPTION_NOTIFICATION';
const SET_SUBSCRIPTION_NOTIFICATIONS = 'SET_SUBSCRIPTION_NOTIFICATIONS';
const CHECK_SUBSCRIPTION_STARTED = 'CHECK_SUBSCRIPTION_STARTED';
const CHECK_SUBSCRIPTION_COMPLETED = 'CHECK_SUBSCRIPTION_COMPLETED';
const CHECK_SUBSCRIPTIONS_SUBSCRIBE = 'CHECK_SUBSCRIPTIONS_SUBSCRIBE';

// Publishing
const CLEAR_PUBLISH = 'CLEAR_PUBLISH';
const UPDATE_PUBLISH_FORM = 'UPDATE_PUBLISH_FORM';
const PUBLISH_START = 'PUBLISH_START';
const PUBLISH_SUCCESS = 'PUBLISH_SUCCESS';
const PUBLISH_FAIL = 'PUBLISH_FAIL';
const CLEAR_PUBLISH_ERROR = 'CLEAR_PUBLISH_ERROR';
const REMOVE_PENDING_PUBLISH = 'REMOVE_PENDING_PUBLISH';
const DO_PREPARE_EDIT = 'DO_PREPARE_EDIT';

// Notifications
const CREATE_NOTIFICATION = 'CREATE_NOTIFICATION';
const EDIT_NOTIFICATION = 'EDIT_NOTIFICATION';
const DELETE_NOTIFICATION = 'DELETE_NOTIFICATION';
const DISMISS_NOTIFICATION = 'DISMISS_NOTIFICATION';
const CREATE_TOAST = 'CREATE_TOAST';
const DISMISS_TOAST = 'DISMISS_TOAST';
const CREATE_ERROR = 'CREATE_ERROR';
const DISMISS_ERROR = 'DISMISS_ERROR';

const FETCH_DATE = 'FETCH_DATE';

// Cost info
const FETCH_COST_INFO_STARTED = 'FETCH_COST_INFO_STARTED';
const FETCH_COST_INFO_COMPLETED = 'FETCH_COST_INFO_COMPLETED';
const FETCH_COST_INFO_FAILED = 'FETCH_COST_INFO_FAILED';
// Tags
const TOGGLE_TAG_FOLLOW = 'TOGGLE_TAG_FOLLOW';
const TAG_ADD = 'TAG_ADD';
const TAG_DELETE = 'TAG_DELETE';

var action_types = /*#__PURE__*/Object.freeze({
  WINDOW_FOCUSED: WINDOW_FOCUSED,
  DAEMON_READY: DAEMON_READY,
  DAEMON_VERSION_MATCH: DAEMON_VERSION_MATCH,
  DAEMON_VERSION_MISMATCH: DAEMON_VERSION_MISMATCH,
  VOLUME_CHANGED: VOLUME_CHANGED,
  CHANGE_AFTER_AUTH_PATH: CHANGE_AFTER_AUTH_PATH,
  WINDOW_SCROLLED: WINDOW_SCROLLED,
  HISTORY_NAVIGATE: HISTORY_NAVIGATE,
  UPGRADE_CANCELLED: UPGRADE_CANCELLED,
  DOWNLOAD_UPGRADE: DOWNLOAD_UPGRADE,
  UPGRADE_DOWNLOAD_STARTED: UPGRADE_DOWNLOAD_STARTED,
  UPGRADE_DOWNLOAD_COMPLETED: UPGRADE_DOWNLOAD_COMPLETED,
  UPGRADE_DOWNLOAD_PROGRESSED: UPGRADE_DOWNLOAD_PROGRESSED,
  CHECK_UPGRADE_AVAILABLE: CHECK_UPGRADE_AVAILABLE,
  CHECK_UPGRADE_START: CHECK_UPGRADE_START,
  CHECK_UPGRADE_SUCCESS: CHECK_UPGRADE_SUCCESS,
  CHECK_UPGRADE_FAIL: CHECK_UPGRADE_FAIL,
  CHECK_UPGRADE_SUBSCRIBE: CHECK_UPGRADE_SUBSCRIBE,
  UPDATE_VERSION: UPDATE_VERSION,
  UPDATE_REMOTE_VERSION: UPDATE_REMOTE_VERSION,
  SKIP_UPGRADE: SKIP_UPGRADE,
  START_UPGRADE: START_UPGRADE,
  AUTO_UPDATE_DECLINED: AUTO_UPDATE_DECLINED,
  AUTO_UPDATE_DOWNLOADED: AUTO_UPDATE_DOWNLOADED,
  CLEAR_UPGRADE_TIMER: CLEAR_UPGRADE_TIMER,
  GET_NEW_ADDRESS_STARTED: GET_NEW_ADDRESS_STARTED,
  GET_NEW_ADDRESS_COMPLETED: GET_NEW_ADDRESS_COMPLETED,
  FETCH_TRANSACTIONS_STARTED: FETCH_TRANSACTIONS_STARTED,
  FETCH_TRANSACTIONS_COMPLETED: FETCH_TRANSACTIONS_COMPLETED,
  FETCH_SUPPORTS_STARTED: FETCH_SUPPORTS_STARTED,
  FETCH_SUPPORTS_COMPLETED: FETCH_SUPPORTS_COMPLETED,
  ABANDON_SUPPORT_STARTED: ABANDON_SUPPORT_STARTED,
  ABANDON_SUPPORT_COMPLETED: ABANDON_SUPPORT_COMPLETED,
  UPDATE_BALANCE: UPDATE_BALANCE,
  UPDATE_TOTAL_BALANCE: UPDATE_TOTAL_BALANCE,
  CHECK_ADDRESS_IS_MINE_STARTED: CHECK_ADDRESS_IS_MINE_STARTED,
  CHECK_ADDRESS_IS_MINE_COMPLETED: CHECK_ADDRESS_IS_MINE_COMPLETED,
  SEND_TRANSACTION_STARTED: SEND_TRANSACTION_STARTED,
  SEND_TRANSACTION_COMPLETED: SEND_TRANSACTION_COMPLETED,
  SEND_TRANSACTION_FAILED: SEND_TRANSACTION_FAILED,
  SUPPORT_TRANSACTION_STARTED: SUPPORT_TRANSACTION_STARTED,
  SUPPORT_TRANSACTION_COMPLETED: SUPPORT_TRANSACTION_COMPLETED,
  SUPPORT_TRANSACTION_FAILED: SUPPORT_TRANSACTION_FAILED,
  WALLET_ENCRYPT_START: WALLET_ENCRYPT_START,
  WALLET_ENCRYPT_COMPLETED: WALLET_ENCRYPT_COMPLETED,
  WALLET_ENCRYPT_FAILED: WALLET_ENCRYPT_FAILED,
  WALLET_UNLOCK_START: WALLET_UNLOCK_START,
  WALLET_UNLOCK_COMPLETED: WALLET_UNLOCK_COMPLETED,
  WALLET_UNLOCK_FAILED: WALLET_UNLOCK_FAILED,
  WALLET_DECRYPT_START: WALLET_DECRYPT_START,
  WALLET_DECRYPT_COMPLETED: WALLET_DECRYPT_COMPLETED,
  WALLET_DECRYPT_FAILED: WALLET_DECRYPT_FAILED,
  WALLET_LOCK_START: WALLET_LOCK_START,
  WALLET_LOCK_COMPLETED: WALLET_LOCK_COMPLETED,
  WALLET_LOCK_FAILED: WALLET_LOCK_FAILED,
  WALLET_STATUS_START: WALLET_STATUS_START,
  WALLET_STATUS_COMPLETED: WALLET_STATUS_COMPLETED,
  SET_TRANSACTION_LIST_FILTER: SET_TRANSACTION_LIST_FILTER,
  UPDATE_CURRENT_HEIGHT: UPDATE_CURRENT_HEIGHT,
  SET_DRAFT_TRANSACTION_AMOUNT: SET_DRAFT_TRANSACTION_AMOUNT,
  SET_DRAFT_TRANSACTION_ADDRESS: SET_DRAFT_TRANSACTION_ADDRESS,
  RESOLVE_URIS_STARTED: RESOLVE_URIS_STARTED,
  RESOLVE_URIS_COMPLETED: RESOLVE_URIS_COMPLETED,
  FETCH_CHANNEL_CLAIMS_STARTED: FETCH_CHANNEL_CLAIMS_STARTED,
  FETCH_CHANNEL_CLAIMS_COMPLETED: FETCH_CHANNEL_CLAIMS_COMPLETED,
  FETCH_CLAIM_LIST_MINE_STARTED: FETCH_CLAIM_LIST_MINE_STARTED,
  FETCH_CLAIM_LIST_MINE_COMPLETED: FETCH_CLAIM_LIST_MINE_COMPLETED,
  ABANDON_CLAIM_STARTED: ABANDON_CLAIM_STARTED,
  ABANDON_CLAIM_SUCCEEDED: ABANDON_CLAIM_SUCCEEDED,
  FETCH_CHANNEL_LIST_STARTED: FETCH_CHANNEL_LIST_STARTED,
  FETCH_CHANNEL_LIST_COMPLETED: FETCH_CHANNEL_LIST_COMPLETED,
  CREATE_CHANNEL_STARTED: CREATE_CHANNEL_STARTED,
  CREATE_CHANNEL_COMPLETED: CREATE_CHANNEL_COMPLETED,
  CREATE_CHANNEL_FAILED: CREATE_CHANNEL_FAILED,
  UPDATE_CHANNEL_STARTED: UPDATE_CHANNEL_STARTED,
  UPDATE_CHANNEL_COMPLETED: UPDATE_CHANNEL_COMPLETED,
  UPDATE_CHANNEL_FAILED: UPDATE_CHANNEL_FAILED,
  PUBLISH_STARTED: PUBLISH_STARTED,
  PUBLISH_COMPLETED: PUBLISH_COMPLETED,
  PUBLISH_FAILED: PUBLISH_FAILED,
  SET_PLAYING_URI: SET_PLAYING_URI,
  SET_CONTENT_POSITION: SET_CONTENT_POSITION,
  SET_CONTENT_LAST_VIEWED: SET_CONTENT_LAST_VIEWED,
  CLEAR_CONTENT_HISTORY_URI: CLEAR_CONTENT_HISTORY_URI,
  CLEAR_CONTENT_HISTORY_ALL: CLEAR_CONTENT_HISTORY_ALL,
  CLAIM_SEARCH_STARTED: CLAIM_SEARCH_STARTED,
  CLAIM_SEARCH_COMPLETED: CLAIM_SEARCH_COMPLETED,
  CLAIM_SEARCH_FAILED: CLAIM_SEARCH_FAILED,
  COMMENT_LIST_STARTED: COMMENT_LIST_STARTED,
  COMMENT_LIST_COMPLETED: COMMENT_LIST_COMPLETED,
  COMMENT_LIST_FAILED: COMMENT_LIST_FAILED,
  COMMENT_CREATE_STARTED: COMMENT_CREATE_STARTED,
  COMMENT_CREATE_COMPLETED: COMMENT_CREATE_COMPLETED,
  COMMENT_CREATE_FAILED: COMMENT_CREATE_FAILED,
  FILE_LIST_STARTED: FILE_LIST_STARTED,
  FILE_LIST_SUCCEEDED: FILE_LIST_SUCCEEDED,
  FETCH_FILE_INFO_STARTED: FETCH_FILE_INFO_STARTED,
  FETCH_FILE_INFO_COMPLETED: FETCH_FILE_INFO_COMPLETED,
  LOADING_VIDEO_STARTED: LOADING_VIDEO_STARTED,
  LOADING_VIDEO_COMPLETED: LOADING_VIDEO_COMPLETED,
  LOADING_VIDEO_FAILED: LOADING_VIDEO_FAILED,
  DOWNLOADING_STARTED: DOWNLOADING_STARTED,
  DOWNLOADING_PROGRESSED: DOWNLOADING_PROGRESSED,
  DOWNLOADING_COMPLETED: DOWNLOADING_COMPLETED,
  DOWNLOADING_CANCELED: DOWNLOADING_CANCELED,
  PLAY_VIDEO_STARTED: PLAY_VIDEO_STARTED,
  FETCH_AVAILABILITY_STARTED: FETCH_AVAILABILITY_STARTED,
  FETCH_AVAILABILITY_COMPLETED: FETCH_AVAILABILITY_COMPLETED,
  FILE_DELETE: FILE_DELETE,
  SET_FILE_LIST_SORT: SET_FILE_LIST_SORT,
  PURCHASE_URI_STARTED: PURCHASE_URI_STARTED,
  PURCHASE_URI_COMPLETED: PURCHASE_URI_COMPLETED,
  PURCHASE_URI_FAILED: PURCHASE_URI_FAILED,
  DELETE_PURCHASED_URI: DELETE_PURCHASED_URI,
  LOADING_FILE_STARTED: LOADING_FILE_STARTED,
  LOADING_FILE_COMPLETED: LOADING_FILE_COMPLETED,
  LOADING_FILE_FAILED: LOADING_FILE_FAILED,
  SEARCH_START: SEARCH_START,
  SEARCH_SUCCESS: SEARCH_SUCCESS,
  SEARCH_FAIL: SEARCH_FAIL,
  UPDATE_SEARCH_QUERY: UPDATE_SEARCH_QUERY,
  UPDATE_SEARCH_OPTIONS: UPDATE_SEARCH_OPTIONS,
  UPDATE_SEARCH_SUGGESTIONS: UPDATE_SEARCH_SUGGESTIONS,
  SEARCH_FOCUS: SEARCH_FOCUS,
  SEARCH_BLUR: SEARCH_BLUR,
  DAEMON_SETTINGS_RECEIVED: DAEMON_SETTINGS_RECEIVED,
  CLIENT_SETTING_CHANGED: CLIENT_SETTING_CHANGED,
  UPDATE_IS_NIGHT: UPDATE_IS_NIGHT,
  AUTHENTICATION_STARTED: AUTHENTICATION_STARTED,
  AUTHENTICATION_SUCCESS: AUTHENTICATION_SUCCESS,
  AUTHENTICATION_FAILURE: AUTHENTICATION_FAILURE,
  USER_EMAIL_DECLINE: USER_EMAIL_DECLINE,
  USER_EMAIL_NEW_STARTED: USER_EMAIL_NEW_STARTED,
  USER_EMAIL_NEW_SUCCESS: USER_EMAIL_NEW_SUCCESS,
  USER_EMAIL_NEW_EXISTS: USER_EMAIL_NEW_EXISTS,
  USER_EMAIL_NEW_FAILURE: USER_EMAIL_NEW_FAILURE,
  USER_EMAIL_VERIFY_SET: USER_EMAIL_VERIFY_SET,
  USER_EMAIL_VERIFY_STARTED: USER_EMAIL_VERIFY_STARTED,
  USER_EMAIL_VERIFY_SUCCESS: USER_EMAIL_VERIFY_SUCCESS,
  USER_EMAIL_VERIFY_FAILURE: USER_EMAIL_VERIFY_FAILURE,
  USER_EMAIL_VERIFY_RETRY: USER_EMAIL_VERIFY_RETRY,
  USER_PHONE_RESET: USER_PHONE_RESET,
  USER_PHONE_NEW_STARTED: USER_PHONE_NEW_STARTED,
  USER_PHONE_NEW_SUCCESS: USER_PHONE_NEW_SUCCESS,
  USER_PHONE_NEW_FAILURE: USER_PHONE_NEW_FAILURE,
  USER_PHONE_VERIFY_STARTED: USER_PHONE_VERIFY_STARTED,
  USER_PHONE_VERIFY_SUCCESS: USER_PHONE_VERIFY_SUCCESS,
  USER_PHONE_VERIFY_FAILURE: USER_PHONE_VERIFY_FAILURE,
  USER_IDENTITY_VERIFY_STARTED: USER_IDENTITY_VERIFY_STARTED,
  USER_IDENTITY_VERIFY_SUCCESS: USER_IDENTITY_VERIFY_SUCCESS,
  USER_IDENTITY_VERIFY_FAILURE: USER_IDENTITY_VERIFY_FAILURE,
  USER_FETCH_STARTED: USER_FETCH_STARTED,
  USER_FETCH_SUCCESS: USER_FETCH_SUCCESS,
  USER_FETCH_FAILURE: USER_FETCH_FAILURE,
  USER_INVITE_STATUS_FETCH_STARTED: USER_INVITE_STATUS_FETCH_STARTED,
  USER_INVITE_STATUS_FETCH_SUCCESS: USER_INVITE_STATUS_FETCH_SUCCESS,
  USER_INVITE_STATUS_FETCH_FAILURE: USER_INVITE_STATUS_FETCH_FAILURE,
  USER_INVITE_NEW_STARTED: USER_INVITE_NEW_STARTED,
  USER_INVITE_NEW_SUCCESS: USER_INVITE_NEW_SUCCESS,
  USER_INVITE_NEW_FAILURE: USER_INVITE_NEW_FAILURE,
  FETCH_ACCESS_TOKEN_SUCCESS: FETCH_ACCESS_TOKEN_SUCCESS,
  FETCH_REWARDS_STARTED: FETCH_REWARDS_STARTED,
  FETCH_REWARDS_COMPLETED: FETCH_REWARDS_COMPLETED,
  CLAIM_REWARD_STARTED: CLAIM_REWARD_STARTED,
  CLAIM_REWARD_SUCCESS: CLAIM_REWARD_SUCCESS,
  CLAIM_REWARD_FAILURE: CLAIM_REWARD_FAILURE,
  CLAIM_REWARD_CLEAR_ERROR: CLAIM_REWARD_CLEAR_ERROR,
  FETCH_REWARD_CONTENT_COMPLETED: FETCH_REWARD_CONTENT_COMPLETED,
  DOWNLOAD_LANGUAGE_SUCCEEDED: DOWNLOAD_LANGUAGE_SUCCEEDED,
  DOWNLOAD_LANGUAGE_FAILED: DOWNLOAD_LANGUAGE_FAILED,
  CHANNEL_SUBSCRIBE: CHANNEL_SUBSCRIBE,
  CHANNEL_UNSUBSCRIBE: CHANNEL_UNSUBSCRIBE,
  HAS_FETCHED_SUBSCRIPTIONS: HAS_FETCHED_SUBSCRIPTIONS,
  SET_SUBSCRIPTION_LATEST: SET_SUBSCRIPTION_LATEST,
  SET_SUBSCRIPTION_NOTIFICATION: SET_SUBSCRIPTION_NOTIFICATION,
  SET_SUBSCRIPTION_NOTIFICATIONS: SET_SUBSCRIPTION_NOTIFICATIONS,
  CHECK_SUBSCRIPTION_STARTED: CHECK_SUBSCRIPTION_STARTED,
  CHECK_SUBSCRIPTION_COMPLETED: CHECK_SUBSCRIPTION_COMPLETED,
  CHECK_SUBSCRIPTIONS_SUBSCRIBE: CHECK_SUBSCRIPTIONS_SUBSCRIBE,
  CLEAR_PUBLISH: CLEAR_PUBLISH,
  UPDATE_PUBLISH_FORM: UPDATE_PUBLISH_FORM,
  PUBLISH_START: PUBLISH_START,
  PUBLISH_SUCCESS: PUBLISH_SUCCESS,
  PUBLISH_FAIL: PUBLISH_FAIL,
  CLEAR_PUBLISH_ERROR: CLEAR_PUBLISH_ERROR,
  REMOVE_PENDING_PUBLISH: REMOVE_PENDING_PUBLISH,
  DO_PREPARE_EDIT: DO_PREPARE_EDIT,
  CREATE_NOTIFICATION: CREATE_NOTIFICATION,
  EDIT_NOTIFICATION: EDIT_NOTIFICATION,
  DELETE_NOTIFICATION: DELETE_NOTIFICATION,
  DISMISS_NOTIFICATION: DISMISS_NOTIFICATION,
  CREATE_TOAST: CREATE_TOAST,
  DISMISS_TOAST: DISMISS_TOAST,
  CREATE_ERROR: CREATE_ERROR,
  DISMISS_ERROR: DISMISS_ERROR,
  FETCH_DATE: FETCH_DATE,
  FETCH_COST_INFO_STARTED: FETCH_COST_INFO_STARTED,
  FETCH_COST_INFO_COMPLETED: FETCH_COST_INFO_COMPLETED,
  FETCH_COST_INFO_FAILED: FETCH_COST_INFO_FAILED,
  TOGGLE_TAG_FOLLOW: TOGGLE_TAG_FOLLOW,
  TAG_ADD: TAG_ADD,
  TAG_DELETE: TAG_DELETE
});

const CC_LICENSES = [{
  value: 'Creative Commons Attribution 4.0 International',
  url: 'https://creativecommons.org/licenses/by/4.0/legalcode'
}, {
  value: 'Creative Commons Attribution-ShareAlike 4.0 International',
  url: 'https://creativecommons.org/licenses/by-sa/4.0/legalcode'
}, {
  value: 'Creative Commons Attribution-NoDerivatives 4.0 International',
  url: 'https://creativecommons.org/licenses/by-nd/4.0/legalcode'
}, {
  value: 'Creative Commons Attribution-NonCommercial 4.0 International',
  url: 'https://creativecommons.org/licenses/by-nc/4.0/legalcode'
}, {
  value: 'Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International',
  url: 'https://creativecommons.org/licenses/by-nc-sa/4.0/legalcode'
}, {
  value: 'Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International',
  url: 'https://creativecommons.org/licenses/by-nc-nd/4.0/legalcode'
}];

const NONE = 'None';
const PUBLIC_DOMAIN = 'Public Domain';
const OTHER = 'other';
const COPYRIGHT = 'copyright';

var licenses = /*#__PURE__*/Object.freeze({
  CC_LICENSES: CC_LICENSES,
  NONE: NONE,
  PUBLIC_DOMAIN: PUBLIC_DOMAIN,
  OTHER: OTHER,
  COPYRIGHT: COPYRIGHT
});

const AUTH = 'auth';
const BACKUP = 'backup';
const CHANNEL = 'channel';
const DISCOVER = 'discover';
const FILE = 'file';
const DOWNLOADED = 'downloaded';
const PUBLISHED = 'published';
const GET_CREDITS = 'getcredits';
const HELP = 'help';
const INVITE = 'invite';
const PUBLISH = 'publish';
const REPORT = 'report';
const REWARDS = 'rewards';
const SEARCH = 'search';
const SEND_CREDITS = 'send';
const SETTINGS = 'settings';
const SHOW = 'show';
const SUBSCRIPTIONS = 'subscriptions';
const TRANSACTION_HISTORY = 'history';
const HISTORY = 'user_history';
const WALLET = 'wallet';

var pages = /*#__PURE__*/Object.freeze({
  AUTH: AUTH,
  BACKUP: BACKUP,
  CHANNEL: CHANNEL,
  DISCOVER: DISCOVER,
  FILE: FILE,
  DOWNLOADED: DOWNLOADED,
  PUBLISHED: PUBLISHED,
  GET_CREDITS: GET_CREDITS,
  HELP: HELP,
  INVITE: INVITE,
  PUBLISH: PUBLISH,
  REPORT: REPORT,
  REWARDS: REWARDS,
  SEARCH: SEARCH,
  SEND_CREDITS: SEND_CREDITS,
  SETTINGS: SETTINGS,
  SHOW: SHOW,
  SUBSCRIPTIONS: SUBSCRIPTIONS,
  TRANSACTION_HISTORY: TRANSACTION_HISTORY,
  HISTORY: HISTORY,
  WALLET: WALLET
});

/* hardcoded names still exist for these in reducers/settings.js - only discovered when debugging */
/* Many SETTINGS are stored in the localStorage by their name -
    be careful about changing the value of a SETTINGS constant, as doing so can invalidate existing SETTINGS */
const CREDIT_REQUIRED_ACKNOWLEDGED = 'credit_required_acknowledged';
const NEW_USER_ACKNOWLEDGED = 'welcome_acknowledged';
const EMAIL_COLLECTION_ACKNOWLEDGED = 'email_collection_acknowledged';
const LANGUAGE = 'language';
const SHOW_NSFW = 'showNsfw';
const SHOW_UNAVAILABLE = 'showUnavailable';
const INSTANT_PURCHASE_ENABLED = 'instantPurchaseEnabled';
const INSTANT_PURCHASE_MAX = 'instantPurchaseMax';
const THEME = 'theme';
const THEMES = 'themes';
const AUTOMATIC_DARK_MODE_ENABLED = 'automaticDarkModeEnabled';

// mobile settings
const BACKGROUND_PLAY_ENABLED = 'backgroundPlayEnabled';
const FOREGROUND_NOTIFICATION_ENABLED = 'foregroundNotificationEnabled';
const KEEP_DAEMON_RUNNING = 'keepDaemonRunning';

var settings = /*#__PURE__*/Object.freeze({
  CREDIT_REQUIRED_ACKNOWLEDGED: CREDIT_REQUIRED_ACKNOWLEDGED,
  NEW_USER_ACKNOWLEDGED: NEW_USER_ACKNOWLEDGED,
  EMAIL_COLLECTION_ACKNOWLEDGED: EMAIL_COLLECTION_ACKNOWLEDGED,
  LANGUAGE: LANGUAGE,
  SHOW_NSFW: SHOW_NSFW,
  SHOW_UNAVAILABLE: SHOW_UNAVAILABLE,
  INSTANT_PURCHASE_ENABLED: INSTANT_PURCHASE_ENABLED,
  INSTANT_PURCHASE_MAX: INSTANT_PURCHASE_MAX,
  THEME: THEME,
  THEMES: THEMES,
  AUTOMATIC_DARK_MODE_ENABLED: AUTOMATIC_DARK_MODE_ENABLED,
  BACKGROUND_PLAY_ENABLED: BACKGROUND_PLAY_ENABLED,
  FOREGROUND_NOTIFICATION_ENABLED: FOREGROUND_NOTIFICATION_ENABLED,
  KEEP_DAEMON_RUNNING: KEEP_DAEMON_RUNNING
});

const DATE_NEW = 'dateNew';
const DATE_OLD = 'dateOld';
const TITLE = 'title';
const FILENAME = 'filename';

var sort_options = /*#__PURE__*/Object.freeze({
  DATE_NEW: DATE_NEW,
  DATE_OLD: DATE_OLD,
  TITLE: TITLE,
  FILENAME: FILENAME
});

const API_DOWN = 'apiDown';
const READY = 'ready';
const IN_PROGRESS = 'inProgress';
const COMPLETE = 'complete';
const MANUAL = 'manual';

var thumbnail_upload_statuses = /*#__PURE__*/Object.freeze({
  API_DOWN: API_DOWN,
  READY: READY,
  IN_PROGRESS: IN_PROGRESS,
  COMPLETE: COMPLETE,
  MANUAL: MANUAL
});

// eslint-disable-next-line import/prefer-default-export
const ALL = 'all';
const SPEND = 'spend';
const RECEIVE = 'receive';
const PUBLISH$1 = 'publish';
const CHANNEL$1 = 'channel';
const TIP = 'tip';
const SUPPORT = 'support';
const UPDATE = 'update';
const ABANDON = 'abandon';

var transaction_types = /*#__PURE__*/Object.freeze({
  ALL: ALL,
  SPEND: SPEND,
  RECEIVE: RECEIVE,
  PUBLISH: PUBLISH$1,
  CHANNEL: CHANNEL$1,
  TIP: TIP,
  SUPPORT: SUPPORT,
  UPDATE: UPDATE,
  ABANDON: ABANDON
});

const SEARCH_TYPES = {
  FILE: 'file',
  CHANNEL: 'channel',
  SEARCH: 'search',
  TAG: 'tag'
};

const SEARCH_OPTIONS = {
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

const DEFAULT_FOLLOWED_TAGS = ['art', 'automotive', 'blockchain', 'comedy', 'economics', 'education', 'gaming', 'music', 'news', 'science', 'sports', 'technology'];

const MATURE_TAGS = ['porn', 'nsfw', 'mature', 'xxx'];

const DEFAULT_KNOWN_TAGS = ['gaming', 'pop culture', 'Entertainment', 'technology', 'music', 'funny', 'Education', 'learning', 'news', 'gameplay', 'nature', 'beliefs', 'comedy', 'games', 'sony interactive entertainment', 'film & animation', 'game', 'weapons', "let's play", 'blockchain', 'video game', 'sports', 'walkthrough', 'ps4live', 'art', 'pc', 'minecraft', 'playthrough', 'economics', 'automotive', 'play', 'ps4share', 'tutorial', 'twitch', 'how to', 'ps4', 'bitcoin', 'fortnite', 'commentary', 'lets play', 'fun', 'politics', 'xbox', 'autos & vehicles', 'Travel & Events', 'food', 'science', 'xbox one', 'liberal', 'democrat', 'progressive', 'survival', 'Nonprofits & Activism', 'cryptocurrency', 'playstation', 'nintendo', 'government', 'steam', 'podcast', 'gamer', 'horror', 'conservative', 'reaction', 'trailer', 'love', 'cnn', 'republican', 'political', 'hangoutsonair', 'hoa', 'msnbc', 'cbs', 'anime', 'donald trump', 'fiction', 'fox news', 'crypto', 'ethereum', 'call of duty', 'android', 'multiplayer', 'epic', 'rpg', 'adventure', 'secular talk', 'btc', 'atheist', 'atheism', 'video games', 'ps3', 'cod', 'online', 'agnostic', 'movie', 'fps', 'lets', 'mod', 'world', 'reviews', 'sharefactory', 'space', 'pokemon', 'stream', 'hilarious', 'lol', 'sony', 'god', "let's", 'dance', 'pvp', 'tech', 'strategy', 'zombies', 'fail', 'film', 'xbox 360', 'animation', 'unboxing', 'money', 'how', 'travel', 'wwe', 'mods', 'indie', 'pubg', 'ios', 'history', 'rap', 'sony computer entertainment', 'mobile', 'trump', 'hack', 'flat earth', 'trap', 'humor', 'vlogging', 'fox', 'news radio', 'facebook', 'edm', 'fitness', 'vaping', 'hip hop', 'secular', 'jesus', 'song', 'vape', 'guitar', 'remix', 'mining', 'daily', 'diy', 'pets & animals', 'videogame', 'death', 'funny moments', 'religion', 'media', 'viral', 'war', 'nbc', 'freedom', 'gold', 'family', 'meme', 'zombie', 'photography', 'chill', 'sniper', 'computer', 'iphone', 'dragon', 'bible', 'pro', 'overwatch', 'litecoin', 'gta', 'house', 'fire', 'bass', 'bitcoin news', 'truth', 'crash', 'mario', 'league of legends', 'wii', 'mmorpg', 'grand theft auto v', 'health', 'marvel', 'racing', 'apple', 'instrumental', 'earth', 'destiny', 'satire', 'race', 'training', 'electronic', 'boss', 'roblox', 'family friendly', 'california', 'react', 'christian', 'mmo', 'twitter', 'help', 'star', 'cars', 'random', 'top 10', 'ninja', 'guns', 'linux', 'lessons', 'vegan', 'future', 'dota 2', 'studio', 'star wars', 'gta 5', 'shooting', 'nasa', 'rock', 'league', 'subscribe', 'water', 'gta v', 'car', 'samsung', 'music video', 'skyrim', 'dog', 'comics', 'shooter game', 'bo3', 'halloween', 'liberty', 'eth', 'conspiracy', 'knife', 'fashion', 'stories', 'vapor', 'nvidia', 'cute', 'beat', 'nintendo switch', 'fantasy', 'christmas', 'world of warcraft', 'industry', 'cartoon', 'crypto news', 'garden', 'animals', 'windows', 'happy', 'magic', 'memes', 'design', 'tactical', 'fallout 4', 'puzzle', 'parody', 'rv', 'beats', 'fortnite battle royale', 'building', 'disney', 'drone', 'ps2', 'beach', 'metal', 'christianity', 'business', 'mix', 'bo2', 'cover', 'senate', '4k', 'united states', 'final', 'hero', 'playing', 'dlc', 'ubisoft', 'halo', 'pc gaming', 'raw', 'investing', 'online learning', 'software', 'ark', 'mojang', 'console', 'battle royale', 'canon', 'microsoft', 'camping', 'cryptocurrency news', 'ufo', 'progressive talk', 'switch', 'fpv', 'arcade', 'school', 'driving', 'bodybuilding', 'drama', 'retro', 'science fiction', 'eggs', 'australia', 'modded', 'rainbow', 'gamers', 'resident evil', 'drawing', 'brasil', 'england', 'hillary clinton', 'singing', 'final fantasy', 'hiphop', 'video blog', 'mature', 'quad', 'noob', 'simulation', 'illuminati', 'poetry', 'dayz', 'manga', 'howto', 'insane', 'xbox360', 'press', 'special', 'church', 'ico', 'weird', 'libertarian', 'crafting', 'level', 'comic', 'sandbox', 'daily vlog', 'outdoor', 'black ops', 'sound', 'christ', 'duty', 'Juvenile fiction', 'pc game', 'how-to', 'ww2', 'creepy', 'artist', 'galaxy', 'destiny 2', 'new music', 'quest', 'lee', 'pacman', 'super smash bros', 'day', 'survival horror', 'patreon', 'bitcoin price', 'trending', 'open world', 'wii u', 'dope', 'reaper', 'sniping', 'dubstep', 'truck', 'planet', 'dc', 'amazon', 'spirituality', 'universe', 'video game culture', 'community', 'cat', 'aliens', 'tourism', 'altcoins', 'style', 'travel trailer', 'rda', '5859dfec-026f-46ba-bea0-02bf43aa1a6f', 'gun', 'secret', 'far cry 5', 'auto', 'culture', 'dj', 'mw2', 'lord', 'full time rving', 'role-playing game', 'prank', 'grand theft auto', 'master', 'wrestling', 'sci-fi', 'workout', 'ghost', 'fake news', 'silly', 'season', 'bo4', 'trading', 'extreme', 'economy', 'combat', 'plays', 'muslim', 'pubg mobile', 'clips', 'bo1', 'paypal', 'sims', 'exploration', 'light', 'ripple', 'paranormal', 'football', 'capcom', 'rta', 'discord', 'action role-playing game', 'playthrough part', 'batman', 'player', 'server', 'anarchy', 'military', 'playlist', 'cosplay', 'rv park', 'rant', 'edit', 'germany', 'reading', 'chris', 'flash', 'loot', 'bitcoin gratis', 'game reviews', 'movies', 'stupid', 'latest news', 'squad gameplay', 'guru', 'timelapse', 'black ops 3', 'holiday', 'soul', 'motivation', 'mw3', 'vacation', 'sega', '19th century', 'pop', 'sims 4', 'post', 'smok', 'island', 'scotland', 'paladins', 'warrior', 'creepypasta', 'role-playing video game', 'solar', 'vr', 'animal', 'peace', 'consciousness', 'dota', 'audio', 'mass effect', 'Humour', 'first look', 'videogames', 'future bass', 'freestyle', 'hardcore', 'portugal', 'dantdm', 'teaser'];

//      

const CHECK_DAEMON_STARTED_TRY_NUMBER = 200;
//
// Basic LBRY sdk connection config
// Offers a proxy to call LBRY sdk methods

//
const Lbry = {
  isConnected: false,
  connectPromise: null,
  daemonConnectionString: 'http://localhost:5279',
  apiRequestHeaders: { 'Content-Type': 'application/json-rpc' },

  // Allow overriding daemon connection string (e.g. to `/api/proxy` for lbryweb)
  setDaemonConnectionString: value => {
    Lbry.daemonConnectionString = value;
  },

  setApiHeader: (key, value) => {
    Lbry.apiRequestHeaders = Object.assign(Lbry.apiRequestHeaders, { [key]: value });
  },

  unsetApiHeader: key => {
    Object.keys(Lbry.apiRequestHeaders).includes(key) && delete Lbry.apiRequestHeaders['key'];
  },
  // Allow overriding Lbry methods
  overrides: {},
  setOverride: (methodName, newMethod) => {
    Lbry.overrides[methodName] = newMethod;
  },

  // Returns a human readable media type based on the content type or extension of a file that is returned by the sdk
  getMediaType: (contentType, extname) => {
    if (extname) {
      const formats = [[/^(mp4|m4v|webm|flv|f4v|ogv)$/i, 'video'], [/^(mp3|m4a|aac|wav|flac|ogg|opus)$/i, 'audio'], [/^(html|htm|xml|pdf|odf|doc|docx|md|markdown|txt|epub|org)$/i, 'document'], [/^(stl|obj|fbx|gcode)$/i, '3D-file']];
      const res = formats.reduce((ret, testpair) => {
        switch (testpair[0].test(ret)) {
          case true:
            return testpair[1];
          default:
            return ret;
        }
      }, extname);
      return res === extname ? 'unknown' : res;
    } else if (contentType) {
      // $FlowFixMe
      return (/^[^/]+/.exec(contentType)[0]
      );
    }
    return 'unknown';
  },

  //
  // Lbry SDK Methods
  // https://lbry.tech/api/sdk
  //
  status: (params = {}) => daemonCallWithResult('status', params),
  stop: () => daemonCallWithResult('stop', {}),
  version: () => daemonCallWithResult('version', {}),

  // Claim fetching and manipulation
  resolve: params => daemonCallWithResult('resolve', params),
  get: params => daemonCallWithResult('get', params),
  publish: params => daemonCallWithResult('publish', params),
  claim_search: params => daemonCallWithResult('claim_search', params),
  claim_list: params => daemonCallWithResult('claim_list', params),
  channel_create: params => daemonCallWithResult('channel_create', params),
  channel_update: params => daemonCallWithResult('channel_update', params),
  channel_list: params => daemonCallWithResult('channel_list', params),
  stream_abandon: params => daemonCallWithResult('stream_abandon', params),
  channel_abandon: params => daemonCallWithResult('channel_abandon', params),
  support_create: params => daemonCallWithResult('support_create', params),

  // File fetching and manipulation
  file_list: (params = {}) => daemonCallWithResult('file_list', params),
  file_delete: (params = {}) => daemonCallWithResult('file_delete', params),
  file_set_status: (params = {}) => daemonCallWithResult('file_set_status', params),
  blob_delete: (params = {}) => daemonCallWithResult('blob_delete', params),
  blob_list: (params = {}) => daemonCallWithResult('blob_list', params),

  // Wallet utilities
  account_balance: (params = {}) => daemonCallWithResult('account_balance', params),
  account_decrypt: () => daemonCallWithResult('account_decrypt', {}),
  account_encrypt: (params = {}) => daemonCallWithResult('account_encrypt', params),
  account_unlock: (params = {}) => daemonCallWithResult('account_unlock', params),
  account_list: (params = {}) => daemonCallWithResult('account_list', params),
  account_send: (params = {}) => daemonCallWithResult('account_send', params),
  account_set: (params = {}) => daemonCallWithResult('account_set', params),
  address_is_mine: (params = {}) => daemonCallWithResult('address_is_mine', params),
  address_unused: (params = {}) => daemonCallWithResult('address_unused', params),
  transaction_list: (params = {}) => daemonCallWithResult('transaction_list', params),
  utxo_release: (params = {}) => daemonCallWithResult('utxo_release', params),
  support_abandon: (params = {}) => daemonCallWithResult('support_abandon', params),

  sync_hash: (params = {}) => daemonCallWithResult('sync_hash', params),
  sync_apply: (params = {}) => daemonCallWithResult('sync_apply', params),

  // Comments
  comment_list: (params = {}) => daemonCallWithResult('comment_list', params),
  comment_create: (params = {}) => daemonCallWithResult('comment_create', params),
  // Connect to the sdk
  connect: () => {
    if (Lbry.connectPromise === null) {
      Lbry.connectPromise = new Promise((resolve, reject) => {
        let tryNum = 0;
        // Check every half second to see if the daemon is accepting connections
        function checkDaemonStarted() {
          tryNum += 1;
          Lbry.status().then(resolve).catch(() => {
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

    // Flow thinks this could be empty, but it will always reuturn a promise
    // $FlowFixMe
    return Lbry.connectPromise;
  }
};

function checkAndParse(response) {
  if (response.status >= 200 && response.status < 300) {
    return response.json();
  }
  return response.json().then(json => {
    let error;
    if (json.error) {
      const errorMessage = typeof json.error === 'object' ? json.error.message : json.error;
      error = new Error(errorMessage);
    } else {
      error = new Error('Protocol error with unknown response signature');
    }
    return Promise.reject(error);
  });
}

function apiCall(method, params, resolve, reject) {
  const counter = new Date().getTime();
  const options = {
    method: 'POST',
    headers: Lbry.apiRequestHeaders,
    body: JSON.stringify({
      jsonrpc: '2.0',
      method,
      params,
      id: counter
    })
  };

  return fetch(Lbry.daemonConnectionString, options).then(checkAndParse).then(response => {
    const error = response.error || response.result && response.result.error;

    if (error) {
      return reject(error);
    }
    return resolve(response.result);
  }).catch(reject);
}

function daemonCallWithResult(name, params = {}) {
  return new Promise((resolve, reject) => {
    apiCall(name, params, result => {
      resolve(result);
    }, reject);
  });
}

// This is only for a fallback
// If there is a Lbry method that is being called by an app, it should be added to /flow-typed/Lbry.js
const lbryProxy = new Proxy(Lbry, {
  get(target, name) {
    if (name in target) {
      return target[name];
    }

    return (params = {}) => new Promise((resolve, reject) => {
      apiCall(name, params, resolve, reject);
    });
  }
});

//      

const DEFAULT_SEARCH_RESULT_FROM = 0;
const DEFAULT_SEARCH_SIZE = 20;

function parseQueryParams(queryString) {
  if (queryString === '') return {};
  const parts = queryString.split('?').pop().split('&').map(p => p.split('='));

  const params = {};
  parts.forEach(array => {
    const [first, second] = array;
    params[first] = second;
  });
  return params;
}

function toQueryString(params) {
  if (!params) return '';

  const parts = [];
  Object.keys(params).forEach(key => {
    if (Object.prototype.hasOwnProperty.call(params, key) && params[key]) {
      parts.push(`${key}=${params[key]}`);
    }
  });

  return parts.join('&');
}

const getSearchQueryString = (query, options = {}, includeUserOptions = false) => {
  const encodedQuery = encodeURIComponent(query);
  const queryParams = [`s=${encodedQuery}`, `size=${options.size || DEFAULT_SEARCH_SIZE}`, `from=${options.from || DEFAULT_SEARCH_RESULT_FROM}`];

  if (includeUserOptions) {
    const claimType = options[SEARCH_OPTIONS.CLAIM_TYPE];
    queryParams.push(`claimType=${claimType}`);

    // If they are only searching for channels, strip out the media info
    if (!claimType.includes(SEARCH_OPTIONS.INCLUDE_CHANNELS)) {
      queryParams.push(`mediaType=${[SEARCH_OPTIONS.MEDIA_FILE, SEARCH_OPTIONS.MEDIA_AUDIO, SEARCH_OPTIONS.MEDIA_VIDEO, SEARCH_OPTIONS.MEDIA_TEXT, SEARCH_OPTIONS.MEDIA_IMAGE, SEARCH_OPTIONS.MEDIA_APPLICATION].reduce((acc, currentOption) => options[currentOption] ? `${acc}${currentOption},` : acc, '')}`);
    }
  }

  return queryParams.join('&');
};

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

const channelNameMinLength = 1;
const claimIdMaxLength = 40;

// see https://spec.lbry.com/#urls
const regexInvalidURI = /[ =&#:$@%?\u{0000}-\u{0008}\u{000b}-\u{000c}\u{000e}-\u{001F}\u{D800}-\u{DFFF}\u{FFFE}-\u{FFFF}]/gu;
const regexAddress = /^(b|r)(?=[^0OIl]{32,33})[0-9A-Za-z]{32,33}$/;

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
function parseURI(URI, requireProto = false) {
  // Break into components. Empty sub-matches are converted to null
  const componentsRegex = new RegExp('^((?:lbry://)?)' + // protocol
  '([^:$#/]*)' + // claim name (stops at the first separator or end)
  '([:$#]?)([^/]*)' + // modifier separator, modifier (stops at the first path separator or end)
  '(/?)(.*)' // path separator, path
  );
  const [proto, claimName, modSep, modVal, pathSep, path] = componentsRegex.exec(URI).slice(1).map(match => match || null);

  let contentName;

  // Validate protocol
  if (requireProto && !proto) {
    throw new Error(__('LBRY URIs must include a protocol prefix (lbry://).'));
  }

  // Validate and process name
  if (!claimName) {
    throw new Error(__('URI does not include name.'));
  }

  const isChannel = claimName.startsWith('@');
  const channelName = isChannel ? claimName.slice(1) : claimName;

  if (isChannel) {
    if (!channelName) {
      throw new Error(__('No channel name after @.'));
    }

    if (channelName.length < channelNameMinLength) {
      throw new Error(__(`Channel names must be at least %s characters.`, channelNameMinLength));
    }

    contentName = path;
  }

  const nameBadChars = (channelName || claimName).match(regexInvalidURI);
  if (nameBadChars) {
    throw new Error(__(`Invalid character %s in name: %s.`, nameBadChars.length === 1 ? '' : 's', nameBadChars.join(', ')));
  }

  // Validate and process modifier (claim ID, bid position or claim sequence)
  let claimId;
  let claimSequence;
  let bidPosition;
  if (modSep) {
    if (!modVal) {
      throw new Error(__(`No modifier provided after separator %s.`, modSep));
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
    throw new Error(__(`Invalid claim ID %s.`, claimId));
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

    const pathBadChars = path.match(regexInvalidURI);
    if (pathBadChars) {
      throw new Error(__(`Invalid character in path: %s`, pathBadChars.join(', ')));
    }

    contentName = path;
  } else if (pathSep) {
    throw new Error(__('No path provided after /'));
  }

  return _extends({
    claimName,
    path,
    isChannel
  }, contentName ? { contentName } : {}, channelName ? { channelName } : {}, claimSequence ? { claimSequence: parseInt(claimSequence, 10) } : {}, bidPosition ? { bidPosition: parseInt(bidPosition, 10) } : {}, claimId ? { claimId } : {}, path ? { path } : {});
}

/**
 * Takes an object in the same format returned by parse() and builds a URI.
 *
 * The channelName key will accept names with or without the @ prefix.
 */
function buildURI(URIObj, includeProto = true, protoDefault = 'lbry://') {
  const { claimId, claimSequence, bidPosition, contentName, channelName } = URIObj;

  let { claimName, path } = URIObj;

  if (channelName) {
    const channelNameFormatted = channelName.startsWith('@') ? channelName : `@${channelName}`;
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

  return (includeProto ? protoDefault : '') + claimName + (claimId ? `#${claimId}` : '') + (claimSequence ? `:${claimSequence}` : '') + (bidPosition ? `${bidPosition}` : '') + (path ? `/${path}` : '');
}

/* Takes a parseable LBRY URI and converts it to standard, canonical format */
function normalizeURI(URI) {
  const { claimName, path, bidPosition, claimSequence, claimId } = parseURI(URI);
  return buildURI({ claimName, path, claimSequence, bidPosition, claimId });
}

function isURIValid(URI) {
  let parts;
  try {
    parts = parseURI(normalizeURI(URI));
  } catch (error) {
    return false;
  }
  return parts && parts.claimName;
}

function isNameValid(claimName) {
  return !regexInvalidURI.test(claimName);
}

function isURIClaimable(URI) {
  let parts;
  try {
    parts = parseURI(normalizeURI(URI));
  } catch (error) {
    return false;
  }
  return parts && parts.claimName && !parts.claimId && !parts.bidPosition && !parts.claimSequence && !parts.isChannel && !parts.path;
}

function convertToShareLink(URI) {
  const { claimName, path, bidPosition, claimSequence, claimId } = parseURI(URI);
  return buildURI({ claimName, path, claimSequence, bidPosition, claimId }, true, 'https://open.lbry.com/');
}

var _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

const selectState = state => state.search;

const selectSearchValue = reselect.createSelector(selectState, state => state.searchQuery);

const selectSearchOptions = reselect.createSelector(selectState, state => state.options);

const selectSuggestions = reselect.createSelector(selectState, state => state.suggestions);

const selectIsSearching = reselect.createSelector(selectState, state => state.searching);

const selectSearchUrisByQuery = reselect.createSelector(selectState, state => state.urisByQuery);

const makeSelectSearchUris = query =>
// replace statement below is kind of ugly, and repeated in doSearch action
reselect.createSelector(selectSearchUrisByQuery, byQuery => byQuery[query ? query.replace(/^lbry:\/\//i, '').replace(/\//, ' ') : query]);

const selectSearchBarFocused = reselect.createSelector(selectState, state => state.focused);

const selectSearchSuggestions = reselect.createSelector(selectSearchValue, selectSuggestions, (query, suggestions) => {
  if (!query) {
    return [];
  }

  const queryIsPrefix = query === 'lbry:' || query === 'lbry:/' || query === 'lbry://' || query === 'lbry://@';

  if (queryIsPrefix) {
    // If it is a prefix, wait until something else comes to figure out what to do
    return [];
  } else if (query.startsWith('lbry://')) {
    // If it starts with a prefix, don't show any autocomplete results
    // They are probably typing/pasting in a lbry uri
    return [{
      value: query,
      type: query[7] === '@' ? SEARCH_TYPES.CHANNEL : SEARCH_TYPES.FILE
    }];
  }

  let searchSuggestions = [];
  try {
    const uri = normalizeURI(query);
    const { claimName, isChannel } = parseURI(uri);
    searchSuggestions.push({
      value: claimName,
      type: SEARCH_TYPES.SEARCH
    }, {
      value: uri,
      shorthand: isChannel ? claimName.slice(1) : claimName,
      type: isChannel ? SEARCH_TYPES.CHANNEL : SEARCH_TYPES.FILE
    });
  } catch (e) {
    searchSuggestions.push({
      value: query,
      type: SEARCH_TYPES.SEARCH
    });
  }

  searchSuggestions.push({
    value: query,
    type: SEARCH_TYPES.TAG
  });

  const apiSuggestions = suggestions[query] || [];
  if (apiSuggestions.length) {
    searchSuggestions = searchSuggestions.concat(apiSuggestions.filter(suggestion => suggestion !== query).map(suggestion => {
      // determine if it's a channel
      try {
        const uri = normalizeURI(suggestion);
        const { claimName, isChannel } = parseURI(uri);

        return {
          value: uri,
          shorthand: isChannel ? claimName.slice(1) : claimName,
          type: isChannel ? SEARCH_TYPES.CHANNEL : SEARCH_TYPES.FILE
        };
      } catch (e) {
        // search result includes some character that isn't valid in claim names
        return {
          value: suggestion,
          type: SEARCH_TYPES.SEARCH
        };
      }
    }));
  }

  return searchSuggestions;
});

// Creates a query string based on the state in the search reducer
// Can be overrided by passing in custom sizes/from values for other areas pagination
const makeSelectQueryWithOptions = (customQuery, customSize, customFrom, isBackgroundSearch = false // If it's a background search, don't use the users settings
) => reselect.createSelector(selectSearchValue, selectSearchOptions, (query, options) => {
  const size = customSize || options[SEARCH_OPTIONS.RESULT_COUNT];

  const queryString = getSearchQueryString(customQuery || query, _extends$1({}, options, { size, from: customFrom }), !isBackgroundSearch);

  return queryString;
});

//      

function doToast(params) {
  if (!params) {
    throw Error("'params' object is required to create a toast notification");
  }

  return {
    type: CREATE_TOAST,
    data: {
      id: uuid(),
      params
    }
  };
}

function doDismissToast() {
  return {
    type: DISMISS_TOAST
  };
}

function doError(error) {
  return {
    type: CREATE_ERROR,
    data: {
      error
    }
  };
}

function doDismissError() {
  return {
    type: DISMISS_ERROR
  };
}

var _extends$2 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

const matureTagMap = MATURE_TAGS.reduce((acc, tag) => _extends$2({}, acc, { [tag]: true }), {});

const isClaimNsfw = claim => {
  if (!claim) {
    throw new Error('No claim passed to isClaimNsfw()');
  }

  if (!claim.value) {
    return false;
  }

  const tags = claim.value.tags || [];
  for (let i = 0; i < tags.length; i += 1) {
    const tag = tags[i].toLowerCase();
    if (matureTagMap[tag]) {
      return true;
    }
  }

  return false;
};

//      

const selectState$1 = state => state.claims || {};

const selectClaimsById = reselect.createSelector(selectState$1, state => state.byId || {});

const selectCurrentChannelPage = reselect.createSelector(selectState$1, state => state.currentChannelPage || 1);

const selectClaimsByUri = reselect.createSelector(selectState$1, selectClaimsById, (state, byId) => {
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
});

const selectAllClaimsByChannel = reselect.createSelector(selectState$1, state => state.claimsByChannel || {});

const selectPendingById = reselect.createSelector(selectState$1, state => state.pendingById || {});

const selectPendingClaims = reselect.createSelector(selectState$1, state => Object.values(state.pendingById || []));

const makeSelectClaimIsPending = uri => reselect.createSelector(selectPendingById, pendingById => {
  let claimId;
  try {
    ({ claimId } = parseURI(uri));
  } catch (e) {}

  if (claimId) {
    return Boolean(pendingById[claimId]);
  }
});

const makeSelectPendingByUri = uri => reselect.createSelector(selectPendingById, pendingById => {
  const { claimId } = parseURI(uri);
  return pendingById[claimId];
});

const makeSelectClaimForUri = uri => reselect.createSelector(selectClaimsByUri, selectPendingById, (byUri, pendingById) => {
  // Check if a claim is pending first
  // It won't be in claimsByUri because resolving it will return nothing

  let valid;
  let claimId;
  try {
    ({ claimId } = parseURI(uri));
    valid = true;
  } catch (e) {}

  if (valid) {
    const pendingClaim = pendingById[claimId];

    if (pendingClaim) {
      return pendingClaim;
    }

    return byUri && byUri[normalizeURI(uri)];
  }
});

const selectMyClaimsRaw = reselect.createSelector(selectState$1, state => state.myClaims);

const selectAbandoningIds = reselect.createSelector(selectState$1, state => Object.keys(state.abandoningById || {}));

const selectMyActiveClaims = reselect.createSelector(selectMyClaimsRaw, selectAbandoningIds, (claims, abandoningIds) => new Set(claims && claims.map(claim => claim.claim_id).filter(claimId => Object.keys(abandoningIds).indexOf(claimId) === -1)));

const makeSelectClaimIsMine = rawUri => {
  let uri;
  try {
    uri = normalizeURI(rawUri);
  } catch (e) {}

  return reselect.createSelector(selectClaimsByUri, selectMyActiveClaims, (claims, myClaims) => {
    try {
      parseURI(uri);
    } catch (e) {
      return false;
    }

    return claims && claims[uri] && claims[uri].claim_id && myClaims.has(claims[uri].claim_id);
  });
};

const selectAllFetchingChannelClaims = reselect.createSelector(selectState$1, state => state.fetchingChannelClaims || {});

const makeSelectFetchingChannelClaims = uri => reselect.createSelector(selectAllFetchingChannelClaims, fetching => fetching && fetching[uri]);

const makeSelectClaimsInChannelForPage = (uri, page) => reselect.createSelector(selectClaimsById, selectAllClaimsByChannel, (byId, allClaims) => {
  const byChannel = allClaims[uri] || {};
  const claimIds = byChannel[page || 1];

  if (!claimIds) return claimIds;

  return claimIds.map(claimId => byId[claimId]);
});

const makeSelectClaimsInChannelForCurrentPageState = uri => reselect.createSelector(selectClaimsById, selectAllClaimsByChannel, selectCurrentChannelPage, (byId, allClaims, page) => {
  const byChannel = allClaims[uri] || {};
  const claimIds = byChannel[page || 1];

  if (!claimIds) return claimIds;

  return claimIds.map(claimId => byId[claimId]);
});

const makeSelectMetadataForUri = uri => reselect.createSelector(makeSelectClaimForUri(uri), claim => {
  const metadata = claim && claim.value;
  return metadata || (claim === undefined ? undefined : null);
});

const makeSelectMetadataItemForUri = (uri, key) => reselect.createSelector(makeSelectMetadataForUri(uri), metadata => {
  return metadata ? metadata[key] : undefined;
});

const makeSelectTitleForUri = uri => reselect.createSelector(makeSelectMetadataForUri(uri), metadata => metadata && metadata.title);

const makeSelectDateForUri = uri => reselect.createSelector(makeSelectClaimForUri(uri), claim => {
  const timestamp = claim && claim.value && (claim.value.release_time ? claim.value.release_time * 1000 : claim.meta.creation_timestamp ? claim.meta.creation_timestamp * 1000 : null);
  if (!timestamp) {
    return undefined;
  }
  const dateObj = new Date(timestamp);
  return dateObj;
});

const makeSelectAmountForUri = uri => reselect.createSelector(makeSelectClaimForUri(uri), claim => {
  return claim && claim.amount;
});

const makeSelectContentTypeForUri = uri => reselect.createSelector(makeSelectClaimForUri(uri), claim => {
  const source = claim && claim.value && claim.value.source;
  return source ? source.media_type : undefined;
});

const makeSelectThumbnailForUri = uri => reselect.createSelector(makeSelectClaimForUri(uri), claim => {
  const thumbnail = claim && claim.value && claim.value.thumbnail;
  return thumbnail ? thumbnail.url : undefined;
});

const makeSelectCoverForUri = uri => reselect.createSelector(makeSelectClaimForUri(uri), claim => {
  const cover = claim && claim.value && claim.value.cover;
  return cover ? cover.url : undefined;
});

const selectIsFetchingClaimListMine = reselect.createSelector(selectState$1, state => state.isFetchingClaimListMine);

const selectMyClaims = reselect.createSelector(selectMyActiveClaims, selectClaimsById, selectAbandoningIds, selectPendingClaims, (myClaimIds, byId, abandoningIds, pendingClaims) => {
  const claims = [];

  myClaimIds.forEach(id => {
    const claim = byId[id];

    if (claim && abandoningIds.indexOf(id) === -1) claims.push(claim);
  });

  return [...claims, ...pendingClaims];
});

const selectMyClaimsWithoutChannels = reselect.createSelector(selectMyClaims, myClaims => myClaims.filter(claim => !claim.name.match(/^@/)).sort((a, b) => a.timestamp - b.timestamp));

const selectMyClaimUrisWithoutChannels = reselect.createSelector(selectMyClaimsWithoutChannels, myClaims => myClaims.sort((a, b) => {
  if (!a.timestamp) {
    return -1;
  } else if (!b.timestamp) {
    return 1;
  } else {
    return b.timestamp - a.timestamp;
  }
}).map(claim => `lbry://${claim.name}#${claim.claim_id}`));

const selectAllMyClaimsByOutpoint = reselect.createSelector(selectMyClaimsRaw, claims => new Set(claims && claims.length ? claims.map(claim => `${claim.txid}:${claim.nout}`) : null));

const selectMyClaimsOutpoints = reselect.createSelector(selectMyClaims, myClaims => {
  const outpoints = [];

  myClaims.forEach(claim => outpoints.push(`${claim.txid}:${claim.nout}`));

  return outpoints;
});

const selectFetchingMyChannels = reselect.createSelector(selectState$1, state => state.fetchingMyChannels);

const selectMyChannelClaims = reselect.createSelector(selectState$1, selectClaimsById, (state, byId) => {
  const ids = state.myChannelClaims || [];
  const claims = [];

  ids.forEach(id => {
    if (byId[id]) {
      // I'm not sure why this check is necessary, but it ought to be a quick fix for https://github.com/lbryio/lbry-desktop/issues/544
      claims.push(byId[id]);
    }
  });

  return claims;
});

const selectResolvingUris = reselect.createSelector(selectState$1, state => state.resolvingUris || []);

const makeSelectIsUriResolving = uri => reselect.createSelector(selectResolvingUris, resolvingUris => resolvingUris && resolvingUris.indexOf(uri) !== -1);

const selectPlayingUri = reselect.createSelector(selectState$1, state => state.playingUri);

const selectChannelClaimCounts = reselect.createSelector(selectState$1, state => state.channelClaimCounts || {});

const makeSelectTotalItemsForChannel = uri => reselect.createSelector(selectChannelClaimCounts, byUri => byUri && byUri[uri]);

const makeSelectTotalPagesForChannel = (uri, pageSize = 10) => reselect.createSelector(selectChannelClaimCounts, byUri => byUri && byUri[uri] && Math.ceil(byUri[uri] / pageSize));

const makeSelectNsfwCountFromUris = uris => reselect.createSelector(selectClaimsByUri, claims => uris.reduce((acc, uri) => {
  const claim = claims[uri];
  if (claim && isClaimNsfw(claim)) {
    return acc + 1;
  }
  return acc;
}, 0));

const makeSelectNsfwCountForChannel = uri => reselect.createSelector(selectClaimsById, selectAllClaimsByChannel, selectCurrentChannelPage, (byId, allClaims, page) => {
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
});

const makeSelectClaimIsNsfw = uri => reselect.createSelector(makeSelectClaimForUri(uri),
// Eventually these will come from some list of tags that are considered adult
// Or possibly come from users settings of what tags they want to hide
// For now, there is just a hard coded list of tags inside `isClaimNsfw`
// selectNaughtyTags(),
claim => {
  if (!claim) {
    return false;
  }

  return isClaimNsfw(claim);
});

const makeSelectRecommendedContentForUri = uri => reselect.createSelector(makeSelectClaimForUri(uri), selectSearchUrisByQuery, (claim, searchUrisByQuery) => {
  const atVanityURI = !uri.includes('#');

  let recommendedContent;
  if (claim) {
    // If we are at a vanity uri, build the full uri so we can properly filter
    const currentUri = atVanityURI ? buildURI({ claimId: claim.claim_id, claimName: claim.name }) : uri;

    const { title } = claim.value;

    const searchQuery = getSearchQueryString(title.replace(/\//, ' '));

    let searchUris = searchUrisByQuery[searchQuery];
    if (searchUris) {
      searchUris = searchUris.filter(searchUri => searchUri !== currentUri);
      recommendedContent = searchUris;
    }
  }

  return recommendedContent;
});

const makeSelectFirstRecommendedFileForUri = uri => reselect.createSelector(makeSelectRecommendedContentForUri(uri), recommendedContent => recommendedContent ? recommendedContent[0] : null);

// Returns the associated channel uri for a given claim uri
// accepts a regular claim uri lbry://something
// returns the channel uri that created this claim lbry://@channel
const makeSelectChannelForClaimUri = (uri, includePrefix = false) => reselect.createSelector(makeSelectClaimForUri(uri), claim => {
  if (!claim || !claim.signing_channel) {
    return null;
  }

  const { claim_id: claimId, name } = claim.signing_channel;
  let channel = `${name}#${claimId}`;
  return includePrefix ? `lbry://${channel}` : channel;
});

const makeSelectTagsForUri = uri => reselect.createSelector(makeSelectMetadataForUri(uri), metadata => {
  return metadata && metadata.tags || [];
});

const selectFetchingClaimSearch = reselect.createSelector(selectState$1, state => state.fetchingClaimSearch);

const selectClaimSearchByQuery = reselect.createSelector(selectState$1, state => state.claimSearchSearchByQuery || {});

const makeSelectShortUrlForUri = uri => reselect.createSelector(makeSelectClaimForUri(uri), claim => claim && claim.short_url);

const selectState$2 = state => state.wallet || {};

const selectWalletState = selectState$2;

const selectWalletIsEncrypted = reselect.createSelector(selectState$2, state => state.walletIsEncrypted);

const selectWalletEncryptPending = reselect.createSelector(selectState$2, state => state.walletEncryptPending);

const selectWalletEncryptSucceeded = reselect.createSelector(selectState$2, state => state.walletEncryptSucceded);

const selectWalletEncryptResult = reselect.createSelector(selectState$2, state => state.walletEncryptResult);

const selectWalletDecryptPending = reselect.createSelector(selectState$2, state => state.walletDecryptPending);

const selectWalletDecryptSucceeded = reselect.createSelector(selectState$2, state => state.walletDecryptSucceded);

const selectWalletDecryptResult = reselect.createSelector(selectState$2, state => state.walletDecryptResult);

const selectWalletUnlockPending = reselect.createSelector(selectState$2, state => state.walletUnlockPending);

const selectWalletUnlockSucceeded = reselect.createSelector(selectState$2, state => state.walletUnlockSucceded);

const selectWalletUnlockResult = reselect.createSelector(selectState$2, state => state.walletUnlockResult);

const selectWalletLockPending = reselect.createSelector(selectState$2, state => state.walletLockPending);

const selectWalletLockSucceeded = reselect.createSelector(selectState$2, state => state.walletLockSucceded);

const selectWalletLockResult = reselect.createSelector(selectState$2, state => state.walletLockResult);

const selectBalance = reselect.createSelector(selectState$2, state => state.balance);

const selectTotalBalance = reselect.createSelector(selectState$2, state => state.totalBalance);

const selectTransactionsById = reselect.createSelector(selectState$2, state => state.transactions || {});

const selectSupportsByOutpoint = reselect.createSelector(selectState$2, state => state.supports || {});

const selectTransactionItems = reselect.createSelector(selectTransactionsById, byId => {
  const items = [];

  Object.keys(byId).forEach(txid => {
    const tx = byId[txid];

    // ignore dust/fees
    // it is fee only txn if all infos are also empty
    if (Math.abs(tx.value) === Math.abs(tx.fee) && tx.claim_info.length === 0 && tx.support_info.length === 0 && tx.update_info.length === 0 && tx.abandon_info.length === 0) {
      return;
    }

    const append = [];

    append.push(...tx.claim_info.map(item => Object.assign({}, tx, item, {
      type: item.claim_name[0] === '@' ? CHANNEL$1 : PUBLISH$1
    })));
    append.push(...tx.support_info.map(item => Object.assign({}, tx, item, {
      type: !item.is_tip ? SUPPORT : TIP
    })));
    append.push(...tx.update_info.map(item => Object.assign({}, tx, item, { type: UPDATE })));
    append.push(...tx.abandon_info.map(item => Object.assign({}, tx, item, { type: ABANDON })));

    if (!append.length) {
      append.push(Object.assign({}, tx, {
        type: tx.value < 0 ? SPEND : RECEIVE
      }));
    }

    items.push(...append.map(item => {
      // value on transaction, amount on outpoint
      // amount is always positive, but should match sign of value
      const balanceDelta = parseFloat(item.balance_delta);
      const value = parseFloat(item.value);
      const amount = balanceDelta || value;
      const fee = parseFloat(tx.fee);

      return {
        txid,
        timestamp: tx.timestamp,
        date: tx.timestamp ? new Date(Number(tx.timestamp) * 1000) : null,
        amount,
        fee,
        claim_id: item.claim_id,
        claim_name: item.claim_name,
        type: item.type || SPEND,
        nout: item.nout,
        confirmations: tx.confirmations
      };
    }));
  });

  return items.sort((tx1, tx2) => {
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

const selectRecentTransactions = reselect.createSelector(selectTransactionItems, transactions => {
  const threshold = new Date();
  threshold.setDate(threshold.getDate() - 7);
  return transactions.filter(transaction => {
    if (!transaction.date) {
      return true; // pending transaction
    }

    return transaction.date > threshold;
  });
});

const selectHasTransactions = reselect.createSelector(selectTransactionItems, transactions => transactions && transactions.length > 0);

const selectIsFetchingTransactions = reselect.createSelector(selectState$2, state => state.fetchingTransactions);

const selectIsSendingSupport = reselect.createSelector(selectState$2, state => state.sendingSupport);

const selectReceiveAddress = reselect.createSelector(selectState$2, state => state.receiveAddress);

const selectGettingNewAddress = reselect.createSelector(selectState$2, state => state.gettingNewAddress);

const selectDraftTransaction = reselect.createSelector(selectState$2, state => state.draftTransaction || {});

const selectDraftTransactionAmount = reselect.createSelector(selectDraftTransaction, draft => draft.amount);

const selectDraftTransactionAddress = reselect.createSelector(selectDraftTransaction, draft => draft.address);

const selectDraftTransactionError = reselect.createSelector(selectDraftTransaction, draft => draft.error);

const selectBlocks = reselect.createSelector(selectState$2, state => state.blocks);

const selectCurrentHeight = reselect.createSelector(selectState$2, state => state.latestBlock);

const selectTransactionListFilter = reselect.createSelector(selectState$2, state => state.transactionListFilter || '');

function formatCredits(amount, precision) {
  if (Number.isNaN(parseFloat(amount))) return '0';
  return parseFloat(amount).toFixed(precision || 1).replace(/\.?0+$/, '');
}

function formatFullPrice(amount, precision = 1) {
  let formated = '';

  const quantity = amount.toString().split('.');
  const fraction = quantity[1];

  if (fraction) {
    const decimals = fraction.split('');
    const first = decimals.filter(number => number !== '0')[0];
    const index = decimals.indexOf(first);

    // Set format fraction
    formated = `.${fraction.substring(0, index + precision)}`;
  }

  return parseFloat(quantity[0] + formated);
}

function creditsToString(amount) {
  const creditString = parseFloat(amount).toFixed(8);
  return creditString;
}

function doUpdateBalance() {
  return (dispatch, getState) => {
    const {
      wallet: { balance: balanceInStore }
    } = getState();
    lbryProxy.account_balance().then(balanceAsString => {
      const balance = parseFloat(balanceAsString);
      if (balanceInStore !== balance) {
        dispatch({
          type: UPDATE_BALANCE,
          data: {
            balance
          }
        });
      }
    });
  };
}

function doUpdateTotalBalance() {
  return (dispatch, getState) => {
    const {
      wallet: { totalBalance: totalBalanceInStore }
    } = getState();
    lbryProxy.account_list().then(accountList => {
      const { lbc_mainnet: accounts } = accountList;
      const totalSatoshis = accounts.length === 1 ? accounts[0].satoshis : accounts.reduce((a, b) => a.satoshis + b.satoshis);
      const totalBalance = (Number.isNaN(totalSatoshis) ? 0 : totalSatoshis) / Math.pow(10, 8);
      if (totalBalanceInStore !== totalBalance) {
        dispatch({
          type: UPDATE_TOTAL_BALANCE,
          data: {
            totalBalance
          }
        });
      }
    });
  };
}

function doBalanceSubscribe() {
  return dispatch => {
    dispatch(doUpdateBalance());
    setInterval(() => dispatch(doUpdateBalance()), 5000);
  };
}

function doTotalBalanceSubscribe() {
  return dispatch => {
    dispatch(doUpdateTotalBalance());
    setInterval(() => dispatch(doUpdateTotalBalance()), 5000);
  };
}

function doFetchTransactions() {
  return dispatch => {
    dispatch(doFetchSupports());
    dispatch({
      type: FETCH_TRANSACTIONS_STARTED
    });

    lbryProxy.utxo_release().then(() => lbryProxy.transaction_list()).then(results => {
      dispatch({
        type: FETCH_TRANSACTIONS_COMPLETED,
        data: {
          transactions: results
        }
      });
    });
  };
}

function doFetchSupports() {
  return dispatch => {
    dispatch({
      type: FETCH_SUPPORTS_STARTED
    });

    lbryProxy.support_list().then(results => {
      dispatch({
        type: FETCH_SUPPORTS_COMPLETED,
        data: {
          supports: results
        }
      });
    });
  };
}

function doGetNewAddress() {
  return dispatch => {
    dispatch({
      type: GET_NEW_ADDRESS_STARTED
    });

    lbryProxy.address_unused().then(address => {
      dispatch({
        type: GET_NEW_ADDRESS_COMPLETED,
        data: { address }
      });
    });
  };
}

function doCheckAddressIsMine(address) {
  return dispatch => {
    dispatch({
      type: CHECK_ADDRESS_IS_MINE_STARTED
    });

    lbryProxy.address_is_mine({ address }).then(isMine => {
      if (!isMine) dispatch(doGetNewAddress());

      dispatch({
        type: CHECK_ADDRESS_IS_MINE_COMPLETED
      });
    });
  };
}

function doSendDraftTransaction(address, amount) {
  return (dispatch, getState) => {
    const state = getState();
    const balance = selectBalance(state);

    if (balance - amount <= 0) {
      dispatch(doToast({
        title: 'Insufficient credits',
        message: 'Insufficient credits'
      }));
      return;
    }

    dispatch({
      type: SEND_TRANSACTION_STARTED
    });

    const successCallback = response => {
      if (response.txid) {
        dispatch({
          type: SEND_TRANSACTION_COMPLETED
        });
        dispatch(doToast({
          message: `You sent ${amount} LBC`,
          linkText: 'History',
          linkTarget: '/wallet'
        }));
      } else {
        dispatch({
          type: SEND_TRANSACTION_FAILED,
          data: { error: response }
        });
        dispatch(doToast({
          message: 'Transaction failed',
          isError: true
        }));
      }
    };

    const errorCallback = error => {
      dispatch({
        type: SEND_TRANSACTION_FAILED,
        data: { error: error.message }
      });
      dispatch(doToast({
        message: 'Transaction failed',
        isError: true
      }));
    };

    lbryProxy.account_send({
      addresses: [address],
      amount: creditsToString(amount)
    }).then(successCallback, errorCallback);
  };
}

function doSetDraftTransactionAmount(amount) {
  return {
    type: SET_DRAFT_TRANSACTION_AMOUNT,
    data: { amount }
  };
}

function doSetDraftTransactionAddress(address) {
  return {
    type: SET_DRAFT_TRANSACTION_ADDRESS,
    data: { address }
  };
}

function doSendTip(amount, claimId, successCallback, errorCallback) {
  return (dispatch, getState) => {
    const state = getState();
    const balance = selectBalance(state);
    const myClaims = selectMyClaimsRaw(state);

    const isSupport = myClaims.find(claim => claim.claim_id === claimId);

    if (balance - amount <= 0) {
      dispatch(doToast({
        message: 'Insufficient credits',
        isError: true
      }));
      return;
    }

    const success = () => {
      dispatch(doToast({
        message: isSupport ? __(`You deposited ${amount} LBC as a support!`) : __(`You sent ${amount} LBC as a tip, Mahalo!`),
        linkText: __('History'),
        linkTarget: __('/wallet')
      }));

      dispatch({
        type: SUPPORT_TRANSACTION_COMPLETED
      });

      if (successCallback) {
        successCallback();
      }
    };

    const error = err => {
      dispatch(doToast({
        message: __(`There was an error sending support funds.`),
        isError: true
      }));

      dispatch({
        type: SUPPORT_TRANSACTION_FAILED,
        data: {
          error: err
        }
      });

      if (errorCallback) {
        errorCallback();
      }
    };

    dispatch({
      type: SUPPORT_TRANSACTION_STARTED
    });

    lbryProxy.support_create({
      claim_id: claimId,
      amount: creditsToString(amount),
      tip: isSupport ? false : true
    }).then(success, error);
  };
}

function doWalletEncrypt(newPassword) {
  return dispatch => {
    dispatch({
      type: WALLET_ENCRYPT_START
    });

    lbryProxy.account_encrypt({ new_password: newPassword }).then(result => {
      if (result === true) {
        dispatch({
          type: WALLET_ENCRYPT_COMPLETED,
          result
        });
      } else {
        dispatch({
          type: WALLET_ENCRYPT_FAILED,
          result
        });
      }
    });
  };
}

function doWalletUnlock(password) {
  return dispatch => {
    dispatch({
      type: WALLET_UNLOCK_START
    });

    lbryProxy.account_unlock({ password }).then(result => {
      if (result === true) {
        dispatch({
          type: WALLET_UNLOCK_COMPLETED,
          result
        });
      } else {
        dispatch({
          type: WALLET_UNLOCK_FAILED,
          result
        });
      }
    });
  };
}

function doWalletDecrypt() {
  return dispatch => {
    dispatch({
      type: WALLET_DECRYPT_START
    });

    lbryProxy.account_decrypt().then(result => {
      if (result === true) {
        dispatch({
          type: WALLET_DECRYPT_COMPLETED,
          result
        });
      } else {
        dispatch({
          type: WALLET_DECRYPT_FAILED,
          result
        });
      }
    });
  };
}

function doWalletStatus() {
  return dispatch => {
    dispatch({
      type: WALLET_STATUS_START
    });

    lbryProxy.status().then(status => {
      if (status && status.wallet) {
        dispatch({
          type: WALLET_STATUS_COMPLETED,
          result: status.wallet.is_encrypted
        });
      }
    });
  };
}

function doSetTransactionListFilter(filterOption) {
  return {
    type: SET_TRANSACTION_LIST_FILTER,
    data: filterOption
  };
}

function doUpdateBlockHeight() {
  return dispatch => lbryProxy.status().then(status => {
    if (status.wallet) {
      dispatch({
        type: UPDATE_CURRENT_HEIGHT,
        data: status.wallet.blocks
      });
    }
  });
}

// https://github.com/reactjs/redux/issues/911
function batchActions(...actions) {
  return {
    type: 'BATCH_ACTIONS',
    actions
  };
}

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

//      
function buildClaimSearchCacheQuery(options) {
  // Ignore page because we don't care what the last page searched was, we want everything
  // Ignore release_time because that will change depending on when you call claim_search ex: release_time: ">12344567"
  const rest = _objectWithoutProperties(options, ["page", "release_time"]);
  const query = JSON.stringify(rest);
  return query;
}

var _extends$3 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function doResolveUris(uris, returnCachedClaims = false) {
  return (dispatch, getState) => {
    const normalizedUris = uris.map(normalizeURI);
    const state = getState();

    const resolvingUris = selectResolvingUris(state);
    const claimsByUri = selectClaimsByUri(state);
    const urisToResolve = normalizedUris.filter(uri => {
      if (resolvingUris.includes(uri)) {
        return false;
      }

      return returnCachedClaims ? !claimsByUri[uri] : true;
    });

    if (urisToResolve.length === 0) {
      return;
    }

    dispatch({
      type: RESOLVE_URIS_STARTED,
      data: { uris: normalizedUris }
    });

    const resolveInfo = {};

    lbryProxy.resolve({ urls: urisToResolve }).then(result => {
      Object.entries(result).forEach(([uri, uriResolveInfo]) => {
        const fallbackResolveInfo = {
          stream: null,
          claimsInChannel: null,
          channel: null
        };

        // Flow has terrible Object.entries support
        // https://github.com/facebook/flow/issues/2221
        if (uriResolveInfo) {
          if (uriResolveInfo.error) {
            resolveInfo[uri] = _extends$3({}, fallbackResolveInfo);
          } else {
            let result = {};
            if (uriResolveInfo.value_type === 'channel') {
              result.channel = uriResolveInfo;
              // $FlowFixMe
              result.claimsInChannel = uriResolveInfo.meta.claims_in_channel;
            } else {
              result.stream = uriResolveInfo;
              if (uriResolveInfo.signing_channel) {
                result.channel = uriResolveInfo.signing_channel;
                result.claimsInChannel = uriResolveInfo.signing_channel.meta && uriResolveInfo.signing_channel.meta.claims_in_channel || 0;
              }
            }
            // $FlowFixMe
            resolveInfo[uri] = result;
          }
        }
      });

      dispatch({
        type: RESOLVE_URIS_COMPLETED,
        data: { resolveInfo }
      });
    });
  };
}

function doResolveUri(uri) {
  return doResolveUris([uri]);
}

function doFetchClaimListMine() {
  return dispatch => {
    dispatch({
      type: FETCH_CLAIM_LIST_MINE_STARTED
    });

    lbryProxy.claim_list().then(claims => {
      dispatch({
        type: FETCH_CLAIM_LIST_MINE_COMPLETED,
        data: {
          claims
        }
      });
    });
  };
}

function doAbandonClaim(txid, nout) {
  const outpoint = `${txid}:${nout}`;

  return (dispatch, getState) => {
    const state = getState();
    const myClaims = selectMyClaimsRaw(state);
    const mySupports = selectSupportsByOutpoint(state);

    // A user could be trying to abandon a support or one of their claims
    const claimToAbandon = myClaims.find(claim => claim.txid === txid && claim.nout === nout);
    const supportToAbandon = mySupports[outpoint];

    if (!claimToAbandon && !supportToAbandon) {
      console.error('No associated support or claim with txid: ', txid);
      return;
    }

    const data = claimToAbandon ? { claimId: claimToAbandon.claim_id } : { outpoint: `${supportToAbandon.txid}:${supportToAbandon.nout}` };

    const isClaim = !!claimToAbandon;
    const startedActionType = isClaim ? ABANDON_CLAIM_STARTED : ABANDON_SUPPORT_STARTED;
    const completedActionType = isClaim ? ABANDON_CLAIM_STARTED : ABANDON_SUPPORT_COMPLETED;

    dispatch({
      type: startedActionType,
      data
    });

    const errorCallback = () => {
      dispatch(doToast({
        message: isClaim ? 'Error abandoning your claim/support' : 'Error unlocking your tip',
        isError: true
      }));
    };

    const successCallback = () => {
      dispatch({
        type: completedActionType,
        data
      });

      let abandonMessage;
      if (isClaim) {
        abandonMessage = 'Successfully abandoned your claim.';
      } else if (supportToAbandon) {
        abandonMessage = 'Successfully abandoned your support.';
      } else {
        abandonMessage = 'Successfully unlocked your tip!';
      }

      dispatch(doToast({
        message: abandonMessage
      }));

      // After abandoning, call claim_list to show the claim as abandoned
      // Also fetch transactions to show the new abandon transaction
      if (isClaim) dispatch(doFetchClaimListMine());
      dispatch(doFetchTransactions());
    };

    const abandonParams = {
      txid,
      nout,
      blocking: true
    };

    let method;
    if (supportToAbandon) {
      method = 'support_abandon';
    } else if (claimToAbandon) {
      const { name: claimName } = claimToAbandon;
      method = claimName.startsWith('@') ? 'channel_abandon' : 'stream_abandon';
    }

    if (!method) {
      console.error('No "method" chosen for claim or support abandon');
      return;
    }

    lbryProxy[method](abandonParams).then(successCallback, errorCallback);
  };
}

function doFetchClaimsByChannel(uri, page = 1) {
  return dispatch => {
    dispatch({
      type: FETCH_CHANNEL_CLAIMS_STARTED,
      data: { uri, page }
    });

    lbryProxy.claim_search({
      channel: uri,
      valid_channel_signature: true,
      page: page || 1,
      order_by: ['release_time']
    }).then(result => {
      const { items: claimsInChannel, page: returnedPage } = result;

      dispatch({
        type: FETCH_CHANNEL_CLAIMS_COMPLETED,
        data: {
          uri,
          claims: claimsInChannel || [],
          page: returnedPage || undefined
        }
      });
    });
  };
}

function doCreateChannel(name, amount) {
  return dispatch => {
    dispatch({
      type: CREATE_CHANNEL_STARTED
    });

    return lbryProxy.channel_create({
      name,
      bid: creditsToString(amount)
    })
    // outputs[0] is the certificate
    // outputs[1] is the change from the tx, not in the app currently
    .then(result => {
      const channelClaim = result.outputs[0];
      dispatch({
        type: CREATE_CHANNEL_COMPLETED,
        data: { channelClaim }
      });
    }).catch(error => {
      dispatch({
        type: CREATE_CHANNEL_FAILED,
        data: error
      });
    });
  };
}

function doUpdateChannel(params) {
  return dispatch => {
    dispatch({
      type: UPDATE_CHANNEL_STARTED
    });
    const updateParams = {
      claim_id: params.claim_id,
      bid: creditsToString(params.amount),
      title: params.title,
      cover_url: params.cover,
      thumbnail_url: params.thumbnail,
      description: params.description,
      website_url: params.website,
      email: params.email,
      replace: true,
      tags: []
    };

    if (params.tags) {
      updateParams.tags = params.tags.map(tag => tag.name);
    }

    // TODO add languages and locations as above

    return lbryProxy.channel_update(updateParams).then(result => {
      const channelClaim = result.outputs[0];
      dispatch({
        type: UPDATE_CHANNEL_COMPLETED,
        data: { channelClaim }
      });
    }).catch(error => {
      dispatch({
        type: UPDATE_CHANNEL_FAILED,
        data: error
      });
    });
  };
}

function doFetchChannelListMine() {
  return dispatch => {
    dispatch({
      type: FETCH_CHANNEL_LIST_STARTED
    });

    const callback = channels => {
      dispatch({
        type: FETCH_CHANNEL_LIST_COMPLETED,
        data: { claims: channels }
      });
    };

    lbryProxy.channel_list().then(callback);
  };
}

function doClaimSearch(options = {}) {
  const query = buildClaimSearchCacheQuery(options);

  return dispatch => {
    dispatch({
      type: CLAIM_SEARCH_STARTED
    });

    const success = data => {
      const resolveInfo = {};
      const uris = [];
      data.items.forEach(stream => {
        resolveInfo[stream.permanent_url] = { stream };
        uris.push(stream.permanent_url);
      });

      dispatch({
        type: CLAIM_SEARCH_COMPLETED,
        data: { resolveInfo, uris, query, append: options.page && options.page !== 1 }
      });
    };

    const failure = err => {
      dispatch({
        type: CLAIM_SEARCH_FAILED,
        error: err
      });
    };

    lbryProxy.claim_search(_extends$3({}, options)).then(success, failure);
  };
}

const selectState$3 = state => state.fileInfo || {};

const selectFileInfosByOutpoint = reselect.createSelector(selectState$3, state => state.byOutpoint || {});

const selectIsFetchingFileList = reselect.createSelector(selectState$3, state => state.isFetchingFileList);

const selectIsFetchingFileListDownloadedOrPublished = reselect.createSelector(selectIsFetchingFileList, selectIsFetchingClaimListMine, (isFetchingFileList, isFetchingClaimListMine) => isFetchingFileList || isFetchingClaimListMine);

const makeSelectFileInfoForUri = uri => reselect.createSelector(selectClaimsByUri, selectFileInfosByOutpoint, (claims, byOutpoint) => {
  const claim = claims[uri];
  const outpoint = claim ? `${claim.txid}:${claim.nout}` : undefined;
  return outpoint ? byOutpoint[outpoint] : undefined;
});

const selectDownloadingByOutpoint = reselect.createSelector(selectState$3, state => state.downloadingByOutpoint || {});

const makeSelectDownloadingForUri = uri => reselect.createSelector(selectDownloadingByOutpoint, makeSelectFileInfoForUri(uri), (byOutpoint, fileInfo) => {
  if (!fileInfo) return false;
  return byOutpoint[fileInfo.outpoint];
});

const selectUrisLoading = reselect.createSelector(selectState$3, state => state.urisLoading || {});

const makeSelectLoadingForUri = uri => reselect.createSelector(selectUrisLoading, byUri => byUri && byUri[uri]);

const selectFileInfosDownloaded = reselect.createSelector(selectFileInfosByOutpoint, selectMyClaims, (byOutpoint, myClaims) => Object.values(byOutpoint).filter(fileInfo => {
  const myClaimIds = myClaims.map(claim => claim.claim_id);

  return fileInfo && myClaimIds.indexOf(fileInfo.claim_id) === -1 && (fileInfo.completed || fileInfo.written_bytes);
}));

// export const selectFileInfoForUri = (state, props) => {
//   const claims = selectClaimsByUri(state),
//     claim = claims[props.uri],
//     fileInfos = selectAllFileInfos(state),
//     outpoint = claim ? `${claim.txid}:${claim.nout}` : undefined;

//   return outpoint && fileInfos ? fileInfos[outpoint] : undefined;
// };

const selectDownloadingFileInfos = reselect.createSelector(selectDownloadingByOutpoint, selectFileInfosByOutpoint, (downloadingByOutpoint, fileInfosByOutpoint) => {
  const outpoints = Object.keys(downloadingByOutpoint);
  const fileInfos = [];

  outpoints.forEach(outpoint => {
    const fileInfo = fileInfosByOutpoint[outpoint];

    if (fileInfo) fileInfos.push(fileInfo);
  });

  return fileInfos;
});

const selectTotalDownloadProgress = reselect.createSelector(selectDownloadingFileInfos, fileInfos => {
  const progress = [];

  fileInfos.forEach(fileInfo => {
    progress.push(fileInfo.written_bytes / fileInfo.total_bytes * 100);
  });

  const totalProgress = progress.reduce((a, b) => a + b, 0);

  if (fileInfos.length > 0) return totalProgress / fileInfos.length / 100.0;
  return -1;
});

const selectSearchDownloadUris = query => reselect.createSelector(selectFileInfosDownloaded, selectClaimsById, (fileInfos, claimsById) => {
  if (!query || !fileInfos.length) {
    return null;
  }

  const queryParts = query.toLowerCase().split(' ');
  const searchQueryDictionary = {};
  queryParts.forEach(subQuery => {
    searchQueryDictionary[subQuery] = subQuery;
  });

  const arrayContainsQueryPart = array => {
    for (let i = 0; i < array.length; i += 1) {
      const subQuery = array[i];
      if (searchQueryDictionary[subQuery]) {
        return true;
      }
    }
    return false;
  };

  const downloadResultsFromQuery = [];
  fileInfos.forEach(fileInfo => {
    const { channel_name: channelName, claim_name: claimName, metadata } = fileInfo;
    const { author, description, title } = metadata;

    if (channelName) {
      const lowerCaseChannel = channelName.toLowerCase();
      const strippedOutChannelName = lowerCaseChannel.slice(1); // trim off the @
      if (searchQueryDictionary[channelName] || searchQueryDictionary[strippedOutChannelName]) {
        downloadResultsFromQuery.push(fileInfo);
        return;
      }
    }

    const nameParts = claimName.toLowerCase().split('-');
    if (arrayContainsQueryPart(nameParts)) {
      downloadResultsFromQuery.push(fileInfo);
      return;
    }

    if (title) {
      const titleParts = title.toLowerCase().split(' ');
      if (arrayContainsQueryPart(titleParts)) {
        downloadResultsFromQuery.push(fileInfo);
        return;
      }
    }

    if (author) {
      const authorParts = author.toLowerCase().split(' ');
      if (arrayContainsQueryPart(authorParts)) {
        downloadResultsFromQuery.push(fileInfo);
        return;
      }
    }

    if (description) {
      const descriptionParts = description.toLowerCase().split(' ');
      if (arrayContainsQueryPart(descriptionParts)) {
        downloadResultsFromQuery.push(fileInfo);
      }
    }
  });

  return downloadResultsFromQuery.length ? downloadResultsFromQuery.map(fileInfo => {
    const {
      channel_name: channelName,
      claim_id: claimId,
      claim_name: claimName
    } = fileInfo;

    const uriParams = {};

    if (channelName) {
      const claim = claimsById[claimId];
      if (claim && claim.signing_channel) {
        uriParams.claimId = claim.signing_channel.claim_id;
      } else {
        uriParams.claimId = claimId;
      }
      uriParams.channelName = channelName;
      uriParams.contentName = claimName;
    } else {
      uriParams.claimId = claimId;
      uriParams.claimName = claimName;
    }

    const uri = buildURI(uriParams);
    return uri;
  }) : null;
});

const selectFileListPublishedSort = reselect.createSelector(selectState$3, state => state.fileListPublishedSort);

const selectFileListDownloadedSort = reselect.createSelector(selectState$3, state => state.fileListDownloadedSort);

const selectDownloadedUris = reselect.createSelector(selectFileInfosDownloaded,
// We should use permament_url but it doesn't exist in file_list
info => info.slice().reverse().map(claim => `lbry://${claim.claim_name}#${claim.claim_id}`));

//      

const selectState$4 = state => state.file || {};

const selectPurchaseUriErrorMessage = reselect.createSelector(selectState$4, state => state.purchaseUriErrorMessage);

const selectFailedPurchaseUris = reselect.createSelector(selectState$4, state => state.failedPurchaseUris);

const selectPurchasedUris = reselect.createSelector(selectState$4, state => state.purchasedUris);

const selectPurchasedStreamingUrls = reselect.createSelector(selectState$4, state => state.purchasedStreamingUrls);

const selectLastPurchasedUri = reselect.createSelector(selectState$4, state => state.purchasedUris.length > 0 ? state.purchasedUris[state.purchasedUris.length - 1] : null);

const makeSelectStreamingUrlForUri = uri => reselect.createSelector(selectPurchasedStreamingUrls, streamingUrls => streamingUrls && streamingUrls[uri]);

//      

function doFileGet(uri, saveFile = true) {
  return dispatch => {
    dispatch({
      type: LOADING_FILE_STARTED,
      data: {
        uri
      }
    });

    // set save_file argument to True to save the file (old behaviour)
    lbryProxy.get({ uri, save_file: saveFile }).then(streamInfo => {
      const timeout = streamInfo === null || typeof streamInfo !== 'object';

      if (timeout) {
        dispatch({
          type: LOADING_FILE_FAILED,
          data: { uri }
        });
        dispatch({
          type: PURCHASE_URI_FAILED,
          data: { uri }
        });

        dispatch(doToast({ message: `File timeout for uri ${uri}`, isError: true }));
      } else {
        // purchase was completed successfully
        const { streaming_url: streamingUrl } = streamInfo;
        dispatch({
          type: PURCHASE_URI_COMPLETED,
          data: { uri, streamingUrl: !saveFile && streamingUrl ? streamingUrl : null }
        });
      }
    }).catch(() => {
      dispatch({
        type: LOADING_FILE_FAILED,
        data: { uri }
      });
      dispatch({
        type: PURCHASE_URI_FAILED,
        data: { uri }
      });

      dispatch(doToast({
        message: `Failed to download ${uri}, please try again. If this problem persists, visit https://lbry.com/faq/support for support.`,
        isError: true
      }));
    });
  };
}

function doPurchaseUri(uri, costInfo, saveFile = true) {
  return (dispatch, getState) => {
    dispatch({
      type: PURCHASE_URI_STARTED,
      data: { uri }
    });

    const state = getState();
    const balance = selectBalance(state);
    const fileInfo = makeSelectFileInfoForUri(uri)(state);
    const downloadingByOutpoint = selectDownloadingByOutpoint(state);
    const alreadyDownloading = fileInfo && !!downloadingByOutpoint[fileInfo.outpoint];
    const alreadyStreaming = makeSelectStreamingUrlForUri(uri)(state);

    if (alreadyDownloading || alreadyStreaming) {
      dispatch({
        type: PURCHASE_URI_FAILED,
        data: { uri, error: `Already fetching uri: ${uri}` }
      });
      return;
    }

    const { cost } = costInfo;
    if (parseFloat(cost) > balance) {
      dispatch({
        type: PURCHASE_URI_FAILED,
        data: { uri, error: 'Insufficient credits' }
      });
      return;
    }

    dispatch(doFileGet(uri, saveFile));
  };
}

function doDeletePurchasedUri(uri) {
  return {
    type: DELETE_PURCHASED_URI,
    data: { uri }
  };
}

function doFetchFileInfo(uri) {
  return (dispatch, getState) => {
    const state = getState();
    const claim = selectClaimsByUri(state)[uri];
    const outpoint = claim ? `${claim.txid}:${claim.nout}` : null;
    const alreadyFetching = !!selectUrisLoading(state)[uri];

    if (!alreadyFetching) {
      dispatch({
        type: FETCH_FILE_INFO_STARTED,
        data: {
          outpoint
        }
      });

      lbryProxy.file_list({ outpoint, full_status: true }).then(fileInfos => {
        dispatch({
          type: FETCH_FILE_INFO_COMPLETED,
          data: {
            outpoint,
            fileInfo: fileInfos && fileInfos.length ? fileInfos[0] : null
          }
        });
      });
    }
  };
}

function doFileList() {
  return (dispatch, getState) => {
    const state = getState();
    const isFetching = selectIsFetchingFileList(state);

    if (!isFetching) {
      dispatch({
        type: FILE_LIST_STARTED
      });

      lbryProxy.file_list().then(fileInfos => {
        dispatch({
          type: FILE_LIST_SUCCEEDED,
          data: {
            fileInfos
          }
        });
      });
    }
  };
}

function doFetchFileInfosAndPublishedClaims() {
  return (dispatch, getState) => {
    const state = getState();
    const isFetchingClaimListMine = selectIsFetchingClaimListMine(state);
    const isFetchingFileInfo = selectIsFetchingFileList(state);

    if (!isFetchingClaimListMine) dispatch(doFetchClaimListMine());
    if (!isFetchingFileInfo) dispatch(doFileList());
  };
}

function doSetFileListSort(page, value) {
  return {
    type: SET_FILE_LIST_SORT,
    data: { page, value }
  };
}

//      

const formatLbryUriForWeb = uri => {
  const { claimName, claimId } = parseURI(uri);

  let webUrl = `/${claimName}`;
  if (claimId) {
    webUrl += `/${claimId}`;
  }

  return webUrl;
};

var _extends$4 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

const doResetThumbnailStatus = () => dispatch => {
  dispatch({
    type: UPDATE_PUBLISH_FORM,
    data: {
      thumbnailPath: ''
    }
  });

  return fetch('https://spee.ch/api/config/site/publishing').then(res => res.json()).then(status => {
    if (status.disabled) {
      throw Error();
    }

    return dispatch({
      type: UPDATE_PUBLISH_FORM,
      data: {
        uploadThumbnailStatus: READY,
        thumbnail: ''
      }
    });
  }).catch(() => dispatch({
    type: UPDATE_PUBLISH_FORM,
    data: {
      uploadThumbnailStatus: API_DOWN,
      thumbnail: ''
    }
  }));
};

const doClearPublish = () => dispatch => {
  dispatch({ type: CLEAR_PUBLISH });
  return dispatch(doResetThumbnailStatus());
};

const doUpdatePublishForm = publishFormValue => dispatch => dispatch({
  type: UPDATE_PUBLISH_FORM,
  data: _extends$4({}, publishFormValue)
});

const doUploadThumbnail = (filePath, thumbnailBuffer, fsAdapter) => dispatch => {
  let thumbnail, fileExt, fileName, fileType;

  const makeid = () => {
    let text = '';
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < 24; i += 1) text += possible.charAt(Math.floor(Math.random() * 62));
    return text;
  };

  const uploadError = (error = '') => {
    dispatch(batchActions({
      type: UPDATE_PUBLISH_FORM,
      data: {
        uploadThumbnailStatus: READY,
        thumbnail: '',
        nsfw: false
      }
    }, doError(error)));
  };

  dispatch({
    type: UPDATE_PUBLISH_FORM,
    data: { uploadThumbnailStatus: IN_PROGRESS }
  });

  if (fsAdapter && fsAdapter.readFile && filePath) {
    fsAdapter.readFile(filePath, 'base64').then(base64Image => {
      fileExt = 'png';
      fileName = 'thumbnail.png';
      fileType = 'image/png';

      const data = new FormData();
      const name = makeid();
      data.append('name', name);
      data.append('file', { uri: 'file://' + filePath, type: fileType, name: fileName });

      return fetch('https://spee.ch/api/claim/publish', {
        method: 'POST',
        body: data
      }).then(response => response.json()).then(json => json.success ? dispatch({
        type: UPDATE_PUBLISH_FORM,
        data: {
          uploadThumbnailStatus: COMPLETE,
          thumbnail: `${json.data.url}${fileExt}`
        }
      }) : uploadError(json.message)).catch(err => uploadError(err.message));
    });
  } else {
    if (filePath) {
      thumbnail = fs.readFileSync(filePath);
      fileExt = path.extname(filePath);
      fileName = path.basename(filePath);
      fileType = `image/${fileExt.slice(1)}`;
    } else if (thumbnailBuffer) {
      thumbnail = thumbnailBuffer;
      fileExt = '.png';
      fileName = 'thumbnail.png';
      fileType = 'image/png';
    } else {
      return null;
    }

    const data = new FormData();
    const name = makeid();
    const file = new File([thumbnail], fileName, { type: fileType });
    data.append('name', name);
    data.append('file', file);

    return fetch('https://spee.ch/api/claim/publish', {
      method: 'POST',
      body: data
    }).then(response => response.json()).then(json => json.success ? dispatch({
      type: UPDATE_PUBLISH_FORM,
      data: {
        uploadThumbnailStatus: COMPLETE,
        thumbnail: `${json.data.url}${fileExt}`
      }
    }) : uploadError(json.message)).catch(err => uploadError(err.message));
  }
};

const doPrepareEdit = (claim, uri, fileInfo) => dispatch => {
  const { name, amount, channel_name: channelName, value } = claim;

  const {
    author,
    description,
    // use same values as default state
    // fee will be undefined for free content
    fee = {
      amount: 0,
      currency: 'LBC'
    },
    languages,
    license,
    license_url: licenseUrl,
    thumbnail,
    title
  } = value;

  const publishData = {
    name,
    channel: channelName,
    bid: amount,
    contentIsFree: !fee.amount,
    author,
    description,
    fee: { amount: fee.amount, currency: fee.currency },
    languages,
    thumbnail: thumbnail ? thumbnail.url : null,
    title,
    uri,
    uploadThumbnailStatus: thumbnail ? MANUAL : undefined,
    licenseUrl,
    nsfw: isClaimNsfw(claim)
  };

  // Make sure custom liscence's are mapped properly
  // If the license isn't one of the standard licenses, map the custom license and description/url
  if (!CC_LICENSES.some(({ value }) => value === license)) {
    if (!license || license === NONE || license === PUBLIC_DOMAIN) {
      publishData.licenseType = license;
    } else if (license && !licenseUrl && license !== NONE) {
      publishData.licenseType = COPYRIGHT;
    } else {
      publishData.licenseType = OTHER;
    }

    publishData.otherLicenseDescription = license;
  } else {
    publishData.licenseType = license;
  }

  if (fileInfo && fileInfo.download_path) {
    try {
      fs.accessSync(fileInfo.download_path, fs.constants.R_OK);
      publishData.filePath = fileInfo.download_path;
    } catch (e) {
      console.error(e.name, e.message);
    }
  }

  dispatch({ type: DO_PREPARE_EDIT, data: publishData });
};

const doPublish = params => (dispatch, getState) => {
  dispatch({ type: PUBLISH_START });

  const state = getState();
  const myChannels = selectMyChannelClaims(state);
  const myClaims = selectMyClaimsWithoutChannels(state);

  const {
    name,
    bid,
    filePath,
    description,
    language,
    license,
    licenseUrl,
    thumbnail,
    channel,
    title,
    contentIsFree,
    fee,
    uri,
    nsfw,
    claim
  } = params;

  // get the claim id from the channel name, we will use that instead
  const namedChannelClaim = myChannels.find(myChannel => myChannel.name === channel);
  const channelId = namedChannelClaim ? namedChannelClaim.claim_id : '';

  const publishPayload = {
    name,
    bid: creditsToString(bid),
    title,
    license,
    languages: [language],
    description,
    tags: claim && claim.value.tags || [],
    locations: claim && claim.value.locations
  };

  // Temporary solution to keep the same publish flow with the new tags api
  // Eventually we will allow users to enter their own tags on publish
  // `nsfw` will probably be removed

  if (licenseUrl) {
    publishPayload.license_url = licenseUrl;
  }

  if (thumbnail) {
    publishPayload.thumbnail_url = thumbnail;
  }

  if (claim && claim.value.release_time) {
    publishPayload.release_time = Number(claim.value.release_time);
  }

  if (nsfw) {
    if (!publishPayload.tags.includes('mature')) {
      publishPayload.tags.push('mature');
    }
  } else {
    const indexToRemove = publishPayload.tags.indexOf('mature');
    if (indexToRemove > -1) {
      publishPayload.tags.splice(indexToRemove, 1);
    }
  }

  if (channelId) {
    publishPayload.channel_id = channelId;
  }

  if (!contentIsFree && fee && fee.currency && Number(fee.amount) > 0) {
    publishPayload.fee_currency = fee.currency;
    publishPayload.fee_amount = creditsToString(fee.amount);
  }

  // Only pass file on new uploads, not metadata only edits.
  // The sdk will figure it out
  if (filePath) publishPayload.file_path = filePath;

  const success = successResponse => {
    //analytics.apiLogPublish();

    const pendingClaim = successResponse.outputs[0];
    const actions = [];

    actions.push({
      type: PUBLISH_SUCCESS
    });

    //actions.push(doOpenModal(MODALS.PUBLISH, { uri }));

    // We have to fake a temp claim until the new pending one is returned by claim_list_mine
    // We can't rely on claim_list_mine because there might be some delay before the new claims are returned
    // Doing this allows us to show the pending claim immediately, it will get overwritten by the real one
    const isMatch = claim => claim.claim_id === pendingClaim.claim_id;
    const isEdit = myClaims.some(isMatch);
    const myNewClaims = isEdit ? myClaims.map(claim => isMatch(claim) ? pendingClaim : claim) : myClaims.concat(pendingClaim);

    actions.push({
      type: FETCH_CLAIM_LIST_MINE_COMPLETED,
      data: {
        claims: myNewClaims
      }
    });

    dispatch(batchActions(...actions));
  };

  const failure = error => {
    dispatch({ type: PUBLISH_FAIL });
    dispatch(doError(error.message));
  };

  return lbryProxy.publish(publishPayload).then(success, failure);
};

// Calls claim_list_mine until any pending publishes are confirmed
const doCheckPendingPublishes = () => (dispatch, getState) => {
  const state = getState();
  const pendingById = selectPendingById(state);

  if (!Object.keys(pendingById).length) {
    return;
  }

  let publishCheckInterval;

  const checkFileList = () => {
    lbryProxy.claim_list().then(claims => {
      claims.forEach(claim => {
        // If it's confirmed, check if it was pending previously
        if (claim.confirmations > 0 && pendingById[claim.claim_id]) {
          delete pendingById[claim.claim_id];

          // If it's confirmed, check if we should notify the user
          if (selectosNotificationsEnabled(getState())) {
            const notif = new window.Notification('LBRY Publish Complete', {
              body: `${claim.value.title} has been published to lbry://${claim.name}. Click here to view it`,
              silent: false
            });
            notif.onclick = () => {
              dispatch(push(formatLbryUriForWeb(claim.permanent_url)));
            };
          }
        }
      });

      dispatch({
        type: FETCH_CLAIM_LIST_MINE_COMPLETED,
        data: {
          claims
        }
      });

      if (!Object.keys(pendingById).length) {
        clearInterval(publishCheckInterval);
      }
    });
  };

  publishCheckInterval = setInterval(() => {
    checkFileList();
  }, 30000);
};

// Returns a function, that, as long as it continues to be invoked, will not
// be triggered. The function will be called after it stops being called for
// N milliseconds. If `immediate` is passed, trigger the function on the
// leading edge, instead of the trailing.
function debouce(func, wait, immediate) {
  let timeout;

  return function () {
    const context = this;
    const args = arguments;
    const later = () => {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };

    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

//      
function handleFetchResponse(response) {
  return response.status === 200 ? Promise.resolve(response.json()) : Promise.reject(new Error(response.statusText));
}

//      

const DEBOUNCED_SEARCH_SUGGESTION_MS = 300;

// We can't use env's because they aren't passed into node_modules
let CONNECTION_STRING = 'https://lighthouse.lbry.com/';

const setSearchApi = endpoint => {
  CONNECTION_STRING = endpoint.replace(/\/*$/, '/'); // exactly one slash at the end;
};

const getSearchSuggestions = value => (dispatch, getState) => {
  const query = value.trim();

  // strip out any basic stuff for more accurate search results
  let searchValue = query.replace(/lbry:\/\//g, '').replace(/-/g, ' ');
  if (searchValue.includes('#')) {
    // This should probably be more robust, but I think it's fine for now
    // Remove everything after # to get rid of the claim id
    searchValue = searchValue.substring(0, searchValue.indexOf('#'));
  }

  const suggestions = selectSuggestions(getState());
  if (suggestions[searchValue]) {
    return;
  }

  fetch(`${CONNECTION_STRING}autocomplete?s=${searchValue}`).then(handleFetchResponse).then(apiSuggestions => {
    dispatch({
      type: UPDATE_SEARCH_SUGGESTIONS,
      data: {
        query: searchValue,
        suggestions: apiSuggestions
      }
    });
  }).catch(() => {
    // If the fetch fails, do nothing
    // Basic search suggestions are already populated at this point
  });
};

const throttledSearchSuggestions = debouce((dispatch, query) => {
  dispatch(getSearchSuggestions(query));
}, DEBOUNCED_SEARCH_SUGGESTION_MS);

const doUpdateSearchQuery = (query, shouldSkipSuggestions) => dispatch => {
  dispatch({
    type: UPDATE_SEARCH_QUERY,
    data: { query }
  });

  // Don't fetch new suggestions if the user just added a space
  if (!query.endsWith(' ') || !shouldSkipSuggestions) {
    throttledSearchSuggestions(dispatch, query);
  }
};

const doSearch = (rawQuery, // pass in a query if you don't want to search for what's in the search bar
size, // only pass in if you don't want to use the users setting (ex: related content)
from, isBackgroundSearch = false) => (dispatch, getState) => {
  const query = rawQuery.replace(/^lbry:\/\//i, '').replace(/\//, ' ');

  if (!query) {
    dispatch({
      type: SEARCH_FAIL
    });
    return;
  }

  const state = getState();
  const queryWithOptions = makeSelectQueryWithOptions(query, size, from, isBackgroundSearch)(state);

  // If we have already searched for something, we don't need to do anything
  const urisForQuery = makeSelectSearchUris(queryWithOptions)(state);
  if (urisForQuery && !!urisForQuery.length) {
    return;
  }

  dispatch({
    type: SEARCH_START
  });

  // If the user is on the file page with a pre-populated uri and they select
  // the search option without typing anything, searchQuery will be empty
  // We need to populate it so the input is filled on the search page
  // isBackgroundSearch means the search is happening in the background, don't update the search query
  if (!state.search.searchQuery && !isBackgroundSearch) {
    dispatch(doUpdateSearchQuery(query));
  }

  fetch(`${CONNECTION_STRING}search?${queryWithOptions}`).then(handleFetchResponse).then(data => {
    const uris = [];
    const actions = [];

    data.forEach(result => {
      if (result.name) {
        const uri = buildURI({
          claimName: result.name,
          claimId: result.claimId
        });
        actions.push(doResolveUri(uri));
        uris.push(uri);
      }
    });

    actions.push({
      type: SEARCH_SUCCESS,
      data: {
        query: queryWithOptions,
        uris
      }
    });
    dispatch(batchActions(...actions));
  }).catch(e => {
    dispatch({
      type: SEARCH_FAIL
    });
  });
};

const doFocusSearchInput = () => dispatch => dispatch({
  type: SEARCH_FOCUS
});

const doBlurSearchInput = () => dispatch => dispatch({
  type: SEARCH_BLUR
});

const doUpdateSearchOptions = newOptions => (dispatch, getState) => {
  const state = getState();
  const searchValue = selectSearchValue(state);

  dispatch({
    type: UPDATE_SEARCH_OPTIONS,
    data: newOptions
  });

  if (searchValue) {
    // After updating, perform a search with the new options
    dispatch(doSearch(searchValue));
  }
};

function savePosition(claimId, outpoint, position) {
  return dispatch => {
    dispatch({
      type: SET_CONTENT_POSITION,
      data: { claimId, outpoint, position }
    });
  };
}

//      

const doToggleTagFollow = name => ({
  type: TOGGLE_TAG_FOLLOW,
  data: {
    name
  }
});

const doAddTag = name => ({
  type: TAG_ADD,
  data: {
    name
  }
});

const doDeleteTag = name => ({
  type: TAG_DELETE,
  data: {
    name
  }
});

//      

function doCommentList(uri) {
  return (dispatch, getState) => {
    const state = getState();
    const claim = selectClaimsByUri(state)[uri];
    const claimId = claim ? claim.claim_id : null;

    dispatch({
      type: COMMENT_LIST_STARTED
    });
    lbryProxy.comment_list({
      claim_id: claimId
    }).then(results => {
      dispatch({
        type: COMMENT_LIST_COMPLETED,
        data: {
          comments: results,
          claimId: claimId,
          uri: uri
        }
      });
    }).catch(error => {
      console.log(error);
      dispatch({
        type: COMMENT_LIST_FAILED,
        data: error
      });
    });
  };
}

function doCommentCreate(comment = '', claim_id = '', channel, parent_id) {
  return (dispatch, getState) => {
    const state = getState();
    dispatch({
      type: COMMENT_CREATE_STARTED
    });
    const myChannels = selectMyChannelClaims(state);
    const namedChannelClaim = myChannels.find(myChannel => myChannel.name === channel);
    const channel_id = namedChannelClaim ? namedChannelClaim.claim_id : null;
    return lbryProxy.comment_create({
      comment,
      claim_id,
      channel_id
    }).then(result => {
      dispatch({
        type: COMMENT_CREATE_COMPLETED,
        data: {
          comment: result,
          claimId: claim_id
        }
      });
    }).catch(error => {
      dispatch({
        type: COMMENT_CREATE_FAILED,
        data: error
      });
      dispatch(doToast({
        message: 'Oops, someone broke comments.',
        isError: true
      }));
    });
  };
}

var _extends$5 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

const reducers = {};
const defaultState = {
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
  claimSearchError: undefined,
  fetchingClaimSearch: false,
  claimSearchSearchByQuery: {}
};

function handleClaimAction(state, action) {
  const {
    resolveInfo
  } = action.data;
  const byUri = Object.assign({}, state.claimsByUri);
  const byId = Object.assign({}, state.byId);
  const channelClaimCounts = Object.assign({}, state.channelClaimCounts);

  Object.entries(resolveInfo).forEach(([uri, resolveResponse]) => {
    // $FlowFixMe
    if (resolveResponse.claimsInChannel) {
      // $FlowFixMe
      channelClaimCounts[uri] = resolveResponse.claimsInChannel;
    }
  });

  // $FlowFixMe
  Object.entries(resolveInfo).forEach(([uri, { channel, stream }]) => {
    if (stream) {
      byId[stream.claim_id] = stream;
      byUri[uri] = stream.claim_id;
    }
    if (channel) {
      byId[channel.claim_id] = channel;
      byUri[stream ? channel.permanent_url : uri] = channel.claim_id;
    }
    if (!stream && !channel) {
      byUri[uri] = null;
    }
  });

  return Object.assign({}, state, {
    byId,
    claimsByUri: byUri,
    channelClaimCounts,
    resolvingUris: (state.resolvingUris || []).filter(uri => !resolveInfo[uri])
  });
}

reducers[RESOLVE_URIS_COMPLETED] = (state, action) => {
  return _extends$5({}, handleClaimAction(state, action));
};

reducers[FETCH_CLAIM_LIST_MINE_STARTED] = state => Object.assign({}, state, {
  isFetchingClaimListMine: true
});

reducers[FETCH_CLAIM_LIST_MINE_COMPLETED] = (state, action) => {
  const { claims } = action.data;
  const byId = Object.assign({}, state.byId);
  const byUri = Object.assign({}, state.claimsByUri);
  const pendingById = Object.assign({}, state.pendingById);

  claims.forEach(claim => {
    const uri = buildURI({ claimName: claim.name, claimId: claim.claim_id });

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
  .filter(pendingClaim => byId[pendingClaim.claim_id]).forEach(pendingClaim => {
    // $FlowFixMe
    delete pendingById[pendingClaim.claim_id];
  });

  return Object.assign({}, state, {
    isFetchingClaimListMine: false,
    myClaims: claims,
    byId,
    claimsByUri: byUri,
    pendingById
  });
};

reducers[FETCH_CHANNEL_LIST_STARTED] = state => Object.assign({}, state, { fetchingMyChannels: true });

reducers[FETCH_CHANNEL_LIST_COMPLETED] = (state, action) => {
  const { claims } = action.data;
  const myChannelClaims = new Set(state.myChannelClaims);
  const byId = Object.assign({}, state.byId);

  claims.forEach(claim => {
    myChannelClaims.add(claim.claim_id);
    byId[claim.claim_id] = claim;
  });

  return Object.assign({}, state, {
    byId,
    fetchingMyChannels: false,
    myChannelClaims
  });
};

reducers[FETCH_CHANNEL_CLAIMS_STARTED] = (state, action) => {
  const { uri, page } = action.data;
  const fetchingChannelClaims = Object.assign({}, state.fetchingChannelClaims);

  fetchingChannelClaims[uri] = page;

  return Object.assign({}, state, {
    fetchingChannelClaims,
    currentChannelPage: page
  });
};

reducers[FETCH_CHANNEL_CLAIMS_COMPLETED] = (state, action) => {
  const {
    uri,
    claims,
    page
  } = action.data;

  const claimsByChannel = Object.assign({}, state.claimsByChannel);
  const byChannel = Object.assign({}, claimsByChannel[uri]);
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
      claimsByUri[`lbry://${claim.name}#${claim.claim_id}`] = claim.claim_id;
    });
  }

  byChannel.all = allClaimIds;
  byChannel[page] = currentPageClaimIds;
  claimsByChannel[uri] = byChannel;
  delete fetchingChannelClaims[uri];

  return Object.assign({}, state, {
    claimsByChannel,
    byId,
    fetchingChannelClaims,
    claimsByUri,
    currentChannelPage: page
  });
};

reducers[ABANDON_CLAIM_STARTED] = (state, action) => {
  const { claimId } = action.data;
  const abandoningById = Object.assign({}, state.abandoningById);

  abandoningById[claimId] = true;

  return Object.assign({}, state, {
    abandoningById
  });
};

reducers[ABANDON_CLAIM_SUCCEEDED] = (state, action) => {
  const { claimId } = action.data;
  const byId = Object.assign({}, state.byId);
  const claimsByUri = Object.assign({}, state.claimsByUri);

  Object.keys(claimsByUri).forEach(uri => {
    if (claimsByUri[uri] === claimId) {
      delete claimsByUri[uri];
    }
  });

  delete byId[claimId];

  return Object.assign({}, state, {
    byId,
    claimsByUri
  });
};

reducers[CREATE_CHANNEL_COMPLETED] = (state, action) => {
  const channelClaim = action.data.channelClaim;
  const byId = Object.assign({}, state.byId);
  const myChannelClaims = new Set(state.myChannelClaims);

  byId[channelClaim.claim_id] = channelClaim;
  myChannelClaims.add(channelClaim.claim_id);

  return Object.assign({}, state, {
    byId,
    myChannelClaims
  });
};

reducers[UPDATE_CHANNEL_COMPLETED] = (state, action) => {
  const channelClaim = action.data.channelClaim;
  const byId = Object.assign({}, state.byId);

  byId[channelClaim.claim_id] = channelClaim;

  return Object.assign({}, state, {
    byId
  });
};

reducers[RESOLVE_URIS_STARTED] = (state, action) => {
  const { uris } = action.data;

  const oldResolving = state.resolvingUris || [];
  const newResolving = oldResolving.slice();

  uris.forEach(uri => {
    if (!newResolving.includes(uri)) {
      newResolving.push(uri);
    }
  });

  return Object.assign({}, state, {
    resolvingUris: newResolving
  });
};

reducers[CLAIM_SEARCH_STARTED] = state => {
  return Object.assign({}, state, {
    fetchingClaimSearch: true,
    claimSearchError: false
  });
};

reducers[CLAIM_SEARCH_COMPLETED] = (state, action) => {
  const { claimSearchSearchByQuery } = state;
  const { uris, query, append } = action.data;

  let newClaimSearch = _extends$5({}, claimSearchSearchByQuery);
  if (!uris) {
    newClaimSearch[query] = null;
  } else if (append && newClaimSearch[query]) {
    newClaimSearch[query] = newClaimSearch[query].concat(uris);
  } else {
    newClaimSearch[query] = uris;
  }

  return _extends$5({}, handleClaimAction(state, action), {
    fetchingClaimSearch: false,
    claimSearchSearchByQuery: newClaimSearch
  });
};

reducers[CLAIM_SEARCH_FAILED] = state => {
  return Object.assign({}, state, {
    fetchingClaimSearch: false,
    claimSearchError: true
  });
};

function claimsReducer(state = defaultState, action) {
  const handler = reducers[action.type];
  if (handler) return handler(state, action);
  return state;
}

// util for creating reducers
// based off of redux-actions
// https://redux-actions.js.org/docs/api/handleAction.html#handleactions

// eslint-disable-next-line import/prefer-default-export
const handleActions = (actionMap, defaultState) => (state = defaultState, action) => {
  const handler = actionMap[action.type];

  if (handler) {
    const newState = handler(state, action);
    return Object.assign({}, state, newState);
  }

  // just return the original state if no handler
  // returning a copy here breaks redux-persist
  return state;
};

var _extends$6 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

const defaultState$1 = {
  byId: {},
  commentsByUri: {},
  isLoading: false
};

const commentReducer = handleActions({
  [COMMENT_CREATE_STARTED]: (state, action) => _extends$6({}, state, {
    isLoading: true
  }),

  [COMMENT_CREATE_FAILED]: (state, action) => _extends$6({}, state, {
    isLoading: false
  }),

  [COMMENT_CREATE_COMPLETED]: (state, action) => {
    const { comment, claimId } = action.data;
    const byId = Object.assign({}, state.byId);
    const comments = byId[claimId];
    const newComments = comments.slice();

    newComments.unshift(comment);
    byId[claimId] = newComments;

    return _extends$6({}, state, {
      byId
    });
  },

  [COMMENT_LIST_STARTED]: state => _extends$6({}, state, { isLoading: true }),

  [COMMENT_LIST_COMPLETED]: (state, action) => {
    const { comments, claimId, uri } = action.data;
    const byId = Object.assign({}, state.byId);
    const commentsByUri = Object.assign({}, state.commentsByUri);

    if (comments['items']) {
      byId[claimId] = comments['items'];
      commentsByUri[uri] = claimId;
    }
    return _extends$6({}, state, {
      byId,
      commentsByUri,
      isLoading: false
    });
  },

  [COMMENT_LIST_FAILED]: (state, action) => _extends$6({}, state, {
    isLoading: false
  })
}, defaultState$1);

var _extends$7 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

const reducers$1 = {};
const defaultState$2 = {
  positions: {}
};

reducers$1[SET_CONTENT_POSITION] = (state, action) => {
  const { claimId, outpoint, position } = action.data;
  return _extends$7({}, state, {
    positions: _extends$7({}, state.positions, {
      [claimId]: _extends$7({}, state.positions[claimId], {
        [outpoint]: position
      })
    })
  });
};

function contentReducer(state = defaultState$2, action) {
  const handler = reducers$1[action.type];
  if (handler) return handler(state, action);
  return state;
}

var _extends$8 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

const reducers$2 = {};
const defaultState$3 = {
  fileListPublishedSort: DATE_NEW,
  fileListDownloadedSort: DATE_NEW
};

reducers$2[FILE_LIST_STARTED] = state => Object.assign({}, state, {
  isFetchingFileList: true
});

reducers$2[FILE_LIST_SUCCEEDED] = (state, action) => {
  const { fileInfos } = action.data;
  const newByOutpoint = Object.assign({}, state.byOutpoint);
  const pendingByOutpoint = Object.assign({}, state.pendingByOutpoint);

  fileInfos.forEach(fileInfo => {
    const { outpoint } = fileInfo;

    if (outpoint) newByOutpoint[fileInfo.outpoint] = fileInfo;
  });

  return Object.assign({}, state, {
    isFetchingFileList: false,
    byOutpoint: newByOutpoint,
    pendingByOutpoint
  });
};

reducers$2[FETCH_FILE_INFO_STARTED] = (state, action) => {
  const { outpoint } = action.data;
  const newFetching = Object.assign({}, state.fetching);

  newFetching[outpoint] = true;

  return Object.assign({}, state, {
    fetching: newFetching
  });
};

reducers$2[FETCH_FILE_INFO_COMPLETED] = (state, action) => {
  const { fileInfo, outpoint } = action.data;

  const newByOutpoint = Object.assign({}, state.byOutpoint);
  const newFetching = Object.assign({}, state.fetching);

  newByOutpoint[outpoint] = fileInfo;
  delete newFetching[outpoint];

  return Object.assign({}, state, {
    byOutpoint: newByOutpoint,
    fetching: newFetching
  });
};

reducers$2[DOWNLOADING_STARTED] = (state, action) => {
  const { uri, outpoint, fileInfo } = action.data;

  const newByOutpoint = Object.assign({}, state.byOutpoint);
  const newDownloading = Object.assign({}, state.downloadingByOutpoint);
  const newLoading = Object.assign({}, state.urisLoading);

  newDownloading[outpoint] = true;
  newByOutpoint[outpoint] = fileInfo;
  delete newLoading[uri];

  return Object.assign({}, state, {
    downloadingByOutpoint: newDownloading,
    urisLoading: newLoading,
    byOutpoint: newByOutpoint
  });
};

reducers$2[DOWNLOADING_PROGRESSED] = (state, action) => {
  const { outpoint, fileInfo } = action.data;

  const newByOutpoint = Object.assign({}, state.byOutpoint);
  const newDownloading = Object.assign({}, state.downloadingByOutpoint);

  newByOutpoint[outpoint] = fileInfo;
  newDownloading[outpoint] = true;

  return Object.assign({}, state, {
    byOutpoint: newByOutpoint,
    downloadingByOutpoint: newDownloading
  });
};

reducers$2[DOWNLOADING_CANCELED] = (state, action) => {
  const { outpoint } = action.data;

  const newDownloading = Object.assign({}, state.downloadingByOutpoint);
  delete newDownloading[outpoint];

  return Object.assign({}, state, {
    downloadingByOutpoint: newDownloading
  });
};

reducers$2[DOWNLOADING_COMPLETED] = (state, action) => {
  const { outpoint, fileInfo } = action.data;

  const newByOutpoint = Object.assign({}, state.byOutpoint);
  const newDownloading = Object.assign({}, state.downloadingByOutpoint);

  newByOutpoint[outpoint] = fileInfo;
  delete newDownloading[outpoint];

  return Object.assign({}, state, {
    byOutpoint: newByOutpoint,
    downloadingByOutpoint: newDownloading
  });
};

reducers$2[FILE_DELETE] = (state, action) => {
  const { outpoint } = action.data;

  const newByOutpoint = Object.assign({}, state.byOutpoint);
  const downloadingByOutpoint = Object.assign({}, state.downloadingByOutpoint);

  delete newByOutpoint[outpoint];
  delete downloadingByOutpoint[outpoint];

  return Object.assign({}, state, {
    byOutpoint: newByOutpoint,
    downloadingByOutpoint
  });
};

reducers$2[LOADING_VIDEO_STARTED] = (state, action) => {
  const { uri } = action.data;

  const newLoading = Object.assign({}, state.urisLoading);
  newLoading[uri] = true;

  const newErrors = _extends$8({}, state.errors);
  if (uri in newErrors) delete newErrors[uri];

  return Object.assign({}, state, {
    urisLoading: newLoading,
    errors: _extends$8({}, newErrors)
  });
};

reducers$2[LOADING_VIDEO_FAILED] = (state, action) => {
  const { uri } = action.data;

  const newLoading = Object.assign({}, state.urisLoading);
  delete newLoading[uri];

  const newErrors = _extends$8({}, state.errors);
  newErrors[uri] = true;

  return Object.assign({}, state, {
    urisLoading: newLoading,
    errors: _extends$8({}, newErrors)
  });
};

reducers$2[SET_FILE_LIST_SORT] = (state, action) => {
  const pageSortStates = {
    [PUBLISHED]: 'fileListPublishedSort',
    [DOWNLOADED]: 'fileListDownloadedSort'
  };
  const pageSortState = pageSortStates[action.data.page];
  const { value } = action.data;

  return Object.assign({}, state, {
    [pageSortState]: value
  });
};

function fileInfoReducer(state = defaultState$3, action) {
  const handler = reducers$2[action.type];
  if (handler) return handler(state, action);
  return state;
}

var _extends$9 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

const reducers$3 = {};
const defaultState$4 = {
  failedPurchaseUris: [],
  purchasedUris: [],
  purchasedStreamingUrls: {},
  purchaseUriErrorMessage: ''
};

reducers$3[PURCHASE_URI_STARTED] = (state, action) => {
  const { uri } = action.data;
  const newFailedPurchaseUris = state.failedPurchaseUris.slice();
  if (newFailedPurchaseUris.includes(uri)) {
    newFailedPurchaseUris.splice(newFailedPurchaseUris.indexOf(uri), 1);
  }

  return _extends$9({}, state, {
    failedPurchaseUris: newFailedPurchaseUris,
    purchaseUriErrorMessage: ''
  });
};

reducers$3[PURCHASE_URI_COMPLETED] = (state, action) => {
  const { uri, streamingUrl } = action.data;
  const newPurchasedUris = state.purchasedUris.slice();
  const newFailedPurchaseUris = state.failedPurchaseUris.slice();
  const newPurchasedStreamingUrls = Object.assign({}, state.purchasedStreamingUrls);

  if (!newPurchasedUris.includes(uri)) {
    newPurchasedUris.push(uri);
  }
  if (newFailedPurchaseUris.includes(uri)) {
    newFailedPurchaseUris.splice(newFailedPurchaseUris.indexOf(uri), 1);
  }
  if (streamingUrl) {
    newPurchasedStreamingUrls[uri] = streamingUrl;
  }

  return _extends$9({}, state, {
    failedPurchaseUris: newFailedPurchaseUris,
    purchasedUris: newPurchasedUris,
    purchasedStreamingUrls: newPurchasedStreamingUrls,
    purchaseUriErrorMessage: ''
  });
};

reducers$3[PURCHASE_URI_FAILED] = (state, action) => {
  const { uri, error } = action.data;
  const newFailedPurchaseUris = state.failedPurchaseUris.slice();

  if (!newFailedPurchaseUris.includes(uri)) {
    newFailedPurchaseUris.push(uri);
  }

  return _extends$9({}, state, {
    failedPurchaseUris: newFailedPurchaseUris,
    purchaseUriErrorMessage: error
  });
};

reducers$3[DELETE_PURCHASED_URI] = (state, action) => {
  const { uri } = action.data;
  const newPurchasedUris = state.purchasedUris.slice();
  if (newPurchasedUris.includes(uri)) {
    newPurchasedUris.splice(newPurchasedUris.indexOf(uri), 1);
  }

  return _extends$9({}, state, {
    purchasedUris: newPurchasedUris
  });
};

function fileReducer(state = defaultState$4, action) {
  const handler = reducers$3[action.type];
  if (handler) return handler(state, action);
  return state;
}

var _extends$a = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

const defaultState$5 = {
  notifications: [],
  toasts: [],
  errors: []
};

const notificationsReducer = handleActions({
  // Toasts
  [CREATE_TOAST]: (state, action) => {
    const toast = action.data;
    const newToasts = state.toasts.slice();
    newToasts.push(toast);

    return _extends$a({}, state, {
      toasts: newToasts
    });
  },
  [DISMISS_TOAST]: state => {
    const newToasts = state.toasts.slice();
    newToasts.shift();

    return _extends$a({}, state, {
      toasts: newToasts
    });
  },

  // Notifications
  [CREATE_NOTIFICATION]: (state, action) => {
    const notification = action.data;
    const newNotifications = state.notifications.slice();
    newNotifications.push(notification);

    return _extends$a({}, state, {
      notifications: newNotifications
    });
  },
  // Used to mark notifications as read/dismissed
  [EDIT_NOTIFICATION]: (state, action) => {
    const { notification } = action.data;
    let notifications = state.notifications.slice();

    notifications = notifications.map(pastNotification => pastNotification.id === notification.id ? notification : pastNotification);

    return _extends$a({}, state, {
      notifications
    });
  },
  [DELETE_NOTIFICATION]: (state, action) => {
    const { id } = action.data;
    let newNotifications = state.notifications.slice();
    newNotifications = newNotifications.filter(notification => notification.id !== id);

    return _extends$a({}, state, {
      notifications: newNotifications
    });
  },

  // Errors
  [CREATE_ERROR]: (state, action) => {
    const error = action.data;
    const newErrors = state.errors.slice();
    newErrors.push(error);

    return _extends$a({}, state, {
      errors: newErrors
    });
  },
  [DISMISS_ERROR]: state => {
    const newErrors = state.errors.slice();
    newErrors.shift();

    return _extends$a({}, state, {
      errors: newErrors
    });
  }
}, defaultState$5);

var _extends$b = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties$1(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

const defaultState$6 = {
  editingURI: undefined,
  filePath: undefined,
  contentIsFree: true,
  fee: {
    amount: 1,
    currency: 'LBC'
  },
  title: '',
  thumbnail_url: '',
  thumbnailPath: '',
  uploadThumbnailStatus: API_DOWN,
  description: '',
  language: 'en',
  nsfw: false,
  channel: CHANNEL_ANONYMOUS,
  channelId: '',
  name: '',
  nameError: undefined,
  bid: 0.1,
  bidError: undefined,
  licenseType: 'None',
  otherLicenseDescription: 'All rights reserved',
  licenseUrl: '',
  publishing: false,
  publishSuccess: false,
  publishError: undefined
};

const publishReducer = handleActions({
  [UPDATE_PUBLISH_FORM]: (state, action) => {
    const { data } = action;
    return _extends$b({}, state, data);
  },
  [CLEAR_PUBLISH]: () => _extends$b({}, defaultState$6),
  [PUBLISH_START]: state => _extends$b({}, state, {
    publishing: true,
    publishSuccess: false
  }),
  [PUBLISH_FAIL]: state => _extends$b({}, state, {
    publishing: false
  }),
  [PUBLISH_SUCCESS]: state => _extends$b({}, state, {
    publishing: false,
    publishSuccess: true
  }),
  [DO_PREPARE_EDIT]: (state, action) => {
    const publishData = _objectWithoutProperties$1(action.data, []);
    const { channel, name, uri } = publishData;

    // The short uri is what is presented to the user
    // The editingUri is the full uri with claim id
    const shortUri = buildURI({
      channelName: channel,
      contentName: name
    });

    return _extends$b({}, defaultState$6, publishData, {
      editingURI: uri,
      uri: shortUri
    });
  }
}, defaultState$6);

var _extends$c = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

const defaultState$7 = {
  isActive: false, // does the user have any typed text in the search input
  focused: false, // is the search input focused
  searchQuery: '', // needs to be an empty string for input focusing
  options: {
    [SEARCH_OPTIONS.RESULT_COUNT]: 30,
    [SEARCH_OPTIONS.CLAIM_TYPE]: SEARCH_OPTIONS.INCLUDE_FILES_AND_CHANNELS,
    [SEARCH_OPTIONS.MEDIA_AUDIO]: true,
    [SEARCH_OPTIONS.MEDIA_VIDEO]: true,
    [SEARCH_OPTIONS.MEDIA_TEXT]: true,
    [SEARCH_OPTIONS.MEDIA_IMAGE]: true,
    [SEARCH_OPTIONS.MEDIA_APPLICATION]: true
  },
  suggestions: {},
  urisByQuery: {}
};

const searchReducer = handleActions({
  [SEARCH_START]: state => _extends$c({}, state, {
    searching: true
  }),
  [SEARCH_SUCCESS]: (state, action) => {
    const { query, uris } = action.data;

    return _extends$c({}, state, {
      searching: false,
      urisByQuery: Object.assign({}, state.urisByQuery, { [query]: uris })
    });
  },

  [SEARCH_FAIL]: state => _extends$c({}, state, {
    searching: false
  }),

  [UPDATE_SEARCH_QUERY]: (state, action) => _extends$c({}, state, {
    searchQuery: action.data.query,
    isActive: true
  }),

  [UPDATE_SEARCH_SUGGESTIONS]: (state, action) => _extends$c({}, state, {
    suggestions: _extends$c({}, state.suggestions, {
      [action.data.query]: action.data.suggestions
    })
  }),

  // sets isActive to false so the uri will be populated correctly if the
  // user is on a file page. The search query will still be present on any
  // other page
  [DISMISS_NOTIFICATION]: state => _extends$c({}, state, {
    isActive: false
  }),

  [SEARCH_FOCUS]: state => _extends$c({}, state, {
    focused: true
  }),
  [SEARCH_BLUR]: state => _extends$c({}, state, {
    focused: false
  }),
  [UPDATE_SEARCH_OPTIONS]: (state, action) => {
    const { options: oldOptions } = state;
    const newOptions = action.data;
    const options = _extends$c({}, oldOptions, newOptions);
    return _extends$c({}, state, {
      options
    });
  }
}, defaultState$7);

var _extends$d = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function getDefaultKnownTags() {
  return DEFAULT_FOLLOWED_TAGS.concat(DEFAULT_KNOWN_TAGS).reduce((tagsMap, tag) => _extends$d({}, tagsMap, {
    [tag]: { name: tag }
  }), {});
}

const defaultState$8 = {
  followedTags: DEFAULT_FOLLOWED_TAGS,
  knownTags: getDefaultKnownTags()
};

const tagsReducer = handleActions({
  [TOGGLE_TAG_FOLLOW]: (state, action) => {
    const { followedTags } = state;
    const { name } = action.data;

    let newFollowedTags = followedTags.slice();

    if (newFollowedTags.includes(name)) {
      newFollowedTags = newFollowedTags.filter(tag => tag !== name);
    } else {
      newFollowedTags.push(name);
    }

    return _extends$d({}, state, {
      followedTags: newFollowedTags
    });
  },

  [TAG_ADD]: (state, action) => {
    const { knownTags } = state;
    const { name } = action.data;

    let newKnownTags = _extends$d({}, knownTags);
    newKnownTags[name] = { name };

    return _extends$d({}, state, {
      knownTags: newKnownTags
    });
  },

  [TAG_DELETE]: (state, action) => {
    const { knownTags, followedTags } = state;
    const { name } = action.data;

    let newKnownTags = _extends$d({}, knownTags);
    delete newKnownTags[name];
    const newFollowedTags = followedTags.filter(tag => tag !== name);

    return _extends$d({}, state, {
      knownTags: newKnownTags,
      followedTags: newFollowedTags
    });
  }
}, defaultState$8);

var _extends$e = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

const buildDraftTransaction = () => ({
  amount: undefined,
  address: undefined
});

// TODO: Split into common success and failure types
// See details in https://github.com/lbryio/lbry/issues/1307


const defaultState$9 = {
  balance: undefined,
  totalBalance: undefined,
  latestBlock: undefined,
  transactions: {},
  fetchingTransactions: false,
  supports: {},
  fetchingSupports: false,
  abandoningSupportsByOutpoint: {},
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

const walletReducer = handleActions({
  [FETCH_TRANSACTIONS_STARTED]: state => _extends$e({}, state, {
    fetchingTransactions: true
  }),

  [FETCH_TRANSACTIONS_COMPLETED]: (state, action) => {
    const byId = _extends$e({}, state.transactions);

    const { transactions } = action.data;
    transactions.forEach(transaction => {
      byId[transaction.txid] = transaction;
    });

    return _extends$e({}, state, {
      transactions: byId,
      fetchingTransactions: false
    });
  },

  [FETCH_SUPPORTS_STARTED]: state => _extends$e({}, state, {
    fetchingSupports: true
  }),

  [FETCH_SUPPORTS_COMPLETED]: (state, action) => {
    const byOutpoint = state.supports;
    const { supports } = action.data;

    supports.forEach(transaction => {
      const { txid, nout } = transaction;
      byOutpoint[`${txid}:${nout}`] = transaction;
    });

    return _extends$e({}, state, { supports: byOutpoint, fetchingSupports: false });
  },

  [ABANDON_SUPPORT_STARTED]: (state, action) => {
    const { outpoint } = action.data;
    const currentlyAbandoning = state.abandoningSupportsByOutpoint;

    currentlyAbandoning[outpoint] = true;

    return _extends$e({}, state, {
      abandoningSupportsByOutpoint: currentlyAbandoning
    });
  },

  [ABANDON_SUPPORT_COMPLETED]: (state, action) => {
    const { outpoint } = action.data;
    const byOutpoint = state.supports;
    const currentlyAbandoning = state.abandoningSupportsByOutpoint;

    delete currentlyAbandoning[outpoint];
    delete byOutpoint[outpoint];

    return _extends$e({}, state, {
      supports: byOutpoint,
      abandoningSupportsById: currentlyAbandoning
    });
  },

  [GET_NEW_ADDRESS_STARTED]: state => _extends$e({}, state, {
    gettingNewAddress: true
  }),

  [GET_NEW_ADDRESS_COMPLETED]: (state, action) => {
    const { address } = action.data;

    return _extends$e({}, state, { gettingNewAddress: false, receiveAddress: address });
  },

  [UPDATE_BALANCE]: (state, action) => _extends$e({}, state, {
    balance: action.data.balance
  }),

  [UPDATE_TOTAL_BALANCE]: (state, action) => _extends$e({}, state, {
    totalBalance: action.data.totalBalance
  }),

  [CHECK_ADDRESS_IS_MINE_STARTED]: state => _extends$e({}, state, {
    checkingAddressOwnership: true
  }),

  [CHECK_ADDRESS_IS_MINE_COMPLETED]: state => _extends$e({}, state, {
    checkingAddressOwnership: false
  }),

  [SET_DRAFT_TRANSACTION_AMOUNT]: (state, action) => {
    const oldDraft = state.draftTransaction;
    const newDraft = _extends$e({}, oldDraft, { amount: parseFloat(action.data.amount) });

    return _extends$e({}, state, { draftTransaction: newDraft });
  },

  [SET_DRAFT_TRANSACTION_ADDRESS]: (state, action) => {
    const oldDraft = state.draftTransaction;
    const newDraft = _extends$e({}, oldDraft, { address: action.data.address });

    return _extends$e({}, state, { draftTransaction: newDraft });
  },

  [SEND_TRANSACTION_STARTED]: state => {
    const newDraftTransaction = _extends$e({}, state.draftTransaction, { sending: true });

    return _extends$e({}, state, { draftTransaction: newDraftTransaction });
  },

  [SEND_TRANSACTION_COMPLETED]: state => Object.assign({}, state, {
    draftTransaction: buildDraftTransaction()
  }),

  [SEND_TRANSACTION_FAILED]: (state, action) => {
    const newDraftTransaction = Object.assign({}, state.draftTransaction, {
      sending: false,
      error: action.data.error
    });

    return _extends$e({}, state, { draftTransaction: newDraftTransaction });
  },

  [SUPPORT_TRANSACTION_STARTED]: state => _extends$e({}, state, {
    sendingSupport: true
  }),

  [SUPPORT_TRANSACTION_COMPLETED]: state => _extends$e({}, state, {
    sendingSupport: false
  }),

  [SUPPORT_TRANSACTION_FAILED]: (state, action) => _extends$e({}, state, {
    error: action.data.error,
    sendingSupport: false
  }),

  [WALLET_STATUS_COMPLETED]: (state, action) => _extends$e({}, state, {
    walletIsEncrypted: action.result
  }),

  [WALLET_ENCRYPT_START]: state => _extends$e({}, state, {
    walletEncryptPending: true,
    walletEncryptSucceded: null,
    walletEncryptResult: null
  }),

  [WALLET_ENCRYPT_COMPLETED]: (state, action) => _extends$e({}, state, {
    walletEncryptPending: false,
    walletEncryptSucceded: true,
    walletEncryptResult: action.result
  }),

  [WALLET_ENCRYPT_FAILED]: (state, action) => _extends$e({}, state, {
    walletEncryptPending: false,
    walletEncryptSucceded: false,
    walletEncryptResult: action.result
  }),

  [WALLET_DECRYPT_START]: state => _extends$e({}, state, {
    walletDecryptPending: true,
    walletDecryptSucceded: null,
    walletDecryptResult: null
  }),

  [WALLET_DECRYPT_COMPLETED]: (state, action) => _extends$e({}, state, {
    walletDecryptPending: false,
    walletDecryptSucceded: true,
    walletDecryptResult: action.result
  }),

  [WALLET_DECRYPT_FAILED]: (state, action) => _extends$e({}, state, {
    walletDecryptPending: false,
    walletDecryptSucceded: false,
    walletDecryptResult: action.result
  }),

  [WALLET_UNLOCK_START]: state => _extends$e({}, state, {
    walletUnlockPending: true,
    walletUnlockSucceded: null,
    walletUnlockResult: null
  }),

  [WALLET_UNLOCK_COMPLETED]: (state, action) => _extends$e({}, state, {
    walletUnlockPending: false,
    walletUnlockSucceded: true,
    walletUnlockResult: action.result
  }),

  [WALLET_UNLOCK_FAILED]: (state, action) => _extends$e({}, state, {
    walletUnlockPending: false,
    walletUnlockSucceded: false,
    walletUnlockResult: action.result
  }),

  [WALLET_LOCK_START]: state => _extends$e({}, state, {
    walletLockPending: false,
    walletLockSucceded: null,
    walletLockResult: null
  }),

  [WALLET_LOCK_COMPLETED]: (state, action) => _extends$e({}, state, {
    walletLockPending: false,
    walletLockSucceded: true,
    walletLockResult: action.result
  }),

  [WALLET_LOCK_FAILED]: (state, action) => _extends$e({}, state, {
    walletLockPending: false,
    walletLockSucceded: false,
    walletLockResult: action.result
  }),

  [SET_TRANSACTION_LIST_FILTER]: (state, action) => _extends$e({}, state, {
    transactionListFilter: action.data
  }),

  [UPDATE_CURRENT_HEIGHT]: (state, action) => _extends$e({}, state, {
    latestBlock: action.data
  })
}, defaultState$9);

const selectState$5 = state => state.content || {};

const makeSelectContentPositionForUri = uri => reselect.createSelector(selectState$5, makeSelectClaimForUri(uri), (state, claim) => {
  if (!claim) {
    return null;
  }
  const outpoint = `${claim.txid}:${claim.nout}`;
  const id = claim.claim_id;
  return state.positions[id] ? state.positions[id][outpoint] : null;
});

var _extends$f = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

const selectState$6 = state => state.notifications || {};

const selectToast = reselect.createSelector(selectState$6, state => {
  if (state.toasts.length) {
    const { id, params } = state.toasts[0];
    return _extends$f({
      id
    }, params);
  }

  return null;
});

const selectError = reselect.createSelector(selectState$6, state => {
  if (state.errors.length) {
    const { error } = state.errors[0];
    return {
      error
    };
  }

  return null;
});

//      

const selectState$7 = state => state.comments || {};

const selectCommentsById = reselect.createSelector(selectState$7, state => state.byId || {});

const selectCommentsByUri = reselect.createSelector(selectState$7, state => {
  const byUri = state.commentsByUri || {};
  const comments = {};
  Object.keys(byUri).forEach(uri => {
    const claimId = byUri[uri];
    if (claimId === null) {
      comments[uri] = null;
    } else {
      comments[uri] = claimId;
    }
  });
  return comments;
});

const makeSelectCommentsForUri = uri => reselect.createSelector(selectCommentsById, selectCommentsByUri, (byId, byUri) => {
  const claimId = byUri[uri];
  return byId && byId[claimId];
});

function _objectWithoutProperties$2(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

const selectState$8 = state => state.publish || {};

const selectPublishFormValues = reselect.createSelector(selectState$8, state => {
  const formValues = _objectWithoutProperties$2(state, ['pendingPublish']);
  return formValues;
});
const selectIsStillEditing = reselect.createSelector(selectPublishFormValues, publishState => {
  const { editingURI, uri } = publishState;

  if (!editingURI || !uri) {
    return false;
  }

  const { isChannel: currentIsChannel, claimName: currentClaimName, contentName: currentContentName } = parseURI(uri);
  const { isChannel: editIsChannel, claimName: editClaimName, contentName: editContentName } = parseURI(editingURI);

  // Depending on the previous/current use of a channel, we need to compare different things
  // ex: going from a channel to anonymous, the new uri won't return contentName, so we need to use claimName
  const currentName = currentIsChannel ? currentContentName : currentClaimName;
  const editName = editIsChannel ? editContentName : editClaimName;
  return currentName === editName;
});

const selectMyClaimForUri = reselect.createSelector(selectPublishFormValues, selectIsStillEditing, selectClaimsById, selectMyClaimsWithoutChannels, ({ editingURI, uri }, isStillEditing, claimsById, myClaims) => {
  const { contentName, claimName } = parseURI(uri);
  const { claimId: editClaimId } = parseURI(editingURI);

  // If isStillEditing
  // They clicked "edit" from the file page
  // They haven't changed the channel/name after clicking edit
  // Get the claim so they can edit without re-uploading a new file
  return isStillEditing ? claimsById[editClaimId] : myClaims.find(claim => !contentName ? claim.name === claimName : claim.name === contentName || claim.name === claimName);
});

const selectIsResolvingPublishUris = reselect.createSelector(selectState$8, selectResolvingUris, ({ uri, name }, resolvingUris) => {
  if (uri) {
    const isResolvingUri = resolvingUris.includes(uri);
    const { isChannel } = parseURI(uri);

    let isResolvingShortUri;
    if (isChannel) {
      const shortUri = buildURI({ contentName: name });
      isResolvingShortUri = resolvingUris.includes(shortUri);
    }

    return isResolvingUri || isResolvingShortUri;
  }

  return false;
});

const selectTakeOverAmount = reselect.createSelector(selectState$8, selectMyClaimForUri, selectClaimsByUri, ({ name }, myClaimForUri, claimsByUri) => {
  // We only care about the winning claim for the short uri
  const shortUri = buildURI({ contentName: name });
  const claimForShortUri = claimsByUri[shortUri];

  if (!myClaimForUri && claimForShortUri) {
    return claimForShortUri.effective_amount;
  } else if (myClaimForUri && claimForShortUri) {
    // https://github.com/lbryio/lbry/issues/1476
    // We should check the current effective_amount on my claim to see how much additional lbc
    // is needed to win the claim. Currently this is not possible during a takeover.
    // With this, we could say something like, "You have x lbc in support, if you bid y additional LBC you will control the claim"
    // For now just ignore supports. We will just show the winning claim's bid amount
    return claimForShortUri.effective_amount || claimForShortUri.amount;
  }

  return null;
});

//      

const selectState$9 = state => state.tags || {};

const selectKnownTagsByName = reselect.createSelector(selectState$9, state => state.knownTags);

const selectFollowedTagsList = reselect.createSelector(selectState$9, state => state.followedTags);

const selectFollowedTags = reselect.createSelector(selectFollowedTagsList, followedTags => followedTags.map(tag => ({ name: tag })).sort((a, b) => a.name.localeCompare(b.name)));

const selectUnfollowedTags = reselect.createSelector(selectKnownTagsByName, selectFollowedTagsList, (tagsByName, followedTags) => {
  const followedTagsSet = new Set(followedTags);
  let tagsToReturn = [];

  Object.keys(tagsByName).forEach(key => {
    if (!followedTagsSet.has(key)) {
      const { name } = tagsByName[key];
      tagsToReturn.push({ name });
    }
  });

  return tagsToReturn;
});

exports.ACTIONS = action_types;
exports.CLAIM_VALUES = claim;
exports.DEFAULT_FOLLOWED_TAGS = DEFAULT_FOLLOWED_TAGS;
exports.DEFAULT_KNOWN_TAGS = DEFAULT_KNOWN_TAGS;
exports.LICENSES = licenses;
exports.Lbry = lbryProxy;
exports.MATURE_TAGS = MATURE_TAGS;
exports.PAGES = pages;
exports.SEARCH_OPTIONS = SEARCH_OPTIONS;
exports.SEARCH_TYPES = SEARCH_TYPES;
exports.SETTINGS = settings;
exports.SORT_OPTIONS = sort_options;
exports.THUMBNAIL_STATUSES = thumbnail_upload_statuses;
exports.TRANSACTIONS = transaction_types;
exports.batchActions = batchActions;
exports.buildClaimSearchCacheQuery = buildClaimSearchCacheQuery;
exports.buildURI = buildURI;
exports.claimsReducer = claimsReducer;
exports.commentReducer = commentReducer;
exports.contentReducer = contentReducer;
exports.convertToShareLink = convertToShareLink;
exports.creditsToString = creditsToString;
exports.doAbandonClaim = doAbandonClaim;
exports.doAddTag = doAddTag;
exports.doBalanceSubscribe = doBalanceSubscribe;
exports.doBlurSearchInput = doBlurSearchInput;
exports.doCheckAddressIsMine = doCheckAddressIsMine;
exports.doCheckPendingPublishes = doCheckPendingPublishes;
exports.doClaimSearch = doClaimSearch;
exports.doClearPublish = doClearPublish;
exports.doCommentCreate = doCommentCreate;
exports.doCommentList = doCommentList;
exports.doCreateChannel = doCreateChannel;
exports.doDeletePurchasedUri = doDeletePurchasedUri;
exports.doDeleteTag = doDeleteTag;
exports.doDismissError = doDismissError;
exports.doDismissToast = doDismissToast;
exports.doError = doError;
exports.doFetchChannelListMine = doFetchChannelListMine;
exports.doFetchClaimListMine = doFetchClaimListMine;
exports.doFetchClaimsByChannel = doFetchClaimsByChannel;
exports.doFetchFileInfo = doFetchFileInfo;
exports.doFetchFileInfosAndPublishedClaims = doFetchFileInfosAndPublishedClaims;
exports.doFetchTransactions = doFetchTransactions;
exports.doFileGet = doFileGet;
exports.doFileList = doFileList;
exports.doFocusSearchInput = doFocusSearchInput;
exports.doGetNewAddress = doGetNewAddress;
exports.doPrepareEdit = doPrepareEdit;
exports.doPublish = doPublish;
exports.doPurchaseUri = doPurchaseUri;
exports.doResetThumbnailStatus = doResetThumbnailStatus;
exports.doResolveUri = doResolveUri;
exports.doResolveUris = doResolveUris;
exports.doSearch = doSearch;
exports.doSendDraftTransaction = doSendDraftTransaction;
exports.doSendTip = doSendTip;
exports.doSetDraftTransactionAddress = doSetDraftTransactionAddress;
exports.doSetDraftTransactionAmount = doSetDraftTransactionAmount;
exports.doSetFileListSort = doSetFileListSort;
exports.doSetTransactionListFilter = doSetTransactionListFilter;
exports.doToast = doToast;
exports.doToggleTagFollow = doToggleTagFollow;
exports.doTotalBalanceSubscribe = doTotalBalanceSubscribe;
exports.doUpdateBalance = doUpdateBalance;
exports.doUpdateBlockHeight = doUpdateBlockHeight;
exports.doUpdateChannel = doUpdateChannel;
exports.doUpdatePublishForm = doUpdatePublishForm;
exports.doUpdateSearchOptions = doUpdateSearchOptions;
exports.doUpdateSearchQuery = doUpdateSearchQuery;
exports.doUpdateTotalBalance = doUpdateTotalBalance;
exports.doUploadThumbnail = doUploadThumbnail;
exports.doWalletDecrypt = doWalletDecrypt;
exports.doWalletEncrypt = doWalletEncrypt;
exports.doWalletStatus = doWalletStatus;
exports.doWalletUnlock = doWalletUnlock;
exports.fileInfoReducer = fileInfoReducer;
exports.fileReducer = fileReducer;
exports.formatCredits = formatCredits;
exports.formatFullPrice = formatFullPrice;
exports.isClaimNsfw = isClaimNsfw;
exports.isNameValid = isNameValid;
exports.isURIClaimable = isURIClaimable;
exports.isURIValid = isURIValid;
exports.makeSelectAmountForUri = makeSelectAmountForUri;
exports.makeSelectChannelForClaimUri = makeSelectChannelForClaimUri;
exports.makeSelectClaimForUri = makeSelectClaimForUri;
exports.makeSelectClaimIsMine = makeSelectClaimIsMine;
exports.makeSelectClaimIsNsfw = makeSelectClaimIsNsfw;
exports.makeSelectClaimIsPending = makeSelectClaimIsPending;
exports.makeSelectClaimsInChannelForCurrentPageState = makeSelectClaimsInChannelForCurrentPageState;
exports.makeSelectClaimsInChannelForPage = makeSelectClaimsInChannelForPage;
exports.makeSelectCommentsForUri = makeSelectCommentsForUri;
exports.makeSelectContentPositionForUri = makeSelectContentPositionForUri;
exports.makeSelectContentTypeForUri = makeSelectContentTypeForUri;
exports.makeSelectCoverForUri = makeSelectCoverForUri;
exports.makeSelectDateForUri = makeSelectDateForUri;
exports.makeSelectDownloadingForUri = makeSelectDownloadingForUri;
exports.makeSelectFetchingChannelClaims = makeSelectFetchingChannelClaims;
exports.makeSelectFileInfoForUri = makeSelectFileInfoForUri;
exports.makeSelectFirstRecommendedFileForUri = makeSelectFirstRecommendedFileForUri;
exports.makeSelectIsUriResolving = makeSelectIsUriResolving;
exports.makeSelectLoadingForUri = makeSelectLoadingForUri;
exports.makeSelectMetadataForUri = makeSelectMetadataForUri;
exports.makeSelectMetadataItemForUri = makeSelectMetadataItemForUri;
exports.makeSelectNsfwCountForChannel = makeSelectNsfwCountForChannel;
exports.makeSelectNsfwCountFromUris = makeSelectNsfwCountFromUris;
exports.makeSelectPendingByUri = makeSelectPendingByUri;
exports.makeSelectQueryWithOptions = makeSelectQueryWithOptions;
exports.makeSelectRecommendedContentForUri = makeSelectRecommendedContentForUri;
exports.makeSelectSearchUris = makeSelectSearchUris;
exports.makeSelectShortUrlForUri = makeSelectShortUrlForUri;
exports.makeSelectStreamingUrlForUri = makeSelectStreamingUrlForUri;
exports.makeSelectTagsForUri = makeSelectTagsForUri;
exports.makeSelectThumbnailForUri = makeSelectThumbnailForUri;
exports.makeSelectTitleForUri = makeSelectTitleForUri;
exports.makeSelectTotalItemsForChannel = makeSelectTotalItemsForChannel;
exports.makeSelectTotalPagesForChannel = makeSelectTotalPagesForChannel;
exports.normalizeURI = normalizeURI;
exports.notificationsReducer = notificationsReducer;
exports.parseQueryParams = parseQueryParams;
exports.parseURI = parseURI;
exports.publishReducer = publishReducer;
exports.regexAddress = regexAddress;
exports.regexInvalidURI = regexInvalidURI;
exports.savePosition = savePosition;
exports.searchReducer = searchReducer;
exports.selectAbandoningIds = selectAbandoningIds;
exports.selectAllClaimsByChannel = selectAllClaimsByChannel;
exports.selectAllFetchingChannelClaims = selectAllFetchingChannelClaims;
exports.selectAllMyClaimsByOutpoint = selectAllMyClaimsByOutpoint;
exports.selectBalance = selectBalance;
exports.selectBlocks = selectBlocks;
exports.selectChannelClaimCounts = selectChannelClaimCounts;
exports.selectClaimSearchByQuery = selectClaimSearchByQuery;
exports.selectClaimsById = selectClaimsById;
exports.selectClaimsByUri = selectClaimsByUri;
exports.selectCurrentChannelPage = selectCurrentChannelPage;
exports.selectDownloadedUris = selectDownloadedUris;
exports.selectDownloadingByOutpoint = selectDownloadingByOutpoint;
exports.selectDownloadingFileInfos = selectDownloadingFileInfos;
exports.selectDraftTransaction = selectDraftTransaction;
exports.selectDraftTransactionAddress = selectDraftTransactionAddress;
exports.selectDraftTransactionAmount = selectDraftTransactionAmount;
exports.selectDraftTransactionError = selectDraftTransactionError;
exports.selectError = selectError;
exports.selectFailedPurchaseUris = selectFailedPurchaseUris;
exports.selectFetchingClaimSearch = selectFetchingClaimSearch;
exports.selectFetchingMyChannels = selectFetchingMyChannels;
exports.selectFileInfosByOutpoint = selectFileInfosByOutpoint;
exports.selectFileInfosDownloaded = selectFileInfosDownloaded;
exports.selectFileListDownloadedSort = selectFileListDownloadedSort;
exports.selectFileListPublishedSort = selectFileListPublishedSort;
exports.selectFollowedTags = selectFollowedTags;
exports.selectGettingNewAddress = selectGettingNewAddress;
exports.selectHasTransactions = selectHasTransactions;
exports.selectIsFetchingClaimListMine = selectIsFetchingClaimListMine;
exports.selectIsFetchingFileList = selectIsFetchingFileList;
exports.selectIsFetchingFileListDownloadedOrPublished = selectIsFetchingFileListDownloadedOrPublished;
exports.selectIsFetchingTransactions = selectIsFetchingTransactions;
exports.selectIsResolvingPublishUris = selectIsResolvingPublishUris;
exports.selectIsSearching = selectIsSearching;
exports.selectIsSendingSupport = selectIsSendingSupport;
exports.selectIsStillEditing = selectIsStillEditing;
exports.selectLastPurchasedUri = selectLastPurchasedUri;
exports.selectMyActiveClaims = selectMyActiveClaims;
exports.selectMyChannelClaims = selectMyChannelClaims;
exports.selectMyClaimForUri = selectMyClaimForUri;
exports.selectMyClaimUrisWithoutChannels = selectMyClaimUrisWithoutChannels;
exports.selectMyClaims = selectMyClaims;
exports.selectMyClaimsOutpoints = selectMyClaimsOutpoints;
exports.selectMyClaimsRaw = selectMyClaimsRaw;
exports.selectMyClaimsWithoutChannels = selectMyClaimsWithoutChannels;
exports.selectPendingById = selectPendingById;
exports.selectPendingClaims = selectPendingClaims;
exports.selectPlayingUri = selectPlayingUri;
exports.selectPublishFormValues = selectPublishFormValues;
exports.selectPurchaseUriErrorMessage = selectPurchaseUriErrorMessage;
exports.selectPurchasedStreamingUrls = selectPurchasedStreamingUrls;
exports.selectPurchasedUris = selectPurchasedUris;
exports.selectReceiveAddress = selectReceiveAddress;
exports.selectRecentTransactions = selectRecentTransactions;
exports.selectResolvingUris = selectResolvingUris;
exports.selectSearchBarFocused = selectSearchBarFocused;
exports.selectSearchDownloadUris = selectSearchDownloadUris;
exports.selectSearchOptions = selectSearchOptions;
exports.selectSearchState = selectState;
exports.selectSearchSuggestions = selectSearchSuggestions;
exports.selectSearchUrisByQuery = selectSearchUrisByQuery;
exports.selectSearchValue = selectSearchValue;
exports.selectSupportsByOutpoint = selectSupportsByOutpoint;
exports.selectTakeOverAmount = selectTakeOverAmount;
exports.selectToast = selectToast;
exports.selectTotalBalance = selectTotalBalance;
exports.selectTotalDownloadProgress = selectTotalDownloadProgress;
exports.selectTransactionItems = selectTransactionItems;
exports.selectTransactionListFilter = selectTransactionListFilter;
exports.selectTransactionsById = selectTransactionsById;
exports.selectUnfollowedTags = selectUnfollowedTags;
exports.selectUrisLoading = selectUrisLoading;
exports.selectWalletDecryptPending = selectWalletDecryptPending;
exports.selectWalletDecryptResult = selectWalletDecryptResult;
exports.selectWalletDecryptSucceeded = selectWalletDecryptSucceeded;
exports.selectWalletEncryptPending = selectWalletEncryptPending;
exports.selectWalletEncryptResult = selectWalletEncryptResult;
exports.selectWalletEncryptSucceeded = selectWalletEncryptSucceeded;
exports.selectWalletIsEncrypted = selectWalletIsEncrypted;
exports.selectWalletState = selectWalletState;
exports.selectWalletUnlockPending = selectWalletUnlockPending;
exports.selectWalletUnlockResult = selectWalletUnlockResult;
exports.selectWalletUnlockSucceeded = selectWalletUnlockSucceeded;
exports.setSearchApi = setSearchApi;
exports.tagsReducer = tagsReducer;
exports.toQueryString = toQueryString;
exports.walletReducer = walletReducer;
