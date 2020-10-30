import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import MoldingMachines from '../pages/MoldingMachines'
import Data from '../pages/Data'
import NotFound from '../pages/NotFound'

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/molding" component={MoldingMachines} />
                <Route exact path="/molding/data" component={Data} />
                <Route component={NotFound}/>
            </Switch>
        </BrowserRouter>
    )
}

export default App