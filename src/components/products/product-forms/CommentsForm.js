import React, { useState, useContext } from 'react';
import { connect } from 'react-redux';
import ProductContext from '../../../contexts/ProductContext';

const CommentsForm = ({ actionComment, auth: { isAuthenticated } }) => {

    const [text, setText] = useState('');

    const { productId } = useContext(ProductContext);

    const onSubmit = (e) => {
        e.preventDefault();
        //addComment(productId, { text });
        actionComment({ text });
        setText('');
    };

    return (
        <div className="shadow-sm p-2 bg-light mt-2 rounded">
            <form onSubmit={(e) => onSubmit(e)}>
                <div className="row">
                    <div className="col-0 form-group ml-4">
                        <img src={"https://cdn.iconscout.com/icon/free/png-256/avatar-380-456332.png"}
                            className="circle rounded" width={35} />
                    </div>
                    <div className="col-xl-10 col-lg-9 col-md-9 col-sm-8 col-7 form-group">
                        <textarea className="form-control"
                            value={text}
                            onChange={e => setText(e.target.value)}
                            disabled={!isAuthenticated}
                            placeholder={isAuthenticated ? "Write comment here ...." :
                                "To leave a comment, you need to login."} />
                    </div>

                    <div className="col-1 form-group">
                        <button className="btn btn-primary"
                            disabled={!isAuthenticated}
                            type="submit">
                            Submit
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}

const mapStateToProps = (state) => ({
    auth: state.auth
});

export default connect(mapStateToProps)(CommentsForm);