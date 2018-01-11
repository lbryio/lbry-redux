module.exports =
/******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsonrpc = __webpack_require__(2);

var _jsonrpc2 = _interopRequireDefault(_jsonrpc);

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

function getLocal(key) {
  var fallback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;

  var itemRaw = localStorage.getItem(key);
  return itemRaw === null ? fallback : JSON.parse(itemRaw);
}

function setLocal(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

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

      // Check every half second to see if the daemon is accepting connections
      function checkDaemonStarted() {
        tryNum += 1;
        lbryProxy.status().then(resolve).catch(function () {
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

  lbryProxy.publish(params).then(function (result) {
    if (returnPendingTimeout) clearTimeout(returnPendingTimeout);
    publishedCallback(result);
  }, function (err) {
    if (returnPendingTimeout) clearTimeout(returnPendingTimeout);
    errorCallback(err);
  });
};

Lbry.imagePath = function (file) {
  return staticResourcesPath + '/img/' + file;
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

Lbry.getAppVersionInfo = function () {
  return new Promise(function (resolve) {
    /*ipcRenderer.once('version-info-received', (event, versionInfo) => {
      resolve(versionInfo);
    });
    ipcRenderer.send('version-info-requested');*/
  });
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

exports.default = lbryProxy;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _lbry = __webpack_require__(0);

Object.defineProperty(exports, 'lbry', {
  enumerable: true,
  get: function get() {
    return _lbry.lbry;
  }
});

var _lbryio = __webpack_require__(3);

Object.defineProperty(exports, 'lbryio', {
  enumerable: true,
  get: function get() {
    return _lbryio.lbryio;
  }
});

/***/ }),
/* 2 */
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

  var counter = parseInt(sessionStorage.getItem('JSONRPCCounter') || 0, 10);
  var url = connectionString;
  var options = {
    method: 'POST',
    body: JSON.stringify({
      jsonrpc: '2.0',
      method: method,
      params: params,
      id: counter
    })
  };

  sessionStorage.setItem('JSONRPCCounter', counter + 1);

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
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _lbry = __webpack_require__(0);

var _lbry2 = _interopRequireDefault(_lbry);

var _querystring = __webpack_require__(5);

var _querystring2 = _interopRequireDefault(_querystring);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Lbryio = {
  enabled: true,
  authenticationPromise: null,
  exchangePromise: null,
  exchangeLastFetched: null
};

var CONNECTION_STRING = process.env.LBRY_APP_API_URL ? process.env.LBRY_APP_API_URL.replace(/\/*$/, '/') // exactly one slash at the end
: 'https://api.lbry.io/';

var EXCHANGE_RATE_TIMEOUT = 20 * 60 * 1000;

Lbryio.getExchangeRates = function () {
  if (!Lbryio.exchangeLastFetched || Date.now() - Lbryio.exchangeLastFetched > EXCHANGE_RATE_TIMEOUT) {
    Lbryio.exchangePromise = new Promise(function (resolve, reject) {
      Lbryio.call('lbc', 'exchange_rate', {}, 'get', true).then(function (_ref) {
        var LBC_USD = _ref.lbc_usd,
            LBC_BTC = _ref.lbc_btc,
            BTC_USD = _ref.btc_usd;

        var rates = { LBC_USD: LBC_USD, LBC_BTC: LBC_BTC, BTC_USD: BTC_USD };
        resolve(rates);
      }).catch(reject);
    });
    Lbryio.exchangeLastFetched = Date.now();
  }
  return Lbryio.exchangePromise;
};

Lbryio.call = function (resource, action) {
  var params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var method = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'get';

  if (!Lbryio.enabled) {
    console.log(__('Internal API disabled'));
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

  return Lbryio.getAuthToken().then(function (token) {
    var fullParams = _extends({ auth_token: token }, params);
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
  });
};

Lbryio.authToken = null;

Lbryio.getAuthToken = function () {
  return new Promise(function (resolve) {
    if (Lbryio.authToken) {
      resolve(Lbryio.authToken);
    } else {
      /*ipcRenderer.once('auth-token-response', (event, token) => {
        Lbryio.authToken = token;
        return resolve(token);
      });
      ipcRenderer.send('get-auth-token');*/
    }
  });
};

Lbryio.setAuthToken = function (token) {
  Lbryio.authToken = token ? token.toString().trim() : null;
  //ipcRenderer.send('set-auth-token', token);
};

Lbryio.getCurrentUser = function () {
  return Lbryio.call('user', 'me');
};

Lbryio.authenticate = function () {
  if (!Lbryio.enabled) {
    return new Promise(function (resolve) {
      resolve({
        id: 1,
        language: 'en',
        primary_email: 'disabled@lbry.io',
        has_verified_email: true,
        is_identity_verified: true,
        is_reward_approved: false
      });
    });
  }

  if (Lbryio.authenticationPromise === null) {
    Lbryio.authenticationPromise = new Promise(function (resolve, reject) {
      Lbryio.getAuthToken().then(function (token) {
        if (!token || token.length > 60) {
          return false;
        }

        // check that token works
        return Lbryio.getCurrentUser().then(function () {
          return true;
        }).catch(function () {
          return false;
        });
      }).then(function (isTokenValid) {
        if (isTokenValid) {
          return reject;
        }

        return _lbry2.default.status().then(function (status) {
          return Lbryio.call('user', 'new', {
            auth_token: '',
            language: 'en',
            app_id: status.installation_id
          }, 'post');
        }).then(function (response) {
          if (!response.auth_token) {
            throw new Error(__('auth_token is missing from response'));
          }
          return Lbryio.setAuthToken(response.auth_token);
        });
      }).then(Lbryio.getCurrentUser).then(resolve, reject);
    });
  }

  return Lbryio.authenticationPromise;
};

Lbryio.getStripeToken = function () {
  return CONNECTION_STRING.startsWith('http://localhost:') ? 'pk_test_NoL1JWL7i1ipfhVId5KfDZgo' : 'pk_live_e8M4dRNnCCbmpZzduEUZBgJO';
};

exports.default = Lbryio;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ }),
/* 4 */
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
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.decode = exports.parse = __webpack_require__(6);
exports.encode = exports.stringify = __webpack_require__(7);


/***/ }),
/* 6 */
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
/* 7 */
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


/***/ })
/******/ ]);