class Api::CommentsController < ApplicationController
  before_action :ensure_logged_in, only: [:create, :update, :destroy]

  def index
    @video = Video.find(params[:video_id])
    if @video
      @comments = @video.comments.includes(:user, :likes).where("parent_comment_id IS NULL")
      render :index
    else
      render json: ["Video not found"], status: 422
    end
  end

  def create
    @video = Video.find(params[:video_id])
    if @video
      @comment = @video.comments.new(comment_params)
      @comment.user_id = current_user.id
      @user = current_user
      if @comment.save
        render :create
      else
        render json: @comment.errors.full_messages, status: 400
      end
    else
      render json: ["Video not found"], status: 422
    end
  end

  def destroy
    @comment = Comment.find(params[:id])
    if @comment && current_user.id == @comment.user_id
      if @comment.destroy
        render json: {id: @comment.id, videoId: @comment.video_id, userId: @comment.user_id}
      else
        render json: @comment.errors.full_messages, status: 400
      end
    else
      render json: ["Comment not found"], status: 422
    end
  end

  def update
    @comment = Comment.includes(:video).find_by(id: params[:id], user_id: current_user.id)
    if @comment
      if @comment.update(comment_params)
        @video = @comment.video
        @user = current_user
        render :show
      else
        render json: @comment.errors.full_messages, status: 400
      end
    else
      render json: ["Comment not found"], status: 422
    end
  end

  def replies
    @parent_comment = Comment.includes(:video).find(params[:comment_id])
    if @parent_comment
      @comments = @parent_comment.replies.includes(:user, :likes)
      @video = @parent_comment.video
      @parent_comment_id = @parent_comment.id
      render :index
    else
      render json: ["Comment not found"], status: 422
    end
  end

  private

  def comment_params
    params.require(:comment).permit(:body, :parent_comment_id)
  end
end
