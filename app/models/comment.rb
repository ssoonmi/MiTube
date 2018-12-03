# == Schema Information
#
# Table name: comments
#
#  id                :bigint(8)        not null, primary key
#  body              :text             not null
#  user_id           :integer          not null
#  video_id          :integer          not null
#  created_at        :datetime         not null
#  updated_at        :datetime         not null
#  parent_comment_id :integer
#

class Comment < ApplicationRecord
  validates :body, presence: true

  validate :ensure_only_one_parent_comment

  belongs_to :user

  belongs_to :video

  has_many :likes, as: :likeable

  belongs_to :parent_comment,
    class_name: "Comment",
    optional: true

  has_many :replies,
    class_name: "Comment",
    foreign_key: :parent_comment_id

  def ensure_only_one_parent_comment
    if self.parent_comment_id
      parent_comment = Comment.find(self.parent_comment_id)
      if !parent_comment.parent_comment_id.nil?
        errors.add("Parent comment cannot be another parent comment")
      end
    end
  end
end
