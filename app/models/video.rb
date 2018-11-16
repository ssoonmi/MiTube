# == Schema Information
#
# Table name: videos
#
#  id            :bigint(8)        not null, primary key
#  title         :string           not null
#  description   :text             not null
#  channel_id    :integer          not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#  thumbnail_url :string
#

class Video < ApplicationRecord
  validates :title, :description, presence: true

  belongs_to :channel

  has_one_attached :file
  has_one_attached :thumbnail
end