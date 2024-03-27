class TrackerController < ApplicationController
  before_action :authenticate_user!


  def index
    puts "here"
    @incomes = Income.find_by user: current_user
    @new_income = current_user.income.build

  end


end
