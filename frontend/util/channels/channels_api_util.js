export const fetchChannelVideos = (channelId) => {
  return $.ajax({
    type: "GET",
    url: `/api/channels/${channelId}/videos`,
  });
};

export const fetchChannel = (channelId) => {
  return $.ajax({
    type: "GET",
    url: `api/channels/${channelId}`
  });
};

export const fetchChannelByUsername = (username) => {
  return $.ajax({
    type: "GET",
    url: `api/users/${username}/channels/`,
  })
};

export const fetchChannels = (filters) => {
  return $.ajax({
    type: "GET",
    url: `api/channels/`,
    data: filters
  });
};

export const createChannel = (channel) => {
  return $.ajax({
    type: "POST",
    url: `api/channels/`,
    data: channel,
    contentType: false,
    processData: false
  });
};

export const updateChannel = (channel, channelId) => {
  return $.ajax({
    type: "PATCH",
    url: `api/channels/${channelId}`,
    data: channel,
    contentType: false,
    processData: false
  });
};

export const removeChannel = (channelId) => {
  return $.ajax({
    type: "DELETE",
    url: `api/channels/${channelId}`
  });
};
