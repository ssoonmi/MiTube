class Api::UsersController < ApplicationController
  before_action :ensure_logged_in, only: [:destroy]

  def create
    @user = User.new(user_params)
    if @user.save
      render :show
    else
      errors = @user.errors.full_messages
      render json: errors
    end
  end

  def destroy

  end

  private

  def user_params
    params.require(:user).permit(:username, :password)
  end
end
