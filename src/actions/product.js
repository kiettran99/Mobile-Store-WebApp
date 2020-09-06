import {
    GET_PRODUCT, GET_PRODUCTS, ADD_PRODUCT, PRODUCT_ERROR
} from './types';
import urlAPI from '../utils/urlAPI';
import axios from 'axios';
import { setAlert } from '../actions/alert';

export const getProducts = () => async dispatch => {
    try {
        const res = await axios.get(`${urlAPI}/api/products`);

        dispatch({
            type: GET_PRODUCTS,
            payload: res.data
        });
    }
    catch (e) {
        console.log(e);
        dispatch({
            type: PRODUCT_ERROR,
            payload: res.data
        });
    }
};

export const getProduct = (id) => async dispatch => {
    try {
        const res = await axios.get(`${urlAPI}/api/products/${id}`);

        dispatch({
            type: GET_PRODUCT,
            payload: res.data
        });
    }
    catch (e) {
        dispatch({
            type: PRODUCT_ERROR,
            payload: res.data
        });
    }
};

export const addProduct = (formData, history) => async dispatch => {
    try {
        console.log('Request create a product');
        const config = {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        };

        const res = await axios.post(`${urlAPI}/api/products`, formData, config);
        console.log(res);
        dispatch({
            type: ADD_PRODUCT,
            payload: res.data
        });

        dispatch(setAlert('Add product successfully', 'success'));

        history.push('/');
    }
    catch (e) {
        console.log(e);
        dispatch({
            type: PRODUCT_ERROR,
            payload: res.data
        });
    }
};