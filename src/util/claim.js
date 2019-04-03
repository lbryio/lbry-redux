export const isClaimNsfw = claim =>
  // needs to be udpated to use tags
  claim && claim.value && claim.value.stream && claim.value.stream.metadata.nsfw;
