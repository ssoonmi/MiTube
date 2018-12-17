import React from 'react';
import {Link} from 'react-router-dom';
import TimeAgo from '../util/time_ago';

class SubscriptionsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      offset: 0,
    };
  }

  componentDidMount() {
    const { filter } = this.props;
    filter.offset = this.state.offset;
    this.props.fetchVideos(filter);
    this.setState({ offset: this.state.offset + 20 });
  }

  componentDidUpdate(oldProps) {
    if (oldProps.searchTerms != this.props.searchTerms) {
      this.props.fetchVideos({
        search: this.props.searchTerms,
        limit: 20,
        offset: 0,
      });
      this.setState({ offset: 20 });
    }
  }

  componentWillUnmount() {
    this.props.resetSearch();
  }

  render() {
    let todayVideoLis;
    const { videos, videoIds, channels } = this.props;
    if (videoIds && videoIds.length != 0) {
      todayVideoLis = videoIds.map((videoId, videoIdx) => {
        const video = videos[videoId];
        const channel = channels[video.channel_id];
        return (
          <li key={videoIdx}>
            <Link to={`/videos/${videoId}`}>
              <img className="search-list-item-thumbnail" src={video.thumbnail} />
            </Link>
            <div className="search-list-item-thumbnail-time"></div>
            <Link to={`/videos/${videoId}`}>
              <div className="search-list-item-info">
                <h4>{video.title}</h4>
                <div className="search-list-item-details">
                  <span><Link to={`/channels/${channel.id}`}>{channel.name}</Link> • </span>
                  <span>{video.numViews} views • </span>
                  <span>{<TimeAgo time={video.created_at} />}</span>
                  <div className="search-list-item-description">
                    {video.description}
                  </div>
                </div>
              </div>
            </Link>
          </li>
        );
      });
    }

    return (
      <article className="gray-background search-page">
        <h2>Today</h2>
        <ul className="search-list">
          {todayVideoLis}
        </ul>
        <div className="search-page-hr" />
        <h2>Yesterday</h2>
        <ul className="search-list">
          <li>video here</li>
        </ul>
        <div className="search-page-hr" />
        <h2>This Week</h2>
        <ul className="search-list">
          <li>video here</li>
        </ul>
        <div className="search-page-hr" />
        <h2>This Month</h2>
        <ul className="search-list">
          <li>video here</li>
        </ul>
        <div className="search-page-hr" />
      </article>
    );
  }
}

export default SubscriptionsPage;