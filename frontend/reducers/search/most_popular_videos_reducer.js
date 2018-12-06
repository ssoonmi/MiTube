import {RECEIVE_CHANNEL} from '../../actions/channels/channels_actions';
import {RESET_SEARCH} from '../../actions/search/search_actions';

const defaultState = [];

const mostPopularVideosReducer = (state=defaultState, action) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_CHANNEL:
      if (action.payload.mostPopularVideoIds) {
        newState = state.slice(0);
        action.payload.mostPopularVideoIds.forEach((id) => {
          if (!state.includes(id)) {
            newState.push(id);
          }
        });
        return newState;
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
