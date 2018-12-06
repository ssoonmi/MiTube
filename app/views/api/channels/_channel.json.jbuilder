json.set! channel.id do
  json.extract! channel, :id, :name, :description, :user_id
  json.videoIds videos.ids
  if channel.icon.attached?
    json.iconUrl url_for(channel.icon)
  end
  if channel.splash.attached?
    json.splashUrl url_for(channel.splash)
  end
  json.numSubscribers channel.subscriptions.length
end
