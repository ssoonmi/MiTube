class Api::UsersController < ApplicationController
  before_action :ensure_logged_in, only: [:destroy]

  def create
    @user = User.new(user_params)
    if @user.save
      login(@user)
      render 'api/sessions/show'
    else
      errors = @user.errors.full_messages
      render json: errors, status: 400
    end
  end

  def show
    @user = User.show(params[:id])
    if @user
      render :show
    end
  end

  def index
    @users = User.all?
    render :index
  end

  def destroy

  end

  private

  def user_params
    params.require(:user).permit(:username, :password, :email)
  end
end
