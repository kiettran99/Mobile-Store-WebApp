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
            payload: { msg: e.response.data, status: e.response.statusText }
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
        //console.log(e.response);
        /*  config: {url: "https://mobile-store-1032.herokuapp.com/api/products/5f5481d5c7ce460017030ef54", method: "get", headers: {…}, transformRequest: Array(1), transformResponse: Array(1), …}
            data: "Product is not exists."
            headers: {content-length: "22", content-type: "text/html; charset=utf-8"}
            request: XMLHttpRequest {readyState: 4, timeout: 0, withCredentials: false, upload: XMLHttpRequestUpload, onreadystatechange: ƒ, …}
            status: 404
            statusText: "Not Found" */

        dispatch({
            type: PRODUCT_ERROR,
            payload: { msg: e.response.data, status: e.response.statusText }
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
            payload: { msg: e.response.data, status: e.response.statusText }
        });
    }
};