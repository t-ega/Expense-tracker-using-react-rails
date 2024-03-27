import React from "react";
import {IncomeStyled} from "../../styles/app-syle";
import {InnerLayout} from "../../styles/layouts";
import {Form} from "../Form/Form";
import {useGlobalContext} from "../../Context/globalContext";
import {IncomeItem} from "../IncomeItem/IncomeItem";

export const Incomes = () => {
    const {appData } = useGlobalContext();
    const { incomes, csrf_token, total } = appData;


    return ( <IncomeStyled>
        <InnerLayout>
            <h1>Incomes</h1>
            <h2 className="total-income">Total Income: <span>${total}</span> </h2>
            <div className="income-content">
            <div className="form-container">
                <Form />
            </div>
                <div className="incomes">
                    {incomes.map(income => {
                        const {id, title, amount, date, category, description, type} = income;
                        return <IncomeItem
                            key={id}
                            id={id}
                            title={title}
                            description={description}
                            amount={amount}
                            date={date}
                            type={type}
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