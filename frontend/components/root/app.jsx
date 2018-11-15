import React from 'react';
import NavContainer from '../nav/nav_container';
import {AuthRoute} from '../../util/route_util';
import SessionFormContainer from '../session/session_form_container';
import UserFormContainer from '../session/user_form_container';
import ChannelShowContainer from '../channel/channel_show_container';
import {Route, Switch} from 'react-router-dom';

const App = () => {
  return (
    <>
      <Switch>
        <Route exact path="/users/new" render={()=>(null)}/>
        <Route exact path="/session/new" render={()=>(null)}/>
        <Route path="/" component={NavContainer}/>
      </Switch>
      <main>
        <AuthRoute exact path="/users/new" component={UserFormContainer} />
        <AuthRoute exact path="/session/new" component={SessionFormContainer} />
        <Route path="/channels/:channelId" component={ChannelShowContainer}/>
      </main>
    </>
  );
};

export default App;
