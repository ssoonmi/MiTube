json.set! video.id do
  json.extract! video, :id, :title, :description, :created_at, :url, :thumbnail_url, :channel_id
  json.thumbnail url_for(video.thumbnail)
  json.file url_for(video.file)
end
