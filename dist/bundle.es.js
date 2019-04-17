'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

require('proxy-polyfill');
var reselect = require('reselect');
var uuid = _interopDefault(require('uuid/v4'));

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
const UPDATE_BALANCE = 'UPDATE_BALANCE';
const UPDATE_TOTAL_BALANCE = 'UPDATE_TOTAL_BALANCE';
const CHECK_ADDRESS_IS_MINE_STARTED = 'CHECK_ADDRESS_IS_MINE_STARTED';
const CHECK_ADDRESS_IS_MINE_COMPLETED = 'CHECK_ADDRESS_IS_MINE_COMPLETED';
const SEND_TRANSACTION_STARTED = 'SEND_TRANSACTION_STARTED';
const SEND_TRANSACTION_COMPLETED = 'SEND_TRANSACTION_COMPLETED';
const SEND_TRANSACTION_FAILED = 'SEND_TRANSACTION_FAILED';
const FETCH_BLOCK_SUCCESS = 'FETCH_BLOCK_SUCCESS';
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
const FETCH_CHANNEL_CLAIM_COUNT_STARTED = 'FETCH_CHANNEL_CLAIM_COUNT_STARTED';
const FETCH_CHANNEL_CLAIM_COUNT_COMPLETED = 'FETCH_CHANNEL_CLAIM_COUNT_COMPLETED';
const FETCH_CLAIM_LIST_MINE_STARTED = 'FETCH_CLAIM_LIST_MINE_STARTED';
const FETCH_CLAIM_LIST_MINE_COMPLETED = 'FETCH_CLAIM_LIST_MINE_COMPLETED';
const ABANDON_CLAIM_STARTED = 'ABANDON_CLAIM_STARTED';
const ABANDON_CLAIM_SUCCEEDED = 'ABANDON_CLAIM_SUCCEEDED';
const FETCH_CHANNEL_LIST_STARTED = 'FETCH_CHANNEL_LIST_STARTED';
const FETCH_CHANNEL_LIST_COMPLETED = 'FETCH_CHANNEL_LIST_COMPLETED';
const CREATE_CHANNEL_STARTED = 'CREATE_CHANNEL_STARTED';
const CREATE_CHANNEL_COMPLETED = 'CREATE_CHANNEL_COMPLETED';
const PUBLISH_STARTED = 'PUBLISH_STARTED';
const PUBLISH_COMPLETED = 'PUBLISH_COMPLETED';
const PUBLISH_FAILED = 'PUBLISH_FAILED';
const SET_PLAYING_URI = 'SET_PLAYING_URI';
const SET_CONTENT_POSITION = 'SET_CONTENT_POSITION';
const SET_CONTENT_LAST_VIEWED = 'SET_CONTENT_LAST_VIEWED';
const CLEAR_CONTENT_HISTORY_URI = 'CLEAR_CONTENT_HISTORY_URI';
const CLEAR_CONTENT_HISTORY_ALL = 'CLEAR_CONTENT_HISTORY_ALL';

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

// ShapeShift
const GET_SUPPORTED_COINS_START = 'GET_SUPPORTED_COINS_START';
const GET_SUPPORTED_COINS_SUCCESS = 'GET_SUPPORTED_COINS_SUCCESS';
const GET_SUPPORTED_COINS_FAIL = 'GET_SUPPORTED_COINS_FAIL';
const GET_COIN_STATS_START = 'GET_COIN_STATS_START';
const GET_COIN_STATS_SUCCESS = 'GET_COIN_STATS_SUCCESS';
const GET_COIN_STATS_FAIL = 'GET_COIN_STATS_FAIL';
const PREPARE_SHAPE_SHIFT_START = 'PREPARE_SHAPE_SHIFT_START';
const PREPARE_SHAPE_SHIFT_SUCCESS = 'PREPARE_SHAPE_SHIFT_SUCCESS';
const PREPARE_SHAPE_SHIFT_FAIL = 'PREPARE_SHAPE_SHIFT_FAIL';
const GET_ACTIVE_SHIFT_START = 'GET_ACTIVE_SHIFT_START';
const GET_ACTIVE_SHIFT_SUCCESS = 'GET_ACTIVE_SHIFT_SUCCESS';
const GET_ACTIVE_SHIFT_FAIL = 'GET_ACTIVE_SHIFT_FAIL';
const CLEAR_SHAPE_SHIFT = 'CLEAR_SHAPE_SHIFT';

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
    UPDATE_BALANCE: UPDATE_BALANCE,
    UPDATE_TOTAL_BALANCE: UPDATE_TOTAL_BALANCE,
    CHECK_ADDRESS_IS_MINE_STARTED: CHECK_ADDRESS_IS_MINE_STARTED,
    CHECK_ADDRESS_IS_MINE_COMPLETED: CHECK_ADDRESS_IS_MINE_COMPLETED,
    SEND_TRANSACTION_STARTED: SEND_TRANSACTION_STARTED,
    SEND_TRANSACTION_COMPLETED: SEND_TRANSACTION_COMPLETED,
    SEND_TRANSACTION_FAILED: SEND_TRANSACTION_FAILED,
    FETCH_BLOCK_SUCCESS: FETCH_BLOCK_SUCCESS,
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
    FETCH_CHANNEL_CLAIM_COUNT_STARTED: FETCH_CHANNEL_CLAIM_COUNT_STARTED,
    FETCH_CHANNEL_CLAIM_COUNT_COMPLETED: FETCH_CHANNEL_CLAIM_COUNT_COMPLETED,
    FETCH_CLAIM_LIST_MINE_STARTED: FETCH_CLAIM_LIST_MINE_STARTED,
    FETCH_CLAIM_LIST_MINE_COMPLETED: FETCH_CLAIM_LIST_MINE_COMPLETED,
    ABANDON_CLAIM_STARTED: ABANDON_CLAIM_STARTED,
    ABANDON_CLAIM_SUCCEEDED: ABANDON_CLAIM_SUCCEEDED,
    FETCH_CHANNEL_LIST_STARTED: FETCH_CHANNEL_LIST_STARTED,
    FETCH_CHANNEL_LIST_COMPLETED: FETCH_CHANNEL_LIST_COMPLETED,
    CREATE_CHANNEL_STARTED: CREATE_CHANNEL_STARTED,
    CREATE_CHANNEL_COMPLETED: CREATE_CHANNEL_COMPLETED,
    PUBLISH_STARTED: PUBLISH_STARTED,
    PUBLISH_COMPLETED: PUBLISH_COMPLETED,
    PUBLISH_FAILED: PUBLISH_FAILED,
    SET_PLAYING_URI: SET_PLAYING_URI,
    SET_CONTENT_POSITION: SET_CONTENT_POSITION,
    SET_CONTENT_LAST_VIEWED: SET_CONTENT_LAST_VIEWED,
    CLEAR_CONTENT_HISTORY_URI: CLEAR_CONTENT_HISTORY_URI,
    CLEAR_CONTENT_HISTORY_ALL: CLEAR_CONTENT_HISTORY_ALL,
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
    GET_SUPPORTED_COINS_START: GET_SUPPORTED_COINS_START,
    GET_SUPPORTED_COINS_SUCCESS: GET_SUPPORTED_COINS_SUCCESS,
    GET_SUPPORTED_COINS_FAIL: GET_SUPPORTED_COINS_FAIL,
    GET_COIN_STATS_START: GET_COIN_STATS_START,
    GET_COIN_STATS_SUCCESS: GET_COIN_STATS_SUCCESS,
    GET_COIN_STATS_FAIL: GET_COIN_STATS_FAIL,
    PREPARE_SHAPE_SHIFT_START: PREPARE_SHAPE_SHIFT_START,
    PREPARE_SHAPE_SHIFT_SUCCESS: PREPARE_SHAPE_SHIFT_SUCCESS,
    PREPARE_SHAPE_SHIFT_FAIL: PREPARE_SHAPE_SHIFT_FAIL,
    GET_ACTIVE_SHIFT_START: GET_ACTIVE_SHIFT_START,
    GET_ACTIVE_SHIFT_SUCCESS: GET_ACTIVE_SHIFT_SUCCESS,
    GET_ACTIVE_SHIFT_FAIL: GET_ACTIVE_SHIFT_FAIL,
    CLEAR_SHAPE_SHIFT: CLEAR_SHAPE_SHIFT,
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
    FETCH_DATE: FETCH_DATE
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

// eslint-disable-next-line import/prefer-default-export
const ALL = 'all';
const SPEND = 'spend';
const RECEIVE = 'receive';
const PUBLISH = 'publish';
const CHANNEL = 'channel';
const TIP = 'tip';
const SUPPORT = 'support';
const UPDATE = 'update';
const ABANDON = 'abandon';

var transaction_types = /*#__PURE__*/Object.freeze({
    ALL: ALL,
    SPEND: SPEND,
    RECEIVE: RECEIVE,
    PUBLISH: PUBLISH,
    CHANNEL: CHANNEL,
    TIP: TIP,
    SUPPORT: SUPPORT,
    UPDATE: UPDATE,
    ABANDON: ABANDON
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

const AUTH = 'auth';
const BACKUP = 'backup';
const CHANNEL$1 = 'channel';
const DISCOVER = 'discover';
const FILE = 'file';
const DOWNLOADED = 'downloaded';
const PUBLISHED = 'published';
const GET_CREDITS = 'getcredits';
const HELP = 'help';
const INVITE = 'invite';
const PUBLISH$1 = 'publish';
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
    CHANNEL: CHANNEL$1,
    DISCOVER: DISCOVER,
    FILE: FILE,
    DOWNLOADED: DOWNLOADED,
    PUBLISHED: PUBLISHED,
    GET_CREDITS: GET_CREDITS,
    HELP: HELP,
    INVITE: INVITE,
    PUBLISH: PUBLISH$1,
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

const SEARCH_TYPES = {
  FILE: 'file',
  CHANNEL: 'channel',
  SEARCH: 'search'
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

//      

const CHECK_DAEMON_STARTED_TRY_NUMBER = 200;

const Lbry = {
  isConnected: false,
  daemonConnectionString: 'http://localhost:5279',
  pendingPublishTimeout: 20 * 60 * 1000
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

const daemonCallWithResult = (name, params = {}) => new Promise((resolve, reject) => {
  apiCall(name, params, result => {
    resolve(result);
  }, reject);
});

// blobs
Lbry.blob_delete = (params = {}) => daemonCallWithResult('blob_delete', params);
Lbry.blob_list = (params = {}) => daemonCallWithResult('blob_list', params);

// core
Lbry.status = (params = {}) => daemonCallWithResult('status', params);
Lbry.version = () => daemonCallWithResult('version', {});
Lbry.file_delete = (params = {}) => daemonCallWithResult('file_delete', params);
Lbry.file_set_status = (params = {}) => daemonCallWithResult('file_set_status', params);
Lbry.stop = () => daemonCallWithResult('stop', {});

// claims
Lbry.claim_list_by_channel = (params = {}) => daemonCallWithResult('claim_list_by_channel', params);

// wallet
Lbry.account_balance = (params = {}) => daemonCallWithResult('account_balance', params);
Lbry.account_decrypt = () => daemonCallWithResult('account_decrypt', {});
Lbry.account_encrypt = (params = {}) => daemonCallWithResult('account_encrypt', params);
Lbry.account_list = (params = {}) => daemonCallWithResult('account_list', params);
Lbry.address_is_mine = (params = {}) => daemonCallWithResult('address_is_mine', params);
Lbry.wallet_lock = () => daemonCallWithResult('wallet_lock', {});
Lbry.address_unused = (params = {}) => daemonCallWithResult('address_unused', params);
Lbry.wallet_send = (params = {}) => daemonCallWithResult('wallet_send', params);
Lbry.account_unlock = (params = {}) => daemonCallWithResult('account_unlock', params);
Lbry.address_unused = () => daemonCallWithResult('address_unused', {});
Lbry.claim_tip = (params = {}) => daemonCallWithResult('claim_tip', params);

// transactions
Lbry.transaction_list = (params = {}) => daemonCallWithResult('transaction_list', params);
Lbry.utxo_release = (params = {}) => daemonCallWithResult('utxo_release', params);

// sync
Lbry.sync_hash = (params = {}) => daemonCallWithResult('sync_hash', params);
Lbry.sync_apply = (params = {}) => daemonCallWithResult('sync_apply', params);

Lbry.connectPromise = null;
Lbry.connect = () => {
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

  return Lbry.connectPromise;
};

Lbry.getMediaType = (contentType, extname) => {
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
Lbry.file_list = (params = {}) => new Promise((resolve, reject) => {
  apiCall('file_list', params, fileInfos => {
    resolve(fileInfos);
  }, reject);
});

Lbry.claim_list_mine = (params = {}) => new Promise((resolve, reject) => {
  apiCall('claim_list_mine', params, claims => {
    resolve(claims);
  }, reject);
});

Lbry.get = (params = {}) => new Promise((resolve, reject) => {
  apiCall('get', params, streamInfo => {
    resolve(streamInfo);
  }, reject);
});

Lbry.resolve = (params = {}) => new Promise((resolve, reject) => {
  apiCall('resolve', params, data => {
    resolve(data || {});
  }, reject);
});

Lbry.publish = (params = {}) => new Promise((resolve, reject) => {
  if (Lbry.overrides.publish) {
    Lbry.overrides.publish(params).then(resolve, reject);
  } else {
    apiCall('publish', params, resolve, reject);
  }
});

// Allow overriding Lbry methods
Lbry.overrides = {};
Lbry.setOverride = (methodName, newMethod) => {
  Lbry.overrides[methodName] = newMethod;
};

// Allow overriding daemon connection string (e.g. to `/api/proxy` for lbryweb)
Lbry.setDaemonConnectionString = value => {
  Lbry.daemonConnectionString = value;
};

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
    queryParams.push(`claimType=${options[SEARCH_OPTIONS.CLAIM_TYPE]}`);

    // If they are only searching for channels, strip out the media info
    if (options[SEARCH_OPTIONS.CLAIM_TYPE] !== SEARCH_OPTIONS.INCLUDE_CHANNELS) {
      queryParams.push(`mediaType=${[SEARCH_OPTIONS.MEDIA_FILE, SEARCH_OPTIONS.MEDIA_AUDIO, SEARCH_OPTIONS.MEDIA_VIDEO, SEARCH_OPTIONS.MEDIA_TEXT, SEARCH_OPTIONS.MEDIA_IMAGE, SEARCH_OPTIONS.MEDIA_APPLICATION].reduce((acc, currentOption) => options[currentOption] ? `${acc}${currentOption},` : acc, '')}`);
    }
  }

  return queryParams.join('&');
};

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

const channelNameMinLength = 1;
const claimIdMaxLength = 40;

const regexInvalidURI = /[^A-Za-z0-9-]/g;
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

function isNameValid(claimName, checkCase = true) {
  const regexp = new RegExp('^[a-z0-9-]+$', checkCase ? '' : 'i');
  return regexp.test(claimName);
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
  return buildURI({ claimName, path, claimSequence, bidPosition, claimId }, true, 'https://open.lbry.io/');
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

  const queryIsPrefix = query === 'lbry:' || query === 'lbry:/' || query === 'lbry://';

  if (query.startsWith('lbry://') && query !== 'lbry://') {
    // If it starts with a prefix, don't show any autocomplete results
    // They are probably typing/pasting in a lbry uri
    return [{
      value: query,
      type: SEARCH_TYPES.FILE
    }];
  } else if (queryIsPrefix) {
    // If it is a prefix, wait until something else comes to figure out what to do
    return [];
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

const isClaimNsfw = claim => claim && claim.value && claim.value.stream && claim.value.stream.metadata.nsfw;

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
  const { claimId } = parseURI(uri);
  return Boolean(pendingById[claimId]);
});

const makeSelectPendingByUri = uri => reselect.createSelector(selectPendingById, pendingById => {
  const { claimId } = parseURI(uri);
  return pendingById[claimId];
});

const makeSelectClaimForUri = uri => reselect.createSelector(selectClaimsByUri, selectPendingById, (byUri, pendingById) => {
  // Check if a claim is pending first
  // It won't be in claimsByUri because resolving it will return nothing
  const { claimId } = parseURI(uri);
  const pendingClaim = pendingById[claimId];
  if (pendingClaim) {
    return pendingClaim;
  }

  return byUri && byUri[normalizeURI(uri)];
});

const selectMyClaimsRaw = reselect.createSelector(selectState$1, state => state.myClaims);

const selectAbandoningIds = reselect.createSelector(selectState$1, state => Object.keys(state.abandoningById || {}));

const selectMyActiveClaims = reselect.createSelector(selectMyClaimsRaw, selectAbandoningIds, (claims, abandoningIds) => new Set(claims && claims.map(claim => claim.claim_id).filter(claimId => Object.keys(abandoningIds).indexOf(claimId) === -1)));

const makeSelectClaimIsMine = rawUri => {
  const uri = normalizeURI(rawUri);
  return reselect.createSelector(selectClaimsByUri, selectMyActiveClaims, (claims, myClaims) => claims && claims[uri] && claims[uri].claim_id && myClaims.has(claims[uri].claim_id));
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
  const metadata = claim && claim.value && claim.value.stream && claim.value.stream.metadata;

  return metadata || (claim === undefined ? undefined : null);
});

const makeSelectTitleForUri = uri => reselect.createSelector(makeSelectMetadataForUri(uri), metadata => metadata && metadata.title);

const makeSelectContentTypeForUri = uri => reselect.createSelector(makeSelectClaimForUri(uri), claim => {
  const source = claim && claim.value && claim.value.stream && claim.value.stream.source;
  return source ? source.contentType : undefined;
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

const selectMyClaimsWithoutChannels = reselect.createSelector(selectMyClaims, myClaims => myClaims.filter(claim => !claim.name.match(/^@/)));

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
  if (isClaimNsfw(claim)) {
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

const makeSelectRecommendedContentForUri = uri => reselect.createSelector(makeSelectClaimForUri(uri), selectSearchUrisByQuery, (claim, searchUrisByQuery) => {
  const atVanityURI = !uri.includes('#');

  let recommendedContent;
  if (claim) {
    // If we are at a vanity uri, build the full uri so we can properly filter
    const currentUri = atVanityURI ? buildURI({ claimId: claim.claim_id, claimName: claim.name }) : uri;

    const { title } = claim.value.stream.metadata;

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
const makeSelectChannelForClaimUri = (uri, includePrefix = false) => reselect.createSelector(makeSelectClaimForUri(uri), claim => {
  if (!claim) {
    return null;
  }

  const { channel_name: channelName, value } = claim;
  const channelClaimId = value && value.publisherSignature && value.publisherSignature.certificateId;

  return channelName && channelClaimId ? buildURI({ channelName, claimId: channelClaimId }, includePrefix) : null;
});

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

const selectTransactionsById = reselect.createSelector(selectState$2, state => state.transactions);

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
      type: item.claim_name[0] === '@' ? CHANNEL : PUBLISH
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

const makeSelectBlockDate = block => reselect.createSelector(selectBlocks, selectCurrentHeight, (blocks, latestBlock) => {
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

  const difference = latestBlock - block;
  const msSincePublish = difference * 2.5 * 60 * 1000; // Number of blocks * 2.5 minutes in ms
  const publishDate = Date.now() - msSincePublish;
  return new Date(publishDate);
});

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
      console.log(`balance=${balance}`);

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
      console.log(accountList);
      const totalSatoshis = accounts.length === 1 ? accounts[0].satoshis : accounts.reduce((a, b) => a.satoshis + b.satoshis);
      const totalBalance = (Number.isNaN(totalSatoshis) ? 0 : totalSatoshis) / Math.pow(10, 8);
      console.log(totalBalance);
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

function doFetchBlock(height) {
  return dispatch => {
    lbryProxy.block_show({ height }).then(block => {
      dispatch({
        type: FETCH_BLOCK_SUCCESS,
        data: { block }
      });
    });
  };
}

function doGetNewAddress() {
  return dispatch => {
    dispatch({
      type: GET_NEW_ADDRESS_STARTED
    });

    // Removed localStorage use, since address is expected to be stored in redux store
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

    lbryProxy.wallet_send({
      address,
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

function doSendTip(amount, claimId, uri, successCallback, errorCallback) {
  return (dispatch, getState) => {
    const state = getState();
    const balance = selectBalance(state);

    if (balance - amount <= 0) {
      dispatch(doToast({
        message: 'Insufficient credits',
        isError: true
      }));
      return;
    }

    const success = () => {
      dispatch(doToast({
        message: __(`You sent ${amount} LBC as a tip, Mahalo!`),
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

    lbryProxy.claim_tip({
      claim_id: claimId,
      amount: creditsToString(amount)
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
          claim: null,
          claimsInChannel: null,
          certificate: null
        };

        const { claim, certificate, claims_in_channel: claimsInChannel } = uriResolveInfo && !uriResolveInfo.error ? uriResolveInfo : fallbackResolveInfo;

        resolveInfo[uri] = { claim, certificate, claimsInChannel };
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

    lbryProxy.claim_list_mine().then(claims => {
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
  return (dispatch, getState) => {
    const state = getState();
    const myClaims = selectMyClaimsRaw(state);
    const { claim_id: claimId } = myClaims.find(claim => claim.txid === txid && claim.nout === nout);

    dispatch({
      type: ABANDON_CLAIM_STARTED,
      data: {
        claimId
      }
    });

    const errorCallback = () => {
      dispatch(doToast({
        message: 'Transaction failed',
        isError: true
      }));
    };

    const successCallback = results => {
      if (results.success === true) {
        dispatch({
          type: ABANDON_CLAIM_SUCCEEDED,
          data: {
            claimId
          }
        });
        dispatch(doToast({
          message: 'Successfully abandoned your claim'
        }));

        // After abandoning, call claim_list_mine to show the claim as abandoned
        // Also fetch transactions to show the new abandon transaction
        dispatch(doFetchClaimListMine());
        dispatch(doFetchTransactions());
      } else {
        dispatch(doToast({
          message: 'Error abandoning claim',
          isError: true
        }));
      }
    };

    lbryProxy.claim_abandon({
      txid,
      nout
    }).then(successCallback, errorCallback);
  };
}

function doFetchClaimsByChannel(uri, page) {
  return dispatch => {
    dispatch({
      type: FETCH_CHANNEL_CLAIMS_STARTED,
      data: { uri, page }
    });

    lbryProxy.claim_list_by_channel({ uri, page: page || 1 }).then(result => {
      const claimResult = result[uri] || {};
      const { claims_in_channel: claimsInChannel, returned_page: returnedPage } = claimResult;

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

function doFetchClaimCountByChannel(uri) {
  return dispatch => {
    dispatch({
      type: FETCH_CHANNEL_CLAIM_COUNT_STARTED,
      data: { uri }
    });

    lbryProxy.claim_list_by_channel({ uri }).then(result => {
      const claimResult = result[uri];
      const totalClaims = claimResult ? claimResult.claims_in_channel : 0;

      dispatch({
        type: FETCH_CHANNEL_CLAIM_COUNT_COMPLETED,
        data: {
          uri,
          totalClaims
        }
      });
    });
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

    const titleParts = title.toLowerCase().split(' ');
    if (arrayContainsQueryPart(titleParts)) {
      downloadResultsFromQuery.push(fileInfo);
      return;
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
    const { channel_name: channelName, claim_id: claimId, claim_name: claimName } = fileInfo;

    const uriParams = {};

    if (channelName) {
      const claim = claimsById[claimId];
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

    const uri = buildURI(uriParams);
    return uri;
  }) : null;
});

const selectFileListPublishedSort = reselect.createSelector(selectState$3, state => state.fileListPublishedSort);

const selectFileListDownloadedSort = reselect.createSelector(selectState$3, state => state.fileListDownloadedSort);

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

// https://github.com/reactjs/redux/issues/911
function batchActions(...actions) {
  return {
    type: 'BATCH_ACTIONS',
    actions
  };
}

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

function handleFetchResponse(response) {
  return response.status === 200 ? Promise.resolve(response.json()) : Promise.reject(new Error(response.statusText));
}

//      

const DEBOUNCED_SEARCH_SUGGESTION_MS = 300;

// We can't use env's because they aren't passed into node_modules
let CONNECTION_STRING = 'https://lighthouse.lbry.io/';

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
      const uri = buildURI({
        claimName: result.name,
        claimId: result.claimId
      });
      actions.push(doResolveUri(uri));
      uris.push(uri);
    });

    actions.push({
      type: SEARCH_SUCCESS,
      data: {
        query: queryWithOptions,
        uris
      }
    });
    dispatch(batchActions(...actions));
  }).catch(() => {
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

const reducers = {};

const defaultState = {
  channelClaimCounts: {}
};

reducers[RESOLVE_URIS_COMPLETED] = (state, action) => {
  const { resolveInfo } = action.data;
  const byUri = Object.assign({}, state.claimsByUri);
  const byId = Object.assign({}, state.byId);
  const channelClaimCounts = Object.assign({}, state.channelClaimCounts);

  Object.entries(resolveInfo).forEach(([uri, { certificate, claimsInChannel }]) => {
    if (certificate && !Number.isNaN(claimsInChannel)) {
      channelClaimCounts[uri] = claimsInChannel;
    }
  });

  Object.entries(resolveInfo).forEach(([uri, { certificate, claim }]) => {
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
    byId,
    claimsByUri: byUri,
    channelClaimCounts,
    resolvingUris: (state.resolvingUris || []).filter(uri => !resolveInfo[uri])
  });
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
  Object.values(pendingById).filter(pendingClaim => byId[pendingClaim.claim_id]).forEach(pendingClaim => {
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
  const { uri, claims, page } = action.data;

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
  const { channelClaim } = action.data;
  const byId = Object.assign({}, state.byId);
  const myChannelClaims = new Set(state.myChannelClaims);

  byId[channelClaim.claim_id] = channelClaim;
  myChannelClaims.add(channelClaim.claim_id);

  return Object.assign({}, state, {
    byId,
    myChannelClaims
  });
};

reducers[RESOLVE_URIS_STARTED] = (state, action) => {
  const { uris } = action.data;

  const oldResolving = state.resolvingUris || [];
  const newResolving = Object.assign([], oldResolving);

  uris.forEach(uri => {
    if (!newResolving.includes(uri)) {
      newResolving.push(uri);
    }
  });

  return Object.assign({}, state, {
    resolvingUris: newResolving
  });
};

reducers[FETCH_CHANNEL_CLAIM_COUNT_COMPLETED] = (state, action) => {
  const channelClaimCounts = Object.assign({}, state.channelClaimCounts);
  const { uri, totalClaims } = action.data;

  channelClaimCounts[uri] = totalClaims;

  return Object.assign({}, state, {
    channelClaimCounts
  });
};

function claimsReducer(state = defaultState, action) {
  const handler = reducers[action.type];
  if (handler) return handler(state, action);
  return state;
}

var _extends$2 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

const reducers$1 = {};
const defaultState$1 = {
  fileListPublishedSort: DATE_NEW,
  fileListDownloadedSort: DATE_NEW
};

reducers$1[FILE_LIST_STARTED] = state => Object.assign({}, state, {
  isFetchingFileList: true
});

reducers$1[FILE_LIST_SUCCEEDED] = (state, action) => {
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

reducers$1[FETCH_FILE_INFO_STARTED] = (state, action) => {
  const { outpoint } = action.data;
  const newFetching = Object.assign({}, state.fetching);

  newFetching[outpoint] = true;

  return Object.assign({}, state, {
    fetching: newFetching
  });
};

reducers$1[FETCH_FILE_INFO_COMPLETED] = (state, action) => {
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

reducers$1[DOWNLOADING_STARTED] = (state, action) => {
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

reducers$1[DOWNLOADING_PROGRESSED] = (state, action) => {
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

reducers$1[DOWNLOADING_CANCELED] = (state, action) => {
  const { outpoint } = action.data;

  const newDownloading = Object.assign({}, state.downloadingByOutpoint);
  delete newDownloading[outpoint];

  return Object.assign({}, state, {
    downloadingByOutpoint: newDownloading
  });
};

reducers$1[DOWNLOADING_COMPLETED] = (state, action) => {
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

reducers$1[FILE_DELETE] = (state, action) => {
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

reducers$1[LOADING_VIDEO_STARTED] = (state, action) => {
  const { uri } = action.data;

  const newLoading = Object.assign({}, state.urisLoading);
  newLoading[uri] = true;

  const newErrors = _extends$2({}, state.errors);
  if (uri in newErrors) delete newErrors[uri];

  return Object.assign({}, state, {
    urisLoading: newLoading,
    errors: _extends$2({}, newErrors)
  });
};

reducers$1[LOADING_VIDEO_FAILED] = (state, action) => {
  const { uri } = action.data;

  const newLoading = Object.assign({}, state.urisLoading);
  delete newLoading[uri];

  const newErrors = _extends$2({}, state.errors);
  newErrors[uri] = true;

  return Object.assign({}, state, {
    urisLoading: newLoading,
    errors: _extends$2({}, newErrors)
  });
};

reducers$1[FETCH_DATE] = (state, action) => {
  const { time } = action.data;
  if (time) {
    return Object.assign({}, state, {
      publishedDate: time
    });
  }
  return null;
};

reducers$1[SET_FILE_LIST_SORT] = (state, action) => {
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

function fileInfoReducer(state = defaultState$1, action) {
  const handler = reducers$1[action.type];
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

var _extends$3 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

const defaultState$2 = {
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

    return _extends$3({}, state, {
      toasts: newToasts
    });
  },
  [DISMISS_TOAST]: state => {
    const newToasts = state.toasts.slice();
    newToasts.shift();

    return _extends$3({}, state, {
      toasts: newToasts
    });
  },

  // Notifications
  [CREATE_NOTIFICATION]: (state, action) => {
    const notification = action.data;
    const newNotifications = state.notifications.slice();
    newNotifications.push(notification);

    return _extends$3({}, state, {
      notifications: newNotifications
    });
  },
  // Used to mark notifications as read/dismissed
  [EDIT_NOTIFICATION]: (state, action) => {
    const { notification } = action.data;
    let notifications = state.notifications.slice();

    notifications = notifications.map(pastNotification => pastNotification.id === notification.id ? notification : pastNotification);

    return _extends$3({}, state, {
      notifications
    });
  },
  [DELETE_NOTIFICATION]: (state, action) => {
    const { id } = action.data;
    let newNotifications = state.notifications.slice();
    newNotifications = newNotifications.filter(notification => notification.id !== id);

    return _extends$3({}, state, {
      notifications: newNotifications
    });
  },

  // Errors
  [CREATE_ERROR]: (state, action) => {
    const error = action.data;
    const newErrors = state.errors.slice();
    newErrors.push(error);

    return _extends$3({}, state, {
      errors: newErrors
    });
  },
  [DISMISS_ERROR]: state => {
    const newErrors = state.errors.slice();
    newErrors.shift();

    return _extends$3({}, state, {
      errors: newErrors
    });
  }
}, defaultState$2);

var _extends$4 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

const defaultState$3 = {
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
  [SEARCH_START]: state => _extends$4({}, state, {
    searching: true
  }),
  [SEARCH_SUCCESS]: (state, action) => {
    const { query, uris } = action.data;

    return _extends$4({}, state, {
      searching: false,
      urisByQuery: Object.assign({}, state.urisByQuery, { [query]: uris })
    });
  },

  [SEARCH_FAIL]: state => _extends$4({}, state, {
    searching: false
  }),

  [UPDATE_SEARCH_QUERY]: (state, action) => _extends$4({}, state, {
    searchQuery: action.data.query,
    isActive: true
  }),

  [UPDATE_SEARCH_SUGGESTIONS]: (state, action) => _extends$4({}, state, {
    suggestions: _extends$4({}, state.suggestions, {
      [action.data.query]: action.data.suggestions
    })
  }),

  // clear the searchQuery on back/forward unless to search page
  [HISTORY_NAVIGATE]: (state, action) => {
    const { url } = action.data;
    return _extends$4({}, state, {
      searchQuery: url.indexOf('/search') === 0 ? url.slice(14) : '',
      isActive: url.indexOf('/search') === 0,
      suggestions: {}
    });
  },

  // sets isActive to false so the uri will be populated correctly if the
  // user is on a file page. The search query will still be present on any
  // other page
  [DISMISS_NOTIFICATION]: state => _extends$4({}, state, {
    isActive: false
  }),

  [SEARCH_FOCUS]: state => _extends$4({}, state, {
    focused: true
  }),
  [SEARCH_BLUR]: state => _extends$4({}, state, {
    focused: false
  }),
  [UPDATE_SEARCH_OPTIONS]: (state, action) => {
    const { options: oldOptions } = state;
    const newOptions = action.data;
    const options = _extends$4({}, oldOptions, newOptions);
    return _extends$4({}, state, {
      options
    });
  }
}, defaultState$3);

//      

const reducers$2 = {};
const buildDraftTransaction = () => ({
  amount: undefined,
  address: undefined
});

// TODO: Split into common success and failure types
// See details in https://github.com/lbryio/lbry/issues/1307


const defaultState$4 = {
  balance: undefined,
  totalBalance: undefined,
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

reducers$2[FETCH_TRANSACTIONS_STARTED] = state => Object.assign({}, state, {
  fetchingTransactions: true
});

reducers$2[FETCH_TRANSACTIONS_COMPLETED] = (state, action) => {
  const byId = Object.assign({}, state.transactions);

  const { transactions } = action.data;

  transactions.forEach(transaction => {
    byId[transaction.txid] = transaction;
  });

  return Object.assign({}, state, {
    transactions: byId,
    fetchingTransactions: false
  });
};

reducers$2[GET_NEW_ADDRESS_STARTED] = state => Object.assign({}, state, {
  gettingNewAddress: true
});

reducers$2[GET_NEW_ADDRESS_COMPLETED] = (state, action) => {
  const { address } = action.data;

  // Say no to localStorage!
  return Object.assign({}, state, {
    gettingNewAddress: false,
    receiveAddress: address
  });
};

reducers$2[UPDATE_BALANCE] = (state, action) => Object.assign({}, state, {
  balance: action.data.balance
});

reducers$2[UPDATE_TOTAL_BALANCE] = (state, action) => Object.assign({}, state, {
  totalBalance: action.data.totalBalance
});

reducers$2[CHECK_ADDRESS_IS_MINE_STARTED] = state => Object.assign({}, state, {
  checkingAddressOwnership: true
});

reducers$2[CHECK_ADDRESS_IS_MINE_COMPLETED] = state => Object.assign({}, state, {
  checkingAddressOwnership: false
});

reducers$2[SET_DRAFT_TRANSACTION_AMOUNT] = (state, action) => {
  const oldDraft = state.draftTransaction;
  const newDraft = Object.assign({}, oldDraft, {
    amount: parseFloat(action.data.amount)
  });

  return Object.assign({}, state, {
    draftTransaction: newDraft
  });
};

reducers$2[SET_DRAFT_TRANSACTION_ADDRESS] = (state, action) => {
  const oldDraft = state.draftTransaction;
  const newDraft = Object.assign({}, oldDraft, {
    address: action.data.address
  });

  return Object.assign({}, state, {
    draftTransaction: newDraft
  });
};

reducers$2[SEND_TRANSACTION_STARTED] = state => {
  const newDraftTransaction = Object.assign({}, state.draftTransaction, {
    sending: true
  });

  return Object.assign({}, state, {
    draftTransaction: newDraftTransaction
  });
};

reducers$2[SEND_TRANSACTION_COMPLETED] = state => Object.assign({}, state, {
  draftTransaction: buildDraftTransaction()
});

reducers$2[SEND_TRANSACTION_FAILED] = (state, action) => {
  const newDraftTransaction = Object.assign({}, state.draftTransaction, {
    sending: false,
    error: action.data.error
  });

  return Object.assign({}, state, {
    draftTransaction: newDraftTransaction
  });
};

reducers$2[SUPPORT_TRANSACTION_STARTED] = state => Object.assign({}, state, {
  sendingSupport: true
});

reducers$2[SUPPORT_TRANSACTION_COMPLETED] = state => Object.assign({}, state, {
  sendingSupport: false
});

reducers$2[SUPPORT_TRANSACTION_FAILED] = (state, action) => Object.assign({}, state, {
  error: action.data.error,
  sendingSupport: false
});

reducers$2[FETCH_BLOCK_SUCCESS] = (state, action) => {
  const {
    block,
    block: { height }
  } = action.data;
  const blocks = Object.assign({}, state.blocks);

  blocks[height] = block;

  return Object.assign({}, state, { blocks });
};

reducers$2[WALLET_STATUS_COMPLETED] = (state, action) => Object.assign({}, state, {
  walletIsEncrypted: action.result
});

reducers$2[WALLET_ENCRYPT_START] = state => Object.assign({}, state, {
  walletEncryptPending: true,
  walletEncryptSucceded: null,
  walletEncryptResult: null
});

reducers$2[WALLET_ENCRYPT_COMPLETED] = (state, action) => Object.assign({}, state, {
  walletEncryptPending: false,
  walletEncryptSucceded: true,
  walletEncryptResult: action.result
});

reducers$2[WALLET_ENCRYPT_FAILED] = (state, action) => Object.assign({}, state, {
  walletEncryptPending: false,
  walletEncryptSucceded: false,
  walletEncryptResult: action.result
});

reducers$2[WALLET_DECRYPT_START] = state => Object.assign({}, state, {
  walletDecryptPending: true,
  walletDecryptSucceded: null,
  walletDecryptResult: null
});

reducers$2[WALLET_DECRYPT_COMPLETED] = (state, action) => Object.assign({}, state, {
  walletDecryptPending: false,
  walletDecryptSucceded: true,
  walletDecryptResult: action.result
});

reducers$2[WALLET_DECRYPT_FAILED] = (state, action) => Object.assign({}, state, {
  walletDecryptPending: false,
  walletDecryptSucceded: false,
  walletDecryptResult: action.result
});

reducers$2[WALLET_UNLOCK_START] = state => Object.assign({}, state, {
  walletUnlockPending: true,
  walletUnlockSucceded: null,
  walletUnlockResult: null
});

reducers$2[WALLET_UNLOCK_COMPLETED] = (state, action) => Object.assign({}, state, {
  walletUnlockPending: false,
  walletUnlockSucceded: true,
  walletUnlockResult: action.result
});

reducers$2[WALLET_UNLOCK_FAILED] = (state, action) => Object.assign({}, state, {
  walletUnlockPending: false,
  walletUnlockSucceded: false,
  walletUnlockResult: action.result
});

reducers$2[WALLET_LOCK_START] = state => Object.assign({}, state, {
  walletLockPending: false,
  walletLockSucceded: null,
  walletLockResult: null
});

reducers$2[WALLET_LOCK_COMPLETED] = (state, action) => Object.assign({}, state, {
  walletLockPending: false,
  walletLockSucceded: true,
  walletLockResult: action.result
});

reducers$2[WALLET_LOCK_FAILED] = (state, action) => Object.assign({}, state, {
  walletLockPending: false,
  walletLockSucceded: false,
  walletLockResult: action.result
});

reducers$2[SET_TRANSACTION_LIST_FILTER] = (state, action) => Object.assign({}, state, {
  transactionListFilter: action.data
});

reducers$2[UPDATE_CURRENT_HEIGHT] = (state, action) => Object.assign({}, state, {
  latestBlock: action.data
});

function walletReducer(state = defaultState$4, action) {
  const handler = reducers$2[action.type];
  if (handler) return handler(state, action);
  return state;
}

var _extends$5 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

const reducers$3 = {};
const defaultState$5 = {
  positions: {}
};

reducers$3[SET_CONTENT_POSITION] = (state, action) => {
  const { claimId, outpoint, position } = action.data;
  return _extends$5({}, state, {
    positions: _extends$5({}, state.positions, {
      [claimId]: _extends$5({}, state.positions[claimId], {
        [outpoint]: position
      })
    })
  });
};

function contentReducer(state = defaultState$5, action) {
  const handler = reducers$3[action.type];
  if (handler) return handler(state, action);
  return state;
}

const selectState$4 = state => state.content || {};

const makeSelectContentPositionForUri = uri => reselect.createSelector(selectState$4, makeSelectClaimForUri(uri), (state, claim) => {
  if (!claim) {
    return null;
  }
  const outpoint = `${claim.txid}:${claim.nout}`;
  const id = claim.claim_id;
  return state.positions[id] ? state.positions[id][outpoint] : null;
});

var _extends$6 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

const selectState$5 = state => state.notifications || {};

const selectToast = reselect.createSelector(selectState$5, state => {
  if (state.toasts.length) {
    const { id, params } = state.toasts[0];
    return _extends$6({
      id
    }, params);
  }

  return null;
});

const selectError = reselect.createSelector(selectState$5, state => {
  if (state.errors.length) {
    const { error } = state.errors[0];
    return {
      error
    };
  }

  return null;
});

exports.ACTIONS = action_types;
exports.Lbry = lbryProxy;
exports.PAGES = pages;
exports.SEARCH_OPTIONS = SEARCH_OPTIONS;
exports.SEARCH_TYPES = SEARCH_TYPES;
exports.SETTINGS = settings;
exports.SORT_OPTIONS = sort_options;
exports.THUMBNAIL_STATUSES = thumbnail_upload_statuses;
exports.TRANSACTIONS = transaction_types;
exports.batchActions = batchActions;
exports.buildURI = buildURI;
exports.claimsReducer = claimsReducer;
exports.contentReducer = contentReducer;
exports.convertToShareLink = convertToShareLink;
exports.creditsToString = creditsToString;
exports.doAbandonClaim = doAbandonClaim;
exports.doBalanceSubscribe = doBalanceSubscribe;
exports.doBlurSearchInput = doBlurSearchInput;
exports.doCheckAddressIsMine = doCheckAddressIsMine;
exports.doDismissError = doDismissError;
exports.doDismissToast = doDismissToast;
exports.doError = doError;
exports.doFetchBlock = doFetchBlock;
exports.doFetchClaimCountByChannel = doFetchClaimCountByChannel;
exports.doFetchClaimListMine = doFetchClaimListMine;
exports.doFetchClaimsByChannel = doFetchClaimsByChannel;
exports.doFetchFileInfo = doFetchFileInfo;
exports.doFetchFileInfosAndPublishedClaims = doFetchFileInfosAndPublishedClaims;
exports.doFetchTransactions = doFetchTransactions;
exports.doFileList = doFileList;
exports.doFocusSearchInput = doFocusSearchInput;
exports.doGetNewAddress = doGetNewAddress;
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
exports.doTotalBalanceSubscribe = doTotalBalanceSubscribe;
exports.doUpdateBalance = doUpdateBalance;
exports.doUpdateBlockHeight = doUpdateBlockHeight;
exports.doUpdateSearchOptions = doUpdateSearchOptions;
exports.doUpdateSearchQuery = doUpdateSearchQuery;
exports.doUpdateTotalBalance = doUpdateTotalBalance;
exports.doWalletDecrypt = doWalletDecrypt;
exports.doWalletEncrypt = doWalletEncrypt;
exports.doWalletStatus = doWalletStatus;
exports.doWalletUnlock = doWalletUnlock;
exports.fileInfoReducer = fileInfoReducer;
exports.formatCredits = formatCredits;
exports.formatFullPrice = formatFullPrice;
exports.isNameValid = isNameValid;
exports.isURIClaimable = isURIClaimable;
exports.isURIValid = isURIValid;
exports.makeSelectBlockDate = makeSelectBlockDate;
exports.makeSelectChannelForClaimUri = makeSelectChannelForClaimUri;
exports.makeSelectClaimForUri = makeSelectClaimForUri;
exports.makeSelectClaimIsMine = makeSelectClaimIsMine;
exports.makeSelectClaimIsPending = makeSelectClaimIsPending;
exports.makeSelectClaimsInChannelForCurrentPageState = makeSelectClaimsInChannelForCurrentPageState;
exports.makeSelectClaimsInChannelForPage = makeSelectClaimsInChannelForPage;
exports.makeSelectContentPositionForUri = makeSelectContentPositionForUri;
exports.makeSelectContentTypeForUri = makeSelectContentTypeForUri;
exports.makeSelectDownloadingForUri = makeSelectDownloadingForUri;
exports.makeSelectFetchingChannelClaims = makeSelectFetchingChannelClaims;
exports.makeSelectFileInfoForUri = makeSelectFileInfoForUri;
exports.makeSelectFirstRecommendedFileForUri = makeSelectFirstRecommendedFileForUri;
exports.makeSelectIsUriResolving = makeSelectIsUriResolving;
exports.makeSelectLoadingForUri = makeSelectLoadingForUri;
exports.makeSelectMetadataForUri = makeSelectMetadataForUri;
exports.makeSelectNsfwCountForChannel = makeSelectNsfwCountForChannel;
exports.makeSelectNsfwCountFromUris = makeSelectNsfwCountFromUris;
exports.makeSelectPendingByUri = makeSelectPendingByUri;
exports.makeSelectQueryWithOptions = makeSelectQueryWithOptions;
exports.makeSelectRecommendedContentForUri = makeSelectRecommendedContentForUri;
exports.makeSelectSearchUris = makeSelectSearchUris;
exports.makeSelectTitleForUri = makeSelectTitleForUri;
exports.makeSelectTotalItemsForChannel = makeSelectTotalItemsForChannel;
exports.makeSelectTotalPagesForChannel = makeSelectTotalPagesForChannel;
exports.normalizeURI = normalizeURI;
exports.notificationsReducer = notificationsReducer;
exports.parseQueryParams = parseQueryParams;
exports.parseURI = parseURI;
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
exports.selectClaimsById = selectClaimsById;
exports.selectClaimsByUri = selectClaimsByUri;
exports.selectCurrentChannelPage = selectCurrentChannelPage;
exports.selectDownloadingByOutpoint = selectDownloadingByOutpoint;
exports.selectDownloadingFileInfos = selectDownloadingFileInfos;
exports.selectDraftTransaction = selectDraftTransaction;
exports.selectDraftTransactionAddress = selectDraftTransactionAddress;
exports.selectDraftTransactionAmount = selectDraftTransactionAmount;
exports.selectDraftTransactionError = selectDraftTransactionError;
exports.selectError = selectError;
exports.selectFetchingMyChannels = selectFetchingMyChannels;
exports.selectFileInfosByOutpoint = selectFileInfosByOutpoint;
exports.selectFileInfosDownloaded = selectFileInfosDownloaded;
exports.selectFileListDownloadedSort = selectFileListDownloadedSort;
exports.selectFileListPublishedSort = selectFileListPublishedSort;
exports.selectGettingNewAddress = selectGettingNewAddress;
exports.selectHasTransactions = selectHasTransactions;
exports.selectIsFetchingClaimListMine = selectIsFetchingClaimListMine;
exports.selectIsFetchingFileList = selectIsFetchingFileList;
exports.selectIsFetchingFileListDownloadedOrPublished = selectIsFetchingFileListDownloadedOrPublished;
exports.selectIsFetchingTransactions = selectIsFetchingTransactions;
exports.selectIsSearching = selectIsSearching;
exports.selectIsSendingSupport = selectIsSendingSupport;
exports.selectMyActiveClaims = selectMyActiveClaims;
exports.selectMyChannelClaims = selectMyChannelClaims;
exports.selectMyClaims = selectMyClaims;
exports.selectMyClaimsOutpoints = selectMyClaimsOutpoints;
exports.selectMyClaimsRaw = selectMyClaimsRaw;
exports.selectMyClaimsWithoutChannels = selectMyClaimsWithoutChannels;
exports.selectPendingById = selectPendingById;
exports.selectPendingClaims = selectPendingClaims;
exports.selectPlayingUri = selectPlayingUri;
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
exports.selectToast = selectToast;
exports.selectTotalBalance = selectTotalBalance;
exports.selectTotalDownloadProgress = selectTotalDownloadProgress;
exports.selectTransactionItems = selectTransactionItems;
exports.selectTransactionListFilter = selectTransactionListFilter;
exports.selectTransactionsById = selectTransactionsById;
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
exports.toQueryString = toQueryString;
exports.walletReducer = walletReducer;
