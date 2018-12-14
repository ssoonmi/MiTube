import React from 'react';
import {Link} from 'react-router-dom';
// import VideoThumbnail from '../videos/video_thumbnail';
import TimeAgo from '../util/time_ago';
import ChannelButton from '../util/channel_button';
import ChannelSubscriptionBtnContainer from '../channel/channel_subscription_btn_container';

class HomePage extends React.Component {
  componentDidMount() {
    this.props.closeModal();
    this.props.showSideNav();
    this.props.hideSideNavModal();
    this.props.fetchChannels();
  }

  componentDidUpdate() {
    if (!this.props.channelIds) {
      this.props.fetchChannels();
    }
  }

  componentWillUnmount() {
    this.props.resetSearch();
  }

  render() {
    const {channelIds, videos, channels, sideNav, modal} = this.props;
    let channelLis;
    channelLis = channelIds.map((channelId, idx) => {
      const channel = channels[channelId];
      const button = <ChannelButton
        channel={channel} classNames={"profile-btn"}/>
      const videoIds = channel.videoIds;
      if (videoIds && videoIds.length != 0){
        const videoLis = videoIds.map((videoId, videoIdx) => {
          const video = this.props.videos[videoId];
          return (
            <li key={videoIdx}><Link to={`/videos/${videoId}`}>
              <img className="video-list-item-thumbnail" src={video.thumbnail}/>
              <div className="video-list-item-thumbnail-time"></div>
              <div className="video-list-item-info">
                <h4>{video.title}</h4>
                <div className="video-list-item-details">
                  <div><Link to={`/channels/${channel.id}`}>{channel.name}</Link></div>
                  <span>{video.numViews} views • </span>
                  <span>{<TimeAgo time={video.created_at}/>}</span>
                </div>
              </div>
            </Link></li>
          );
        });
        // <VideoThumbnail video={this.props.videos[videoId]}/>
        return (
          <li key={channel.id} className="channels-list-item">
            <div className="channels-list-item-details">
              <Link to={`/channels/${channel.id}`}>
                {button}
              </Link>
              <Link to={`/channels/${channel.id}`}>
                <h3>{channel.name}</h3>
              </Link>
              {channel.user_id == this.props.currentUserId ? 
                ( null ) : 
                (<div className="home-page-subscribe">
                  <ChannelSubscriptionBtnContainer homePage={true} channel={channel}/>
                </div>)
              }
            </div>
            <ul className="video-list">
              {videoLis}
            </ul>
          </li>
        );
      } else {
        null;
      }
    });
    return (
      <div className="home-page gray-background">
        <div className="home-page-content">
          <ul className="channels-list">
            {channelLis}
          </ul>
        </div>
      </div>
    )
  }
}

export default HomePage;
