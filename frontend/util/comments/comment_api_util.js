export const fetchVideoComments = videoId => {
  return $.ajax({
    method: "GET",
    url: `/api/video/${videoId}/comments/`
  });
};

export const createComment = comment => {
  return $.ajax({
    method: "POST",
    url: `/api/video/${comment.video_id}/comments`,
    data: {comment}
  });
};

export const removeComment = commentId => {
  return $.ajax({
    method: "DELETE",
    url: `/api/comments/${commentId}/`,
  });
};

export const updateComment = comment => {
  return $.ajax({
    method: "PATCH",
    url: `/api/comments/${comment.id}`,
    data: {comment}
  });
};
