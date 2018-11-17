channels = user.channels.includes(:videos)
channelIds = []

if channels
  json.channels do
    channels.each do |channel|
      json.partial! 'api/channels/channel.json.jbuilder', channel: channel, videos: channel.videos
      channelIds.push(channel.id)
    end
  end
end

json.users do
  json.set! user.id do
    json.extract! user, :id, :username, :email
    if user.icon.attached?
      json.iconUrl url_for(user.icon)
    end
    json.channelIds channelIds
  end
end

json.session do
  json.id user.id
end
