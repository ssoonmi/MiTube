json.set! channel.id do
  json.extract! channel, :id, :name, :description, :user_id
  json.videoIds videos.ids
end
