user_like = @user_like.positive if @user_like && !@user_like.empty?

json.[@likeable_type] do
  json.[@likeable_id] do
    json.numLikes @numLikes
    json.numDislikes @numDislikes
    json.userLike user_like
  end
end
