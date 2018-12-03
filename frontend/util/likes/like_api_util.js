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
    url: `/api/videos/${videoId}/likes`,
    data: {
      likeable_type: "Video",
      likeable_id: videoId,
    }
  });
};

export const createCommentLike = (positive, commentId) => {
  return $.ajax({
    method: "POST",
    url: `/api/comments/${commentId}/likes`,
    data: {like: {
      positive,
      likeable_type: "Comment",
      likeable_id: commentId
    }}
  });
};

export const destroyCommentLike = (commentId) => {
  return $.ajax({
    method: "DELETE",
    url: `/api/comments/${commentId}/likes`,
    data: {
      likeable_type: "Comment",
      likeable_id: commentId
    }
  });
};