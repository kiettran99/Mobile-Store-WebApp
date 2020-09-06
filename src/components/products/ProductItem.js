import React from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';

const ProductItem = ({ product: { name, imageUrl, price, description, manufacturer, category,
    conditionProduct, quantity } }) => (
        <div className="col-md-4">
            <figure className="card card-product">
                <div className="img-wrap">
                    <img src={imageUrl} width={348} height={220} />
                </div>
                <figcaption className="info-wrap">
                    <h4 className="title">{name}</h4>
                    <p className="desc">{description}</p>
                    <div className="rating-wrap">
                        <div className="label-rating">132 reviews</div>
                        <div className="label-rating">154 orders </div>
                    </div>
                </figcaption>
                <div className="bottom-wrap">
                    <a href="" className="btn btn-sm btn-primary float-right">Order Now</a>
                    <div className="price-wrap h5">
                        <span className="price-new">${price}</span> <del className="price-old">$1980</del>
                    </div>
                </div>
            </figure>
        </div>
    );

ProductItem.propTypes = {
    product: PropTypes.object.isRequired
};


export default ProductItem;
