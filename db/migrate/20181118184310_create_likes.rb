class CreateLikes < ActiveRecord::Migration[5.2]
  def change
    create_table :likes do |t|
      t.boolean :positive, null: false
      t.references :likeable, polymorphic: true, null: false, index: true
      t.integer :user_id, null: false, index: true
      t.timestamps
    end

    add_index :likes, [:user_id, :likeable_type, :likeable_id], unique: true

  end
end
