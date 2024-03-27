import React, {useEffect, useState} from "react"

import {Globalstyle} from "../styles/globalstyle"
import {MainLayout} from "../styles/layouts"
import {AppStyled} from "../styles/app-syle"
import {Orb} from "./Orb/Orb";
import {Navigation} from "./Navigation/Navigation";
import {Dashboard} from "./Dashboard/Dashboard"
import {Incomes} from "./Incomes/Incomes";
import {Expenses} from "./Expenses/Expenses";
import {GlobalProvider} from "../Context/globalContext";

const App = ({ appData }) => {
    const [active, setActive] = useState(1)
    console.log(appData)

    const setTotalIncomes = () => {
        const { incomes } = appData;

        try{
            appData['total'] = incomes.reduce((total, currentValue) => total + parseInt(currentValue.amount), 0)
        }catch(ex){
            console.log("Could not calculate total", ex)
        }
    }

    const { currentPage } = appData

    useEffect(() => {
    // run this once the app component reloads
        setActive(currentPage)
        setTotalIncomes()
    }, [])

    const displayData = () => {
        switch (active){
            case 1:
                return <Dashboard />
            case 2:
                return <Dashboard />
            case 3:
                return <Incomes />
            case 4:
                return <Expenses />

            default:
                return <Dashboard />}
    }

    return (
        <>
        <Globalstyle />
            <GlobalProvider appData={appData}>
                <AppStyled className="App">
                    <MainLayout>
                            <Navigation active={active} setActive={setActive}/>
                        <main>
                            {displayData()}
                        </main>
                        <Orb />
                    </MainLayout>
                </AppStyled>
            </GlobalProvider>
        </>
    )
}


export default App