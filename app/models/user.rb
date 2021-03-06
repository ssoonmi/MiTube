# == Schema Information
#
# Table name: users
#
#  id              :bigint(8)        not null, primary key
#  username        :string           not null
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ApplicationRecord
  validates :username, :email, :session_token, presence: true, uniqueness: true
  validates :password_digest, presence: true
  validates :password, length: {minimum: 6}, allow_nil: true

  after_initialize :ensure_session_token

  attr_reader :password

  has_many :channels, dependent: :destroy
  has_many :views, dependent: :destroy
  has_many :videos, through: :channels
  has_many :subscriptions, dependent: :destroy
  has_many :subscribed_channels,
    through: :subscriptions,
    source: :channel
  has_many :subscribed_videos,
    through: :subscribed_channels,
    source: :videos

  has_one_attached :icon

  def self.generate_session_token
    SecureRandom::urlsafe_base64
  end

  def self.find_by_credentials(params)
    user = User.find_by(username: params[:username]) || User.find_by(email: params[:username])
    (user && user.is_password?(params[:password])) ? user : nil
  end

  def ensure_session_token
    self.session_token ||= User.generate_session_token
  end

  def reset_session_token!
    self.update!(session_token: User.generate_session_token)
    self.session_token
  end

  def password=(pw)
    self.password_digest = BCrypt::Password.create(pw)
  end

  def is_password?(password)
    bcrypt_pw = BCrypt::Password.new(self.password_digest)
    bcrypt_pw.is_password?(password)
  end
end
