class AddEntryTypeToExpenses < ActiveRecord::Migration[7.1]
  def change
    add_column :expenses, :entry_type, :string
    add_column :incomes, :entry_type, :string
  end
end
