class FavoriteSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :sign_id, :sign
  has_one :user
  has_one :sign
end
