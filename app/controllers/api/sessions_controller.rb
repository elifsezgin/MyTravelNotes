class Api::SessionsController < ApplicationController
  def create
      @user = User.find_by_credentials(session_params[:email], session_params[:password])
      if @user
        login(@user)
        render 'api/sessions/show.json.jbuilder'
      else
        render json: {errors: ['Invalid credentials']}, status: 404
      end
    end

    def destroy
      if current_user
        logout
        render json: { currentUser: nil }
      else
        render json: {errors: ['There is no user logged in']}, status: 404
      end
    end

    private
    def session_params
      params.require(:user).permit(:email, :password)
    end
  end
