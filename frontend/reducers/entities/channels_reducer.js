import {RECEIVE_CHANNEL, RECEIVE_CHANNELS, REMOVE_CHANNEL} from '../../actions/channels/channels_actions';
import {RECEIVE_VIDEO, RECEIVE_VIDEOS, RECEIVE_SEARCH_VIDEOS} from '../../actions/videos/videos_actions';
import {RECEIVE_SUBSCRIPTION, REMOVE_SUBSCRIPTION} from '../../actions/subscriptions/subscriptions_actions';
import {merge} from 'lodash';

const ChannelsReducer = (state={}, action) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_VIDEO:
    case RECEIVE_VIDEOS:
    case RECEIVE_SEARCH_VIDEOS:
    case RECEIVE_CHANNEL:
    case RECEIVE_CHANNELS:
      return merge({}, state, action.payload.channels);
    case REMOVE_CHANNEL:
      newState = merge({}, state);
      delete newState[action.id];
      return newState;
    case RECEIVE_SUBSCRIPTION: 
      newState = merge({}, state);
      newState[action.channelId].subscribed = true;
      newState[action.channelId].numSubscribers += 1;
      return newState;
    case REMOVE_SUBSCRIPTION:
      newState = merge({}, state);
      newState[action.channelId].subscribed = false;
      newState[action.channelId].numSubscribers -= 1;
      return newState;
    default:
      return state;
  }
};

export default ChannelsReducer;
