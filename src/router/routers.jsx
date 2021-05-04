import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Home from '../components/home'
import Register from '../components/registerUser'
import NotRegister from '../components/notRegister'

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={ Home } />
            <Route exact path="/registro" component={ Register } />
            <Route exact path="/NaoRegistrado" component={ NotRegister } />
        </Switch>
    </BrowserRouter>
)


export default Routes