import React, { useContext, useState } from "react"


const GlobalContext = React.createContext()

export const GlobalProvider = ({ children, appData}) => {

    const [incomes, setIncomes] = useState([])
    const [expenses, setExpenses] = useState([])
    const [error, setError] = useState(null)


    return (
        <GlobalContext.Provider value={{
            appData
        }}>
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobalContext = () =>{
    return useContext(GlobalContext)
}