# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20140711224040) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "maps", force: true do |t|
    t.integer  "map_id"
    t.string   "name"
    t.integer  "creator_id"
    t.integer  "owner_id"
    t.float    "map_lat"
    t.float    "map_long"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "pins", force: true do |t|
    t.string   "name"
    t.string   "description"
    t.string   "photo_url"
    t.float    "pin_lat"
    t.float    "pin_long"
    t.integer  "map_id"
    t.integer  "pin_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "users", force: true do |t|
    t.integer  "user_id"
    t.string   "avatar"
    t.string   "username"
    t.integer  "password"
    t.integer  "hashed_password"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

end
