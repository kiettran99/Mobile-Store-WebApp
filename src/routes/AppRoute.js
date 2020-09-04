import React, { Fragment } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '../components/Header';
import Login from '../components/Login';
import Alert from '../components/layout/Alert';

const AppRoute = () => (
    <BrowserRouter>
        <Fragment>
            <Header />
            <section className='container'>
                <Alert />
                <Switch>
                    <Route exact path="/login" component={Login} />
                </Switch>
            </section>
        </Fragment>
    </BrowserRouter>
);

export default AppRoute;