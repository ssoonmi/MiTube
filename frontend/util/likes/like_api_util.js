export const createVideoLike = (positive, videoId) => {
  return $.ajax({
    method: "POST",
    url: `/api/videos/${videoId}/likes`,
    data: {like: {
      positive,
      likeable_type: "Video",
      likeable_id: videoId
    }}
  });
};

export const destroyVideoLike = videoId => {
  return $.ajax({
    method: "DELETE",
    url: `/api/videos/${videoId}/likes`
  });
};
