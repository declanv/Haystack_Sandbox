class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.integer :user_id
      t.string :avatar
      t.string :username
      t.integer :password
      t.integer :hashed_password

      t.timestamps
    end
  end
end
