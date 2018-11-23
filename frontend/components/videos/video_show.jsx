import React from 'react';
// import {Player } from 'video-react';
import VideoShowLikesContainer from './video_show_likes_container';
import {UnAuthRoute} from '../../util/route_util';
import VideoShowCommentsContainer from './video_show_comments_container';
import {Link} from 'react-router-dom';
import ChannelButton from '../util/channel_button';
import TimeAgo from '../util/time_ago';

class VideoShow extends React.Component {
  constructor(props) {
    super(props);
    this.monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];
  }

  componentDidMount() {
    this.props.fetchVideo(this.props.videoId);
    this.props.fetchNextVideoSuggestions(this.props.videoId);
  }

  componentWillUnmount() {
    this.props.resetSearch();
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
    let searchLis;
    if (this.props.video) {
      title = this.props.video.title;
      description = this.props.video.description;
      channelName = this.props.channel.name;
      channelIcon = this.props.channel.icon;
      thumbnail = this.props.video.thumbnail;
      numViews = this.props.video.numViews;
      const {videos, searchVideoIds, channels} = this.props;
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
      searchLis = searchVideoIds.map((id) => {
        const searchedVideo = videos[id];
        const searchedChannel = channels[searchedVideo.channel_id];
        return (
          <li key={id}><Link to={`/videos/${id}`}>
            <img className="video-list-item-thumbnail" src={searchedVideo.thumbnail}/>
            <div className="video-list-item-thumbnail-time"></div>
            <div className="video-list-item-info">
              <h4>{searchedVideo.title}</h4>
              <div className="video-list-item-details">
                <div><Link to={`/channels/${searchedChannel.id}`}>{searchedChannel.name}</Link></div>
                <span>{searchedVideo.numViews} views • </span>
                <span>{<TimeAgo time={searchedVideo.created_at}/>}</span>
              </div>
            </div>
          </Link></li>
        )
      });
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
            {searchLis}
          </ul>
        </section>
        {this.props.video ? <VideoShowCommentsContainer video={this.props.video}/> : null}
      </article>
    );
  }
}

export default VideoShow;
