// @flow
declare type LbryUrlObj = {
  // Path, channel, and isValid will always exist when calling parseURI
  // But they may not exist when code calls buildURI
  isValid?: boolean,
  isChannel?: boolean,
  path?: string,
  streamName?: string,
  streamClaimId?: string,
  channelName?: string,
  channelClaimId?: string,
  primaryClaimSequence?: number,
  secondaryClaimSequence?: number,
  primaryBidPosition?: number,
  secondaryBidPosition?: number,

  // Below are considered deprecated and should not be used due to unreliableness with claim.canonical_url
  claimName?: string,
  claimId?: string,
  contentName?: string,
};
