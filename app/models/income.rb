class Income < ApplicationRecord
  belongs_to :user
  validates :title, presence: true, length: { maximum: 20 }
  validates :amount, presence: true, numericality: { less_than_or_equal_to: 999_999_999_999_999_999.99 }
  validates :date, presence: true
  validates :category, presence: true
  validates :user, presence: true
  validates :type, presence:true
  validates :description, presence: true, length: { maximum: 50 }
end
