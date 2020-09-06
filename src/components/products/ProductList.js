import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getProducts } from '../../actions/product';
import Spinnet from '../layout/Spinnet';
import ProductItem from './ProductItem';

const ProductList = ({ products: { products, loading }, getProducts }) => {

    useEffect(() => {
        getProducts();
    }, [getProducts]);

    return (
        <div className="container">
            <br />
            <p className="text-center">More bootstrap 4 components on 
                <a href="http://bootstrap-ecommerce.com/">
                    Bootstrap-ecommerce.com</a>
            </p>
            <hr />

            <div className="row">
                {loading ? <Spinnet />: products.map(product => (
                    <ProductItem key={product._id} product={product} />
                ))}
            </div>


        </div>
    );
};

ProductList.propTypes = {
    getProducts: PropTypes.func.isRequired,
    products: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
    products: state.product
});

export default connect(mapStateToProps, { getProducts })(ProductList);

