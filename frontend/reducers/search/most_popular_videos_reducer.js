import {RECEIVE_CHANNEL} from '../../actions/channels/channels_actions';
import {RESET_SEARCH} from '../../actions/search/search_actions';


const defaultState = [];

const mostPopularVideosReducer = (state=defaultState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CHANNEL:
      if (action.payload.mostPopularVideoIds) {
        return state.concat(action.payload.mostPopularVideoIds);
      } else {
        return state;
      }
    case RESET_SEARCH:
      return defaultState;
    default:
      return state;
  }
};

export default mostPopularVideosReducer;
