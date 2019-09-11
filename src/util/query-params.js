// @flow
import { SEARCH_OPTIONS } from 'constants/search';

const DEFAULT_SEARCH_RESULT_FROM = 0;
const DEFAULT_SEARCH_SIZE = 20;
const DEFAULT_CLAIM_TYPE = SEARCH_OPTIONS.INCLUDE_FILES;
const DEFAULT_TYPES_ARR = [
  SEARCH_OPTIONS.MEDIA_FILE,
  SEARCH_OPTIONS.MEDIA_AUDIO,
  SEARCH_OPTIONS.MEDIA_VIDEO,
  SEARCH_OPTIONS.MEDIA_TEXT,
  SEARCH_OPTIONS.MEDIA_IMAGE,
  SEARCH_OPTIONS.MEDIA_APPLICATION,
];

export function parseQueryParams(queryString: string) {
  if (queryString === '') return {};
  const parts = queryString
    .split('?')
    .pop()
    .split('&')
    .map(p => p.split('='));

  const params = {};
  parts.forEach(array => {
    const [first, second] = array;
    params[first] = second;
  });
  return params;
}

export function toQueryString(params: { [string]: string | number }) {
  if (!params) return '';

  const parts = [];
  Object.keys(params).forEach(key => {
    if (Object.prototype.hasOwnProperty.call(params, key) && params[key]) {
      parts.push(`${key}=${params[key]}`);
    }
  });

  return parts.join('&');
}

export const getSearchQueryString = (query: string, options: any = {}) => {
  const encodedQuery = encodeURIComponent(query);
  const claimType = options[SEARCH_OPTIONS.CLAIM_TYPE];
  const queryParams = [
    `s=${encodedQuery}`,
    `size=${options.size || DEFAULT_SEARCH_SIZE}`,
    `from=${options.from || DEFAULT_SEARCH_RESULT_FROM}`,
  ];
  // add any file type params
  queryParams.push(buildMediaTypesString(DEFAULT_TYPES_ARR, options));
  // add claimType
  if (claimType) {
    queryParams.push(`claimType=${claimType}`);
  }

  return queryParams.join('&');
};

const buildMediaTypesString = (typesArr, options) => {
  // for each truthy options['type'], append 'type,' to 'mediaType='
  return `mediaType=${typesArr.reduce(
    (acc, currentOption) => (options[currentOption] ? `${acc}${currentOption},` : acc),
    ''
  )}`;
};

export const getOptionsForMainSearch = (options: any) => {
  const claimType = options[SEARCH_OPTIONS.CLAIM_TYPE];
  // don't bother with file types if they're including channels
  // this is slightly am
  if (claimType.includes(SEARCH_OPTIONS.INCLUDE_CHANNELS)) {
    return {
      size: options.size,
      from: options.from,
      claimType: options.claimType,
    };
  } else {
    return options;
  }
};

export const getOptionsForBackgroundSearch = (
  customSize: ?number,
  customFrom: ?number,
  customMediaTypes: ?Array<string>,
  claimType: ?string
) => {
  const mediaTypes = customMediaTypes
    ? customMediaTypes.reduce((acc, type) => {
      acc[type] = true;
      return acc;
    }, {})
    : {};

  return {
    size: customSize || DEFAULT_SEARCH_SIZE,
    from: customFrom || DEFAULT_SEARCH_RESULT_FROM,
    ...mediaTypes,
    claimType: claimType || DEFAULT_CLAIM_TYPE,
  };
};
