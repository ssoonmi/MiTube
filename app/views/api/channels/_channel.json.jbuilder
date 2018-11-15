json.set! channel.id do
  json.extract! channel, :id, :name, :description, :splash_img_url, :user_id
end
