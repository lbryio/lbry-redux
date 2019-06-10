declare type TagState = {
  followedTags: FollowedTags,
  knownTags: KnownTags,
  trending: Array<string>,
  fetchingTrending: boolean,
};

declare type Tag = {
  name: string,
};

declare type KnownTags = {
  [string]: Tag,
};

declare type FollowedTags = Array<string>;

declare type TagAction = {
  type: string,
  data: {
    name: string,
  },
};

declare type TrendingTagAction = {
  type: string,
  data: {
    uris: Array<string>,
  },
};
