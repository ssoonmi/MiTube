import React from 'react';
import {Player } from 'video-react';

class VideoShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchVideo(this.props.videoId);
  }

  render() {
    let thumbnail;
    let file;
    let renderVideo;
    let title;
    let description;
    let channelName;
    let channelIcon;
    if (this.props.video) {
      title = this.props.video.title;
      description = this.props.video.description;
      channelName = this.props.channel.name;
      channelIcon = this.props.channel.icon;
      renderVideo = (
        <video poster={this.props.video.thumbnail} controls >
          <source src={this.props.video.file} type="video/mp4" />
        </video>
      );
    }
    return (
      <article className="video-show-page">
        <div className="video-show-page-video-container">
          {renderVideo}
        </div>
        <section className="video-show-info">
          <div className="video-show-info-header">
            <h2>{title}</h2>
            <div>1,000,000 views</div>
          </div>
          <div className="video-show-info-details">
            <div className="video-show-info-details-channel">
              <div className="video-show-info-details-channel-icon">{channelName ? channelName[0].toUpperCase() : ""}</div>
              <div className="video-show-info-details-channel-name">
                <h3>{channelName}</h3>
                <div>Published on Nov 15, 2018</div>
              </div>
            </div>
            <div className="video-show-info-details-description">{description}</div>
          </div>
        </section>
      </article>
    );
  }
}

export default VideoShow;
