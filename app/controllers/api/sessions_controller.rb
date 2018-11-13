class Api::UsersController < ApplicationController
  before_action :ensure_logged_in, only: [:destroy]

  def create
    @user = User.find_by_credentials(user_params)
    if @user
      login(@user)
    else
      render json: ['Invalid username or password']
    end
  end

  def destroy
    id = current_user.id
    logout
    render json: {id}
  end

  private

  def user_params
    params.require(:user).permit(:username, :password)
  end
end
