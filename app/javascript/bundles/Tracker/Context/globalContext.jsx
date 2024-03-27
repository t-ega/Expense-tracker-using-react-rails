import React, { useContext } from "react"


const GlobalContext = React.createContext()

export const GlobalProvider = ({ children, appData}) => {

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