class Api::VideosController < ApplicationController

  def index
    @channel = Channel.find(params[:channel_id])
    @videos = @channel.videos.includes(:file, :thumbnail)
    render :index
  end

  def show
    @video = Video.includes(:channel).find(params[:id])
    @channel = @video.channel;
    render :show
  end

  def create
    @channel = Channel.find(params[:channel_id])
    if @channel && current_user.id == @channel.user_id
      @video = @channel.videos.new(video_params)
      if @video.save
        render :show
      else
        render json: @video.errors.full_messages, status: 400
      end
    elsif @channel
      render json: ["Can't upload to someone else's channel"], status: 422
    else
      render json: ["Can't find channel"], status: 422
    end
  end

  private

  def video_params
    params.require(:video).permit(:title, :description, :file, :thumbnail, :url, :thumbnail_url)
  end
end
