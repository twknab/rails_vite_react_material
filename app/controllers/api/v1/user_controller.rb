class Api::V1::UserController < ApplicationController
  def index
    @users = User.all
    render json: @users
  end
end
