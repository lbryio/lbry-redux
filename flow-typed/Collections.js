declare type CollectionUpdateParams = {
  remove: boolean,
  claims: Array<GenericClaim>,
  name: string,
}

declare type CollectionItem = {
  url: string,
  claimId: string,
};

declare type Collection = {
  id: string,
  items: Array<CollectionItem>,
  name: string,
  type: string,
  updatedAt: number,
  sourceid?: string, // if copied, claimId of original collection
};

declare type CollectionState = {
  unpublished: CollectionGroup,
  resolved: CollectionGroup,
  builtin: CollectionGroup,
  saved: Array<string>,
  mine: Array<string>,
  isResolvingCollectionById: { [string]: boolean },
  error?: string | null,
};

declare type CollectionGroup = {
  [string]: Collection,
}
