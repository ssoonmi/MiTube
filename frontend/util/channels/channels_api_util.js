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
    data: {channel}
  });
};

export const removeChannel = (channelId) => {
  return $.ajax({
    type: "DELETE",
    url: `api/channels/${channelId}`
  });
};
