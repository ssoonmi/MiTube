import * as LikeAPIUtil from '../../util/likes/like_api_util';

export const CREATE_VIDEO_LIKE = "CREATE_VIDEO_LIKE";
export const DESTROY_VIDEO_LIKE = "DESTROY_VIDEO_LIKE";
export const CREATE_COMMENT_LIKE = "CREATE_COMMENT_LIKE";
export const DESTROY_COMMENT_LIKE = "DESTROY_COMMENT_LIKE";
export const CREATE_REPLY_LIKE = "CREATE_REPLY_LIKE";
export const DESTROY_REPLY_LIKE = "DESTROY_REPLY_LIKE";

export const createVideoLike = (positive, videoId) => dispatch => {
  return LikeAPIUtil.createVideoLike(positive, videoId).then((payload)=> {
    dispatch({
      type: CREATE_VIDEO_LIKE,
      payload
    });
  });
};

export const destroyVideoLike = (videoId) => dispatch => {
  return LikeAPIUtil.destroyVideoLike(videoId).then((payload)=> {
    dispatch({
      type: DESTROY_VIDEO_LIKE,
      payload
    });
  });
};

export const createCommentLike = (positive, commentId) => dispatch => {
  return LikeAPIUtil.createCommentLike(positive, commentId).then((payload)=> {
    dispatch({
      type: CREATE_COMMENT_LIKE,
      payload,
    });
  });
};

export const destroyCommentLike = (commentId) => dispatch => {
  return LikeAPIUtil.destroyCommentLike(commentId).then((payload) => {
    dispatch({
      type: DESTROY_COMMENT_LIKE,
      payload,
    });
  });
};

export const createReplyLike = (positive, replyId) => dispatch => {
  return LikeAPIUtil.createCommentLike(positive, replyId).then((payload) => {
    dispatch({
      type: CREATE_REPLY_LIKE,
      payload,
    });
  });
};

export const destroyReplyLike = (replyId) => dispatch => {
  return LikeAPIUtil.destroyCommentLike(replyId).then((payload) => {
    dispatch({
      type: DESTROY_REPLY_LIKE,
      payload,
    });
  });
};