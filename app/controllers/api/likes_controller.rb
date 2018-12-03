class Api::LikesController < ApplicationController

  def create
    if current_user
      @like = Like.find_by(
        user_id: current_user.id,
        likeable_type: params[:like][:likeable_type],
        likeable_id: params[:like][:likeable_id],
      )
      past_like = 0
      if @like
        past_like = (@like.positive ? 1 : -1)
        @like.positive = params[:like][:positive]
      else
        @like = Like.new(like_params)
        @like.user_id = current_user.id
      end
      if @like.save
        @value = (@like.positive ? 1 : -1)
        @diffLikes = (@like.positive ? 1 : 0) - (past_like == 1 ? 1 : 0) 
        @diffDislikes = (!@like.positive ? 1 : 0) - (past_like == -1 ? 1 : 0) 
        render :show
      else
        render json: @like.errors.full_messages, status: 422
      end
    else
      render json: ["Cannot like when not signed in"], status: 400
    end
  end

  def destroy
    if current_user
      @like = Like.find_by(
        user_id: current_user.id, 
        likeable_type: params[:likeable_type], 
        likeable_id: params[:likeable_id]
        )
      if @like
        if @like.destroy
          @value = 0
          @diffLikes = (@like.positive ? -1 : 0)
          @diffDislikes = (!@like.positive ? -1 : 0)
          render :show
        else
          render json: @like.errors.full_messages, status: 422
        end
      else
        render json: ["Cannot find like"], status: 404
      end
    else
      render json: ["Cannot like when not signed in"], status: 400
    end
  end

  private

  def like_params
    params.require(:like).permit(:positive, :likeable_type, :likeable_id)
  end
end
