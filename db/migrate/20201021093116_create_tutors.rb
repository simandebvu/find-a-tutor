class CreateTutors < ActiveRecord::Migration[6.0]
  def change
    create_table :tutors do |t|
      t.string :name
      t.text :links
      t.text :description
      t.string :image

      t.timestamps
    end
  end
end
