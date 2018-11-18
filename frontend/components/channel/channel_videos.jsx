import React from 'react';
import VideoThumbnail from '../videos/video_thumbnail';
import {Link} from 'react-router-dom';
import TimeAgo from '../util/time_ago';

class ChannelVideos extends React.Component {
  componentDidMount() {

  }

  render() {
    const {channel} = this.props;
    let videoLis;
    if (channel) {
      const videoIds = channel.videoIds;
      videoLis = videoIds.map((videoId, videoIdx) => {
        const video = this.props.videos[videoId];
        return (
          <li key={videoIdx}><Link to={`/videos/${videoId}`}>
            <img className="video-list-item-thumbnail" src={video.thumbnail}/>
            <div className="video-list-item-thumbnail-time"></div>
            <div className="video-list-item-info">
              <h4>{video.title}</h4>
              <div className="video-list-item-details">
                <span>8.2M views • </span>
                <span><TimeAgo time={video.created_at}/></span>
              </div>
            </div>
          </Link></li>
        );
      });
    }

    // <VideoThumbnail video={this.props.videos[videoId]}/>

    return (
      <section className="channel-videos">
        <div className="channel-videos-header">
          <h3>Uploads</h3>
        </div>
        <ul className="video-list">
          {videoLis}
        </ul>
      </section>
    );
  }
}

export default ChannelVideos;
