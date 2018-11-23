import React from 'react';
import {connect} from 'react-redux';
import HomePage from './home_page';
import {fetchChannels} from '../../actions/channels/channels_actions';
import {resetSearch} from '../../actions/search/search_actions';
// import {fetchChannelVideos} from '../../actions/videos/videos_actions';

const msp = (state, ownProps) => {
  return {
    channels: state.entities.channels,
    channelIds: state.search.channelIds || [],
    videos: state.entities.videos,
  };
};

const mdp = (dispatch, ownProps) => {
  return {
    fetchChannels: (filters) => dispatch(fetchChannels(filters)),
    resetSearch: () => dispatch(resetSearch())
  };
};

export default connect(msp,mdp)(HomePage);
