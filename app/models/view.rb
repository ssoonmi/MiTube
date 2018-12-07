# == Schema Information
#
# Table name: views
#
#  id         :bigint(8)        not null, primary key
#  video_id   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  user_id    :integer
#

class View < ApplicationRecord
  belongs_to :video

  belongs_to :user,
    optional: true
end
