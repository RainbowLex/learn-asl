class FavoriteSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :sign_id
end
