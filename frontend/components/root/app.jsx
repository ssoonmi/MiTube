import React from 'react';
import NavContainer from '../nav/nav_container';
import {Route, Switch} from 'react-router-dom';
import ModalContainer from '../modal/modal_container';
import SideNavContainer from '../nav/side_nav_container';
import { AuthRoute, UnAuthRoute } from '../../util/route_util';
import SessionFormContainer from '../session/session_form_container';
import UserFormContainer from '../session/user_form_container';
import ChannelShowContainer from '../channel/channel_show_container';
import VideoUploadFormContainer from '../videos/video_upload_form_container';
import VideoShowContainer from '../videos/video_show_container';
import ChannelCreationFormContainer from '../channel/channel_creation_form_container';
import UserEditFormContainer from '../user/user_edit_form_container';
import SearchPageContainer from '../search/search_page_container';
import HistoryPageContainer from '../history/history_page_container';
import HomePage from '../home_page/home_page_container';

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
