export const createView = videoId => {
  return $.ajax({
    type: "POST",
    url: `/api/videos/${videoId}/views`
  });
}
