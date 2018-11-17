import React from 'react';
import {connect} from 'react-redux';
import HomePage from './home_page';
import {fetchChannels} from '../../actions/channels/channels_actions';
// import {fetchVideos} from '../../actions/videos/videos_actions';

const msp = (state, ownProps) => {
  return {
    channels: Object.values(state.entities.channels),
    videos: state.entities.videos,
  };
};

const mdp = (dispatch, ownProps) => {
  return {
    fetchChannels: (filters) => dispatch(fetchChannels(filters))
  };
};

export default connect(msp,mdp)(HomePage);
