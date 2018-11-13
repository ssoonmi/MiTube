import * as SessionAPIUtil from '../../util/session/session_api_util';

export const LOG_IN_USER = "RECEIVE_USER";
export const LOG_OUT_USER = "LOG_OUT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";

export const logOutUser = (id) => {
  return {
    type: LOG_OUT_USER,
    id
  };
};

export const receiveSessionErrors = (errors)=>{
  return {
    type: RECEIVE_SESSION_ERRORS,
    errors
  };
};

export const login = (user) => dispatch => {
  return SessionAPIUtil.login(user).then((payload) => {
    dispatch({
      type: LOG_IN_USER,
      payload
    });}).fail((response)=>{
      dispatch(receiveSessionErrors(response.responseJSON));
    });
};

export const signup = (user) => dispatch => {
  return SessionAPIUtil.signup(user).then((payload) => {
    dispatch({
      type: LOG_IN_USER,
      payload
    });}).fail((response)=>{
      dispatch(receiveSessionErrors(response.responseJSON));
    });
};

export const logout = () => dispatch => {
  return SessionAPIUtil.logout().then((payload) => {
    dispatch(logOutUser(payload.id));
  }).fail((response)=>{
    dispatch(receiveSessionErrors(response.responseJSON));
  });
};
