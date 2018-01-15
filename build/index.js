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
exports.costInfoReducer = exports.LbryApi = exports.Lbry = undefined;

var _lbry = __webpack_require__(0);

var _lbry2 = _interopRequireDefault(_lbry);

var _lbryapi = __webpack_require__(3);

var _lbryapi2 = _interopRequireDefault(_lbryapi);

var _cost_info = __webpack_require__(8);

var _cost_info2 = _interopRequireDefault(_cost_info);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Lbry = exports.Lbry = _lbry2.default;
var LbryApi = exports.LbryApi = _lbryapi2.default;
var costInfoReducer = exports.costInfoReducer = _cost_info2.default;

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

var LbryApi = {
  exchangePromise: null,
  exchangeLastFetched: null
};

var CONNECTION_STRING = process.env.LBRY_APP_API_URL ? process.env.LBRY_APP_API_URL.replace(/\/*$/, '/') // exactly one slash at the end
: 'https://api.lbry.io/';

var EXCHANGE_RATE_TIMEOUT = 20 * 60 * 1000;

LbryApi.getExchangeRates = function () {
  if (!LbryApi.exchangeLastFetched || Date.now() - LbryApi.exchangeLastFetched > EXCHANGE_RATE_TIMEOUT) {
    LbryApi.exchangePromise = new Promise(function (resolve, reject) {
      LbryApi.call('lbc', 'exchange_rate', {}, 'get', true).then(function (_ref) {
        var LBC_USD = _ref.lbc_usd,
            LBC_BTC = _ref.lbc_btc,
            BTC_USD = _ref.btc_usd;

        var rates = { LBC_USD: LBC_USD, LBC_BTC: LBC_BTC, BTC_USD: BTC_USD };
        resolve(rates);
      }).catch(reject);
    });
    LbryApi.exchangeLastFetched = Date.now();
  }
  return LbryApi.exchangePromise;
};

LbryApi.call = function (resource, action) {
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

exports.default = LbryApi;
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


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = reducer;

var _action_types = __webpack_require__(9);

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

function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;
  var action = arguments[1];

  var handler = reducers[action.type];
  if (handler) return handler(state, action);
  return state;
}

/***/ }),
/* 9 */
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

/***/ })
/******/ ]);