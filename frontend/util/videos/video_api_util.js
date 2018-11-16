export const fetchVideos = (channelId) => {
  return $.ajax({
    method: "GET",
    url: `/api/channels/${channelId}/videos`,
  });
};

export const fetchVideo = (videoId) => {
  return $.ajax({
    method: "GET",
    url: `/api/videos/${videoId}/`,
  });
};

export const createVideo = (video, channelId) => {
  return $.ajax({
    method: "POST",
    url: `/api/channels/${channelId}/videos`,
    data: video,
    contentType: false,
    processData: false
  });
};

export const updateVideo = (video) => {
  return $.ajax({
    method: "PATCH",
    url: `/api/videos/${video.id}`,
    data: video,
    contentType: false,
    processData: false
  });
};

export const deleteVideo = (videoId) => {
  return $.ajax({
    method: "DELETE",
    url: `/api/videos/${videoId}`
  });
};
