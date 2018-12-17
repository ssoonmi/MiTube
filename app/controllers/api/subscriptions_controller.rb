class Api::SubscriptionsController < ApplicationController
  before_action :ensure_logged_in, only: [:index, :create, :destroy]

  def index
    @channels = current_user.subscribed_channels
    render :index
  end

  def create
    @subscription = current_user.subscriptions.new(channel_id: params[:channel_id])
    if @subscription.save
      render json: {channelId: params[:channel_id]}
    else
      render json: @subscription.errors.full_messages, status: 400
    end
  end

  def destroy
    @subscription = Subscription.find_by(user_id: current_user.id, channel_id: params[:channel_id])
    if @subscription
      if @subscription.destroy
        render json: {channelId: params[:channel_id]}
      else
        render json: @subscription.errors.full_messages
      end
    else
      render json: "Subscription not found", status: 422
    end
  end
end