class CreateSubscriptions < ActiveRecord::Migration[5.2]
  def change
    create_table :subscriptions do |t|
      t.integer :user_id, null: false, index: true
      t.integer :channel_id, null: false, index: true

      t.timestamps
    end
    add_index :subscriptions, [:user_id, :channel_id], unique: true
  end
end
