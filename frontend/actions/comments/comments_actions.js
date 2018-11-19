import * as CommentAPIUtil from '../../util/comments/comment_api_util';

export const RECEIVE_COMMENTS = "RECEIVE_COMMENTS";
export const RECEIVE_COMMENT = "RECEIVE_COMMENT";
export const REMOVE_COMMENT = "REMOVE_COMMENT";

export const fetchVideoComments = videoId => dispatch => {
  return CommentAPIUtil.fetchVideoComments(videoId).then((payload)=> {
    dispatch({
      type: RECEIVE_COMMENTS,
      payload
    });
  });
};

export const createComment = comment => dispatch => {
  return CommentAPIUtil.createComment(comment).then((payload) => {
    dispatch({
      type: RECEIVE_COMMENT,
      payload
    });
  });
}

export const removeComment = commentId => dispatch => {
  return CommentAPIUtil.removeComment(commentId).then((payload) => {
    dispatch({
      type: REMOVE_COMMENT,
      payload
    });
  });
};

export const updateComment = comment => dispatch => {
  return CommentAPIUtil.updateComment(comment).then((payload) => {
    dispatch({
      type: RECEIVE_COMMENT,
      payload
    });
  });
};
