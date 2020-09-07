import React, { Fragment, Suspense, lazy } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from '../components/layout/Header';
// import Login from '../components/auth/Login';
import Alert from '../components/layout/Alert';
// import Register from '../components/auth/Register';
// import ProductList from '../components/products/ProductList';
// import AddProduct from '../components/products/product-forms/AddProduct';
// import ProductDetail from '../components/products/ProductDetail';
// import NotFoundPage from '../components/not-found-page/NotFoundPage';
import PrivateRoute from '../components/routing/PrivateRoute';
import Spinnet from '../components/layout/Spinnet';

const Login = lazy(() => import('../components/auth/Login'));
const Register = lazy(() => import('../components/auth/Register'));
const ProductList = lazy(() => import('../components/products/ProductList'));
const AddProduct = lazy(() => import('../components/products/product-forms/AddProduct'));
const ProductDetail = lazy(() => import('../components/products/ProductDetail'));
const NotFoundPage = lazy(() => import('../components/not-found-page/NotFoundPage'));

const AppRoute = () => (
    <BrowserRouter>
        <Fragment>
            <Header />
            <section className='container'>
                <Alert />
                <Suspense fallback={<Spinnet />}>
                    <Switch>
                        <Route exact path={["/", "/products"]} component={ProductList} />
                        <Route exact path="/login" component={Login} />
                        <Route exact path="/register" component={Register} />
                        <Route exact path="/products/:id" component={ProductDetail} />
                        <PrivateRoute exact path="/products/add" component={AddProduct} />
                        <Route component={NotFoundPage} />
                    </Switch>
                </Suspense>
            </section>
        </Fragment>
    </BrowserRouter>
);

export default AppRoute;