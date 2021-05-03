import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Home from '../components/home'
import Register from '../components/registerUser'

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={ Home } />
            <Route exact path="/registro" component={ Register } />
        </Switch>
    </BrowserRouter>
)


export default Routes