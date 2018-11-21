import * as ChannelsAPIUtil from '../../util/channels/channels_api_util';

export const RECEIVE_CHANNEL = "RECEIVE_CHANNEL";
export const REMOVE_CHANNEL = "REMOVE_CHANNEL";
export const RECEIVE_CHANNELS = "RECEIVE_CHANNELS";
export const RECEIVE_VIDEOS = "RECEIVE_VIDEOS";

export const fetchChannelVideos = (channelId) => dispatch => {
  return ChannelsAPIUtil.fetchChannelVideos(channelId).then((payload)=>{
    dispatch({
      type: RECEIVE_VIDEOS,
      payload
    });
  });
};

export const fetchChannelByUsername = (username) => dispatch => {
  return ChannelsAPIUtil.fetchChannelByUsername(username).then((payload)=>{
    dispatch({
      type: RECEIVE_CHANNELS,
      payload
    });
  });
};

export const fetchChannel = (channelId) => dispatch => {
  return ChannelsAPIUtil.fetchChannel(channelId).then((payload)=>{
    dispatch({
      type: RECEIVE_CHANNEL,
      payload
    });
  });
};

export const fetchChannels = (filters) => dispatch => {
  return ChannelsAPIUtil.fetchChannels(filters).then((payload)=>{
    dispatch({
      type: RECEIVE_CHANNELS,
      payload
    });
  });
};

export const createChannel = (channel, history) => dispatch => {
  return ChannelsAPIUtil.createChannel(channel).then((payload)=>{
    const channelId = Object.keys(payload.channels)[0];
    history.push(`/channels/${channelId}`);
  });
};

export const updateChannel = (channel, channelId, history) => dispatch => {
  return ChannelsAPIUtil.updateChannel(channel, channelId).then((payload)=>{
    dispatch({
      type: RECEIVE_CHANNEL,
      payload
    });
    history.push(`/channels/${channelId}`);
  });
};

export const removeChannel = (channelId) => dispatch => {
  return ChannelsAPIUtil.removeChannel(channelId).then((payload)=>{
    dispatch({
      type: REMOVE_CHANNEL,
      payload
    });
  });
};
