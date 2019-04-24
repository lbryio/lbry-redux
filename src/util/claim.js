// @flow

const naughtyTags = ['porn', 'nsfw', 'mature', 'xxx'].reduce(
  (acc, tag) => ({ ...acc, [tag]: true }),
  {}
);

export const isClaimNsfw = (claim: StreamClaim): boolean => {
  if (!claim) {
    throw new Error('No claim passed to isClaimNsfw()');
  }

  if (!claim.value) {
    return false;
  }

  const tags = claim.value.tags || [];
  for (let i = 0; i < tags.length; i += 1) {
    const tag = tags[i].toLowerCase();
    if (naughtyTags[tag]) {
      return true;
    }
  }

  return false;
};
