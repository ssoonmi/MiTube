json.channels do
  json.partial! 'api/channels/channel', channel: @channel, videos: @channel.videos
  json.set! @channel.id do
    if current_user
      json.subscribed @channel.subscriptions.pluck(:user_id).include?(current_user.id)
    else
      json.subscribed false
    end
  end
end

@channel.videos.each do |video|
  json.videos do
    json.partial! 'api/videos/video', video: video
  end
end

most_popular = @channel.videos.left_joins(:views).group('videos.id').order('COUNT(views.id) DESC').limit(6).ids
json.mostPopularVideoIds most_popular

json.users do
  json.set! @channel.user_id do
    json.channelIds [@channel.id]
    json.extract! @channel.user, :id, :username
  end
end
