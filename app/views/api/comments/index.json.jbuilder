userIdsHash = Hash.new(){|h, k| h[k] = []}
commentsHash = {}

@comments.each do |comment|
  json.comments do
    json.partial! '/api/comments/comment', comment: comment
    userIdsHash[comment.user_id].push(comment.id)
    commentsHash[comment.user_id] = comment.user
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
