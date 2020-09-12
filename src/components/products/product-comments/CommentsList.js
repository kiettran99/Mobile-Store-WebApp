import React from 'react';
import CommentItem from './CommentItem';

const CommentsList = ({ comments }) => {
    return comments && comments.map(comment => (
        <CommentItem key={comment._id} comment={comment} />
    ));
}

export default CommentsList;