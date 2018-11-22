import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import SearchPage from './search_page';
import {fetchVideos} from '../../actions/videos/videos_actions';

const msp = (state, ownProps) => {
  const searchTerms = ownProps.match.params.searchTerms;
  let channel;
  if (state.search.channelId) {
    channel = state.entities.channels[state.search.channelId];
  }
  return {
    searchTerms,
    videos: state.entities.videos,
    searchedChannel: channel,
    channels: state.entities.channels,
    videoIds: state.search.videoIds,
  };
};

const mdp = (dispatch, ownProps) => {
  return {
    fetchVideos: (filter) => dispatch(fetchVideos(filter))
  };
};

export default withRouter(connect(msp, mdp)(SearchPage))
