import Lbry from 'lbry';
import querystring from 'querystring';

const LbryApi = {
  enabled: true,
  exchangePromise: null,
  exchangeLastFetched: null,
};

const CONNECTION_STRING = process.env.LBRY_APP_API_URL
  ? process.env.LBRY_APP_API_URL.replace(/\/*$/, '/') // exactly one slash at the end
  : 'https://api.lbry.io/';

const EXCHANGE_RATE_TIMEOUT = 20 * 60 * 1000;

LbryApi.getExchangeRates = () => {
  if (
    !LbryApi.exchangeLastFetched ||
    Date.now() - LbryApi.exchangeLastFetched > EXCHANGE_RATE_TIMEOUT
  ) {
    LbryApi.exchangePromise = new Promise((resolve, reject) => {
      LbryApi.call('lbc', 'exchange_rate', {}, 'get', true)
        .then(({ lbc_usd: LBC_USD, lbc_btc: LBC_BTC, btc_usd: BTC_USD }) => {
          const rates = { LBC_USD, LBC_BTC, BTC_USD };
          resolve(rates);
        })
        .catch(reject);
    });
    LbryApi.exchangeLastFetched = Date.now();
  }
  return LbryApi.exchangePromise;
};

LbryApi.call = (resource, action, params = {}, method = 'get') => {
  if (!LbryApi.enabled) {
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
    return response.json().then(json => {
      let error;
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

  const fullParams = { ...params };
  const qs = querystring.stringify(fullParams);
  let url = `${CONNECTION_STRING}${resource}/${action}?${qs}`;

  let options = {
    method: 'GET',
  };

  if (method === 'post') {
    options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: qs,
    };
    url = `${CONNECTION_STRING}${resource}/${action}`;
  }

  return makeRequest(url, options).then(response => response.data);
};

export default LbryApi;
