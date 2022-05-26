class AddBasicWordsToCreateSigns < ActiveRecord::Migration[6.1]
  def change
    add_column :signs, :basic_word, :boolean
  end
end
