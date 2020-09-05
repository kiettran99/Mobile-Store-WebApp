import React, { Fragment } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '../components/layout/Header';
import Login from '../components/auth/Login';
import Alert from '../components/layout/Alert';
import Register from '../components/auth/Register';

const AppRoute = () => (
    <BrowserRouter>
        <Fragment>
            <Header />
            <section className='container'>
                <Alert />
                <Switch>
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/register" component={Register} />
                </Switch>
            </section>
        </Fragment>
    </BrowserRouter>
);

export default AppRoute;