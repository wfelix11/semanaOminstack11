import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Logon from './pages/Logon';
import Registro from './pages/Register';
import Profile from './pages/Profile';
import NewIncidents from './pages/NewIncidents';

export default function Routes(){
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/"  exact component={Logon} />
                <Route path="/registro" component={Registro} />
                <Route path="/profile" component={Profile} />
                <Route path="/incidents/new" component={NewIncidents} />
            </Switch>
        </BrowserRouter>
    )
}