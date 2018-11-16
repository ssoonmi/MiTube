import {RECEIVE_VIDEOS, RECEIVE_VIDEO, REMOVE_VIDEO} from '../../actions/videos/videos_actions';
import {merge} from 'lodash';

const videosReducer = (state={}, action) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_VIDEO:
    case RECEIVE_VIDEOS:
      return merge({}, state, action.payload.videos);
    case REMOVE_VIDEO:
      newState = merge({}, state);
      delete newState[action.payload.id];
      return newState;
    default:
      return state;
  }
};

export default videosReducer;
