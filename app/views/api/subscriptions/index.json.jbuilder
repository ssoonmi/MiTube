channelIds = []

@channels.each do |channel|
  json.channels do
    json.set! channel.id do
      json.extract! channel, :id, :name, :description, :user_id
      if channel.icon.attached?
        json.iconUrl url_for(channel.icon)
      end
      if channel.splash.attached?
        json.splashUrl url_for(channel.splash)
      end
    end
  end
  channelIds << channel.id
end

json.channelids channelIds