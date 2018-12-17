videoIds = []

@videos.uniq.each do |video|
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

if @channel
  channel = @channel[0]
  json.channels do
    json.set! channel.id do
      json.extract! channel, :id, :name, :description, :user_id
      if channel.icon.attached?
        json.iconUrl url_for(channel.icon)
      end
      json.numVideos channel.videos.count
      json.numSubscribers channel.subscriptions.length
      if current_user
        json.subscribed channel.subscriptions.pluck(:user_id).include?(current_user.id)
      else
        json.subscribed false
      end
    end
  end
  json.searchedChannelId channel.id
end
