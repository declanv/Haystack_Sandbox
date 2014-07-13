class CreatePins < ActiveRecord::Migration
  def change
    create_table :pins do |t|
      t.string :name
      t.string :description
      t.string :photo_url
      t.float :pin_lat
      t.float :pin_long
      t.integer :map_id
      t.integer :pin_id

      t.timestamps
    end
  end
end
