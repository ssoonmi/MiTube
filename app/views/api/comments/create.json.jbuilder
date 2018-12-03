json.comments do
  json.partial! '/api/comments/comment', comment: @comment
  json.set! @comment.id do
    json.numLikes 0
    json.numDislikes 0
  end
end

if @comment.parent_comment_id
  json.parentCommentId @comment.parent_comment_id
end

json.videoId @video.id
json.id @comment.id
json.userId @comment.user_id
json.users do
  json.set! @user.id do
    json.extract! @user, :id, :username
    if @user.icon.attached?
      json.iconUrl url_for(@user.icon)
    end
  end
end
