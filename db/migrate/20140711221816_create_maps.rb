class CreateMaps < ActiveRecord::Migration
  def change
    create_table :maps do |t|
      t.integer :map_id
      t.string :name
      t.integer :creator_id
      t.integer :owner_id
      t.float :map_lat
      t.float :map_long

      t.timestamps
    end
  end
end
