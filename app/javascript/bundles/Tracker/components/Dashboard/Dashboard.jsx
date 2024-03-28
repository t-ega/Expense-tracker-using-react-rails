import React from "react";
import {DashboardStyled} from "../../styles/app-syle";
import {InnerLayout} from "../../styles/layouts";
import {Chart} from "../Chart/Chart";
import {dollar} from "../../utils/icons";
import {useGlobalContext} from "../../Context/globalContext";
import {History} from "../History/History";

export const Dashboard = () => {
    const { appData, totalBalance } = useGlobalContext()
    const {total, total_expenses} = appData

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
                    <History></History>
                </div>
            </div>
        </InnerLayout>
    </DashboardStyled>
}