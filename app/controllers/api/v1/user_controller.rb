class Api::V1::UserController < ApplicationController
  def index
    @users = User.all
    render json: @users
  end

  # post '/user'
  def register
    user = User.new
    user.first_name = params[:first_name]
    user.last_name = params[:last_name]
    user.email = params[:email]
    user.password = params[:password]
    user.password_confirmation = params[:password_confirmation]
    begin
      # TODO: Write backend tests for this logic
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
    session[:user_id] = user.authenticate(params[:password]).id
    unless session[:user_id].nil?
      return render json: {success: true, status: 200}
    end
    return render json: {success: false, status: 422, error: "Email or password is incorrect."}
  end

  # get '/logout'
  def logout
    session.delete(:user_id)
    redirect_back_or_to '/', allow_other_host: false
  end
end
