import React from 'react';
import NavContainer from '../nav/nav_container';
import {AuthRoute} from '../../util/route_util';
import SessionFormContainer from '../session/session_form_container';
import UserFormContainer from '../session/user_form_container';

const App = () => {
  return (
    <>
      <NavContainer />
      <main>
        <AuthRoute path="/users/new" component={UserFormContainer} />
        <AuthRoute path="/session/new" component={SessionFormContainer} />
      </main>
    </>
  );
};

export default App;
