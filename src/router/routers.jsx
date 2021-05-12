import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Home from '../components/home'
import Register from '../components/registerUser'
import Finance from '../components/finance'

import HOC from '../components/autoLogout'

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={ Home } />
            <Route exact path="/registro" component={ Register } />
            <Route exact path="/finances" component={ Finance } />
        </Switch>
    </BrowserRouter>
)


export default Routes