class Tutor < ApplicationRecord
  validates :name, presence: true
  validates :links, presence: true
  validates :description, presence: true
  belongs_to :user
  has_many :favourite_tutors
  has_many :favourited_by, through: :favourite_tutors, source: :user
end
