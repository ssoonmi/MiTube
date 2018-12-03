import { connect } from 'react-redux';
import CommentReply from './comment_reply';
import { updateReply, removeReply } from '../../actions/comments/comments_actions';

const msp = (state, ownProps) => {
  const comment = ownProps.comment;
  const user = ownProps.user;
  const currentUserId = state.session.id;
  return {
    comment,
    user,
    currentUserId,
  };
};

const mdp = (dispatch, ownProps) => {
  return {
    updateComment: (reply) => dispatch(updateReply(reply)),
    deleteComment: (replyId) => dispatch(removeReply(replyId)),
  };
};

export default connect(msp, mdp)(CommentReply);
