module ApplicationHelper
  def likes(likeable_type, likeable_id=nil)
    likes_info = {}
    likeable_id_cond = " "
    likeable_id_cond = " AND likeable_id = '#{likeable_id}'" if likeable_id
    likes_info[:num_likes] = Like.group(:likeable_id)
      .where("likeable_type = '#{likeable_type}'" + likeable_id_cond +
      "AND positive = 'true'"
    ).count("likes.id")
    likes_info[:num_dislikes] = Like.group(:likeable_id)
      .where("likeable_type = '#{likeable_type}'" + likeable_id_cond +
      "AND positive = 'false'"
    ).count("likes.id")
    if current_user
      likes_info[:user_like] = Like.where(
        "likeable_type = '#{likeable_type}'"  + likeable_id_cond +
        "AND user_id = '#{current_user.id}'"
      )
    else
      likes_info[:user_like] = nil
    end
    return likes_info
  end

  def many_likes(likeable_type, likeable_ids)
    likes_info = {}
    likeable_id_cond = " "
    likeable_id_cond = " AND likeable_id in '(?)'" if likeable_id
    likes_info[:num_likes] = Like.group(:likeable_id)
      .where("likeable_type = '#{likeable_type}'" + likeable_id_cond +
      "AND positive = 'true'"
    ).count("likes.id")
    likes_info[:num_dislikes] = Like.group(:likeable_id)
      .where("likeable_type = '#{likeable_type}'" + likeable_id_cond +
      "AND positive = 'false'"
    ).count("likes.id")
    if current_user
      likes_info[:user_like] = Like.where(
        "likeable_type = '#{likeable_type}'"  + likeable_id_cond +
        "AND user_id = '#{current_user.id}'"
      )
    else
      likes_info[:user_like] = nil
    end
    return likes_info
  end
end
