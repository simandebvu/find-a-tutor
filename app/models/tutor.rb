class Tutor < ApplicationRecord
    validates :name, presence: true
    validates :links, presence: true
    validates :description, presence: true
end
