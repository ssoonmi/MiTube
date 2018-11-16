class RemoveAndAddThumbnailUrl < ActiveRecord::Migration[5.2]
  def change
    remove_column :videos, :thumbnail_url
    add_column :videos, :thumbnail_url, :string
  end
end
