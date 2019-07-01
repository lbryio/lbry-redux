// @flow
import * as ACTIONS from 'constants/action_types';
import { handleActions } from 'util/redux-utils';

export const tagsReducerBuilder = (defaultState: TagState) =>
  handleActions(
    {
      [ACTIONS.TOGGLE_TAG_FOLLOW]: (state: TagState, action: TagAction): TagState => {
        const { followedTags } = state;
        const { name } = action.data;

        let newFollowedTags = followedTags.slice();

        if (newFollowedTags.includes(name)) {
          newFollowedTags = newFollowedTags.filter(tag => tag !== name);
        } else {
          newFollowedTags.push(name);
        }

        return {
          ...state,
          followedTags: newFollowedTags,
        };
      },

      [ACTIONS.TAG_ADD]: (state: TagState, action: TagAction) => {
        const { knownTags } = state;
        const { name } = action.data;

        let newKnownTags = { ...knownTags };
        newKnownTags[name] = { name };

        return {
          ...state,
          knownTags: newKnownTags,
        };
      },

      [ACTIONS.TAG_DELETE]: (state: TagState, action: TagAction) => {
        const { knownTags, followedTags } = state;
        const { name } = action.data;

        let newKnownTags = { ...knownTags };
        delete newKnownTags[name];
        const newFollowedTags = followedTags.filter(tag => tag !== name);

        return {
          ...state,
          knownTags: newKnownTags,
          followedTags: newFollowedTags,
        };
      },
    },
    defaultState
  );
