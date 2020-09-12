import React, { useMemo } from 'react';
// import PropTypes from 'prop-types';
import CommentsForm from './product-forms/CommentsForm';
import CommentsList from './product-comments/CommentsList';
import CommentsBar from './product-comments/CommentsBar';
import ProductContext from '../../contexts/ProductContext';

const ProductComments = ({ productId, likes, comments }) => {

    const commentsForm = useMemo(() => <CommentsForm />, []);

    return (
        <ProductContext.Provider value={{ productId, likes, comments }}>
            <CommentsBar />
            {commentsForm}
            <CommentsList />
        </ProductContext.Provider>
    );
};

export default ProductComments;