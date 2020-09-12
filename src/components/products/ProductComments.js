import React from 'react';
// import PropTypes from 'prop-types';
import CommentsForm from './product-forms/CommentsForm';
import CommentsList from './product-comments/CommentsList';

const ProductComments = ({ likes, comments }) => {
    return (
        <>
            <div className="shadow-sm p-2 bg-light mt-2 rounded">
                <button className="btn text-secondary ml-3">{likes && likes.length} <i className="fas fa-thumbs-up"></i></button>
                {/* <button className="btn text-secondary">2 <i className="fas fa-thumbs-down"></i></button> */}
                <button className="btn text-secondar">{comments && comments.length} <i className="fas fa-comments"></i></button>
            </div>

            <div>
                <CommentsForm />

                <CommentsList comments={comments} />
            </div>
        </>
    );
};

export default ProductComments;