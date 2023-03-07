class Api::V1::UserController < ApplicationController
  def index
    @users = User.all
    render json: @users
  end

  # post '/user'
  def create
    user = User.new(user_params)
    begin
      user.save!
      session[:user_id] = user.id
      return render json: {success: true, status: 200}
    rescue => exception
      #  TODO: Log error
      return render json: {success: false, status: 422, error: exception.message}
    end
  end

  # get '/user'
  def login
    user = User.find_by(email: params[:email])
    begin
      if user.nil?
        raise "Email or password is incorrect."
      end
      authenticated_user = user.authenticate(params[:password])
      if !authenticated_user
        raise "Email or password is incorrect."
      end
      session[:user_id] = authenticated_user.id
      return render json: {success: true, status: 200}
    rescue => exception
      # TODO: Log error
      return render json: {success: false, status: 422, error: exception.message}
    end
  end

  # get '/logout'
  def logout
    session.delete(:user_id)
    redirect_back_or_to '/', allow_other_host: false
  end

  private
  def user_params
    params.require(:user).permit(:first_name, :last_name, :email, :password, :password_confirmation)
  end
end
