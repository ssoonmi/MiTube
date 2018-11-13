json.users do
  json.set! @user.id do
    json.extract! @user, :id, :username, :email
  end
end

json.session do
  json.id @user.id
end
