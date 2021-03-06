import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, UnAuthRoute } from '../../util/route_util';
import SessionFormContainer from '../session/session_form_container';
import UserFormContainer from '../session/user_form_container';
import ChannelShowContainer from '../channel/channel_show_container';
import VideoUploadFormContainer from '../videos/video_upload_form_container';
import VideoShowContainer from '../videos/video_show_container';
import ChannelCreationFormContainer from '../channel/channel_creation_form_container';
import UserEditFormContainer from '../user/user_edit_form_container';
import SearchPageContainer from '../search/search_page_container';
import HomePage from '../home_page/home_page_container';
import TrendingPageContainer from '../search/trending_page_container';
import LikedVideosPageContainer from '../search/liked_videos_page_container';
import HistoryPageContainer from '../search/history_page_container';
import SubscriptionsPageContainer from '../subscriptions/subscriptions_page_container';

class MainSwitches extends React.Component {
  render() {
    return (
      <Switch>
        <AuthRoute exact path="/users/new" component={UserFormContainer} />
        <AuthRoute exact path="/session/new" component={SessionFormContainer} />
        <UnAuthRoute exact path="/channels/new" component={ChannelCreationFormContainer} />
        <UnAuthRoute exact path="/channels/:channelId/videos/new" component={VideoUploadFormContainer} />
        <UnAuthRoute exact path="/user/edit" component={UserEditFormContainer} />
        <Route path="/channels/:channelId" component={ChannelShowContainer} />
        <Route path="/videos/:videoId" render={(props) => <VideoShowContainer {...props} />} />
        <Route path="/search/:searchTerms" component={SearchPageContainer} />
        <Route path="/trending/" component={TrendingPageContainer} />
        <UnAuthRoute path="/liked_videos/" component={LikedVideosPageContainer} />
        <UnAuthRoute path="/history/" component={HistoryPageContainer} />
        <UnAuthRoute path="/subscriptions/" component={SubscriptionsPageContainer} />
        <Route path="/" component={HomePage} />
      </Switch>
    );
  }
}

export default MainSwitches;