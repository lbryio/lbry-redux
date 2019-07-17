// @flow
export function buildClaimSearchCacheQuery(options: { page?: number, release_time?: string }) {
  // Ignore page because we don't care what the last page searched was, we want everything
  // Ignore release_time because that will change depending on when you call claim_search ex: release_time: ">12344567"
  const { page: optionToIgnoreForQuery, release_time: anotherToIgnore, ...rest } = options;
  const query = JSON.stringify(rest);
  return query;
}
