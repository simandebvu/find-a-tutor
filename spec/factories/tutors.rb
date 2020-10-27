FactoryBot.define do
    factory :tutor do
      name { Faker::Name.name }
      description { Faker::Company.name }
      image { 'noneimage' }
      links { 'somelinks' }
    end
  end