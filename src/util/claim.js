export const isClaimNsfw = claim =>
  claim && claim.value && claim.value.stream && claim.value.stream.metadata.nsfw;
