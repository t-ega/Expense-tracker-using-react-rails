class ApplicationController < ActionController::Base
  def check_and_init
    @incomes = @incomes ||= []

  end
end
