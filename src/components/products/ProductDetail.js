import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getProduct, getMoreComments } from '../../actions/product';
import NotFoundPage from '../not-found-page/NotFoundPage';
import Spinnet from '../layout/Spinnet';
import ProductComments from './ProductComments';
import ProductDescription from './ProductDescription';

const ProductDetail = ({ getProduct, getMoreComments, match, product: { product, loading } }) => {
    useEffect(() => {
        getProduct(match.params.id);
    }, [getProduct]);

    return loading ? <Spinnet /> : (!product ? <NotFoundPage /> :
        <div className="container-flud card m-md-3 rounded shadow-sm">
            <ProductDescription product={product} />
            <ProductComments productId={product._id} likes={product.likes} comments={product.comments} />
            {product.comments.length > 0 && <button className="btn text-primary"
            onClick={() => getMoreComments(product._id, product.comments.length)}>More comments</button>}
        </div >
    );
};

ProductDetail.propTypes = {
    product: PropTypes.object.isRequired,
    getProduct: PropTypes.func.isRequired,
    getMoreComments: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
    product: state.product
});

export default connect(mapStateToProps, { getProduct, getMoreComments })(ProductDetail);