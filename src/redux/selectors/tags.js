// @flow
import { createSelector } from 'reselect';

const selectState = (state: { tags: TagState }) => state.tags || {};

export const selectKnownTagsByName = createSelector(
  selectState,
  (state: TagState): KnownTags => state.knownTags
);

export const selectFollowedTagsList = createSelector(
  selectState,
  (state: TagState): Array<string> => state.followedTags
);

export const selectFollowedTags = createSelector(
  selectFollowedTagsList,
  (followedTags: Array<string>): Array<Tag> => followedTags.map(tag => ({ name: tag }))
);

export const selectUnfollowedTags = createSelector(
  selectKnownTagsByName,
  selectFollowedTagsList,
  (tagsByName: KnownTags, followedTags: Array<string>): Array<Tag> => {
    const followedTagsSet = new Set(followedTags);
    let tagsToReturn = [];

    Object.keys(tagsByName).forEach(key => {
      if (!followedTagsSet.has(key)) {
        const { name } = tagsByName[key];
        tagsToReturn.push({ name });
      }
    });

    return tagsToReturn;
  }
);

export const selectTrendingUris = createSelector(
  selectState,
  state => state.trending || []
);

export const selectFetchingTrending = createSelector(
  selectState,
  state => state.fetchingTrending
);
