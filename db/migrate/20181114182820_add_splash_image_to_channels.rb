class AddSplashImageToChannels < ActiveRecord::Migration[5.2]
  def change
    add_column :channels, :splash_img_url, :string
  end
end
