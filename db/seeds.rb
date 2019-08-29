# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


require File.expand_path('../seeds/harvest_types', __FILE__)
require File.expand_path('../seeds/harvests', __FILE__)

# TODO: Remove after getting a job
User.destroy_all
demoUser = User.create!(username: 'Demo', email: 'demo@email.com', password: 'password')