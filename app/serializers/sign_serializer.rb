class SignSerializer < ActiveModel::Serializer
  attributes :id, :word, :photo, :description, :is_alpha
end