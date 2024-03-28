import React, { useContext } from "react"


const GlobalContext = React.createContext()

export const GlobalProvider = ({ children, appData, history}) => {
    const transactionHistory = () => {
        const {incomes, expenses} = appData
        const history = [...incomes, ...expenses]
        return history.sort((a, b) => {
            return new Date(b.created_at) - new Date(a.created_at)
        }).slice(1, 4)
    }

    const totalBalance = () => {
        const {total, total_expense} = appData
        return total - total_expense
    }
    return (
        <GlobalContext.Provider value={{
            appData,
            transactionHistory,
            totalBalance

        }}>
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobalContext = () =>{
    return useContext(GlobalContext)
}