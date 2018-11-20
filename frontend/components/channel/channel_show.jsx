import React from 'react';
import {NavLink, Route} from 'react-router-dom';
import ChannelVideosContainer from './channel_videos_container';
import ChannelButton from '../util/channel_button';

class ChannelShow extends React.Component {
  componentDidMount() {
    this.props.fetchChannel(this.props.channelId);
  }

  render() {
    if (this.props.channel) {
      let {channelId} = this.props;
      let {name, description, splash_img_url} = this.props.channel;
      let {username} = this.props.user;

      return (
        <article className="channel-show">
          <section className="channel-show-header">
            <div className="channel-show-header-bar">
              <div className="channel-show-header-info">
                <ChannelButton
                  channel={this.props.channel}
                  classNames={"channel-show-header-icon"} />
                <div className="channel-show-header-details">
                  <h2>{name}</h2>
                  <div>1,000,000 suscribers</div>
                </div>
                <div className="subscribe-button">SUBSCRIBE <span>{'9.7M'}</span></div>
              </div>
              <ul className="channel-show-nav">
                <li><NavLink exact to={`/channels/${channelId}`}>HOME</NavLink></li>
                <li><NavLink to={`/channels/${channelId}/videos`}>VIDEOS</NavLink></li>
              </ul>
            </div>
          </section>
          <Route path={`/channels/:channelId/videos`} component={ChannelVideosContainer}/>
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
