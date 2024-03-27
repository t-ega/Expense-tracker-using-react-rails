class CreateExpenses < ActiveRecord::Migration[7.1]
  def change
    create_table :expenses do |t|
      t.string :title
      t.decimal :amount
      t.string :type
      t.date :date
      t.string :category
      t.string :description

      t.timestamps
    end
  end
end
