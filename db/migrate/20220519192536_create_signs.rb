class CreateSigns < ActiveRecord::Migration[6.1]
  def change
    create_table :signs do |t|
      t.string :word
      t.string :photo
      t.string :description
      t.boolean :is_alpha
      t.timestamps
    end
  end
end
