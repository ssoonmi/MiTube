import {RECEIVE_SEARCH_VIDEOS, RECEIVE_VIDEOS} from '../../actions/videos/videos_actions';
import {RECEIVE_CHANNELS} from '../../actions/channels/channels_actions';
import {RESET_SEARCH} from '../../actions/search/search_actions';


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
    case RECEIVE_VIDEOS:
    case RECEIVE_CHANNELS:
      if (action.payload.channelIds) {
        if (state) {
          return state.concat(action.payload.channelIds);
        } else {
          return action.payload.channelIds;
        }
      } else {
        return state;
      }
    case RESET_SEARCH:
      return defaultState;
    default:
      return state;
  }
};

export default channelReducer;
