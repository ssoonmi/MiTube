import {RECEIVE_CHANNEL, RECEIVE_CHANNELS, REMOVE_CHANNEL} from '../../actions/channels/channels_actions';
import {merge} from 'lodash';

const ChannelsReducer = (state={}, action) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_CHANNEL:
      return merge({}, state, action.payload.channels);
    case RECEIVE_CHANNELS:
      return merge({}, state, action.payload.channels);
    case REMOVE_CHANNEL:
      newState = merge({}, state);
      delete newState[action.id];
      return newState;
    default:
      return state;
  }
};

export default ChannelsReducer;
