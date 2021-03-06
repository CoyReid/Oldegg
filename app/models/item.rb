class Item < ApplicationRecord
  has_many :user_items
  has_many :users, through: :user_items

  validates :name, :brand, :price, :rating, :category, :specs, :image, presence: true
end
