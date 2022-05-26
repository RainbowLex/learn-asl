class AddSentencesToSigns < ActiveRecord::Migration[6.1]
  def change
    add_column :signs, :sentence, :boolean
  end
end
