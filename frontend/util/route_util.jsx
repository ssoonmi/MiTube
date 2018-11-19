import React from 'react';
import {connect} from 'react-redux';
import {Redirect, Route, withRouter} from 'react-router-dom';

const Auth = ({component: Component, path, loggedIn, exact, history}) => {
  if (!loggedIn) {
    return (
      <Route path={path} exact={exact} render={(props) => (
          <Component {...props} />
      )}/>
    );
  } else {
    history.goBack();
    return (
      <>
        {null}
      </>
    );
  }
  // return (
  //   <Route path={path} exact={exact} render={(props) => (
  //     !loggedIn ? (
  //       <Component {...props} />
  //     ) : (
  //       null
  //     )
  //   )}/>
  // );
};

const msp = state => {
  return {loggedIn: Boolean(state.session.id)};
};

export const AuthRoute = withRouter(connect(msp, null)(Auth));

const UnAuth = ({component: Component, path, loggedIn, exact, history}) => {
  if (loggedIn) {
    return (
      <Route path={path} exact={exact} render={(props) => (
          <Component {...props} />
      )}/>
    );
  } else {
    history.push(path);
    return (
      <Route path={path} exact={exact} render={(props) => (
          <Redirect to="/session/new" />
      )}/>
    );
  }
  // <Route path={path} exact={exact} render={(props) => (
  //   loggedIn ? (
  //     <Component {...props} />
  //   ) : (
  //     <Redirect to="/session/new" />
  //   )
  // )}/>
};

export const UnAuthRoute = withRouter(connect(msp, null)(UnAuth));
