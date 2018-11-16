import {connect} from 'react-redux';
import React from 'react';

class VideoThumbnail extends React.Component {
  render() {
    return (
      <li>
        <div className="video-thumbnail">
        </div>
        <div className="video-thumbnail-content">
          <div className="video-thumbnail-info">
            <div className="video-thumbnail-title">
              {'hello'}
            </div>
            <div className="video-thumbnail-details">
              <span></span>
              <span></span>
            </div>
          </div>
          <div className="video-thumbnail-icon">
          </div>
        </div>
      </li>
    );
  }
}

export default VideoThumbnail;
