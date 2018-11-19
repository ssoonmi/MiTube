import React from 'react';
import {connect} from 'react-redux';
import VideoShowLikes from './video_show_likes';
import {createVideoLike, destroyVideoLike} from '../../actions/likes/likes_actions';
import {withRouter} from 'react-router-dom';

const msp = (state, ownProps) => {
  const video = ownProps.video;
  const like = video.userLike;
  const numLikes = video.numLikes;
  const numDislikes = video.numDislikes;
  return {
    like,
    numLikes,
    numDislikes,
    loggedIn: Boolean(state.session.id)
  };
};

const mdp = (dispatch, ownProps) => {
  const history = ownProps.history;
  return {
    createLike: (positive, videoId) => dispatch(createVideoLike(positive, videoId)),
    destroyLike: (videoId) => dispatch(destroyVideoLike(videoId)),
    logIn: () => history.push("/session/new"),
  };
};

export default withRouter(connect(msp,mdp)(VideoShowLikes));
