class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :password_digest, :favorites_id
end
