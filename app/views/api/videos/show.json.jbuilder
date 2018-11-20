video_likes = likes("Video", @video.id);
user_like = nil
if video_likes[:user_like] && video_likes[:user_like][0]
  user_like = video_likes[:user_like][0][:positive] ? 1 : -1
end

numLikes = video_likes[:num_likes][@video.id]
numLikes = 0 if numLikes.nil?

numDislikes = video_likes[:num_dislikes][@video.id]
numDislikes = 0 if numDislikes.nil?

json.videos do
  json.partial! '/api/videos/video', video: @video, file: @video.file, thumbnail: @video.thumbnail
  json.set! @video.id do
    json.numLikes numLikes
    json.numDislikes numDislikes
    json.userLike user_like
    json.commentIds @comments.ids unless @comments.empty?
    json.commentIds [] if @comments.empty?
  end
end

json.channels do
  json.set! @channel.id do
    json.extract! @channel, :id, :name, :description, :user_id
  end
end

json.comments do
  @comments.each do |comment|
    json.partial! '/api/comments/comment', comment: comment
  end
end
