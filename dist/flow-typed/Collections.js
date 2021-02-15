declare type CollectionUpdateParams = {
  remove: boolean,
  claims: Array<GenericClaim>,
  name: string,
}

declare type CollectionItem = {
  url: string,
  leftOff?: number,
  added?: number,
  claimId: string,
};

declare type Collection = {
  id: string,
  items: Array<CollectionItem>,
  name: string,
  type: string,
  updatedAt: number,
};

declare type CollectionState = {
  unpublished: { [string]: Collection },
  resolved: { [string]: Collection },
  builtin: { [string]: Collection },
  saved: Array<string>,
  mine: Array<string>,
  isResolvingCollectionById: Array<string>,
  error?: string | null,
};
