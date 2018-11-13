import {RECEIVE_SESSION_ERRORS, LOG_IN_USER} from '../../actions/session/session_actions';

const defaultState = [];

const sessionErrors = (state=defaultState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case LOG_IN_USER:
      return defaultState;
    case RECEIVE_SESSION_ERRORS:
      return action.errors;
    default:
      return state;
  }
};

export default sessionErrors;
