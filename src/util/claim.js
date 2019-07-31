// @flow
import { MATURE_TAGS } from 'constants/tags';

const matureTagMap = MATURE_TAGS.reduce((acc, tag) => ({ ...acc, [tag]: true }), {});

export const isClaimNsfw = (claim: Claim): boolean => {
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

export function createNormalizedClaimSearchKey(options: { page?: number, release_time?: string }) {
  // Ignore page because we don't care what the last page searched was, we want everything
  // Ignore release_time because that will change depending on when you call claim_search ex: release_time: ">12344567"
  const { page: optionToIgnoreForQuery, release_time: anotherToIgnore, ...rest } = options;
  const query = JSON.stringify(rest);
  return query;
}
