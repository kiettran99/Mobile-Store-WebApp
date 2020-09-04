import ReactDOM from 'react-dom';
import React from 'react';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import "bootstrap/dist/css/bootstrap.min.css";
import AppRoute from './routes/AppRoute';
import { Provider } from 'react-redux';
import configureStore from './store/ConfigStore';

const store = configureStore();

const App = () => (
    <Provider store={store}>
        <AppRoute />
    </Provider>
);

ReactDOM.render(<App />, document.getElementById('app'));