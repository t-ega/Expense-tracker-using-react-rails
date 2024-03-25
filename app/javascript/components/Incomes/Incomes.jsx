import React from "react";
import {IncomesStyled} from "../../styles/app-syle";
import {InnerLayout} from "../../styles/layouts";

export const Incomes = () => {
    return <IncomesStyled>
        <InnerLayout>
            <h1>Incomes</h1>
            <div className="income-content">
            <div className="form-container">

            </div>
                <div className="incomes"></div>
            </div>
        </InnerLayout>
    </IncomesStyled>
}