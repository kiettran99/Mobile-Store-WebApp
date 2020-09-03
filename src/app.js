import ReactDOM from 'react-dom';
import React from 'react';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import "bootstrap/dist/css/bootstrap.min.css";
import AppRoute from './routes/AppRoute';
import { Provider } from 'react-redux';
import configureStore from './store/ConfigStore';
import { addUser } from './actions/user';

const store = configureStore();

const userJSON = localStorage.getItem("user");

if (userJSON) {
    const user = JSON.parse(userJSON);
    store.dispatch(addUser(user));
}

const jsx = (
    <Provider store={store}>
        <AppRoute />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));