import React from 'react';
import {connect} from 'react-redux';
import VideoShowComments from './video_show_comments';
import {createComment, updateComment, removeComment, fetchVideoComments} from '../../actions/comments/comments_actions';
import {withRouter} from 'react-router-dom';

const msp = (state, ownProps) => {
  const video = ownProps.video;
  const commentIds = video.commentIds ? video.commentIds : [];
  const comments = commentIds.map((id)=> {
    return state.entities.comments[id];
  });
  return {
    video,
    comments: comments.reverse(),
    loggedIn: Boolean(state.session.id),
    history: ownProps.history,
    user: state.entities.users[state.session.id]
  };
};

const mdp = (dispatch) => {
  return {
    fetchComments: (videoId) => dispatch(fetchVideoComments(videoId)),
    createComment: (comment) => dispatch(createComment(comment)),
    removeComment: (commentId) => dispatch(removeComment(commentId)),
    updateComment: (comment) => dispatch(updateComment(comment)),
  };
};

export default withRouter(connect(msp, mdp)(VideoShowComments));
