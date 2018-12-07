# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

demo_user = User.create!(username: "DemoUser", password: "password", email: "demo_user@aa.io")

user1 = User.create!(username: "kaisa", password: "password", email: "kaisa@mail.io")
user2 = User.create!(username: "ahri", password: "password", email: "ahri@mail.io")
user3 = User.create!(username: "evelyn", password: "password", email: "evelyn@mail.io")
user4 = User.create!(username: "akali", password: "password", email: "akali@mail.io")
user5 = User.create!(username: "jinx", password: "password", email: "jinx@mail.io")
user6 = User.create!(username: "missf", password: "password", email: "missf@mail.io")

channel = Channel.create!(name: "Animals", description: "I love Animals", user_id: user1.id)
channel = Channel.create!(name: "Food", description: "I love Food", user_id: user2.id)
channel = Channel.create!(name: "Night", description: "I love Night", user_id: user3.id)
channel = Channel.create!(name: "Tech", description: "I love Tech", user_id: user4.id)
channel = Channel.create!(name: "Winter", description: "I love Winter", user_id: user5.id)
channel = Channel.create!(name: "Woman", description: "I love Woman", user_id: user6.id)
