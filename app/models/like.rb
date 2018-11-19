# == Schema Information
#
# Table name: likes
#
#  id            :bigint(8)        not null, primary key
#  positive      :boolean          not null
#  likeable_type :string           not null
#  likeable_id   :bigint(8)        not null
#  user_id       :integer          not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

class Like < ApplicationRecord
  validates :positive, inclusion: {in: [true, false]}

  belongs_to :user
  belongs_to :likeable, polymorphic: true
end
