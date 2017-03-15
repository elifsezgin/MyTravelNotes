class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)
    if @user.save
      login(@user)
      render 'api/users/show.json.jbuilder'
    else
      render json: {errors: @user.errors.full_messages}, status: 422
    end
  end

  def update
    @user = User.find(params[:userId])
    if @user.update(user_params)
      render :show
    else
      render json: {errors: @user.errors.full_messages}, status: 422
    end
  end

  def show
    @user = User.find(params[:id])
    render 'api/users/show.json.jbuilder'
  end

  private
  def user_params
    params.require(:user).permit(:email, :password, :first_name, :last_name, :image_url)
  end
end
