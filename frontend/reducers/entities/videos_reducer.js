import {RECEIVE_VIDEOS, RECEIVE_VIDEO, REMOVE_VIDEO} from '../../actions/videos/videos_actions';
import {RECEIVE_CHANNELS, RECEIVE_CHANNEL} from '../../actions/channels/channels_actions';
import {CREATE_VIDEO_LIKE, DESTROY_VIDEO_LIKE} from '../../actions/likes/likes_actions';
import {merge} from 'lodash';

const videosReducer = (state={}, action) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_CHANNEL:
    case RECEIVE_CHANNELS:
    case RECEIVE_VIDEO:
    case RECEIVE_VIDEOS:
      return merge({}, state, action.payload.videos);
    case REMOVE_VIDEO:
      newState = merge({}, state);
      delete newState[action.payload.id];
      return newState;
    case DESTROY_VIDEO_LIKE:
    case CREATE_VIDEO_LIKE:
      newState = merge({}, state)
      newState[action.payload.id].userLike = action.payload.userLike;
      newState[action.payload.id].numLikes += action.payload.diffLikes;
      newState[action.payload.id].numDislikes += action.payload.diffDislikes;
      return newState;
    default:
      return state;
  }
};

export default videosReducer;
