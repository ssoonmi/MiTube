import React from 'react';
import {Player } from 'video-react';

class VideoShow extends React.Component {
  constructor(props) {
    super(props);
    this.monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];
  }

  componentDidMount() {
    this.props.fetchVideo(this.props.videoId);
  }

  render() {
    let file;
    let renderVideo;
    let title;
    let description;
    let channelName;
    let channelIcon;
    let publishedOn;
    let thumbnail;
    if (this.props.video) {
      title = this.props.video.title;
      description = this.props.video.description;
      channelName = this.props.channel.name;
      channelIcon = this.props.channel.icon;
      thumbnail = this.props.video.thumbnail;
      const time = new Date(this.props.video.created_at);
      publishedOn = `${this.monthNames[time.getMonth()]} ${time.getDate()}, ${time.getFullYear()}`;
      renderVideo = (
        <video
          style={{pointerEvents: this.props.dropdownShow ? "none" : "auto"}}
          poster={thumbnail}
          controls >
          <source src={this.props.video.file} type="video/mp4" />
        </video>
      );
    }
    return (
      <article className="video-show-page">
        {this.props.dropdownShow}
        <div className="video-show-page-video-container">
          {renderVideo}
        </div>
        <section className="video-show-info-container">
          <div className="video-show-info-header">
            <h2>{title}</h2>
            <div>1,000,000 views</div>
          </div>
          <div className="video-show-info-details">
            <div className="video-show-info-details-channel">
              <div className="video-show-info-details-channel-icon">{channelName ? channelName[0].toUpperCase() : ""}</div>
              <div className="video-show-info-details-channel-name">
                <h3>{channelName}</h3>
                <div>Published on {publishedOn}</div>
              </div>
            </div>
            <div className="video-show-info-details-description">{description}</div>
          </div>
        </section>
        <section className="video-show-video-list-container">
          <ul className="video-show-video-list">
            <li>
              <img className="video-show-video-list-video-thumbnail" />
              <div className="video-show-video-list-video-details">
                upcoming video side list
              </div>
            </li>
          </ul>
        </section>
      </article>
    );
  }
}

export default VideoShow;
