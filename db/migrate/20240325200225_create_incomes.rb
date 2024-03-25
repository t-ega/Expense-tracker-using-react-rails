class CreateIncomes < ActiveRecord::Migration[7.1]
  def change
    create_table :incomes do |t|
      t.string :title, limit: 20
      t.decimal :amount
      t.string :type
      t.date :date
      t.string :category
      t.string :description, limit: 50
      t.timestamps
    end
  end
end
