import React, {useEffect, useState} from "react"
import {ToastContainer, toast, Bounce} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {Globalstyle} from "../styles/globalstyle"
import {MainLayout} from "../styles/layouts"
import {AppStyled} from "../styles/app-syle"
import {Orb} from "./Orb/Orb";
import {Navigation} from "./Navigation/Navigation";
import {Dashboard} from "./Dashboard/Dashboard"
import {Incomes} from "./Incomes/Incomes";
import {Expenses} from "./Expenses/Expenses";
import {GlobalProvider} from "../Context/globalContext";

const App = ({ appData, alert, notice, current_user }) => {
    const user = current_user
    const [active, setActive] = useState(1)

    const notify = (message) => toast(message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
    });

    const showError = (message) => toast.error(message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
    });



    (function() {
        const { expenses } = appData;
        try{
            appData['total_expenses'] = expenses.reduce((total, currentValue) => total + parseInt(currentValue.amount), 0)
        }catch(ex){
            console.log("Could not calculate total expenses", ex)
        }

    })();

    (function() {
        const { incomes } = appData;
        try{
            appData['total'] = incomes.reduce((total, currentValue) => total + parseInt(currentValue.amount), 0)
        }catch(ex){
            console.log("Could not calculate total incomes", ex)
        }
    })();


    const { currentPage } = appData

    useEffect(() => {
    // run this once the app component reloads
        setActive(currentPage)

        // display the alert or notice
        if (notice){
            notify()
        }

        if (alert){
            showError(alert)
        }

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
            <ToastContainer />
        <Globalstyle />
            <GlobalProvider appData={appData} user={user}>
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