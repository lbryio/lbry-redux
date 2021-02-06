declare type CollectionUpdateParams = {
  remove?: boolean,
  claims?: Array<Claim>,
  name?: string,
  order?: { from: number, to: number },
}

declare type Collection = {
  id: string,
  items: Array<?string>,
  name: string,
  type: string,
  updatedAt: number,
  totalItems?: number,
  sourceid?: string, // if copied, claimId of original collection
};

declare type CollectionState = {
  unpublished: CollectionGroup,
  resolved: CollectionGroup,
  pending: CollectionGroup,
  edited: CollectionGroup,
  builtin: CollectionGroup,
  saved: Array<string>,
  isResolvingCollectionById: { [string]: boolean },
  error?: string | null,
};

declare type CollectionGroup = {
  [string]: Collection,
}

declare type CollectionEditParams = {
  claims?: Array<Claim>,
  remove?: boolean,
  claimIds?: Array<string>,
  replace?: boolean,
  order?: { from: number, to: number },
  type?: string,
}
