import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {fetchVideo} from '../../actions/videos/videos_actions';
import {createView} from '../../actions/views/views_actions';
import VideoShow from './video_show';

const msp = (state, ownProps) => {
  const videoId = ownProps.match.params.videoId;
  const video = state.entities.videos[videoId];
  let channel;
  let like = 0;
  if (video) {
    channel = state.entities.channels[video.channel_id];
    if (video.userLike) {
      like = video.userLike;
    }
  }
  return {
    video,
    channel,
    videoId,
    dropdownShow: state.ui.dropdown,
    like
  };
};

const mdp = dispatch => {
  return {
    fetchVideo: (videoId) => dispatch(fetchVideo(videoId)),
    createView: (videoId) => dispatch(createView(videoId))
  };
};

export default withRouter(connect(msp, mdp)(VideoShow));
