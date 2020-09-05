import {
    REGISTER_SUCCESS, REGISTER_FAIL, USER_LOADED, AUTH_ERROR,
    LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT
} from '../actions/types';
import axios from 'axios';
import urlAPI from '../utils/urlAPI';
import setAuthToken from '../utils/setAuthToken';
import { setAlert } from './alert';

// @desc Request API get user by token
export const loadUser = () => async dispatch => {
    if (localStorage.token) {
        setAuthToken(localStorage.token);
    }

    try {
        const res = await axios.get(`${urlAPI}/api/auth`);

        dispatch({
            type: USER_LOADED,
            payload: res.data
        });
    }
    catch (e) {
        console.log(e);

        dispatch({
            type: AUTH_ERROR
        })
    }
};

//Login user
export const login = (username, password) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    const body = {
        username,
        password
    };

    try {

        const res = await axios.post(`${urlAPI}/api/auth`, body, config);

        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data
        });

        dispatch(loadUser());
    }
    catch (e) {
        console.log(e);

        const errors = e.response.data.errors;

        if (errors) {
            errors.map(error => dispatch(setAlert(error.msg, 'dangger')));
        }

        dispatch({
            type: LOGIN_FAIL
        });
    }
};

//Register user
export const register = ({ username, password, name }) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    const body = {
        username,
        password,
        name
    };

    try {
        const res = await axios.post(`${urlAPI}/api/users`, body, config);

        dispatch({
            type: REGISTER_SUCCESS,
            payload: res.data
        });

        dispatch(loadUser());
    }
    catch (e) {
        console.log(e);

        const errors = e.response.data.errors;

        if (errors) {
            errors.map(error => dispatch(setAlert(error.message, 'dangger')));
        }

        dispatch({
            type: REGISTER_FAIL
        });
    }
};

//Logout user
export const logout = () => async dispatch => {
    try {
        await axios.get(`${urlAPI}/api/auth/logout`);

        dispatch({
            type: LOGOUT
        });
    }
    catch (e) {
        console.log(e);
    }
};