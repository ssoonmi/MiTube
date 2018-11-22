import * as ViewAPIUtil from '../../util/views/view_api_util';
export const RECEIVE_VIEW = "RECEIVE_VIEW";

export const createView = videoId => dispatch => {
  return ViewAPIUtil.createView(videoId).then((payload)=> {
    dispatch({
      type: RECEIVE_VIEW,
      payload,
    });
  });
};
