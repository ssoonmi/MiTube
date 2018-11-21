import React from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import UserEditForm from './user_edit_form';
import {editUser} from '../../actions/users/users_actions';

const msp = (state, ownProps) => {
  const userId = state.session.id;
  return {
    user: state.entities.users[userId],
    userId,
  };
};

const mdp = (dispatch, ownProps) => {
  const history = ownProps.history;
  return {
    submitForm: (user, userId) => dispatch(editUser(user, userId, history))
  };
};

export default withRouter(connect(msp, mdp)(UserEditForm));
