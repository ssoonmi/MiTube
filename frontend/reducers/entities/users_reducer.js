import {RECEIVE_USER, REMOVE_USER, RECEIVE_USERS} from '../../actions/users/users_actions';
import {LOG_IN_USER, LOG_OUT_USER} from '../../actions/session/session_actions';
import {merge} from 'lodash';

const UsersReducer = (state={}, action) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_USERS:
      return action.payload.users;
    case LOG_IN_USER:
    case RECEIVE_USER:
      newState = action.payload.users;
      return merge({}, state, newState);
    case LOG_OUT_USER:
    case REMOVE_USER:
      newState = merge({}, state);
      delete newState[action.id];
      return newState;
    default:
      return state;
  }
}

export default UsersReducer;
