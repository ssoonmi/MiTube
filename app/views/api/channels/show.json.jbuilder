json.channels do
  json.partial! 'api/channels/channel', channel: @channel
end

json.users do
  json.set! @channel.user_id do
    json.channelIds [@channel.id]
    json.extract! @channel.user, :id, :username
  end
end
