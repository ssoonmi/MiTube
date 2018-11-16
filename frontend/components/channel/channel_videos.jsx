import React from 'react';
import VideoThumbnail from '../videos/video_thumbnail';

class ChannelVideos extends React.Component {
  componentDidMount() {
    
  }

  render() {
    return (
      <section className="channel-videos">
        <div className="channel-videos-header">
          <h3>Uploads</h3>
        </div>
        <ul className="channel-videos-list">
          <VideoThumbnail/>
        </ul>
      </section>
    );
  }
}

export default ChannelVideos;
