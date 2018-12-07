import CommentReplyForm from './comment_reply_form';
import {connect} from 'react-redux';
import {createReply } from '../../actions/comments/comments_actions';

const msp = (state, ownProps) => {
  const currentUser = state.entities.users[state.session.id];
  const parentCommentId = ownProps.comment.id;
  const videoId = ownProps.comment.video_id;
  return {
    currentUser,
    hideReplyForm: ownProps.hideReplyForm,
    parentCommentId,
    videoId,
  };
};

const mdp = (dispatch, ownProps) => {
  return {
    createReply: (reply) => dispatch(createReply(reply)),
  };
};

export default connect(msp, mdp)(CommentReplyForm);