import React, {useEffect} from "react";

import {IncomeStyled} from "../../styles/app-syle";
import {InnerLayout} from "../../styles/layouts";

import {useGlobalContext} from "../../Context/globalContext";
import { IncomeItem } from "../IncomeItem/IncomeItem";
import {ExpenseForm} from "./ExpenseForm";

export const Expenses = () => {
    // Note: Some files here are reused from the
    // incomes folder.

    const {appData } = useGlobalContext();
    let { expenses, csrf_token, total_expenses } = appData;

    return ( <IncomeStyled>
        <InnerLayout>
            <h1>Expenses</h1>
            <h2 className="total-income">Total Expenses: <span>${total_expenses}</span> </h2>
            <div className="income-content">
                <div className="form-container">
                    <ExpenseForm />
                </div>
                <div className="incomes">
                    {expenses.map(expense => {
                        const {id, title, amount, date, category, description} = expense;
                        return <IncomeItem
                            key={id}
                            id={id}
                            title={title}
                            description={description}
                            amount={amount}
                            date={date}
                            type={"expenses"}
                            csrf_token={csrf_token}
                            category={category}
                            indicatorColor="var(--color-green)"

                        />
                    })}
                </div>
            </div>
        </InnerLayout>
    </IncomeStyled> )
}