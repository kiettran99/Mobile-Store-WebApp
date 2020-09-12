import React from 'react';
// import PropTypes from 'prop-types';
import CommentsForm from './product-forms/CommentsForm';
import CommentsList from './product-comments/CommentsList';
import CommentsBar from './product-comments/CommentsBar';
import ProductContext from '../../contexts/ProductContext';

const ProductComments = ({ productId, likes, comments }) => {
    return (
        <ProductContext.Provider value={{ productId, likes, comments }}>
            <CommentsBar />
            <CommentsForm />
            <CommentsList />
        </ProductContext.Provider>
    );
};

export default ProductComments;