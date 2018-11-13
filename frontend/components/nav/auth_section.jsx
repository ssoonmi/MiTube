import React from 'react';
import {Link} from 'react-router-dom';
import {UnAuthRoute, AuthRoute} from '../../util/route_util';
import SessionFormContainer from '../session/session_form_container';
import UserFormContainer from '../session/user_form_container';

const AuthSection = ({loggedIn, logout}) => {
  if (loggedIn) {
    return (
      <div className="auth-section">
        <button onClick={logout()}>Log Out</button>
      </div>
    )
  } else {
    return (
      <div className="auth-section">
        <Link to="/users/new">Sign Up</Link>
        <Link to="/session/new">Sign In</Link>
        <UnAuthRoute path="/users/new" component={UserFormContainer} />
        <UnAuthRoute path="/session/new" component={SessionFormContainer} />
      </div>
    )
  }

};

export default AuthSection;
