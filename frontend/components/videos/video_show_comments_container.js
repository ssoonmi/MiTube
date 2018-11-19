import React from 'react';
import {connect} from 'react-redux';
import VideoShowComments from './video_show_comments';

const msp = (state, ownProps) => {
  const video = ownProps.video;
  return {
    video,
  };
};

const mdp = (dispatch) => {
  return {

  };
};

export default connect(msp, mdp)(VideoShowComments);
