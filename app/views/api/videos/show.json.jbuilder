json.videos do
  json.partial! '/api/videos/video', video: @video, file: @video.file, thumbnail: @video.thumbnail
end

json.channels do
  json.partial! '/api/channels/channel', channel: @channel
end
