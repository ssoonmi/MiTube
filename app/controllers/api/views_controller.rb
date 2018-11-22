class Api::ViewsController < ApplicationController
  def create
    @video = Video.find(params[:video_id])
    if @video
      @view = @video.views.new()
      if current_user
        @view.user_id = current_user.id
      end
      if @view.save
        render json: {user_id: @view.user_id, video_id: @view.video_id}
      else
        render json: @view.errors.full_messages, status: 400
      end
    else
      render json: ["Video not found"], status: 422
    end
  end
end
