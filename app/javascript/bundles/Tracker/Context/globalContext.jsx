import React, { useContext } from "react"


const GlobalContext = React.createContext()

export const GlobalProvider = ({ children, appData, user }) => {
    // Some functions in this provider are redundant
    // I'm not ready to extract the logic or refactor!

    const transactionHistory = () => {
        const {incomes, expenses} = appData
        const history = [...incomes, ...expenses]
        return history.sort((a, b) => {
            return new Date(b.created_at) - new Date(a.created_at)
        }).slice(0, 3)
    }

    const totalIncomes = () => {
        const { incomes } = appData;
        try{
            return  incomes.reduce((total, currentValue) => total + parseInt(currentValue.amount), 0)
        }catch(ex){
            console.log("Could not calculate total", ex)
            return 0
        }
    }

    const totalExpenses = () => {
        const { expenses } = appData;
        try{
            return expenses.reduce((total, currentValue) => total + parseInt(currentValue.amount), 0)
        }catch(ex){
            console.log("Could not calculate total expenses", ex)
            return 0
        }
    }



    const totalBalance = () => {
        return totalIncomes() - totalExpenses()
    }

    return (
        <GlobalContext.Provider value={{
            appData,
            transactionHistory,
            totalBalance,
            user

        }}>
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobalContext = () =>{
    return useContext(GlobalContext)
}