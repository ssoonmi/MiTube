import {RECEIVE_VIDEO, RECEIVE_VIDEO_ERRORS} from '../../actions/videos/videos_actions';

const defaultState = [];

const videoErrorsReducer = (state=defaultState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_VIDEO:
      return defaultState;
    case RECEIVE_VIDEO_ERRORS:
      return action.errors;
    default:
      return defaultState;
  }
};

export default videoErrorsReducer;
