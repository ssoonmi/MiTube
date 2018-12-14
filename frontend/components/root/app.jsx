import React from 'react';
import NavContainer from '../nav/nav_container';
import {Route, Switch} from 'react-router-dom';
import ModalContainer from '../modal/modal_container';
import SideNavContainer from '../nav/side_nav_container';

import Main from './main_container';

class App extends React.Component {
  render() {
    return (
      <>
        <Switch>
          <Route exact path="/users/new" render={()=>(null)}/>
          <Route exact path="/session/new" render={()=>(null)}/>
          <Route path="/" render={() => <NavContainer /> } />
        </Switch>
        <ModalContainer />
        <SideNavContainer />
        <Main/>
      </>
    );
  }
};


export default App;
