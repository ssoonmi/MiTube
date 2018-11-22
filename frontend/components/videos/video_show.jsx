import React from 'react';
// import {Player } from 'video-react';
import VideoShowLikesContainer from './video_show_likes_container';
import {UnAuthRoute} from '../../util/route_util';
import VideoShowCommentsContainer from './video_show_comments_container';
import {Link} from 'react-router-dom';
import ChannelButton from '../util/channel_button';

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
    let numViews;
    if (this.props.video) {
      title = this.props.video.title;
      description = this.props.video.description;
      channelName = this.props.channel.name;
      channelIcon = this.props.channel.icon;
      thumbnail = this.props.video.thumbnail;
      numViews = this.props.video.numViews;
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
        <div className="video-show-video video-show-page-video-container">
          {renderVideo}
        </div>
        <section className="video-show-info video-show-info-container">
          <div className="video-show-info-header">
            <h2>{title}</h2>
            <div className="video-show-info-header-details">
              <div>{numViews} views</div>
              {this.props.video ? <VideoShowLikesContainer video={this.props.video}/> : null}
            </div>
          </div>
          <div className="video-show-info-details">
            <div className="video-show-info-details-channel">
              <Link to={this.props.channel ? `/channels/${this.props.channel.id}` : ""}>
                <ChannelButton
                classNames={"video-show-info-details-channel-icon"}
                channel={this.props.channel}/>
              </Link>
              <div className="video-show-info-details-channel-name">
                <Link to={this.props.channel ? `/channels/${this.props.channel.id}` : ""}>
                  <h3>{channelName}</h3>
                </Link>
                <div>Published on {publishedOn}</div>
              </div>
            </div>
            <div className="video-show-info-details-description">{description}</div>
          </div>
        </section>
        <section className="video-show-other-videos video-show-video-list-container">
          <h3>Up Next</h3>
          <ul className="video-show-video-list">
            <li>
              <img className="video-show-video-list-video-thumbnail" />
              <div className="video-show-video-list-video-details">
                upcoming video side list
              </div>
            </li>
          </ul>
        </section>
        {this.props.video ? <VideoShowCommentsContainer video={this.props.video}/> : null}
      </article>
    );
  }
}

export default VideoShow;
