import React from 'react';
import {Link} from 'react-router-dom';
import TimeAgo from '../util/time_ago';
import ChannelButton from '../util/channel_button';

class SearchPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      offset: 0,
    };
  }

  componentDidMount() {
    const {filter} = this.props;
    filter.offset = this.state.offset;
    this.props.fetchVideos(filter);
    this.setState({offset: this.state.offset + 20});
  }

  componentDidUpdate(oldProps) {
    if (oldProps.searchTerms != this.props.searchTerms){
      this.props.fetchVideos({
        search: this.props.searchTerms,
        limit: 20,
        offset: 0,
      });
      this.setState({offset: 20});
    }
  }

  componentWillUnmount() {
    this.props.resetSearch();
  }

  render() {
    let videoLis;
    const {videos, videoIds, searchedChannel} = this.props;
    if (videoIds && videoIds.length != 0){
      videoLis = videoIds.map((videoId, videoIdx) => {
        const video = this.props.videos[videoId];
        const channel = this.props.channels[video.channel_id];
        return (
          <li key={videoIdx}>
            <Link to={`/videos/${videoId}`}>
              <img className="search-list-item-thumbnail" src={video.thumbnail}/>
            </Link>
            <div className="search-list-item-thumbnail-time"></div>
            <Link to={`/videos/${videoId}`}>
              <div className="search-list-item-info">
                <h4>{video.title}</h4>
                <div className="search-list-item-details">
                  <span><Link to={`/channels/${channel.id}`}>{channel.name}</Link> • </span>
                  <span>{video.numViews} views • </span>
                  <span>{<TimeAgo time={video.created_at}/>}</span>
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
    let channelLi;
    if (searchedChannel) {
      const channel = searchedChannel;
      channelLi = (
        <li>
          <Link to={`/channels/${channel.id}`}>
            <div className="search-list-item-channel-btn">
              <ChannelButton channel={channel} size={'136px'}/>
            </div>
          </Link>
          <Link to={`/channels/${channel.id}`}>
            <div className="search-list-item-info">
              <h4>{channel.name}</h4>
              <div className="search-list-item-details">
                <span>{channel.numSubscribers} subscribers • </span>
                <span>{channel.numVideos} videos</span>
                <div className="search-list-item-description">
                  {channel.description}
                </div>
              </div>
            </div>
          </Link>
        </li>
      )
    }
    const { filter: { trending, likedVideos, history } } = this.props;
    let header = null;
    if (trending) {
      header = "Trending";
    } else if (likedVideos) {
      header = "Liked Videos";
    } else if (history) {
      header = "Watch History";
    }
    return (
      <article className="gray-background search-page">
        {header ? 
          (
            <h2>{header}</h2>
          ) : (null)
        }
        {searchedChannel ?
          (
            <>
              <div className="search-page-hr"/>
              <ul className="search-list">
                {channelLi}
              </ul>
            </>
          ) : (
            null
          )
        }
        {videoLis ?
          (
            <>
              <div className="search-page-hr"/>
              <ul className="search-list">
                {videoLis}
              </ul>
            </>
          ) : (
            null
          )
        }
      </article>
    );
  }
}

export default SearchPage;
