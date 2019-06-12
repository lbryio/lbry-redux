declare type Comment = {
  author: string,
  claim_index?: number,
  comment_id?: number,
  downvotes?: number,
  message: string,
  omitted?: number,
  reply_count?: number,
  time_posted?: number,
  upvotes?: number,
  parent_id?: number,
};

declare type CommentsState = {
  byId: {},
  isLoading: boolean,
  commentsByUri: { [string]: string },
}
