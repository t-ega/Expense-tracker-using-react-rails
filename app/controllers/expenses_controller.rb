# app/controllers/expenses_controller.rb
class ExpensesController < ApplicationController
  # This controller requires that every routes to be accessed must be done from
  # an authorized user
  protect_from_forgery prepend: true
  before_action :authenticate_user!
  before_action :set_expense, only: [:destroy]

  def index
    @expenses = current_user.expense.all ||= []
    puts @expenses.inspect

  end

  def show
  end


  def create
    @expense = current_user.expense.build(expense_params)
    @expenses = current_user.expense.all

    if @expense.save
      redirect_to @expense, notice: 'Expense was successfully created.'
    else
      render "index", notice: "Expense was not successfully created"
    end
  end

  def update
    if @expense.update(expense_params)
      redirect_to @expense, notice: 'Expense was successfully updated.'
    else
      render "index"
    end
  end

  def destroy
    @expense.destroy
    redirect_to expenses_url, notice: 'Expense was successfully destroyed.'
  end

  private

  def set_expense
    @expense = current_user.expense.find(params[:id])
  end

  def expense_params
    params.require(:expense).permit(:title, :amount, :type, :date, :category, :description)
  end
end
