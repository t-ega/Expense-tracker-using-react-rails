import * as React from "react"
import {BrowserRouter as Router, Route, Routes,} from 'react-router-dom';

import { Globalstyle } from "../styles/globalstyle"
import { MainLayout } from "../styles/layouts"
import {AppStyled} from "../styles/app-syle"
import {Orb} from "./Orb/Orb";
import {Navigation} from "./Navigation/Navigation";
import { Dashboard } from "./Dashboard/Dashboard"
import {useState} from "react";
import {Incomes} from "./Incomes/Incomes";
import {Expenses} from "./Expenses/Expenses";
import {GlobalProvider} from "../Context/globalContext";

const App = () => {
    const [active, setActive] = useState(1)
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
                return <Dashboard />
        }
    }

    return (
        <>
        <Globalstyle />
            <GlobalProvider>
                <AppStyled className="App">
                    <MainLayout>
                        <Router>
                            {/*<Navigation />*/}
                            <Routes>
                                <Route exact path="/" component={Dashboard} />
                                <Route path="/dashboard" component={Dashboard} />
                                <Route path="/incomes" component={Incomes} />
                                <Route path="/expenses" component={Expenses} />
                            </Routes>
                        </Router>
                        <Orb />
                    </MainLayout>
                </AppStyled>
            </GlobalProvider>
        </>
    )
}


export default App