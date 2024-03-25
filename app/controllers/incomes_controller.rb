class IncomesController < ApplicationController
  # This controller requires that every routes to be accessed must be done from
  # an authorized user
  before_action :authenticate_user!
  before_action :set_income, only: %i[show edit update destroy]
  protect_from_forgery prepend: true


  def index
   @incomes = Income.where(user=current_user)
  end

  def show
  end

  def new
    @income = current_user.income.build
  end

  def create
    @income = current_user.income.build(income_params)

    if @income.save
      redirect_to @income, notice: 'Income was successfully created.'
    else
      render :new, {alert: "Income was not successfully created"}
    end
  end

  def edit
  end

  def update
    if @income.update(income_params)
      redirect_to @income, notice: 'Income was successfully updated.'
    else
      render :edit
    end
  end

  def destroy
    @income.destroy
    redirect_to income_url, notice: 'Income was successfully destroyed.'
  end

  private

  def set_income
    @income = Income.find(params[:id])
  end

  def income_params
    params.require(:income).permit(:title, :amount, :type, :date, :category, :description)
  end

end
