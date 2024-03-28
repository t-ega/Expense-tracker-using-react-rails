class IncomesController < ApplicationController
  # This controller requires that every routes to be accessed must be done from
  # an authorized user
  protect_from_forgery prepend: true
  before_action :authenticate_user!
  before_action :set_income, only: %i[show edit update destroy]


  def index
   @incomes = current_user.income.all
   render "index"
  end

  def show
    @incomes = current_user.income.all
    render 'index'
  end

  def new
    @income = current_user.income.build
  end

  def create

    @income = current_user.income.build(income_params)
    @incomes = current_user.income.all
    if @income.save
      redirect_to incomes_url, notice: 'Income was successfully created.'

    else
      flash[:alert] = "Income was not successfully created: #{@income.errors.full_messages.join(', ')}"
      render 'index'

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
    redirect_to incomes_url, notice: 'Income was successfully destroyed.'
  end

  private

  def set_income
    @income = current_user.income.find(params[:id])
  end

  def income_params
    params.require(:income).permit(:title, :amount, :entry_type, :date, :category, :description)
  end

end
