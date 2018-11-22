class View < ApplicationRecord
  belongs_to :video

  belongs_to :user,
    optional: true
end
