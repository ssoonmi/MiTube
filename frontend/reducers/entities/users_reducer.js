import {RECEIVE_USER, REMOVE_USER, RECEIVE_USERS} from '../../actions/users/users_actions';
import {RECEIVE_CHANNEL, RECEIVE_CHANNELS, REMOVE_CHANNEL} from '../../actions/channels/channels_actions';
import {LOG_IN_USER, LOG_OUT_USER} from '../../actions/session/session_actions';
import {merge} from 'lodash';

const UsersReducer = (state={}, action) => {
  Object.freeze(state);
  let newState;
  let userId;
  let channelIds;
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
    default:
      return state;
  }
}

export default UsersReducer;
