# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
10.times do |i|
    Tutor.create(
        name: "Bender Rodriguez Unit: #{i+1}",
        links: "www.youtube.com",
        description: "A very kewl tutor- Bender is great!",
        image: "https://picsum.photos/100/100", default: 'https://picsum.photos/100/100'
    )
end