class SignSerializer < ActiveModel::Serializer
  attributes :id, :word, :photo, :description, :is_alpha, :basic_word, :sentence
  has_many :favorites
end