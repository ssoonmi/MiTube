@channels = @user.channels
channelIds = []

if @channels
  json.channels do
    @channels.each do |channel|
      json.partial! 'api/channels/channel.json.jbuilder', channel: channel
      channelIds.push(channel.id)
    end
  end
end

json.users do
  json.set! @user.id do
    json.extract! @user, :id, :username
    if @user.icon.attached?
      json.iconUrl url_for(@user.icon)
    end
  end
end
