import React from "react";
import {DashboardStyled} from "../../styles/app-syle";
import {InnerLayout} from "../../styles/layouts";
import {Chart} from "../Chart/Chart";

export const Dashboard = () => {
    return <DashboardStyled>
        <InnerLayout>
            <h1>All Transactions</h1>
            <div className="stats-con">
                <div className="chart-con">
                    <Chart />
                </div>
            </div>
        </InnerLayout>
    </DashboardStyled>
}