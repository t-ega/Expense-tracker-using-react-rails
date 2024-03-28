import React from "react";
import {DashboardStyled} from "../../styles/app-syle";
import {InnerLayout} from "../../styles/layouts";
import {Chart} from "../Chart/Chart";
import {dollar} from "../../utils/icons";
import {useGlobalContext} from "../../Context/globalContext";
import {History} from "../History/History";

export const Dashboard = () => {
    const { appData, totalBalance } = useGlobalContext()
    const {total, total_expenses, incomes, expenses} = appData

    return <DashboardStyled>
        <InnerLayout>
            <h1>All Transactions</h1>
            <div className="stats-con">
                <div className="chart-con">
                    <Chart/>
                    <div className="amount-con">
                        <div className="income">
                            <h2>Total Income</h2>
                            <p>
                                {dollar} {total}
                            </p>
                        </div>
                        <div className="expense">
                            <h2>Total Expense</h2>
                            <p>
                                {dollar} {total_expenses}
                            </p>
                        </div>
                        <div className="balance">
                            <h2>Total Balance</h2>
                            <p>
                                {dollar} {totalBalance()}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="history-con">
                    <History />
                        <h2 className="salary-title">
                            Min<span>Salary</span>Max
                        </h2>
                    <div className="salary-item">
                        <p>
                            {Math.min(...incomes.map(inc => inc.amount))}
                        </p>
                        <p>
                            {Math.max(...incomes.map(inc => inc.amount))}
                        </p>
                    </div>
                        <h2 className="salary-title">
                            Min<span>Expense</span>Max
                        </h2>
                    <div className="salary-item">
                        <p>
                            {Math.min(...expenses.map(exp => exp.amount))}
                        </p>
                        <p>
                            {Math.max(...expenses.map(exp => exp.amount))}
                        </p>
                </div>
                    </div>
            </div>
        </InnerLayout>
    </DashboardStyled>
}