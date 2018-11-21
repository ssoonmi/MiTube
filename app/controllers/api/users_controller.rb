class Api::UsersController < ApplicationController
  before_action :ensure_logged_in, only: [:destroy, :update]

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

  def update
    @user = User.find(params[:id])
    if @user && (@user.id == current_user.id)
      if @user.update(user_params)
        render :show
      else
        render json: @user.errors.full_messages, status: 400
      end
    else
      render json: ["User not found"], status: 422
    end
  end

  def destroy

  end

  private

  def user_params
    params.require(:user).permit(:username, :password, :email, :icon)
  end
end
