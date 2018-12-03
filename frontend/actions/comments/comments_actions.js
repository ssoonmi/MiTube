import * as CommentAPIUtil from '../../util/comments/comment_api_util';

export const RECEIVE_COMMENTS = "RECEIVE_COMMENTS";
export const RECEIVE_COMMENT = "RECEIVE_COMMENT";
export const RECEIVE_REPLY = "RECEIVE_REPLY";
export const RECEIVE_REPLIES = "RECEIVE_REPLIES";
export const REMOVE_COMMENT = "REMOVE_COMMENT";
export const REMOVE_REPLY = "REMOVE_REPLY";

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
    }, (response) => {
      console.log(response);
    });
  });
};

export const createReply = reply => dispatch => {
  return CommentAPIUtil.createComment(reply).then((payload) => {
    dispatch({
      type: RECEIVE_REPLY,
      payload
    }, (response) => {
      console.log(response);
    });
  });
};

export const removeComment = commentId => dispatch => {
  return CommentAPIUtil.removeComment(commentId).then((payload) => {
    dispatch({
      type: REMOVE_COMMENT,
      payload
    });
  });
};

export const removeReply = replyId => dispatch => {
  return CommentAPIUtil.removeComment(replyId).then((payload)=> {
    dispatch({
      type: REMOVE_REPLY,
      payload,
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

export const updateReply = reply => dispatch => {
  return CommentAPIUtil.updateComment(reply).then((payload) => {
    dispatch({
      type: RECEIVE_REPLY,
      payload,
    });
  });
};

export const fetchReplies = parentCommentId => dispatch => {
  return CommentAPIUtil.fetchReplies(parentCommentId).then((payload)=> {
    dispatch({
      type: RECEIVE_REPLIES,
      payload,
    });
  });
};