class CreateViews < ActiveRecord::Migration[5.2]
  def change
    create_table :views do |t|
      t.integer :video_id, null: false, index: true
      t.integer :user_id, null: false, index: true
      t.timestamps
    end
  end
end
