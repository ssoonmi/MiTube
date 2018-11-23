videoIds = []

@videos.uniq.slice(12).each do |video|
  json.videos do
    json.partial! 'api/videos/video.json.jbuilder', video: video, thumbnail: video.thumbnail, file: video.file
  end
  channel = video.channel
  json.channels do
    json.set! channel.id do
      json.extract! channel, :id, :name, :user_id
    end
  end
  videoIds.push(video.id)
end

json.videoIds videoIds
