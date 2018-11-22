import {RECEIVE_SEARCH_VIDEOS} from '../../actions/videos/videos_actions';

const defaultState = null;

const channelReducer = (state=defaultState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SEARCH_VIDEOS:
      if (action.payload.searchedChannelId) {
        return action.payload.searchedChannelId
      } else {
        return defaultState;
      }
    default:
      return state;
  }
};

export default channelReducer;
