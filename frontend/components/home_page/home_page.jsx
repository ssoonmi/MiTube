import React from 'react';
import {Link} from 'react-router-dom';
// import VideoThumbnail from '../videos/video_thumbnail';
import TimeAgo from '../util/time_ago';

class HomePage extends React.Component {
  componentDidMount() {
    this.props.fetchChannels();
  }

  render() {
    const {channels, videos} = this.props;
    let timeNow = new Date();
    const channelLis = channels.map((channel, idx) => {
      const iconUrl = channel.icon;
      const content = iconUrl ? undefined : channel.name[0].toUpperCase();
      const button = <button style={content ? {} : {backgroundImage: `url(${iconUrl})`}} className="profile-btn">{content}</button>;
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
                  <span>8.2M views • </span>
                  <span>{<TimeAgo time={video.created_at}/>}</span>
                </div>
              </div>
            </Link></li>
          );
        });
        // <VideoThumbnail video={this.props.videos[videoId]}/>
        return (
          <li key={channel.id} className="channels-list-item">
            <Link to={`/channels/${channel.id}`}className="channels-list-item-details">
              {button}
              <h3>{channel.name}</h3>
            </Link>
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
      <ul className="channels-list">
        {channelLis}
      </ul>
    )
  }
}

export default HomePage;
