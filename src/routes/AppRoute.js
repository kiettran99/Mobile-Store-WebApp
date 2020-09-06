import React, { Fragment } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '../components/layout/Header';
import Login from '../components/auth/Login';
import Alert from '../components/layout/Alert';
import Register from '../components/auth/Register';
import ProductList from '../components/products/ProductList';
import AddProduct from '../components/products/product-forms/AddProduct';
import PrivateRoute from '../components/routing/PrivateRoute';

const AppRoute = () => (
    <BrowserRouter>
        <Fragment>
            <Header />
            <section className='container'>
                <Alert />
                <Switch>
                    <Route exact path={["/", "/products"]} component={ProductList} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/register" component={Register} />
                    <PrivateRoute exact path="/products/add" component={AddProduct} />
                </Switch>
            </section>
        </Fragment>
    </BrowserRouter>
);

export default AppRoute;