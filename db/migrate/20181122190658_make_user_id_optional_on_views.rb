class MakeUserIdOptionalOnViews < ActiveRecord::Migration[5.2]
  def change
    remove_column :views, :user_id
    add_column :views, :user_id, :integer, index: true
  end
end
