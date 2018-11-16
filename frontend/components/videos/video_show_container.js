import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {fetchVideo} from '../../actions/videos/videos_actions';
import VideoShow from './video_show';

const msp = (state, ownProps) => {
  const videoId = ownProps.match.params.videoId;
  const video = state.entities.videos[videoId];
  let channel;
  if (video) {
    channel = state.entities.channels[video.channel_id];
  }
  return {
    video,
    channel,
    videoId
  };
};

const mdp = dispatch => {
  return {
    fetchVideo: (videoId) => dispatch(fetchVideo(videoId))
  };
};

export default withRouter(connect(msp, mdp)(VideoShow));
