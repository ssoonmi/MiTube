class Api::VideosController < ApplicationController

  def index
    params.keys.each do |filter|

    end
    @channel = Channel.find(params[:channel_id])
    if @channel
      @videos = @channel.videos.includes(:file, :thumbnail)
      render :index
    else
      render json: ["Channel not found"], status: 422
    end
  end

  def show
    @video = Video.includes(:channel, :comments).find(params[:id])
    if @video
      @comments = @video.comments
      @channel = @video.channel;
      render :show
    else
      render json: ["Video not found"], status: 422
    end
  end

  def create
    @channel = Channel.find(params[:channel_id])
    if @channel && current_user.id == @channel.user_id
      if (params[:video][:thumbnail] && params[:video][:file]) &&
        (params[:video][:thumbnail] != "" && params[:video][:file] != "")
        @video = @channel.videos.new(video_params)
        if @video.save
          render :show
        else
          render json: @video.errors.full_messages, status: 400
        end
      else
        render json: ["Need thumbnail and video file"], status: 422
      end
    elsif @channel
      render json: ["Can't upload to someone else's channel"], status: 422
    else
      render json: ["Can't find channel"], status: 422
    end
  end

  def destroy
    @video = Video.includes(:channel).find(params[:id])
    if @video && current_user.id == @video.channel.user_id
      @video.destroy
      render json: {id: @video.id}
    else
      render json: ["Can't find video"], status: 422
    end
  end

  private

  def video_params
    params.require(:video).permit(:title, :description, :file, :thumbnail, :url, :thumbnail_url)
  end
end
