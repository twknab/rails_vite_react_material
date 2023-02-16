class UserController < ApplicationController
  def index
    @user = User.all
    render json: @user
  end
end
