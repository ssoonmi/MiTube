import * as UserAPIUtil from '../../util/users/user_api_util';

export const RECEIVE_USER = "RECEIVE_USER";
export const REMOVE_USER = "REMOVE_USER";
export const RECEIVE_USERS = "RECEIVE_USERS";

export const editUser = (user, userId, history) => dispatch => {
  return UserAPIUtil.editUser(user, userId).then((payload)=> {
    dispatch({
      type: RECEIVE_USER,
      payload
    });
    history.push('/');
  });
};
