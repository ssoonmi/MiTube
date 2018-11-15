users_channel_ids = Hash.new{|h,k| h[k] = []}

@channels.each do |channel|
  json.channels do
    json.partial! 'api/channels/channel', channel: channel
  end
  users_channel_ids[channel.user_id].push(channel.id)
end

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
