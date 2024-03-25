class IncomesController < ApplicationController
  before_action :authenticate_user!

  def get
   @incomes = Income.find_by(user=current_user)
  end
end
