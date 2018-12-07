userIdsHash = Hash.new(){|h, k| h[k] = []}
commentsHash = {}

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
    json.partial! '/api/comments/comment', comment: comment
    userIdsHash[comment.user_id].push(comment.id)
    commentsHash[comment.user_id] = comment.user
    json.set! comment.id do
      json.numLikes numLikes
        json.numDislikes numDislikes
        json.userLike user_like
        json.hasReplies comment.replies.empty? ? false : true
    end
  end
end

userIdsHash.keys.each do |userId|
  json.users do
    json.set! userId do
      user = commentsHash[userId]
      json.extract! user, :id, :username
      if user.icon.attached?
        json.iconUrl url_for(user.icon)
      end
      json.commentIds userIdsHash[userId]
    end
  end
end

json.videoId @video.id
json.commentIds @comments.ids

json.userIds userIdsHash

if @parent_comment_id
  json.parentCommentId @parent_comment_id
end
