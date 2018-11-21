import React from 'react';
import NavContainer from '../nav/nav_container';
import {AuthRoute, UnAuthRoute} from '../../util/route_util';
import SessionFormContainer from '../session/session_form_container';
import UserFormContainer from '../session/user_form_container';
import ChannelShowContainer from '../channel/channel_show_container';
import VideoUploadFormContainer from '../videos/video_upload_form_container';
import VideoShowContainer from '../videos/video_show_container';
import ChannelCreationFormContainer from '../channel/channel_creation_form_container';
import UserEditFormContainer from '../user/user_edit_form_container';
import HomePage from '../home_page/home_page_container';
import {Route, Switch} from 'react-router-dom';

const App = () => {
  return (
    <>
      <Switch>
        <Route exact path="/users/new" render={()=>(null)}/>
        <Route exact path="/session/new" render={()=>(null)}/>
        <Route path="/" render={() => <NavContainer /> } />
      </Switch>
      <main>
        <Switch>
          <AuthRoute exact path="/users/new" component={UserFormContainer} />
          <AuthRoute exact path="/session/new" component={SessionFormContainer} />
          <UnAuthRoute exact path="/channels/new" component={ChannelCreationFormContainer} />
          <UnAuthRoute exact path="/channels/:channelId/videos/new" component={VideoUploadFormContainer}/>
          <UnAuthRoute exact path="/user/edit" component={UserEditFormContainer}/>
          <Route path="/channels/:channelId" component={ChannelShowContainer}/>
          <Route path="/videos/:videoId" render={(props) => <VideoShowContainer {...props}/>} />
          <Route path="/" component={HomePage}/>
        </Switch>
      </main>
    </>
  );
};

export default App;
