// @flow
import { SEARCH_OPTIONS } from 'constants/search';

const DEFAULT_SEARCH_RESULT_FROM = 0;
const DEFAULT_SEARCH_SIZE = 20;

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

export const getSearchQueryString = (
  query: string,
  options: any = {},
  includeUserOptions: boolean = false
) => {
  const encodedQuery = encodeURIComponent(query);
  const queryParams = [
    `s=${encodedQuery}`,
    `size=${options.size || DEFAULT_SEARCH_SIZE}`,
    `from=${options.from || DEFAULT_SEARCH_RESULT_FROM}`,
  ];

  if (includeUserOptions) {
    queryParams.push(`claimType=${options[SEARCH_OPTIONS.CLAIM_TYPE]}`);

    // If they are only searching for channels, strip out the media info
    if (options[SEARCH_OPTIONS.CLAIM_TYPE] !== SEARCH_OPTIONS.INCLUDE_CHANNELS) {
      queryParams.push(
        `mediaType=${[
          SEARCH_OPTIONS.MEDIA_FILE,
          SEARCH_OPTIONS.MEDIA_AUDIO,
          SEARCH_OPTIONS.MEDIA_VIDEO,
          SEARCH_OPTIONS.MEDIA_TEXT,
          SEARCH_OPTIONS.MEDIA_IMAGE,
          SEARCH_OPTIONS.MEDIA_APPLICATION,
        ].reduce(
          (acc, currentOption) => (options[currentOption] ? `${acc}${currentOption},` : acc),
          ''
        )}`
      );
    }
  }

  return queryParams.join('&');
};
