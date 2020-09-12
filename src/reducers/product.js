import {
    GET_PRODUCT, GET_PRODUCTS, PRODUCT_ERROR, ADD_PRODUCT, CLEAR_PRODUCT,
    ADD_COMMENT, REMOVE_COMMENT, UPDATE_LIKES
} from '../actions/types';

const initialState = {
    products: [],
    product: null,
    loading: true,
    errors: {}
};

export default function(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case ADD_PRODUCT:
        case GET_PRODUCT:
            return {
                ...state,
                loading: false,
                product: payload
            };
        case GET_PRODUCTS:
            return {
                ...state,
                loading: false,
                products: payload
            };
        case UPDATE_LIKES:
            return {
                ...state,
                loading: false,
                product: {
                    ...state.product,
                    likes: payload
                }
            };
        case ADD_COMMENT:
            return {
                ...state,
                loading: false,
                product: {
                    ...state.product,
                    comments: payload
                }
            };
        case REMOVE_COMMENT:
            return {
                ...state,
                loading: false,
                product: {
                    ...state.product,
                    comments: state.product.comments.filter(comment => comment._id !== payload)
                }
            };
        case PRODUCT_ERROR:
            return {
                ...state,
                loading: false,
                errors: payload
            };
        case CLEAR_PRODUCT:
            return {
                ...state,
                loading: true,
                product: null
            };
        default:
            return state;
    };
};