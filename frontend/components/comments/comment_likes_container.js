import { connect } from 'react-redux';
import CommentLikes from './comment_likes';
import { createCommentLike, destroyCommentLike, createReplyLike, destroyReplyLike } from '../../actions/likes/likes_actions';
import { withRouter } from 'react-router-dom';

const msp = (state, ownProps) => {
  const comment = ownProps.comment;
  const like = comment.userLike;
  const numLikes = comment.numLikes;
  const numDislikes = comment.numDislikes;
  return {
    like,
    numLikes,
    numDislikes,
    loggedIn: Boolean(state.session.id)
  };
};

const mdp = (dispatch, ownProps) => {
  const history = ownProps.history;
  const createLike = ownProps.reply ? createReplyLike : createCommentLike;
  const destroyLike = ownProps.reply ? destroyReplyLike : destroyCommentLike;
  return {
    createLike: (positive, commentId) => dispatch(createLike(positive, commentId)),
    destroyLike: (commentId) => dispatch(destroyLike(commentId)),
    logIn: () => history.push("/session/new"),
  };
};

export default withRouter(connect(msp, mdp)(CommentLikes));
