@videos.each do |video|
  json.videos do
    json.partial! 'api/videos/video.json.jbuilder', video: video, thumbnail: video.thumbnail, file: video.file
  end
  channel = video.channel
  json.channels do
    json.set! channel.id do
      json.extract! channel, :id, :name, :user_id
    end
  end
end

if @channel
  channel = @channel[0]
  json.channels do
    json.set! channel.id do
      json.extract! channel, :id, :name, :description, :user_id
      if channel.icon.attached?
        json.iconUrl url_for(channel.icon)
      end
      json.numVideos channel.videos.count
    end
  end
  json.searchedChannelId channel.id
end
