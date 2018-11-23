import {combineReducers} from 'redux';
import videoIds from './video_search_reducer';
import channelIds from './channel_search_reducer';

export default combineReducers({
  videoIds,
  channelIds
});
