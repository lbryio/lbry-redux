// @flow
import 'proxy-polyfill';

const CHECK_DAEMON_STARTED_TRY_NUMBER = 200;

// This doesn't do much because we have a bunch of different types of methods on the Lbry object
// Types should be added to the return value where they are being used
type LbryMethod = any => Promise<any>;

//
// Basic LBRY sdk connection config
// Offers a proxy to call LBRY sdk methods
//
const Lbry: {
  isConnected: boolean,
  connectPromise: ?Promise<any>,
  daemonConnectionString: string,
  setDaemonConnectionString: string => void,
  overrides: { [string]: ?Function },
  setOverride: (string, Function) => void,
  getMediaType: (string, ?string) => string,
  [string]: LbryMethod,
} = {
  isConnected: false,
  connectPromise: null,
  daemonConnectionString: 'http://localhost:5279',

  // Allow overriding daemon connection string (e.g. to `/api/proxy` for lbryweb)
  // Not required
  setDaemonConnectionString: (value: string) => {
    Lbry.daemonConnectionString = value;
  },

  // Allow overriding Lbry methods
  overrides: {},
  setOverride: (methodName, newMethod) => {
    Lbry.overrides[methodName] = newMethod;
  },

  // Returns a human readable media type based on the content type or extension of a file that is returned by the sdk
  getMediaType: (contentType: string, extname: ?string) => {
    if (extname) {
      const formats = [
        [/^(mp4|m4v|webm|flv|f4v|ogv)$/i, 'video'],
        [/^(mp3|m4a|aac|wav|flac|ogg|opus)$/i, 'audio'],
        [/^(html|htm|xml|pdf|odf|doc|docx|md|markdown|txt|epub|org)$/i, 'document'],
        [/^(stl|obj|fbx|gcode)$/i, '3D-file'],
      ];
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
      return /^[^/]+/.exec(contentType)[0];
    }
    return 'unknown';
  },
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

function apiCall(method: string, params: ?{}, resolve: Function, reject: Function) {
  const counter = new Date().getTime();
  const options = {
    method: 'POST',
    body: JSON.stringify({
      jsonrpc: '2.0',
      method,
      params,
      id: counter,
    }),
  };

  return fetch(Lbry.daemonConnectionString, options)
    .then(checkAndParse)
    .then(response => {
      const error = response.error || (response.result && response.result.error);

      if (error) {
        return reject(error);
      }
      return resolve(response.result);
    })
    .catch(reject);
}

const daemonCallWithResult = (name: string, params: ?{} = {}) =>
  new Promise((resolve, reject) => {
    apiCall(
      name,
      params,
      result => {
        resolve(result);
      },
      reject
    );
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
Lbry.claim_search = (params = {}) => daemonCallWithResult('claim_search', params);
Lbry.channel_create = (params = {}) => daemonCallWithResult('channel_create', params);
Lbry.channel_list = (params = {}) => daemonCallWithResult('channel_list', params);
Lbry.claim_list = (params = {}) => daemonCallWithResult('claim_list', params);
Lbry.stream_abandon = (params = {}) => daemonCallWithResult('stream_abandon', params);
Lbry.channel_abandon = (params = {}) => daemonCallWithResult('channel_abandon', params);
// Possibly change the variable name claim_tip in the future
Lbry.claim_tip = (params = {}) => daemonCallWithResult('support_create', params);

// wallet
Lbry.account_balance = (params = {}) => daemonCallWithResult('account_balance', params);
Lbry.account_decrypt = () => daemonCallWithResult('account_decrypt', {});
Lbry.account_encrypt = (params = {}) => daemonCallWithResult('account_encrypt', params);
Lbry.account_unlock = (params = {}) => daemonCallWithResult('account_unlock', params);
Lbry.account_list = (params = {}) => daemonCallWithResult('account_list', params);
Lbry.account_send = (params = {}) => daemonCallWithResult('account_send', params);
Lbry.address_is_mine = (params = {}) => daemonCallWithResult('address_is_mine', params);
Lbry.address_unused = (params = {}) => daemonCallWithResult('address_unused', params);

// transactions
Lbry.transaction_list = (params = {}) => daemonCallWithResult('transaction_list', params);
Lbry.utxo_release = (params = {}) => daemonCallWithResult('utxo_release', params);

Lbry.connect = () => {
  if (Lbry.connectPromise === null) {
    Lbry.connectPromise = new Promise((resolve, reject) => {
      let tryNum = 0;
      // Check every half second to see if the daemon is accepting connections
      function checkDaemonStarted() {
        tryNum += 1;
        Lbry.status()
          .then(resolve)
          .catch(() => {
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

  // $FlowFixMe
  return Lbry.connectPromise;
};

/**
 * Wrappers for API methods to simulate missing or future behavior. Unlike the old-style stubs,
 * these are designed to be transparent wrappers around the corresponding API methods.
 */

/**
 * Returns results from the file_list API method, plus dummy entries for pending publishes.
 * (If a real publish with the same name is found, the pending publish will be ignored and removed.)
 */
Lbry.file_list = (params = {}) =>
  new Promise((resolve, reject) => {
    apiCall(
      'file_list',
      params,
      fileInfos => {
        resolve(fileInfos);
      },
      reject
    );
  });

Lbry.get = (params = {}) =>
  new Promise((resolve, reject) => {
    apiCall(
      'get',
      params,
      streamInfo => {
        resolve(streamInfo);
      },
      reject
    );
  });

Lbry.resolve = (params = {}) =>
  new Promise((resolve, reject) => {
    apiCall(
      'resolve',
      params,
      data => {
        resolve(data || {});
      },
      reject
    );
  });

Lbry.publish = (params = {}) =>
  new Promise((resolve, reject) => {
    if (Lbry.overrides.publish) {
      Lbry.overrides.publish(params).then(resolve, reject);
    } else {
      apiCall('publish', params, resolve, reject);
    }
  });

const lbryProxy = new Proxy(Lbry, {
  get(target, name) {
    if (name in target) {
      return target[name];
    }

    return (params = {}) =>
      new Promise((resolve, reject) => {
        apiCall(name, params, resolve, reject);
      });
  },
});

export default lbryProxy;
