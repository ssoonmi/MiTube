class Api::ChannelsController < ApplicationController

  def index
    if params[:offset]
      @channels = Channel
      .includes(:user, :splash, :icon, :subscriptions, videos: [:views, :thumbnail])
      .left_joins(:views)
      .group(:id)
      .order('COUNT(views.id) DESC')
      .limit(10)
      .offset(Integer(params[:offset]))
    else
      @channels = Channel
      .includes(:user, :subscriptions, videos: [:views])
      .left_joins(:views)
      .group(:id)
      .order('COUNT(views.id) DESC')
      .limit(10)
    end
    render :index
  end

  def show
    @channel = Channel.includes(:user, :subscriptions, videos: [:views]).find(params[:id])
    render :show
  end

  def show_by_username
    @user = User.includes(:channels, :subscriptions, videos: [:views]).find_by(username: params[:username])
    @channels = @user.channels
    render :index
  end

  def create
    @channel = current_user.channels.new(channel_params)
    if @channel.save
      render :show
    else
      render json: @channel.errors.full_messages, status: 400
    end
  end

  def update
    @channel = Channel.find(params[:id])
    if @channel && @channel.update(channel_params) && @channel.user_id == current_user.id
      render :show
    elsif @channel && @channel.user_id != current_user.id
      render json: ["Why you trying to change someone else's channel?"], status: 400
    elsif @channel
      render json: @channel.errors.full_messages, status: 400
    else
      render json: ["Cannot find channel"], status: 422
    end
  end

  def destroy
    @channel = Channel.find(params[:id])
    if @channel && current_user.id == @channel.user_id
      @channel.destroy
      render json: {channelId: @channel.id, userId: @channel.user_id}
    else
      render json: @channel.errors.full_messages, status: 400
    end
  end

  private

  def channel_params
    params.require(:channel).permit(:name, :description, :icon, :splash)
  end
end
