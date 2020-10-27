require 'rails_helper'

RSpec.describe User, type: :model do
  describe 'Validation Tests' do
    it 'Validates presence of an email' do
      user = User.new
      user.email = ''
      user.valid?
      expect(user.errors[:email]).to include("can't be blank")
    end

    it 'Validates a valid record' do
      user = User.new
      user.password = 'leelafry'
      user.email = 'good@mail.com'
      user.password_confirmation = 'leelafry'
      expect(user.valid?).to be(true)
    end
  end
end
