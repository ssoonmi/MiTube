import {connect} from 'react-redux';
import SubscriptionsPage from './subscriptions_page';
import {fetchVideos} from '../../actions/videos/videos_actions';
import {resetSearch} from '../../actions/search/search_actions';

const msp = (state) => {
  return {
    filter: {
      subscriptions: true,
      limit: 50,
    },
    videos: state.entities.videos,
    videoIds: state.search.videoIds,
    channels: state.entities.channels
  };
};

const mdp = dispatch => {
  return {
    fetchVideos: (filter) => dispatch(fetchVideos(filter)),
    resetSearch: () => dispatch(resetSearch())
  };
};

export default connect(msp, mdp)(SubscriptionsPage);