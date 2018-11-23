users_channel_ids = Hash.new{|h,k| h[k] = []}

channelIds = []

@channels.each do |channel|
  channelIds.push(channel.id)
  videoIds = []
  channel.videos.limit(6).each do |video|
    json.videos do
      json.partial! 'api/videos/video', video: video
    end
    videoIds.push(video.id)
  end
  json.channels do
    json.set! channel.id do
      json.extract! channel, :id, :name, :description, :user_id
      json.videoIds videoIds
      if channel.icon.attached?
        json.iconUrl url_for(channel.icon)
      end
      if channel.splash.attached?
        json.splashUrl url_for(channel.splash)
      end
    end
  end

  users_channel_ids[channel.user_id].push(channel.id)
end

json.channelIds channelIds

users = User.where(id: users_channel_ids.keys)
json.users users_channel_ids

json.users do
  users.each do |user|
    json.set! user.id do
      json.extract! user, :id, :username
      json.channelIds users_channel_ids[user.id]
    end
  end
end
