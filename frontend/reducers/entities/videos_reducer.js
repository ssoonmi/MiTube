import {RECEIVE_VIDEOS, RECEIVE_SEARCH_VIDEOS, RECEIVE_VIDEO, REMOVE_VIDEO} from '../../actions/videos/videos_actions';
import {RECEIVE_CHANNELS, RECEIVE_CHANNEL} from '../../actions/channels/channels_actions';
import {CREATE_VIDEO_LIKE, DESTROY_VIDEO_LIKE} from '../../actions/likes/likes_actions';
import {RECEIVE_COMMENT, RECEIVE_COMMENTS, REMOVE_COMMENT} from '../../actions/comments/comments_actions';
import {RECEIVE_VIEW} from '../../actions/views/views_actions';
import {merge} from 'lodash';

const videosReducer = (state={}, action) => {
  Object.freeze(state);
  let newState;
  let videoId;
  let commentIds;
  switch (action.type) {
    case RECEIVE_CHANNEL:
    case RECEIVE_CHANNELS:
    case RECEIVE_VIDEO:
    case RECEIVE_SEARCH_VIDEOS:
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
    case RECEIVE_COMMENTS:
      newState = merge({}, state);
      commentIds = action.payload.commentIds;
      if (newState[action.payload.videoId].commentIds) {
        commentIds.forEach((id) => {
          if (!newState[action.payload.videoId].commentIds.includes(id)) {
            newState[action.payload.videoId].commentIds.push(id);
          }
        });
      } else {
        newState[action.payload.videoId].commentIds = commentIds;
      }
      return newState;
    case RECEIVE_COMMENT:
      newState = merge({}, state);
      if (!newState[action.payload.videoId].commentIds.includes(action.payload.id)) {
        newState[action.payload.videoId].commentIds.push(action.payload.id);
      }
      return newState;
    case REMOVE_COMMENT:
      newState = merge({}, state);
      videoId = action.payload.videoId;
      commentIds = newState[videoId].commentIds;
      newState[videoId].commentIds = commentIds.filter(id => id != action.payload.id);
      return newState;
    case RECEIVE_VIEW:
      newState = merge({}, state);
      videoId = action.payload.video_id;
      newState[videoId].numViews++;
      return newState;
    default:
      return state;
  }
};

export default videosReducer;
