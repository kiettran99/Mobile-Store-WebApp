import React, { useMemo } from 'react';
// import moment from 'moment';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { connect } from 'react-redux';
import { removeComment } from '../../../actions/product';

dayjs.extend(relativeTime);

const CommentItem = ({ comment: { _id, name, text, date, user: userComment },
    auth: { user, isAuthenticated },
    productId, removeComment }) => {

    const dateRelative = useMemo(() => (
        < p className = "d-inline" > { dayjs(date).fromNow() }</p >
    ), [date]);

    const onRemoveComment = (productId, commentId) => {
        if (window.confirm('Are you sure? This can NOT be undone !')) {
            removeComment(productId, commentId);
        }
    }

    return (
        <div className="container shadow-sm p-2 mt-2 rounded">
            <div className="row">
                <div className="col-md-0 p-2 ml-3 mt-2">
                    <img src="https://cdn.iconscout.com/icon/free/png-256/avatar-380-456332.png" className="circle rounded" width="35" />
                </div>

                <div className="col-md-10 col-sm-10 col-9 p-3 rounded">
                    <div className="bg-light p-2">
                        <p className="m-0 ml-3">{name}</p>
                        <p className="text-muted ml-3">{text}</p>
                    </div>

                    <div className="rounded text-muted mt-1">
                        {dateRelative}
                        <p className="btn d-inline ml-3 text-primary">Like</p>
                        <p className="btn d-inline ml-3 text-primary">Reply</p>
                        {user && isAuthenticated && user._id === userComment
                            && <p className="btn d-inline ml-3 text-danger"
                                onClick={() => onRemoveComment(productId, _id)}>Remove</p>}
                    </div>
                </div>
                <div>

                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    auth: state.auth
});

export default connect(mapStateToProps, { removeComment })(CommentItem);