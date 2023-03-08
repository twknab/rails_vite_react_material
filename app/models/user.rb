# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  email           :string
#  first_name      :string
#  last_name       :string
#  password        :string
#  password_digest :string
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
class User < ApplicationRecord
  include ActiveModel::SecurePassword
  has_secure_password
  has_secure_password :recovery_password, validations: false
  
  before_save :downcase_email

  validates :email, format: {with: URI::MailTo::EMAIL_REGEXP}, uniqueness: true, presence: true
  validates :first_name, length: {minimum: 2, maximum: 100}, presence: true
  validates :last_name, length: {minimum: 2, maximum: 100}, presence: true
  validates :password, length: {minimum: 8, maximum: 25}, presence: true

  private
  def downcase_email
    self.email = email.downcase
  end
end
