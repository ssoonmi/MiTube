import {RECEIVE_SEARCH_VIDEOS, RECEIVE_VIDEOS} from '../../actions/videos/videos_actions';
import {RECEIVE_CHANNELS} from '../../actions/channels/channels_actions';
import {RESET_SEARCH} from '../../actions/search/search_actions';

const defaultState = [];

const videoReducer = (state=defaultState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SEARCH_VIDEOS:
      if (action.payload.videos) {
        return action.payload.videoIds
      } else {
        return defaultState;
      }
    case RECEIVE_CHANNELS:
    case RECEIVE_VIDEOS:
      if (action.payload.videoIds) {
        return state.concat(action.payload.videoIds)
      } else {
        return state;
      }
    case RESET_SEARCH:
      return defaultState;
    default:
      return state;
  }
};

export default videoReducer;
