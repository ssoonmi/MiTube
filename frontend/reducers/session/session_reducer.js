import {LOG_IN_USER, LOG_OUT_USER} from '../../actions/session/session_actions';

const defaultState = {id: null};

const sessionReducer = (state=defaultState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case LOG_IN_USER:
      return action.payload.session;
    case LOG_OUT_USER:
      return defaultState;
    default:
      return state;
  }
};

export default sessionReducer;
