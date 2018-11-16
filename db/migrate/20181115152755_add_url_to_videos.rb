class AddUrlToVideos < ActiveRecord::Migration[5.2]
  def change
    add_column :videos, :url, :string
  end
end
