import {RECEIVE_COMMENTS, RECEIVE_COMMENT, REMOVE_COMMENT, RECEIVE_REPLY, RECEIVE_REPLIES, REMOVE_REPLY} from '../../actions/comments/comments_actions';
import {RECEIVE_VIDEO} from '../../actions/videos/videos_actions';
import { CREATE_COMMENT_LIKE, DESTROY_COMMENT_LIKE } from '../../actions/likes/likes_actions';
import {merge} from 'lodash';

const commentsReducer = (state={}, action) => {
  Object.freeze(state);
  let newState;
  let replyIds;
  let replyId;
  switch (action.type) {
    case RECEIVE_VIDEO:
    case RECEIVE_COMMENTS:
    case RECEIVE_COMMENT:
      newState = merge({}, state, action.payload.comments);
      return newState;
    case REMOVE_COMMENT:
      newState = merge({}, state);
      delete newState[action.payload.id];
      return newState;
    case DESTROY_COMMENT_LIKE:
    case CREATE_COMMENT_LIKE:
      newState = merge({}, state);
      newState[action.payload.id].userLike = action.payload.userLike;
      newState[action.payload.id].numLikes += action.payload.diffLikes;
      newState[action.payload.id].numDislikes += action.payload.diffDislikes;
      return newState;
    case RECEIVE_REPLY:
      newState = merge({}, state);
      replyId = Object.keys(action.payload.comments)[0];
      if (newState[action.payload.parentCommentId].replyIds) {
        if (!newState[action.payload.parentCommentId].replyIds.includes(replyId)) {
          newState[action.payload.parentCommentId].replyIds.push(replyId);
        }
      } else {
        newState[action.payload.parentCommentId].hasReplies = true;
        newState[action.payload.parentCommentId].replyIds = [Object.keys(action.payload.comments)[0]];
      }
      return newState;
    case RECEIVE_REPLIES:
      newState = merge({}, state);
      if (action.payload.comments) {
        if (newState[action.payload.parentCommentId].replyIds) {
          replyIds = Object.keys(action.payload.comments);
          replyIds.forEach((replyId) => {
            if (!newState[action.payload.parentCommentId].replyIds.includes(replyId)) {
              newState[action.payload.parentCommentId].replyIds.push(replyId);
            }
          });
        } else {
          newState[action.payload.parentCommentId].replyIds = Object.keys(action.payload.comments);
        }
      } else {
        newState[action.payload.parentCommentId].replyIds = [];
      }
      return newState;
    case REMOVE_REPLY:
      newState = merge({}, state);
      newState[parentCommentId].replyIds.filter(id => id != action.payload.id);
      return newState;
    default:
      return state;
  }
};

export default commentsReducer;
