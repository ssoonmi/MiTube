json.like do
  json.extract! @like, :positive, :likeable_type, :likeable_id, :user_id
end
