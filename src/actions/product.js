import {
    GET_PRODUCT, GET_PRODUCTS, ADD_PRODUCT, PRODUCT_ERROR, CLEAR_PRODUCT,
    REQUEST_LOADING, COMPLETE_LOADING,
    ADD_COMMENT, REMOVE_COMMENT, UPDATE_LIKES
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

        dispatch({
            type: CLEAR_PRODUCT
        })

        dispatch({
            type: REQUEST_LOADING
        });

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
    finally {
        dispatch({
            type: COMPLETE_LOADING
        });
    }
};

export const addProduct = (formData, history) => async dispatch => {
    try {
        dispatch({
            type: REQUEST_LOADING
        });

        const config = {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        };

        const res = await axios.post(`${urlAPI}/api/products`, formData, config);

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
    finally {
        dispatch({
            type: COMPLETE_LOADING
        });
    }
};

// @param
// @id Product's ID
export const likeProduct = (id) => async dispatch => {
    try {
        const res = await axios.put(`${urlAPI}/api/products/like/${id}`);

        dispatch({
            type: UPDATE_LIKES,
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

// @param
// @id Product's ID
export const unlikeProduct = (id) => async dispatch => {
    try {
        const res = await axios.put(`${urlAPI}/api/products/unlike/${id}`);

        dispatch({
            type: UPDATE_LIKES,
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


// @param
// @productId Product's ID
export const addComment = (productId, formData) => async dispatch => {
    try {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };

        const res = await axios.put(`${urlAPI}/api/products/comment/${productId}`, formData, config);

        dispatch({
            type: ADD_COMMENT,
            payload: res.data
        });

        dispatch(setAlert('Comment Added', 'success'));
    }
    catch (e) {
        console.log(e);
        dispatch({
            type: PRODUCT_ERROR,
            payload: { msg: e.response.data, status: e.response.statusText }
        });
    }
}

// @param
// @id Product's ID
export const removeComment = (productId, commentId) => async dispatch => {
    try {
        dispatch({
            type: REQUEST_LOADING
        });

        await axios.delete(`${urlAPI}/api/products/comment/${productId}/${commentId}`);

        dispatch({
            type: REMOVE_COMMENT,
            payload: commentId
        });

        dispatch(setAlert('Comment Removed', 'success'));
    }
    catch (e) {
        console.log(e);
        dispatch({
            type: PRODUCT_ERROR,
            payload: { msg: e.response.data, status: e.response.statusText }
        });
    }
    finally {
        dispatch({
            type: COMPLETE_LOADING
        });
    }
};