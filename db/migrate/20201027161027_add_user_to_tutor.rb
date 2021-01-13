class AddUserToTutor < ActiveRecord::Migration[6.0]
  def change
    add_column :tutors, :user_id, :int
  end
end
