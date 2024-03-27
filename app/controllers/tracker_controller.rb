class TrackerController < ApplicationController
  # This controller is the **main** controller for the application

  before_action :authenticate_user!

  # When the index page is called, we return all the
  # necessary data needed by the frontend to display on the dashboard
  def index
    @incomes = Income.where user_id: current_user.id ||= []
    @expenses = Expense.where user_id: current_user.id ||= []

  end


end
