class FavoriteSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :favorite_id
end
