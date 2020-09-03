import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '../components/Header';
import Login from '../components/Login';

const AppRoute = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/login" component={Login} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRoute;