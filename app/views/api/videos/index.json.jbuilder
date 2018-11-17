@videos.each do |video|
  json.videos do
    json.partial! 'api/videos/video.json.jbuilder', video: video, thumbnail: video.thumbnail, file: video.file
  end
end

json.channels do
  json.set! @channel.id do
    json.extract! @channel, :id, :name, :description, :user_id
  end
end
