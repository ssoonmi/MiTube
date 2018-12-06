# == Schema Information
#
# Table name: subscriptions
#
#  id         :bigint(8)        not null, primary key
#  user_id    :integer          not null
#  channel_id :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Subscription < ApplicationRecord
  validate :ensure_user_subscribes_to_a_channel_only_once

  belongs_to :user
  belongs_to :channel

  def ensure_user_subscribes_to_a_channel_only_once
    user = User.find(self.user_id)
    channel = Channel.find(self.channel_id)
    if user && channel && Subscription.find_by(user_id: self.user_id, channel_id: self.channel_id)
      errors.add("User can subscribe to a channel only once")
    end
  end
end
