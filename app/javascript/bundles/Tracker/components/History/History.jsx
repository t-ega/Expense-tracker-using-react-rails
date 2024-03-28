import React from "react";
import {HistoryStyled} from "../../styles/app-syle";
import {useGlobalContext} from "../../Context/globalContext";
export const History = () => {
    const {transactionHistory} = useGlobalContext()
    const [...history] = transactionHistory()

    return (<div>
            {history.map((item) => {
                const {id, description, amount} = item
                return <HistoryStyled key={id}>
                    {description}
                    {amount}
                </HistoryStyled>
            })}
        </div>

    )
}