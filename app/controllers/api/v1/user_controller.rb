class Api::V1::UserController < ApplicationController
  def index
    @users = User.all
    render json: @users
  end

  # post '/api/v1/user'
  def register
    user = User.new
    user.first_name = params[:first_name]
    user.last_name = params[:last_name]
    user.email = params[:email]
    user.password = params[:password]
    user.password_confirmation = params[:password_confirmation]
    begin
      # TODO: Write backend tests for this logic and ensure any model validation errors get caught in exception block?
      if user.valid?
        user.save!
        # TODO: Setup user session
        return render json: {success: true, status: 200}
      end
    rescue => exception
      #  TODO: Log error
      return render json: {success: false, status: 422, error: exception.message}
    end
  end
end
