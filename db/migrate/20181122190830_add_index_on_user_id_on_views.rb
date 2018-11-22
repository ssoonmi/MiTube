class AddIndexOnUserIdOnViews < ActiveRecord::Migration[5.2]
  def change
    add_index :views, :user_id
  end
end
