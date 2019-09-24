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
const IMPORT_CHANNEL_STARTED = 'IMPORT_CHANNEL_STARTED';
const IMPORT_CHANNEL_COMPLETED = 'IMPORT_CHANNEL_COMPLETED';
const IMPORT_CHANNEL_FAILED = 'IMPORT_CHANNEL_FAILED';
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
const CLAIM_SEARCH_BY_TAGS_STARTED = 'CLAIM_SEARCH_BY_TAGS_STARTED';
const CLAIM_SEARCH_BY_TAGS_COMPLETED = 'CLAIM_SEARCH_BY_TAGS_COMPLETED';
const CLAIM_SEARCH_BY_TAGS_FAILED = 'CLAIM_SEARCH_BY_TAGS_FAILED';

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
const FETCH_FILE_INFO_FAILED = 'FETCH_FILE_INFO_FAILED';
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

// Blocked Channels
const TOGGLE_BLOCK_CHANNEL = 'TOGGLE_BLOCK_CHANNEL';

// Sync
const USER_STATE_POPULATE = 'USER_STATE_POPULATE';

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
  IMPORT_CHANNEL_STARTED: IMPORT_CHANNEL_STARTED,
  IMPORT_CHANNEL_COMPLETED: IMPORT_CHANNEL_COMPLETED,
  IMPORT_CHANNEL_FAILED: IMPORT_CHANNEL_FAILED,
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
  CLAIM_SEARCH_BY_TAGS_STARTED: CLAIM_SEARCH_BY_TAGS_STARTED,
  CLAIM_SEARCH_BY_TAGS_COMPLETED: CLAIM_SEARCH_BY_TAGS_COMPLETED,
  CLAIM_SEARCH_BY_TAGS_FAILED: CLAIM_SEARCH_BY_TAGS_FAILED,
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
  FETCH_FILE_INFO_FAILED: FETCH_FILE_INFO_FAILED,
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
  TAG_DELETE: TAG_DELETE,
  TOGGLE_BLOCK_CHANNEL: TOGGLE_BLOCK_CHANNEL,
  USER_STATE_POPULATE: USER_STATE_POPULATE
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
  getMediaType: (contentType, fileName) => {
    if (fileName) {
      const formats = [[/\.(mp4|m4v|webm|flv|f4v|ogv)$/i, 'video'], [/\.(mp3|m4a|aac|wav|flac|ogg|opus)$/i, 'audio'], [/\.(jpeg|jpg|png|gif|svg)$/i, 'image'], [/\.(h|go|ja|java|js|jsx|c|cpp|cs|css|rb|scss|sh|php|py)$/i, 'script'], [/\.(json|csv|txt|log|md|markdown|docx|pdf|xml|yml|yaml)$/i, 'document'], [/\.(pdf|odf|doc|docx|epub|org|rtf)$/i, 'e-book'], [/\.(stl|obj|fbx|gcode)$/i, '3D-file'], [/\.(cbr|cbt|cbz)$/i, 'comic-book'], [/\.(lbry)$/i, 'application']];

      const res = formats.reduce((ret, testpair) => {
        switch (testpair[0].test(ret)) {
          case true:
            return testpair[1];
          default:
            return ret;
        }
      }, fileName);
      return res === fileName ? 'unknown' : res;
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
  channel_import: params => daemonCallWithResult('channel_import', params),
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
  account_balance: () => daemonCallWithResult('account_balance'),
  account_decrypt: () => daemonCallWithResult('account_decrypt', {}),
  account_encrypt: (params = {}) => daemonCallWithResult('account_encrypt', params),
  account_unlock: (params = {}) => daemonCallWithResult('account_unlock', params),
  account_list: (params = {}) => daemonCallWithResult('account_list', params),
  account_send: (params = {}) => daemonCallWithResult('account_send', params),
  account_set: (params = {}) => daemonCallWithResult('account_set', params),
  address_is_mine: (params = {}) => daemonCallWithResult('address_is_mine', params),
  address_unused: (params = {}) => daemonCallWithResult('address_unused', params),
  address_list: (params = {}) => daemonCallWithResult('address_list', params),
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

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
const channelNameMinLength = 1;
const claimIdMaxLength = 40;

// see https://spec.lbry.com/#urls
const regexInvalidURI = /[ =&#:$@%?;/\\"<>%{}|^~[\]`\u{0000}-\u{0008}\u{000b}-\u{000c}\u{000e}-\u{001F}\u{D800}-\u{DFFF}\u{FFFE}-\u{FFFF}]/u;
const regexAddress = /^(b|r)(?=[^0OIl]{32,33})[0-9A-Za-z]{32,33}$/;
const regexPartProtocol = '^((?:lbry://)?)';
const regexPartStreamOrChannelName = '([^:$#/]*)';
const regexPartModifierSeparator = '([:$#]?)([^/]*)';
const queryStringBreaker = '^([\\S]+)([?][\\S]*)';
const separateQuerystring = new RegExp(queryStringBreaker);

/**
 * Parses a LBRY name into its component parts. Throws errors with user-friendly
 * messages for invalid names.
 *
 * Returns a dictionary with keys:
 *   - path (string)
 *   - isChannel (boolean)
 *   - streamName (string, if present)
 *   - streamClaimId (string, if present)
 *   - channelName (string, if present)
 *   - channelClaimId (string, if present)
 *   - primaryClaimSequence (int, if present)
 *   - secondaryClaimSequence (int, if present)
 *   - primaryBidPosition (int, if present)
 *   - secondaryBidPosition (int, if present)
 */

function parseURI(URL, requireProto = false) {
  // Break into components. Empty sub-matches are converted to null

  const componentsRegex = new RegExp(regexPartProtocol + // protocol
  regexPartStreamOrChannelName + // stream or channel name (stops at the first separator or end)
  regexPartModifierSeparator + // modifier separator, modifier (stops at the first path separator or end)
  '(/?)' + // path separator, there should only be one (optional) slash to separate the stream and channel parts
  regexPartStreamOrChannelName + regexPartModifierSeparator);
  // chop off the querystring first
  let QSStrippedURL, qs;
  const qsRegexResult = separateQuerystring.exec(URL);
  if (qsRegexResult) {
    [QSStrippedURL, qs] = qsRegexResult.slice(1).map(match => match || null);
  }

  const cleanURL = QSStrippedURL || URL;
  const regexMatch = componentsRegex.exec(cleanURL) || [];
  const [proto, ...rest] = regexMatch.slice(1).map(match => match || null);
  const path = rest.join('');
  const [streamNameOrChannelName, primaryModSeparator, primaryModValue, pathSep, possibleStreamName, secondaryModSeparator, secondaryModValue] = rest;

  // Validate protocol
  if (requireProto && !proto) {
    throw new Error(__('LBRY URIs must include a protocol prefix (lbry://).'));
  }

  // Validate and process name
  if (!streamNameOrChannelName) {
    throw new Error(__('URI does not include name.'));
  }

  const includesChannel = streamNameOrChannelName.startsWith('@');
  const isChannel = streamNameOrChannelName.startsWith('@') && !possibleStreamName;
  const channelName = includesChannel && streamNameOrChannelName.slice(1);

  if (includesChannel) {
    if (!channelName) {
      throw new Error(__('No channel name after @.'));
    }

    if (channelName.length < channelNameMinLength) {
      throw new Error(__(`Channel names must be at least %s characters.`, channelNameMinLength));
    }
  }

  // Validate and process modifier
  const [primaryClaimId, primaryClaimSequence, primaryBidPosition] = parseURIModifier(primaryModSeparator, primaryModValue);
  const [secondaryClaimId, secondaryClaimSequence, secondaryBidPosition] = parseURIModifier(secondaryModSeparator, secondaryModValue);
  const streamName = includesChannel ? possibleStreamName : streamNameOrChannelName;
  const streamClaimId = includesChannel ? secondaryClaimId : primaryClaimId;
  const channelClaimId = includesChannel && primaryClaimId;

  return _extends({
    isChannel,
    path
  }, streamName ? { streamName } : {}, streamClaimId ? { streamClaimId } : {}, channelName ? { channelName } : {}, channelClaimId ? { channelClaimId } : {}, primaryClaimSequence ? { primaryClaimSequence: parseInt(primaryClaimSequence, 10) } : {}, secondaryClaimSequence ? { secondaryClaimSequence: parseInt(secondaryClaimSequence, 10) } : {}, primaryBidPosition ? { primaryBidPosition: parseInt(primaryBidPosition, 10) } : {}, secondaryBidPosition ? { secondaryBidPosition: parseInt(secondaryBidPosition, 10) } : {}, {

    // The values below should not be used for new uses of parseURI
    // They will not work properly with canonical_urls
    claimName: streamNameOrChannelName,
    claimId: primaryClaimId
  }, streamName ? { contentName: streamName } : {}, qs ? { queryString: qs } : {});
}

function parseURIModifier(modSeperator, modValue) {
  let claimId;
  let claimSequence;
  let bidPosition;

  if (modSeperator) {
    if (!modValue) {
      throw new Error(__(`No modifier provided after separator %s.`, modSeperator));
    }

    if (modSeperator === '#') {
      claimId = modValue;
    } else if (modSeperator === ':') {
      claimSequence = modValue;
    } else if (modSeperator === '$') {
      bidPosition = modValue;
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

  return [claimId, claimSequence, bidPosition];
}

/**
 * Takes an object in the same format returned by parse() and builds a URI.
 *
 * The channelName key will accept names with or without the @ prefix.
 */
function buildURI(UrlObj, includeProto = true, protoDefault = 'lbry://') {
  const {
    streamName,
    streamClaimId,
    channelName,
    channelClaimId,
    primaryClaimSequence,
    primaryBidPosition,
    secondaryClaimSequence,
    secondaryBidPosition
  } = UrlObj,
        deprecatedParts = _objectWithoutProperties(UrlObj, ['streamName', 'streamClaimId', 'channelName', 'channelClaimId', 'primaryClaimSequence', 'primaryBidPosition', 'secondaryClaimSequence', 'secondaryBidPosition']);
  const { claimId, claimName, contentName } = deprecatedParts;

  if (!claimName && !channelName && !streamName) {
    console.error(__("'claimName', 'channelName', and 'streamName' are all empty. One must be present to build a url."));
  }

  const formattedChannelName = channelName && (channelName.startsWith('@') ? channelName : `@${channelName}`);
  const primaryClaimName = claimName || contentName || formattedChannelName || streamName;
  const primaryClaimId = claimId || (formattedChannelName ? channelClaimId : streamClaimId);
  const secondaryClaimName = !claimName && contentName || (formattedChannelName ? streamName : null);
  const secondaryClaimId = secondaryClaimName && streamClaimId;

  return (includeProto ? protoDefault : '') +
  // primaryClaimName will always exist here because we throw above if there is no "name" value passed in
  // $FlowFixMe
  primaryClaimName + (primaryClaimId ? `#${primaryClaimId}` : '') + (primaryClaimSequence ? `:${primaryClaimSequence}` : '') + (primaryBidPosition ? `${primaryBidPosition}` : '') + (secondaryClaimName ? `/${secondaryClaimName}` : '') + (secondaryClaimId ? `#${secondaryClaimId}` : '') + (secondaryClaimSequence ? `:${secondaryClaimSequence}` : '') + (secondaryBidPosition ? `${secondaryBidPosition}` : '');
}

/* Takes a parseable LBRY URL and converts it to standard, canonical format */
function normalizeURI(URL) {
  const {
    streamName,
    streamClaimId,
    channelName,
    channelClaimId,
    primaryClaimSequence,
    primaryBidPosition,
    secondaryClaimSequence,
    secondaryBidPosition
  } = parseURI(URL);

  return buildURI({
    streamName,
    streamClaimId,
    channelName,
    channelClaimId,
    primaryClaimSequence,
    primaryBidPosition,
    secondaryClaimSequence,
    secondaryBidPosition
  });
}

function isURIValid(URL) {
  try {
    parseURI(normalizeURI(URL));
  } catch (error) {
    return false;
  }

  return true;
}

function isNameValid(claimName) {
  return !regexInvalidURI.test(claimName);
}

function isURIClaimable(URL) {
  let parts;
  try {
    parts = parseURI(normalizeURI(URL));
  } catch (error) {
    return false;
  }

  return parts && parts.streamName && !parts.streamClaimId && !parts.isChannel;
}

function convertToShareLink(URL) {
  const {
    streamName,
    streamClaimId,
    channelName,
    channelClaimId,
    primaryBidPosition,
    primaryClaimSequence,
    secondaryBidPosition,
    secondaryClaimSequence
  } = parseURI(URL);
  return buildURI({
    streamName,
    streamClaimId,
    channelName,
    channelClaimId,
    primaryBidPosition,
    primaryClaimSequence,
    secondaryBidPosition,
    secondaryClaimSequence
  }, true, 'https://open.lbry.com/');
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
    const { channelName, streamName, isChannel } = parseURI(uri);
    searchSuggestions.push({
      value: query,
      type: SEARCH_TYPES.SEARCH
    }, {
      value: uri,
      shorthand: isChannel ? channelName : streamName,
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
        const { channelName, streamName, isChannel } = parseURI(uri);

        return {
          value: uri,
          shorthand: isChannel ? channelName : streamName,
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

const selectState$1 = state => state.wallet || {};

const selectWalletState = selectState$1;

const selectWalletIsEncrypted = reselect.createSelector(selectState$1, state => state.walletIsEncrypted);

const selectWalletEncryptPending = reselect.createSelector(selectState$1, state => state.walletEncryptPending);

const selectWalletEncryptSucceeded = reselect.createSelector(selectState$1, state => state.walletEncryptSucceded);

const selectWalletEncryptResult = reselect.createSelector(selectState$1, state => state.walletEncryptResult);

const selectWalletDecryptPending = reselect.createSelector(selectState$1, state => state.walletDecryptPending);

const selectWalletDecryptSucceeded = reselect.createSelector(selectState$1, state => state.walletDecryptSucceded);

const selectWalletDecryptResult = reselect.createSelector(selectState$1, state => state.walletDecryptResult);

const selectWalletUnlockPending = reselect.createSelector(selectState$1, state => state.walletUnlockPending);

const selectWalletUnlockSucceeded = reselect.createSelector(selectState$1, state => state.walletUnlockSucceded);

const selectWalletUnlockResult = reselect.createSelector(selectState$1, state => state.walletUnlockResult);

const selectWalletLockPending = reselect.createSelector(selectState$1, state => state.walletLockPending);

const selectWalletLockSucceeded = reselect.createSelector(selectState$1, state => state.walletLockSucceded);

const selectWalletLockResult = reselect.createSelector(selectState$1, state => state.walletLockResult);

const selectBalance = reselect.createSelector(selectState$1, state => state.balance);

const selectTotalBalance = reselect.createSelector(selectState$1, state => state.totalBalance);

const selectTransactionsById = reselect.createSelector(selectState$1, state => state.transactions || {});

const selectSupportsByOutpoint = reselect.createSelector(selectState$1, state => state.supports || {});

const selectTotalSupports = reselect.createSelector(selectSupportsByOutpoint, byOutpoint => {
  let total = parseFloat("0.0");

  Object.values(byOutpoint).forEach(support => {
    const { amount } = support;
    total = amount ? total + parseFloat(amount) : total;
  });

  return total;
});

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

const selectIsFetchingTransactions = reselect.createSelector(selectState$1, state => state.fetchingTransactions);

const selectIsSendingSupport = reselect.createSelector(selectState$1, state => state.sendingSupport);

const selectReceiveAddress = reselect.createSelector(selectState$1, state => state.receiveAddress);

const selectGettingNewAddress = reselect.createSelector(selectState$1, state => state.gettingNewAddress);

const selectDraftTransaction = reselect.createSelector(selectState$1, state => state.draftTransaction || {});

const selectDraftTransactionAmount = reselect.createSelector(selectDraftTransaction, draft => draft.amount);

const selectDraftTransactionAddress = reselect.createSelector(selectDraftTransaction, draft => draft.address);

const selectDraftTransactionError = reselect.createSelector(selectDraftTransaction, draft => draft.error);

const selectBlocks = reselect.createSelector(selectState$1, state => state.blocks);

const selectCurrentHeight = reselect.createSelector(selectState$1, state => state.latestBlock);

const selectTransactionListFilter = reselect.createSelector(selectState$1, state => state.transactionListFilter || '');

var _extends$2 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties$1(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

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

function createNormalizedClaimSearchKey(options) {
  // Ignore page because we don't care what the last page searched was, we want everything
  // Ignore release_time because that will change depending on when you call claim_search ex: release_time: ">12344567"
  const rest = _objectWithoutProperties$1(options, ['page', 'release_time']);
  const query = JSON.stringify(rest);
  return query;
}

//      

const selectState$2 = state => state.claims || {};

const selectClaimsById = reselect.createSelector(selectState$2, state => state.byId || {});

const selectCurrentChannelPage = reselect.createSelector(selectState$2, state => state.currentChannelPage || 1);

const selectCreatingChannel = reselect.createSelector(selectState$2, state => state.creatingChannel);

const selectCreateChannelError = reselect.createSelector(selectState$2, state => state.createChannelError);

const selectClaimsByUri = reselect.createSelector(selectState$2, selectClaimsById, (state, byId) => {
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

const selectAllClaimsByChannel = reselect.createSelector(selectState$2, state => state.claimsByChannel || {});

const selectPendingById = reselect.createSelector(selectState$2, state => state.pendingById || {});

const selectPendingClaims = reselect.createSelector(selectState$2, state => Object.values(state.pendingById || []));

const makeSelectClaimIsPending = uri => reselect.createSelector(selectPendingById, pendingById => {
  let claimId;

  try {
    const { isChannel, channelClaimId, streamClaimId } = parseURI(uri);
    claimId = isChannel ? channelClaimId : streamClaimId;
  } catch (e) {}

  if (claimId) {
    return Boolean(pendingById[claimId]);
  }
});

const makeSelectPendingByUri = uri => reselect.createSelector(selectPendingById, pendingById => {
  const { isChannel, channelClaimId, streamClaimId } = parseURI(uri);
  const claimId = isChannel ? channelClaimId : streamClaimId;
  return pendingById[claimId];
});

const makeSelectClaimForUri = uri => reselect.createSelector(selectClaimsByUri, selectPendingById, (byUri, pendingById) => {
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
});

const selectMyClaimsRaw = reselect.createSelector(selectState$2, state => state.myClaims);

const selectAbandoningIds = reselect.createSelector(selectState$2, state => Object.keys(state.abandoningById || {}));

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

const selectAllFetchingChannelClaims = reselect.createSelector(selectState$2, state => state.fetchingChannelClaims || {});

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
  const timestamp = claim && claim.value && (claim.value.release_time ? claim.value.release_time * 1000 : claim.meta && claim.meta.creation_timestamp ? claim.meta.creation_timestamp * 1000 : null);
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
  if (!thumbnail || !thumbnail.url) {
    return null;
  }

  return thumbnail.url.trim();
});

const makeSelectCoverForUri = uri => reselect.createSelector(makeSelectClaimForUri(uri), claim => {
  const cover = claim && claim.value && claim.value.cover;
  return cover ? cover.url : undefined;
});

const selectIsFetchingClaimListMine = reselect.createSelector(selectState$2, state => state.isFetchingClaimListMine);

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

const selectFetchingMyChannels = reselect.createSelector(selectState$2, state => state.fetchingMyChannels);

const selectMyChannelClaims = reselect.createSelector(selectState$2, selectClaimsById, (state, byId) => {
  const ids = state.myChannelClaims;
  if (!ids) {
    return ids;
  }

  const claims = [];
  ids.forEach(id => {
    if (byId[id]) {
      // I'm not sure why this check is necessary, but it ought to be a quick fix for https://github.com/lbryio/lbry-desktop/issues/544
      claims.push(byId[id]);
    }
  });

  return claims;
});

const selectResolvingUris = reselect.createSelector(selectState$2, state => state.resolvingUris || []);

const selectChannelImportPending = reselect.createSelector(selectState$2, state => state.pendingChannelImport);

const makeSelectIsUriResolving = uri => reselect.createSelector(selectResolvingUris, resolvingUris => resolvingUris && resolvingUris.indexOf(uri) !== -1);

const selectPlayingUri = reselect.createSelector(selectState$2, state => state.playingUri);

const selectChannelClaimCounts = reselect.createSelector(selectState$2, state => state.channelClaimCounts || {});

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
    // always grab full URL - this can change once search returns canonical
    const currentUri = buildURI({ streamClaimId: claim.claim_id, streamName: claim.name });

    const { title } = claim.value;

    const searchQuery = getSearchQueryString(title ? title.replace(/\//, ' ') : '');

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
  if (!claim || !claim.signing_channel || !claim.signing_channel.canonical_url) {
    return null;
  }

  const { canonical_url: canonicalUrl } = claim.signing_channel;
  return includePrefix ? canonicalUrl : canonicalUrl.slice('lbry://'.length);
});

const makeSelectTagsForUri = uri => reselect.createSelector(makeSelectMetadataForUri(uri), metadata => {
  return metadata && metadata.tags || [];
});

const selectFetchingClaimSearchByQuery = reselect.createSelector(selectState$2, state => state.fetchingClaimSearchByQuery || {});

const selectFetchingClaimSearch = reselect.createSelector(selectFetchingClaimSearchByQuery, fetchingClaimSearchByQuery => Boolean(Object.keys(fetchingClaimSearchByQuery).length));

const selectClaimSearchByQuery = reselect.createSelector(selectState$2, state => state.claimSearchByQuery || {});

const selectClaimSearchByQueryLastPageReached = reselect.createSelector(selectState$2, state => state.claimSearchByQueryLastPageReached || {});

const makeSelectShortUrlForUri = uri => reselect.createSelector(makeSelectClaimForUri(uri), claim => claim && claim.short_url);

const makeSelectCanonicalUrlForUri = uri => reselect.createSelector(makeSelectClaimForUri(uri), claim => claim && claim.canonical_url);

const makeSelectPermanentUrlForUri = uri => reselect.createSelector(makeSelectClaimForUri(uri), claim => claim && claim.permanent_url);

const makeSelectSupportsForUri = uri => reselect.createSelector(selectSupportsByOutpoint, makeSelectClaimForUri(uri), (byOutpoint, claim) => {
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
});

const selectUpdatingChannel = reselect.createSelector(selectState$2, state => state.updatingChannel);

const selectUpdateChannelError = reselect.createSelector(selectState$2, state => state.updateChannelError);

function formatCredits(amount, precision, shortFormat = false) {
  let actualAmount = parseFloat(amount),
      suffix = '';
  if (Number.isNaN(actualAmount)) return '0';

  if (shortFormat) {
    if (actualAmount >= 1000000) {
      actualAmount = actualAmount / 1000000;
      suffix = 'M';
    } else if (actualAmount >= 1000) {
      actualAmount = actualAmount / 1000;
      suffix = 'K';
    }
  }

  return actualAmount.toFixed(precision || 1).replace(/\.?0+$/, '') + suffix;
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
    lbryProxy.account_balance().then(response => {
      const { available } = response;
      const balance = parseFloat(available);
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

function doSendTip(amount, claimId, isSupport, successCallback, errorCallback) {
  return (dispatch, getState) => {
    const state = getState();
    const balance = selectBalance(state);
    const myClaims = selectMyClaimsRaw(state);

    const shouldSupport = isSupport || (myClaims ? myClaims.find(claim => claim.claim_id === claimId) : false);

    if (balance - amount <= 0) {
      dispatch(doToast({
        message: 'Insufficient credits',
        isError: true
      }));
      return;
    }

    const success = () => {
      dispatch(doToast({
        message: shouldSupport ? __(`You deposited ${amount} LBC as a support!`) : __(`You sent ${amount} LBC as a tip, Mahalo!`),
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
      tip: !shouldSupport
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

function doCreateChannel(name, amount, optionalParams) {
  return dispatch => {
    dispatch({
      type: CREATE_CHANNEL_STARTED
    });

    const createParams = {
      name,
      bid: creditsToString(amount)
    };

    if (optionalParams) {
      if (optionalParams.title) {
        createParams.title = optionalParams.title;
      }
      if (optionalParams.coverUrl) {
        createParams.cover_url = optionalParams.coverUrl;
      }
      if (optionalParams.thumbnailUrl) {
        createParams.thumbnail_url = optionalParams.thumbnailUrl;
      }
      if (optionalParams.description) {
        createParams.description = optionalParams.description;
      }
      if (optionalParams.website) {
        createParams.website_url = optionalParams.website;
      }
      if (optionalParams.email) {
        createParams.email = optionalParams.email;
      }
      if (optionalParams.tags) {
        createParams.tags = optionalParams.tags.map(tag => tag.name);
      }
    }

    return lbryProxy.channel_create(createParams)
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
        data: error.message
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
      cover_url: params.coverUrl,
      thumbnail_url: params.thumbnailUrl,
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

function doImportChannel(certificate) {
  return dispatch => {
    dispatch({
      type: IMPORT_CHANNEL_STARTED
    });

    return lbryProxy.channel_import({ channel_data: certificate }).then(result => {
      dispatch({
        type: IMPORT_CHANNEL_COMPLETED
      });
    }).catch(error => {
      dispatch({
        type: IMPORT_CHANNEL_FAILED,
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

function doClaimSearch(options = {
  page_size: 10
}) {
  const query = createNormalizedClaimSearchKey(options);
  return dispatch => {
    dispatch({
      type: CLAIM_SEARCH_STARTED,
      data: { query: query }
    });

    const success = data => {
      const resolveInfo = {};
      const urls = [];
      data.items.forEach(stream => {
        resolveInfo[stream.canonical_url] = { stream };
        urls.push(stream.canonical_url);
      });

      dispatch({
        type: CLAIM_SEARCH_COMPLETED,
        data: {
          query,
          resolveInfo,
          urls,
          append: options.page && options.page !== 1,
          pageSize: options.page_size
        }
      });
    };

    const failure = err => {
      dispatch({
        type: CLAIM_SEARCH_FAILED,
        data: { query },
        error: err
      });
    };

    lbryProxy.claim_search(options).then(success, failure);
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

const selectUrisLoading = reselect.createSelector(selectState$3, state => state.fetching || {});

const makeSelectLoadingForUri = uri => reselect.createSelector(selectUrisLoading, makeSelectClaimForUri(uri), (fetchingByOutpoint, claim) => {
  if (!claim) {
    return false;
  }

  const { txid, nout } = claim;
  const outpoint = `${txid}:${nout}`;
  const isFetching = fetchingByOutpoint[outpoint];
  return isFetching;
});

const selectFileInfosDownloaded = reselect.createSelector(selectFileInfosByOutpoint, selectMyClaims, (byOutpoint, myClaims) => Object.values(byOutpoint).filter(fileInfo => {
  const myClaimIds = myClaims.map(claim => claim.claim_id);

  return fileInfo && myClaimIds.indexOf(fileInfo.claim_id) === -1 && (fileInfo.completed || fileInfo.written_bytes > 0 || fileInfo.blobs_completed > 0);
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

const selectFileListPublishedSort = reselect.createSelector(selectState$3, state => state.fileListPublishedSort);

const selectFileListDownloadedSort = reselect.createSelector(selectState$3, state => state.fileListDownloadedSort);

const selectDownloadedUris = reselect.createSelector(selectFileInfosDownloaded,
// We should use permament_url but it doesn't exist in file_list
info => info.slice().reverse().map(claim => `lbry://${claim.claim_name}#${claim.claim_id}`));

const makeSelectMediaTypeForUri = uri => reselect.createSelector(makeSelectFileInfoForUri(uri), makeSelectContentTypeForUri(uri), (fileInfo, contentType) => {
  if (!fileInfo && !contentType) {
    return undefined;
  }

  const fileName = fileInfo && fileInfo.file_name;
  return lbryProxy.getMediaType(contentType, fileName);
});

const makeSelectUriIsStreamable = uri => reselect.createSelector(makeSelectMediaTypeForUri(uri), mediaType => {
  const isStreamable = ['audio', 'video', 'image'].indexOf(mediaType) !== -1;
  return isStreamable;
});

const makeSelectDownloadPathForUri = uri => reselect.createSelector(makeSelectFileInfoForUri(uri), fileInfo => {
  return fileInfo && fileInfo.download_path;
});

const makeSelectFilePartlyDownloaded = uri => reselect.createSelector(makeSelectFileInfoForUri(uri), fileInfo => {
  if (!fileInfo) {
    return false;
  }

  return fileInfo.written_bytes > 0 || fileInfo.blobs_completed > 0;
});

const makeSelectFileNameForUri = uri => reselect.createSelector(makeSelectFileInfoForUri(uri), fileInfo => {
  return fileInfo && fileInfo.file_name;
});

//      

const selectState$4 = state => state.file || {};

const selectPurchaseUriErrorMessage = reselect.createSelector(selectState$4, state => state.purchaseUriErrorMessage);

const selectFailedPurchaseUris = reselect.createSelector(selectState$4, state => state.failedPurchaseUris);

const selectPurchasedUris = reselect.createSelector(selectState$4, state => state.purchasedUris);

const selectLastPurchasedUri = reselect.createSelector(selectState$4, state => state.purchasedUris.length > 0 ? state.purchasedUris[state.purchasedUris.length - 1] : null);

const makeSelectStreamingUrlForUri = uri => reselect.createSelector(makeSelectFileInfoForUri(uri), fileInfo => {
  return fileInfo && fileInfo.streaming_url;
});

//      

function doFileGet(uri, saveFile = true, onSuccess) {
  return (dispatch, getState) => {
    const state = getState();
    const { nout, txid } = makeSelectClaimForUri(uri)(state);
    const outpoint = `${txid}:${nout}`;

    dispatch({
      type: FETCH_FILE_INFO_STARTED,
      data: {
        outpoint
      }
    });

    // set save_file argument to True to save the file (old behaviour)
    lbryProxy.get({ uri, save_file: saveFile }).then(streamInfo => {
      const timeout = streamInfo === null || typeof streamInfo !== 'object' || streamInfo.error === 'Timeout';

      if (timeout) {
        dispatch({
          type: FETCH_FILE_INFO_FAILED,
          data: { outpoint }
        });

        dispatch(doToast({ message: `File timeout for uri ${uri}`, isError: true }));
      } else {
        // purchase was completed successfully
        dispatch({
          type: PURCHASE_URI_COMPLETED,
          data: { uri }
        });
        dispatch({
          type: FETCH_FILE_INFO_COMPLETED,
          data: {
            fileInfo: streamInfo,
            outpoint: streamInfo.outpoint
          }
        });

        if (onSuccess) {
          onSuccess(streamInfo);
        }
      }
    }).catch(() => {
      dispatch({
        type: PURCHASE_URI_FAILED,
        data: { uri }
      });

      dispatch({
        type: FETCH_FILE_INFO_FAILED,
        data: { outpoint }
      });

      dispatch(doToast({
        message: `Failed to view ${uri}, please try again. If this problem persists, visit https://lbry.com/faq/support for support.`,
        isError: true
      }));
    });
  };
}

function doPurchaseUri(uri, costInfo, saveFile = true, onSuccess) {
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

    if (!saveFile && (alreadyDownloading || alreadyStreaming)) {
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

    dispatch(doFileGet(uri, saveFile, onSuccess));
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

function _objectWithoutProperties$2(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

const selectState$5 = state => state.publish || {};

const selectPublishFormValues = reselect.createSelector(selectState$5, state => {
  const formValues = _objectWithoutProperties$2(state, ['pendingPublish']);
  return formValues;
});
const makeSelectPublishFormValue = item => reselect.createSelector(selectState$5, state => state[item]);

// Is the current uri the same as the uri they clicked "edit" on
const selectIsStillEditing = reselect.createSelector(selectPublishFormValues, publishState => {
  const { editingURI, uri } = publishState;

  if (!editingURI || !uri) {
    return false;
  }

  const {
    isChannel: currentIsChannel,
    streamName: currentClaimName,
    channelName: currentContentName
  } = parseURI(uri);
  const {
    isChannel: editIsChannel,
    streamName: editClaimName,
    channelName: editContentName
  } = parseURI(editingURI);

  // Depending on the previous/current use of a channel, we need to compare different things
  // ex: going from a channel to anonymous, the new uri won't return contentName, so we need to use claimName
  const currentName = currentIsChannel ? currentContentName : currentClaimName;
  const editName = editIsChannel ? editContentName : editClaimName;
  return currentName === editName;
});

const selectMyClaimForUri = reselect.createSelector(selectPublishFormValues, selectIsStillEditing, selectClaimsById, selectMyClaimsWithoutChannels, ({ editingURI, uri }, isStillEditing, claimsById, myClaims) => {
  const { channelName: contentName, streamName: claimName } = parseURI(uri);
  const { streamClaimId: editClaimId } = parseURI(editingURI);

  // If isStillEditing
  // They clicked "edit" from the file page
  // They haven't changed the channel/name after clicking edit
  // Get the claim so they can edit without re-uploading a new file
  return isStillEditing ? claimsById[editClaimId] : myClaims.find(claim => !contentName ? claim.name === claimName : claim.name === contentName || claim.name === claimName);
});

const selectIsResolvingPublishUris = reselect.createSelector(selectState$5, selectResolvingUris, ({ uri, name }, resolvingUris) => {
  if (uri) {
    const isResolvingUri = resolvingUris.includes(uri);
    const { isChannel } = parseURI(uri);

    let isResolvingShortUri;
    if (isChannel && name) {
      const shortUri = buildURI({ streamName: name });
      isResolvingShortUri = resolvingUris.includes(shortUri);
    }

    return isResolvingUri || isResolvingShortUri;
  }

  return false;
});

const selectTakeOverAmount = reselect.createSelector(selectState$5, selectMyClaimForUri, selectClaimsByUri, ({ name }, myClaimForUri, claimsByUri) => {
  if (!name) {
    return null;
  }

  // We only care about the winning claim for the short uri
  const shortUri = buildURI({ streamName: name });
  const claimForShortUri = claimsByUri[shortUri];

  if (!myClaimForUri && claimForShortUri) {
    return claimForShortUri.meta.effective_amount;
  } else if (myClaimForUri && claimForShortUri) {
    // https://github.com/lbryio/lbry/issues/1476
    // We should check the current effective_amount on my claim to see how much additional lbc
    // is needed to win the claim. Currently this is not possible during a takeover.
    // With this, we could say something like, "You have x lbc in support, if you bid y additional LBC you will control the claim"
    // For now just ignore supports. We will just show the winning claim's bid amount
    return claimForShortUri.meta.effective_amount || claimForShortUri.amount;
  }

  return null;
});

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

const doUploadThumbnail = (filePath, thumbnailBuffer, fsAdapter, fs, path) => dispatch => {
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
      // $FlowFixMe
      data.append('file', { uri: 'file://' + filePath, type: fileType, name: fileName });

      return fetch('https://spee.ch/api/claim/publish', {
        method: 'POST',
        body: data
      }).then(response => response.json()).then(json => json.success ? dispatch({
        type: UPDATE_PUBLISH_FORM,
        data: {
          uploadThumbnailStatus: COMPLETE,
          thumbnail: `${json.data.url}.${fileExt}`
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

const doPrepareEdit = (claim, uri, fileInfo, fs) => dispatch => {
  const { name, amount, value = {} } = claim;
  const channelName = claim && claim.signing_channel && claim.signing_channel.name || null;
  const {
    author,
    description,
    // use same values as default state
    // fee will be undefined for free content
    fee = {
      amount: '0',
      currency: 'LBC'
    },
    languages,
    license,
    license_url: licenseUrl,
    thumbnail,
    title,
    tags
  } = value;

  const publishData = {
    name,
    bid: amount,
    contentIsFree: fee.amount === '0',
    author,
    description,
    fee,
    languages,
    thumbnail: thumbnail ? thumbnail.url : null,
    title,
    uri,
    uploadThumbnailStatus: thumbnail ? MANUAL : undefined,
    licenseUrl,
    nsfw: isClaimNsfw(claim),
    tags: tags ? tags.map(tag => ({ name: tag })) : []
  };

  // Make sure custom licenses are mapped properly
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
  if (channelName) {
    publishData['channel'] = channelName;
  }

  dispatch({ type: DO_PREPARE_EDIT, data: publishData });
};

const doPublish = (success, fail) => (dispatch, getState) => {
  dispatch({ type: PUBLISH_START });

  const state = getState();
  const myClaimForUri = selectMyClaimForUri(state);
  const myChannels = selectMyChannelClaims(state);
  const myClaims = selectMyClaimsWithoutChannels(state);
  // get redux publish form
  const publishData = selectPublishFormValues(state);

  // destructure the data values
  const {
    name,
    bid,
    filePath,
    description,
    language,
    license,
    licenseUrl,
    licenseType,
    otherLicenseDescription,
    thumbnail,
    channel,
    title,
    contentIsFree,
    fee,
    uri,
    tags,
    locations
  } = publishData;

  let publishingLicense;
  switch (licenseType) {
    case COPYRIGHT:
    case OTHER:
      publishingLicense = otherLicenseDescription;
      break;
    default:
      publishingLicense = licenseType;
  }

  // get the claim id from the channel name, we will use that instead
  const namedChannelClaim = myChannels.find(myChannel => myChannel.name === channel);
  const channelId = namedChannelClaim ? namedChannelClaim.claim_id : '';

  const publishPayload = {
    name,
    title,
    description,
    locations: locations,
    bid: creditsToString(bid),
    languages: [language],
    tags: tags && tags.map(tag => tag.name),
    thumbnail_url: thumbnail
  };
  // Temporary solution to keep the same publish flow with the new tags api
  // Eventually we will allow users to enter their own tags on publish
  // `nsfw` will probably be removed

  if (publishingLicense) {
    publishPayload.license = publishingLicense;
  }

  if (licenseUrl) {
    publishPayload.license_url = licenseUrl;
  }

  if (thumbnail) {
    publishPayload.thumbnail_url = thumbnail;
  }

  // Set release time to curret date. On edits, keep original release/transaction time as release_time
  if (myClaimForUri && myClaimForUri.value.release_time) {
    publishPayload.release_time = Number(myClaimForUri.value.release_time);
  } else if (myClaimForUri && myClaimForUri.timestamp) {
    publishPayload.release_time = Number(myClaimForUri.timestamp);
  } else {
    publishPayload.release_time = Number(Math.round(Date.now() / 1000));
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

  return lbryProxy.publish(publishPayload).then(success, fail);
};

// Calls claim_list_mine until any pending publishes are confirmed
const doCheckPendingPublishes = onConfirmed => (dispatch, getState) => {
  const state = getState();
  const pendingById = selectPendingById(state);

  if (!Object.keys(pendingById).length) {
    return;
  }

  let publishCheckInterval;

  const checkFileList = () => {
    lbryProxy.claim_list().then(claims => {
      // $FlowFixMe
      claims.forEach(claim => {
        // If it's confirmed, check if it was pending previously
        if (claim.confirmations > 0 && pendingById[claim.claim_id]) {
          delete pendingById[claim.claim_id];
          if (onConfirmed) {
            onConfirmed(claim);
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
      if (result) {
        const { name, claimId } = result;
        const urlObj = {};

        if (name.startsWith('@')) {
          urlObj.channelName = name;
          urlObj.channelClaimId = claimId;
        } else {
          urlObj.streamName = name;
          urlObj.streamClaimId = claimId;
        }

        const url = buildURI(urlObj);
        actions.push(doResolveUri(url));
        uris.push(url);
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

//      

const doToggleBlockChannel = uri => ({
  type: TOGGLE_BLOCK_CHANNEL,
  data: {
    uri
  }
});

var _extends$5 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function extractUserState(rawObj) {
  if (rawObj && rawObj.version === '0.1' && rawObj.shared) {
    const { subscriptions, tags } = rawObj.shared;

    return _extends$5({}, subscriptions ? { subscriptions } : {}, tags ? { tags } : {});
  }

  return {};
}

function doPopulateSharedUserState(settings) {
  return dispatch => {
    const { subscriptions, tags } = extractUserState(settings);
    dispatch({ type: USER_STATE_POPULATE, data: { subscriptions, tags } });
  };
}

var _extends$6 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

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
  myChannelClaims: undefined,
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
  pendingChannelImport: false
};

function handleClaimAction(state, action) {
  const {
    resolveInfo
  } = action.data;
  const byUri = Object.assign({}, state.claimsByUri);
  const byId = Object.assign({}, state.byId);
  const channelClaimCounts = Object.assign({}, state.channelClaimCounts);
  let newResolvingUrls = new Set(state.resolvingUris);

  Object.entries(resolveInfo).forEach(([url, resolveResponse]) => {
    // $FlowFixMe
    const { claimsInChannel, stream, channel } = resolveResponse;
    if (claimsInChannel) {
      channelClaimCounts[url] = claimsInChannel;
    }

    if (stream) {
      byId[stream.claim_id] = stream;
      byUri[url] = stream.claim_id;
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
    resolvingUris: Array.from(newResolvingUrls)
  });
}

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

reducers[RESOLVE_URIS_COMPLETED] = (state, action) => {
  return _extends$6({}, handleClaimAction(state, action));
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
      byId[claim.claim_id] = claim;
    });
  }

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
      claimsByUri[claim.canonical_url] = claim.claim_id;
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

reducers[CREATE_CHANNEL_STARTED] = state => _extends$6({}, state, {
  creatingChannel: true,
  createChannelError: null
});

reducers[CREATE_CHANNEL_COMPLETED] = (state, action) => {
  const channelClaim = action.data.channelClaim;
  const byId = Object.assign({}, state.byId);
  const myChannelClaims = new Set(state.myChannelClaims);

  byId[channelClaim.claim_id] = channelClaim;
  myChannelClaims.add(channelClaim.claim_id);

  return Object.assign({}, state, {
    byId,
    myChannelClaims,
    creatingChannel: false
  });
};

reducers[CREATE_CHANNEL_FAILED] = (state, action) => {
  return Object.assign({}, state, {
    creatingChannel: false,
    createChannelError: action.data
  });
};

reducers[UPDATE_CHANNEL_STARTED] = (state, action) => {
  return Object.assign({}, state, {
    updateChannelError: '',
    updatingChannel: true
  });
};

reducers[UPDATE_CHANNEL_COMPLETED] = (state, action) => {
  const channelClaim = action.data.channelClaim;
  const byId = Object.assign({}, state.byId);

  byId[channelClaim.claim_id] = channelClaim;

  return Object.assign({}, state, {
    byId,
    updateChannelError: '',
    updatingChannel: false
  });
};

reducers[UPDATE_CHANNEL_FAILED] = (state, action) => {
  return Object.assign({}, state, {
    updateChannelError: action.data.message,
    updatingChannel: false
  });
};

reducers[IMPORT_CHANNEL_STARTED] = state => Object.assign({}, state, { pendingChannelImports: true });

reducers[IMPORT_CHANNEL_COMPLETED] = state => Object.assign({}, state, { pendingChannelImports: false });

reducers[CLAIM_SEARCH_STARTED] = (state, action) => {
  const fetchingClaimSearchByQuery = Object.assign({}, state.fetchingClaimSearchByQuery);
  fetchingClaimSearchByQuery[action.data.query] = true;

  return Object.assign({}, state, {
    fetchingClaimSearchByQuery
  });
};

reducers[CLAIM_SEARCH_COMPLETED] = (state, action) => {
  const fetchingClaimSearchByQuery = Object.assign({}, state.fetchingClaimSearchByQuery);
  const claimSearchByQuery = Object.assign({}, state.claimSearchByQuery);
  const claimSearchByQueryLastPageReached = Object.assign({}, state.claimSearchByQueryLastPageReached);
  const { append, query, urls, pageSize } = action.data;

  if (append) {
    // todo: check for duplicate urls when concatenating?
    claimSearchByQuery[query] = claimSearchByQuery[query] && claimSearchByQuery[query].length ? claimSearchByQuery[query].concat(urls) : urls;
  } else {
    claimSearchByQuery[query] = urls;
  }

  // the returned number of urls is less than the page size, so we're on the last page
  claimSearchByQueryLastPageReached[query] = urls.length < pageSize;

  delete fetchingClaimSearchByQuery[query];

  return Object.assign({}, state, _extends$6({}, handleClaimAction(state, action), {
    claimSearchByQuery,
    claimSearchByQueryLastPageReached,
    fetchingClaimSearchByQuery
  }));
};

reducers[CLAIM_SEARCH_FAILED] = (state, action) => {
  const fetchingClaimSearchByQuery = Object.assign({}, state.fetchingClaimSearchByQuery);
  delete fetchingClaimSearchByQuery[action.data.query];

  return Object.assign({}, state, {
    fetchingClaimSearchByQuery
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

var _extends$7 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

const defaultState$1 = {
  byId: {},
  commentsByUri: {},
  isLoading: false
};

const commentReducer = handleActions({
  [COMMENT_CREATE_STARTED]: (state, action) => _extends$7({}, state, {
    isLoading: true
  }),

  [COMMENT_CREATE_FAILED]: (state, action) => _extends$7({}, state, {
    isLoading: false
  }),

  [COMMENT_CREATE_COMPLETED]: (state, action) => {
    const { comment, claimId } = action.data;
    const byId = Object.assign({}, state.byId);
    const comments = byId[claimId];
    const newComments = comments.slice();

    newComments.unshift(comment);
    byId[claimId] = newComments;

    return _extends$7({}, state, {
      byId
    });
  },

  [COMMENT_LIST_STARTED]: state => _extends$7({}, state, { isLoading: true }),

  [COMMENT_LIST_COMPLETED]: (state, action) => {
    const { comments, claimId, uri } = action.data;
    const byId = Object.assign({}, state.byId);
    const commentsByUri = Object.assign({}, state.commentsByUri);

    if (comments['items']) {
      byId[claimId] = comments['items'];
      commentsByUri[uri] = claimId;
    }
    return _extends$7({}, state, {
      byId,
      commentsByUri,
      isLoading: false
    });
  },

  [COMMENT_LIST_FAILED]: (state, action) => _extends$7({}, state, {
    isLoading: false
  })
}, defaultState$1);

var _extends$8 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

const reducers$1 = {};
const defaultState$2 = {
  positions: {}
};

reducers$1[SET_CONTENT_POSITION] = (state, action) => {
  const { claimId, outpoint, position } = action.data;
  return _extends$8({}, state, {
    positions: _extends$8({}, state.positions, {
      [claimId]: _extends$8({}, state.positions[claimId], {
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

reducers$2[FETCH_FILE_INFO_FAILED] = (state, action) => {
  const { outpoint } = action.data;
  const newFetching = Object.assign({}, state.fetching);
  delete newFetching[outpoint];

  return Object.assign({}, state, {
    fetching: newFetching
  });
};

reducers$2[DOWNLOADING_STARTED] = (state, action) => {
  const { uri, outpoint, fileInfo } = action.data;

  const newByOutpoint = Object.assign({}, state.byOutpoint);
  const newDownloading = Object.assign({}, state.downloadingByOutpoint);

  newDownloading[outpoint] = true;
  newByOutpoint[outpoint] = fileInfo;

  return Object.assign({}, state, {
    downloadingByOutpoint: newDownloading,
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
  const { uri, outpoint } = action.data;

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
  const { uri } = action.data;
  const newPurchasedUris = state.purchasedUris.slice();
  const newFailedPurchaseUris = state.failedPurchaseUris.slice();

  if (!newPurchasedUris.includes(uri)) {
    newPurchasedUris.push(uri);
  }
  if (newFailedPurchaseUris.includes(uri)) {
    newFailedPurchaseUris.splice(newFailedPurchaseUris.indexOf(uri), 1);
  }

  return _extends$9({}, state, {
    failedPurchaseUris: newFailedPurchaseUris,
    purchasedUris: newPurchasedUris,
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

function _objectWithoutProperties$3(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

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
  tags: [],
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
    const publishData = _objectWithoutProperties$3(action.data, []);
    const { channel, name, uri } = publishData;

    // The short uri is what is presented to the user
    // The editingUri is the full uri with claim id
    const shortUri = buildURI({
      channelName: channel,
      streamName: name
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
  followedTags: [],
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
  },
  [USER_STATE_POPULATE]: (state, action) => {
    const { tags } = action.data;
    return _extends$d({}, state, {
      followedTags: tags && tags.length ? tags : DEFAULT_FOLLOWED_TAGS
    });
  }
}, defaultState$8);

//      

const defaultState$9 = {
  blockedChannels: []
};

const blockedReducer = handleActions({
  [TOGGLE_BLOCK_CHANNEL]: (state, action) => {
    const { blockedChannels } = state;
    const { uri } = action.data;
    let newBlockedChannels = blockedChannels.slice();

    if (newBlockedChannels.includes(uri)) {
      newBlockedChannels = newBlockedChannels.filter(id => id !== uri);
    } else {
      newBlockedChannels.push(uri);
    }

    return {
      blockedChannels: newBlockedChannels
    };
  }
}, defaultState$9);

var _extends$e = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

const buildDraftTransaction = () => ({
  amount: undefined,
  address: undefined
});

// TODO: Split into common success and failure types
// See details in https://github.com/lbryio/lbry/issues/1307


const defaultState$a = {
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
}, defaultState$a);

const selectState$6 = state => state.content || {};

const makeSelectContentPositionForUri = uri => reselect.createSelector(selectState$6, makeSelectClaimForUri(uri), (state, claim) => {
  if (!claim) {
    return null;
  }
  const outpoint = `${claim.txid}:${claim.nout}`;
  const id = claim.claim_id;
  return state.positions[id] ? state.positions[id][outpoint] : null;
});

var _extends$f = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

const selectState$7 = state => state.notifications || {};

const selectToast = reselect.createSelector(selectState$7, state => {
  if (state.toasts.length) {
    const { id, params } = state.toasts[0];
    return _extends$f({
      id
    }, params);
  }

  return null;
});

const selectError = reselect.createSelector(selectState$7, state => {
  if (state.errors.length) {
    const { error } = state.errors[0];
    return {
      error
    };
  }

  return null;
});

//      

const selectState$8 = state => state.comments || {};

const selectCommentsById = reselect.createSelector(selectState$8, state => state.byId || {});

const selectCommentsByUri = reselect.createSelector(selectState$8, state => {
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

//      

const selectState$9 = state => state.tags || {};

const selectKnownTagsByName = reselect.createSelector(selectState$9, state => state.knownTags);

const selectFollowedTagsList = reselect.createSelector(selectState$9, state => state.followedTags);

const selectFollowedTags = reselect.createSelector(selectFollowedTagsList, followedTags => followedTags.map(tag => ({ name: tag.toLowerCase() })).sort((a, b) => a.name.localeCompare(b.name)));

const selectUnfollowedTags = reselect.createSelector(selectKnownTagsByName, selectFollowedTagsList, (tagsByName, followedTags) => {
  const followedTagsSet = new Set(followedTags);
  let tagsToReturn = [];
  Object.keys(tagsByName).forEach(key => {
    if (!followedTagsSet.has(key)) {
      const { name } = tagsByName[key];
      tagsToReturn.push({ name: name.toLowerCase() });
    }
  });

  return tagsToReturn;
});

const makeSelectIsFollowingTag = tag => reselect.createSelector(selectFollowedTags, followedTags => {
  return followedTags.some(followedTag => followedTag.name === tag.toLowerCase());
});

//      

const selectState$a = state => state.blocked || {};

const selectBlockedChannels = reselect.createSelector(selectState$a, state => state.blockedChannels);

const selectBlockedChannelsCount = reselect.createSelector(selectBlockedChannels, state => state.length);

const selectChannelIsBlocked = uri => reselect.createSelector(selectBlockedChannels, state => {
  return state.includes(uri);
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
exports.blockedReducer = blockedReducer;
exports.buildURI = buildURI;
exports.claimsReducer = claimsReducer;
exports.commentReducer = commentReducer;
exports.contentReducer = contentReducer;
exports.convertToShareLink = convertToShareLink;
exports.createNormalizedClaimSearchKey = createNormalizedClaimSearchKey;
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
exports.doImportChannel = doImportChannel;
exports.doPopulateSharedUserState = doPopulateSharedUserState;
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
exports.doToggleBlockChannel = doToggleBlockChannel;
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
exports.makeSelectCanonicalUrlForUri = makeSelectCanonicalUrlForUri;
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
exports.makeSelectDownloadPathForUri = makeSelectDownloadPathForUri;
exports.makeSelectDownloadingForUri = makeSelectDownloadingForUri;
exports.makeSelectFetchingChannelClaims = makeSelectFetchingChannelClaims;
exports.makeSelectFileInfoForUri = makeSelectFileInfoForUri;
exports.makeSelectFileNameForUri = makeSelectFileNameForUri;
exports.makeSelectFilePartlyDownloaded = makeSelectFilePartlyDownloaded;
exports.makeSelectFirstRecommendedFileForUri = makeSelectFirstRecommendedFileForUri;
exports.makeSelectIsFollowingTag = makeSelectIsFollowingTag;
exports.makeSelectIsUriResolving = makeSelectIsUriResolving;
exports.makeSelectLoadingForUri = makeSelectLoadingForUri;
exports.makeSelectMediaTypeForUri = makeSelectMediaTypeForUri;
exports.makeSelectMetadataForUri = makeSelectMetadataForUri;
exports.makeSelectMetadataItemForUri = makeSelectMetadataItemForUri;
exports.makeSelectNsfwCountForChannel = makeSelectNsfwCountForChannel;
exports.makeSelectNsfwCountFromUris = makeSelectNsfwCountFromUris;
exports.makeSelectPendingByUri = makeSelectPendingByUri;
exports.makeSelectPermanentUrlForUri = makeSelectPermanentUrlForUri;
exports.makeSelectPublishFormValue = makeSelectPublishFormValue;
exports.makeSelectQueryWithOptions = makeSelectQueryWithOptions;
exports.makeSelectRecommendedContentForUri = makeSelectRecommendedContentForUri;
exports.makeSelectSearchUris = makeSelectSearchUris;
exports.makeSelectShortUrlForUri = makeSelectShortUrlForUri;
exports.makeSelectStreamingUrlForUri = makeSelectStreamingUrlForUri;
exports.makeSelectSupportsForUri = makeSelectSupportsForUri;
exports.makeSelectTagsForUri = makeSelectTagsForUri;
exports.makeSelectThumbnailForUri = makeSelectThumbnailForUri;
exports.makeSelectTitleForUri = makeSelectTitleForUri;
exports.makeSelectTotalItemsForChannel = makeSelectTotalItemsForChannel;
exports.makeSelectTotalPagesForChannel = makeSelectTotalPagesForChannel;
exports.makeSelectUriIsStreamable = makeSelectUriIsStreamable;
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
exports.selectBlockedChannels = selectBlockedChannels;
exports.selectBlockedChannelsCount = selectBlockedChannelsCount;
exports.selectBlocks = selectBlocks;
exports.selectChannelClaimCounts = selectChannelClaimCounts;
exports.selectChannelImportPending = selectChannelImportPending;
exports.selectChannelIsBlocked = selectChannelIsBlocked;
exports.selectClaimSearchByQuery = selectClaimSearchByQuery;
exports.selectClaimSearchByQueryLastPageReached = selectClaimSearchByQueryLastPageReached;
exports.selectClaimsById = selectClaimsById;
exports.selectClaimsByUri = selectClaimsByUri;
exports.selectCreateChannelError = selectCreateChannelError;
exports.selectCreatingChannel = selectCreatingChannel;
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
exports.selectFetchingClaimSearchByQuery = selectFetchingClaimSearchByQuery;
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
exports.selectPurchasedUris = selectPurchasedUris;
exports.selectReceiveAddress = selectReceiveAddress;
exports.selectRecentTransactions = selectRecentTransactions;
exports.selectResolvingUris = selectResolvingUris;
exports.selectSearchBarFocused = selectSearchBarFocused;
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
exports.selectTotalSupports = selectTotalSupports;
exports.selectTransactionItems = selectTransactionItems;
exports.selectTransactionListFilter = selectTransactionListFilter;
exports.selectTransactionsById = selectTransactionsById;
exports.selectUnfollowedTags = selectUnfollowedTags;
exports.selectUpdateChannelError = selectUpdateChannelError;
exports.selectUpdatingChannel = selectUpdatingChannel;
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
