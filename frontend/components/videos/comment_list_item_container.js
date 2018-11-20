import React from 'react';
import {connect} from 'react-redux';
import CommentListItem from './comment_list_item';
import {updateComment, removeComment} from '../../actions/comments/comments_actions';

const msp = (state, ownProps) => {
  const comment = ownProps.comment;
  const user = state.entities.users[comment.user_id];
  const currentUserId = state.session.id;
  return {
    comment,
    user,
    currentUserId,
  };
};

const mdp = (dispatch) => {
  return {
    updateComment: (comment) => dispatch(updateComment(comment)),
    deleteComment: (commentId) => dispatch(removeComment(commentId))
  };
};

export default connect(msp, mdp)(CommentListItem);
