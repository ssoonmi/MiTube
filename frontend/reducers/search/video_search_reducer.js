import {RECEIVE_SEARCH_VIDEOS} from '../../actions/videos/videos_actions';

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
    default:
      return state;
  }
};

export default videoReducer;
