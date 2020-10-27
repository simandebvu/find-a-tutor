require 'rails_helper'

RSpec.describe Tutor, type: :model do
    it { should validate_presence_of(:name) }
    it { should validate_length_of(:name) }
    it { should validate_presence_of(:description) }
    it { should validate_presence_of(:links) }
end