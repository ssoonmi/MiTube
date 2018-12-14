import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import SearchPage from './search_page';
import { fetchVideos } from '../../actions/videos/videos_actions';
import { resetSearch } from '../../actions/search/search_actions';

const msp = (state, ownProps) => {
  const searchTerms = ownProps.match.params.searchTerms;
  let channel;
  if (state.search.channelIds) {
    channel = state.entities.channels[state.search.channelIds];
  }
  return {
    filter: {
      likedVideos: true,
      limit: 20,
    },
    videos: state.entities.videos,
    searchedChannel: channel,
    channels: state.entities.channels,
    videoIds: state.search.videoIds,
  };
};

const mdp = (dispatch, ownProps) => {
  return {
    fetchVideos: (filter) => dispatch(fetchVideos(filter)),
    resetSearch: () => dispatch(resetSearch())
  };
};

export default withRouter(connect(msp, mdp)(SearchPage));
