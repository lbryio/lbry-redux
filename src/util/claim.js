// @flow

const naughtyTags = ['porn', 'nsfw', 'mature', 'xxx'].reduce(
  (acc, tag) => ({ ...acc, [tag]: true }),
  {}
);

export const isClaimNsfw = (claim: StreamClaim): boolean => {
  if (!claim) {
    throw new Error('No claim passed to isClaimNsfw()');
  }

  if (!claim.value.stream) {
    return false;
  }

  const tags = claim.value.stream.tags || [];
  for (let i = 0; i < tags.length; i += 1) {
    if (naughtyTags[tags[i]]) {
      return true;
    }
  }

  return false;
};
