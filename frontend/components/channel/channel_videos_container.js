import React from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import ChannelVideos from './channel_videos';
import {fetchChannelVideos} from '../../actions/channels/channels_actions';

const msp = (state, ownProps) => {
  const channelId = ownProps.match.params.channelId;
  const videos = state.entities.videos;
  return {
    channelId,
    videos,
    channel: state.entities.channels[channelId]
  };
};

const mdp = dispatch => {
  return {
    fetchChannelVideos: (channelId) => dispatch(fetchChannelVideos(channelId))
  };
};

export default withRouter(connect(msp, mdp)(ChannelVideos));
