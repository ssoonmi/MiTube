import React from 'react';
import {NavLink, Route, Link} from 'react-router-dom';
import ChannelVideosContainer from './channel_videos_container';
import ChannelEditFormContainer from './channel_edit_form_container';
import ChannelShowHomeContainer from './channel_show_home_container';
import ChannelButton from '../util/channel_button';
import ChannelSubscriptionBtnContainer from './channel_subscription_btn_container';

class ChannelShow extends React.Component {
  componentDidMount() {
    this.props.hideSideNavModal();
    this.props.fetchChannel(this.props.channelId);
  }

  componentDidUpdate(oldProps) {
    const {channelId, fetchChannel, resetSearch} = this.props;
    if (oldProps.channelId != channelId) {
      resetSearch();
      fetchChannel(channelId);
    }
  }

  componentWillUnmount() {
    this.props.resetSearch();
  }

  render() {
    if (this.props.channel && this.props.user) {
      let {channelId, owner, channel} = this.props;
      let {name, description, splashUrl} = this.props.channel;
      let {username} = this.props.user;

      return (
        <article className="channel-show">
          {splashUrl ?
            (
              <div className="channel-splash-header-container">
                <img src={splashUrl} className="channel-splash-header"/>
              </div>
            ) : null}
          <div className="channel-splash-header-fix"></div>
          <section className="channel-show-header">
            <div className="channel-show-header-bar">
              <div className="channel-show-header-info">
                <ChannelButton
                  channel={this.props.channel}
                  classNames={"channel-show-header-icon"} />
                <div className="channel-show-header-details">
                  <h2>{name}</h2>
                  <div></div>
                </div>
                <div className="channel-show-subscribe">
                  {owner ?
                  (<Link to={`/channels/${channelId}/edit`}
                  style={
                    {
                      backgroundColor: "#1e79cb",
                      color: "white",
                      width: "130px",
                      textAlign: "center"
                    }}
                    className="subscribe-button">
                    EDIT CHANNEL
                  </Link> ) :(
                    <ChannelSubscriptionBtnContainer channel={this.props.channel} />
                    )
                  }
                </div>
              </div>
              <ul className="channel-show-nav">
                <li><NavLink exact to={`/channels/${channelId}`}>HOME</NavLink></li>
                <li><NavLink to={`/channels/${channelId}/videos`}>VIDEOS</NavLink></li>
              </ul>
            </div>
          </section>
          <Route exact path={`/channels/:channelId`} render={() => <ChannelShowHomeContainer channel={channel}/>}/>
          <Route path={`/channels/:channelId/videos`} component={ChannelVideosContainer}/>
          <Route path={`/channels/:channelId/edit`} component={ChannelEditFormContainer}/>
        </article>
      );
    } else {
      return (
        <h2>Loading...</h2>
      );
    }
  }
}

export default ChannelShow;
