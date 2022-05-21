class CreateFavorites < ActiveRecord::Migration[6.1]
  def change
    create_table :favorites do |t|
      t.inet :user_id
      t.inet :sign_id
      t.timestamps
    end
  end
end
