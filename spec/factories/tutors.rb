FactoryBot.define do
  user = User.new
  user.email = 'bender@mail.com'
  user.password = 'awesomepassword'
  user.password_confirmation = 'awesomepassword'
  user.save
  factory :tutor do
    user { user }
    name { Faker::Name.name }
    description { Faker::Company.name }
    image { 'noneimage' }
    links { 'somelinks' }
  end
end
