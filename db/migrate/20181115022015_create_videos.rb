class CreateVideos < ActiveRecord::Migration[5.2]
  def change
    create_table :videos do |t|
      t.string :title, null: false
      t.text :description, null: false
      t.string :url, null: false
      t.string :thumbnail_url, null: false
      t.integer :channel_id, null: false
      t.timestamps
    end
    
    add_index :videos, :url, unique: true
    add_index :videos, :thumbnail_url
    add_index :videos, :channel_id
  end
end
