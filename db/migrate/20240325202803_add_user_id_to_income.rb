class AddUserIdToIncome < ActiveRecord::Migration[7.1]
  def change
    add_column :incomes, :user_id, :integer
    add_index :incomes, :user_id
  end
end
