class SignSerializer < ActiveModel::Serializer
  attributes :id, :word, :photo, :desc, :is_alpha
end