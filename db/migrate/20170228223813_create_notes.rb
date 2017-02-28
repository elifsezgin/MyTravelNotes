class CreateNotes < ActiveRecord::Migration[5.0]
  def change
    create_table :notes do |t|
      t.string :place_name, null: false
      t.string :address, null: false
      t.float :lat, null: false
      t.float :lng, null: false
      t.text :description, null: false
      t.boolean :is_private, null: false
      t.integer :rating, null: false
      t.integer :user_id, null: false
      t.date :date, null: false

      t.timestamps
    end
    add_index :notes, :user_id
  end
end
