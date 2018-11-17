json.channels do
  json.partial! 'api/channels/channel', channel: @channel, videos: @channel.videos
end

@channel.videos.each do |video|
  json.videos do
    json.partial! 'api/videos/video', video: video
  end
end

json.users do
  json.set! @channel.user_id do
    json.channelIds [@channel.id]
    json.extract! @channel.user, :id, :username
  end
end
