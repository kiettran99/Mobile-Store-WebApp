import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getProduct } from '../../actions/product';
import NotFoundPage from '../not-found-page/NotFoundPage';
import Spinnet from '../layout/Spinnet';
import ProductComments from './ProductComments';
import ProductDescription from './ProductDescription';

const ProductDetail = ({ getProduct, match, product: { product, loading } }) => {
    useEffect(() => {
        getProduct(match.params.id);
    }, [getProduct]);

    return loading ? <Spinnet /> : (!product ? <NotFoundPage /> :
        <div className="container-flud card m-3 rounded shadow-sm">
            <ProductDescription product={product} />
            <ProductComments productId={product._id} likes={product.likes} comments={product.comments} />
        </div >
    );
};

ProductDetail.propTypes = {
    product: PropTypes.object.isRequired,
    getProduct: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
    product: state.product
});

export default connect(mapStateToProps, { getProduct })(ProductDetail);