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
