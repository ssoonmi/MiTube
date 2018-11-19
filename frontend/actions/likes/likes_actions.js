import * as LikeAPIUtil from '../../util/likes/like_api_util';

export const CREATE_VIDEO_LIKE = "CREATE_VIDEO_LIKE";
export const DESTROY_VIDEO_LIKE = "DESTROY_VIDEO_LIKE";

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
