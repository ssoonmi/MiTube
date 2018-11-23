import React from 'react';
import TimeAgo from '../util/time_ago';
import {Link} from 'react-router-dom';

class ChannelShowHome extends React.Component {
  render() {
    const {videos, channel, videoIds} = this.props;
    if (videoIds && videoIds.length != 0){
      const videoLis = videoIds.map((videoId, videoIdx) => {
        const video = videos[videoId];
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
        <section className="channel-home">
          <div className="channel-videos-header">
            <h3>Popular Uploads</h3>
          </div>
          <ul className="video-list channel-home-video-list">
            {videoLis}
          </ul>
        </section>
      );
    } else {
      return (
        null
      );
    }
  }
}

export default ChannelShowHome;
