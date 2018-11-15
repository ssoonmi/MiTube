# == Schema Information
#
# Table name: channels
#
#  id          :bigint(8)        not null, primary key
#  name        :string           not null
#  description :text             not null
#  user_id     :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Channel < ApplicationRecord
  validates :name, :description, presence: true

  belongs_to :user
end
