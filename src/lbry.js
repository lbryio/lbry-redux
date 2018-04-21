// @flow
import 'proxy-polyfill';

const CHECK_DAEMON_STARTED_TRY_NUMBER = 200;

const Lbry = {
  isConnected: false,
  daemonConnectionString: 'http://localhost:5279',
  pendingPublishTimeout: 20 * 60 * 1000,
};

function checkAndParse(response) {
  if (response.status >= 200 && response.status < 300) {
    return response.json();
  }
  return response.json().then(json => {
    let error;
    if (json.error) {
      error = new Error(json.error);
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

// core
Lbry.status = (params = {}) =>
  new Promise((resolve, reject) => {
    apiCall(
      'status',
      params,
      status => {
        resolve(status);
      },
      reject
    );
  });

Lbry.version = () =>
  new Promise((resolve, reject) => {
    apiCall(
      'version',
      {},
      versionInfo => {
        resolve(versionInfo);
      },
      reject
    );
  });

Lbry.file_delete = (params = {}) =>
  new Promise((resolve, reject) => {
    apiCall('file_delete', params, resolve, reject);
  });

Lbry.file_set_status = (params = {}) =>
  new Promise((resolve, reject) => {
    apiCall('file_set_status', params, resolve, reject);
  });

Lbry.connectPromise = null;
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

  return Lbry.connectPromise;
};

Lbry.getMediaType = (contentType, fileName) => {
  if (contentType) {
    return /^[^/]+/.exec(contentType)[0];
  } else if (fileName) {
    const dotIndex = fileName.lastIndexOf('.');
    if (dotIndex === -1) {
      return 'unknown';
    }

    const ext = fileName.substr(dotIndex + 1);
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

Lbry.claim_list_mine = (params = {}) =>
  new Promise((resolve, reject) => {
    apiCall(
      'claim_list_mine',
      params,
      claims => {
        resolve(claims);
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
        if ('uri' in params) {
          // If only a single URI was requested, don't nest the results in an object
          resolve(data && data[params.uri] ? data[params.uri] : {});
        } else {
          resolve(data || {});
        }
      },
      reject
    );
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
