json.videos do
  json.partial! '/api/videos/video', video: @video, file: @video.file, thumbnail: @video.thumbnail
end

json.channels do
  json.set! @channel.id do
    json.extract! @channel, :id, :name, :description, :user_id
  end
end
