import * as VideoAPIUtil from '../../util/videos/video_api_util';

export const RECEIVE_VIDEOS = "RECEIVE_VIDEOS";
export const RECEIVE_VIDEO = "RECEIVE_VIDEO";
export const RECEIVE_VIDEO_ERRORS = "RECEIVE_VIDEO_ERRORS";
export const REMOVE_VIDEO = "REMOVE_VIDEO";

export const receiveVideos = payload => {
  return {
    type: RECEIVE_VIDEOS,
    payload
  };
};

export const receiveVideo = payload => {
  return {
    type: RECEIVE_VIDEO,
    payload
  };
};

export const removeVideo = id => {
  return {
    type: REMOVE_VIDEO,
    id
  };
};

export const receiveVideoErrors = errors => {
  return {
    type: RECEIVE_VIDEO_ERRORS,
    errors
  };
};

export const fetchVideos = (channelId) => dispatch => {
  return VideoAPIUtil.fetchVideos(channelId).then((payload)=>
    dispatch(receiveVideos(payload)), (response) =>
    dispatch(receiveVideoErrors(response.responseJSON))
  );
};

export const fetchVideo = (videoId) => dispatch => {
  return VideoAPIUtil.fetchVideo(videoId).then((payload)=>
    dispatch(receiveVideo(payload)), (response) =>
    dispatch(receiveVideoErrors(response.responseJSON))
  );
};

export const createVideo = (video, channelId) => dispatch => {
  return VideoAPIUtil.createVideo(video, channelId).then((payload)=>
    dispatch(receiveVideo(payload)), (response) =>
    dispatch(receiveVideoErrors(response.responseJSON))
  );
};

export const deleteVideo = videoId => dispatch => {
  return VideoAPIUtil.deleteVideo(videoId).then((payload)=>
    dispatch(removeVideo(payload.id)), (response) =>
    dispatch(receiveVideoErrors(response.responseJSON))
  );
};
