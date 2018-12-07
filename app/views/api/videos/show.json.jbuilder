video_likes = likes("Video", @video.id)
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
    json.commentIds @comments.ids unless !@comments || @comments.empty?
    json.commentIds [] if !@comments || @comments.empty?
  end
end

json.channels do
  json.set! @channel.id do
    json.extract! @channel, :id, :name, :description, :user_id
  end
end

if @comments
  @comments.each do |comment|
    comment_likes = likes("Comment", comment.id)
    user_like = nil
    numLikes = nil
    numDislikes = nil

    if (comment_likes[:user_like] && comment_likes[:user_like][0])
      user_like = comment_likes[:user_like][0][:positive] ? 1 : -1
    end

    numLikes = comment_likes[:num_likes][comment.id]
    numLikes = 0 if numLikes.nil?

    numDislikes = comment_likes[:num_dislikes][comment.id]
    numDislikes = 0 if numDislikes.nil?

    json.comments do
      json.set! comment.id do
        json.numLikes numLikes
        json.numDislikes numDislikes
        json.userLike user_like
        json.hasReplies comment.replies.empty? ? false : true
      end
      json.partial! '/api/comments/comment', comment: comment
    end
  end
end
