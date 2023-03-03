# == Schema Information
#
# Table name: users
#
#  id         :bigint           not null, primary key
#  email      :string
#  first_name :string
#  last_name  :string
#  password   :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class User < ApplicationRecord
  include ActiveModel::SecurePassword
  has_secure_password
  has_secure_password :recovery_password, validations: false

  validates :email, uniqueness: true
  validates_length_of :first_name, minimum: 2, maximum: 100, allow_blank: false
  validates_length_of :last_name, minimum: 2, maximum: 100, allow_blank: false
  validates_length_of :password, minimum: 8, maximum: 25, allow_blank: false

  attr_accessor :password_digest, :recovery_password_digest
end
