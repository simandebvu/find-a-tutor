class User < ApplicationRecord
  has_many :tutors
  has_many :favourite  
  has_many :favourites, through: :favourite, source: :tutor
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
end
