import {RECEIVE_USER, REMOVE_USER, RECEIVE_USERS} from '../../actions/users/users_actions';
import {RECEIVE_CHANNEL, RECEIVE_CHANNELS, REMOVE_CHANNEL} from '../../actions/channels/channels_actions';
import {LOG_IN_USER, LOG_OUT_USER} from '../../actions/session/session_actions';
import {RECEIVE_COMMENTS, RECEIVE_COMMENT, REMOVE_COMMENT} from '../../actions/comments/comments_actions';
import {merge} from 'lodash';
import { RECEIVE_SUBSCRIPTION, RECEIVE_SUBSCRIBED_CHANNELS, REMOVE_SUBSCRIPTION } from '../../actions/subscriptions/subscriptions_actions';

const UsersReducer = (state={}, action) => {
  Object.freeze(state);
  let newState;
  let userId;
  let channelIds;
  let commentsUserIds;
  let commentIds;
  switch (action.type) {
    case RECEIVE_USERS:
      return action.payload.users;
    case RECEIVE_CHANNELS:
      return merge({}, state, action.payload.users);
    case RECEIVE_CHANNEL:
      newState = merge({}, state);
      userId = Object.keys(action.payload.users)[0];
      if (newState[userId] && newState[userId].channelIds) {
        channelIds = newState[userId].channelIds;
        if (!channelIds.includes(action.payload.users[userId].channelIds[0])) {
          newState[userId].channelIds.push(action.payload.users[userId].channelIds[0]);
        }
      } else {
        newState[userId] = action.payload.users[userId]
      }
      return newState;
    case REMOVE_CHANNEL:
      newState = merge({}, state);
      userId = action.payload.userId;
      channelIds = newState[userId].channelIds;
      newState[userId].channelIds = channelIds.filter(id => id != action.payload.channelId);
      return newState;
    case LOG_IN_USER:
    case RECEIVE_USER:
      newState = action.payload.users;
      return merge({}, state, newState);
    case LOG_OUT_USER:
    case REMOVE_USER:
      newState = merge({}, state);
      delete newState[action.id].email;
      return newState;
    case RECEIVE_COMMENTS:
      newState = merge({}, state);
      commentIds = action.payload.commentIds;
      Object.keys(action.payload.userIds).forEach((userId) => {
        if (!newState[userId]) {
          newState[userId] = action.payload.users[userId];
        } else {
          if (newState[userId].commentIds) {
            commentIds.forEach((id) => {
              if (!newState[userId].commentIds.includes(id)) {
                newState[userId].commentIds.push(id);
              }
            });
          } else {
            newState[userId].commentIds = commentIds;
          }
        }
      });
      return newState;
    case RECEIVE_COMMENT:
      newState = merge({}, state);
      if (newState[action.payload.userId]){
        if (newState[action.payload.userId].commentIds) {
          newState[action.payload.userId].commentIds.push(action.payload.id);
        } else {
          newState[action.payload.userId].commentIds = [action.payload.id];
        }
      } else {
        newState[action.payload.userId] = action.payload.users[action.payload.userId];
      }
      return newState;
    case REMOVE_COMMENT:
      newState = merge({}, state);
      commentIds = newState[action.payload.userId].commentIds;
      newState[action.payload.userId].commentIds = commentIds.filter(id => id != action.payload.id);
      return state;
    case RECEIVE_SUBSCRIPTION:
      newState = merge({}, state);
      if (newState[action.userId].subscribedChannelIds) {
        newState[action.userId].subscribedChannelIds.push(action.channelId);
      } else {
        newState[action.userId].subscribedChannelIds = [action.channelId];
      }
      return newState;
    case REMOVE_SUBSCRIPTION:
      newState = merge({}, state);
      if (newState[action.userId].subscribedChannelIds) {
        newState[action.userId].subscribedChannelIds = 
          newState[action.userId].subscribedChannelIds.filter(id => id != action.channelId);
        return newState;
      } else {
        return state;
      }
    case RECEIVE_SUBSCRIBED_CHANNELS:
      newState = merge({}, state);
      newState[action.userId].subscribedChannelIds = action.payload.channelIds;
      return newState;
    default:
      return state;
  }
}

export default UsersReducer;
