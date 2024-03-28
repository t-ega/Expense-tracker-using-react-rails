import React from "react";
import {HistoryItemStyled, HistoryStyled} from "../../styles/app-syle";
import {useGlobalContext} from "../../Context/globalContext";
export const History = () => {
    const {transactionHistory} = useGlobalContext()
    const [...history] = transactionHistory()

    return (<HistoryStyled>
            <h2>Recent History</h2>
            {history.map((item) => {
                const {id, amount, title, entry_type} = item
                return <HistoryItemStyled key={id} entry_type={entry_type}>
                    <p>
                        {title}
                    </p>
                    <p>{entry_type === "expense" ? "-" : "+"}${amount}</p>
                </HistoryItemStyled>
            })}
        </HistoryStyled>

    )
}