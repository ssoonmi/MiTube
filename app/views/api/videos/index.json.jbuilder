@videos.each do |video|
  json.videos do
    json.partial! 'api/videos/video.json.jbuilder', video: video, thumbnail: video.thumbnail, file: video.file
  end
end

json.channels do
  json.partial! '/api/channels/channel.json.jbuilder', channel: @channel
end
