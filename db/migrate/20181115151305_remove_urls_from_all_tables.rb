class RemoveUrlsFromAllTables < ActiveRecord::Migration[5.2]
  def change
    remove_column :channels, :splash_img_url
    remove_column :videos, :url, :thumbnail_url
  end
end
