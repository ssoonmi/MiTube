import {RECEIVE_REPLY, RECEIVE_REPLIES, REMOVE_REPLY} from '../../actions/comments/comments_actions';
import { CREATE_REPLY_LIKE, DESTROY_REPLY_LIKE } from '../../actions/likes/likes_actions';
import {merge} from 'lodash';

const defaultState = {};

const repliesReducer = (state = defaultState, action) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_REPLY:
      newState = merge({}, state, action.payload.comments);
      return newState;
    case RECEIVE_REPLIES:
      if (action.payload.comments) {
        newState = merge({}, state, action.payload.comments);
        return newState;
      }
      return state;
    case REMOVE_REPLY:
      newState = merge({}, state);
      delete newState[action.payload.id];
      return newState;
    case DESTROY_REPLY_LIKE:
    case CREATE_REPLY_LIKE:
      newState = merge({}, state);
      newState[action.payload.id].userLike = action.payload.userLike;
      newState[action.payload.id].numLikes += action.payload.diffLikes;
      newState[action.payload.id].numDislikes += action.payload.diffDislikes;
      return newState;
    default:
      return state;
  }
};

export default repliesReducer;