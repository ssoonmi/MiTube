import {connect} from 'react-redux';
import CommentReplies from './comment_replies';
import { updateComment, removeComment } from '../../actions/comments/comments_actions';

const msp = (state, ownProps) => {
  const parentComment = ownProps.comment;
  const replyIds = state.entities.comments[parentComment.id].replyIds;
  const replies = state.entities.replies;
  const users = state.entities.users;
  return {
    replyIds,
    parentComment,
    replies,
    users,
    showReplies: ownProps.showReplies,
  };
};

const mdp = (dispatch, ownProps) => {
  return {
  };
};

export default connect(msp, mdp)(CommentReplies);