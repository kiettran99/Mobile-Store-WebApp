import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getProduct } from '../../actions/product';
import NotFoundPage from '../not-found-page/NotFoundPage';
import Spinnet from '../layout/Spinnet';

const ProductDetail = ({ getProduct, match, product: { product, loading } }) => {
    useEffect(() => {
        getProduct(match.params.id);
    }, [getProduct]);

    return loading ? <Spinnet /> : (!product ? <NotFoundPage /> :
        <div className="card m-3">
            <div className="row no-gutters">
                <aside className="col-md-6">
                    <article className="gallery-wrap">
                        <div className="img-big-wrap">
                            <div> <a href="#">
                                <img style={{ height: "30.25rem"}} src={product.imageUrl} />
                            </a>
                            </div>
                        </div>
                        {/* <div className="thumbs-wrap">
                            <a href="" className="item-thumb"> <img src="bootstrap-ecommerce-html/images/items/12.jpg" /></a>
                            <a href="" className="item-thumb"> <img src="bootstrap-ecommerce-html/images/items/12-1.jpg" /></a>
                            <a href="" className="item-thumb"> <img src="bootstrap-ecommerce-html/images/items/12-2.jpg" /></a>
                        </div> */}
                    </article>
                </aside>
                <main className="col-md-6 border-left p-5">
                    <article className="content-body">

                        <h2 className="title">{product.name}</h2>

                        <div className="rating-wrap my-3">
                            <ul className="rating-stars" style={{ listStyleType: "none" }}>
                                <li style={{ width: "80%" }} className="stars-active">
                                    <small className="label-rating text-muted">132 reviews</small>
                                    <i className="fas fa-star text-primary"></i> <i className="fas fa-star text-primary"></i>
                                    <i className="fas fa-star text-primary"></i> <i className="fas fa-star text-primary"></i>
                                    <i className="fas fa-star text-primary"></i>
                                </li>
                                <li>
                                    <small className="label-rating text-success"> <i className="fa fa-clipboard-check"></i> 154 orders</small>
                                    <i className="fas fa-star text-primary"></i> <i className="fas fa-star text-primary"></i>
                                    <i className="fas fa-star text-primary"></i> <i className="fas fa-star text-primary"></i>
                                    <i className="fas fa-star"></i>
                                </li>
                            </ul>


                        </div>

                        <div className="mb-3">
                            <var className="price h4">${product.price}</var>
                        </div>

                        <p>{product.description}</p>


                        {/* <dl className="row">
                            <dt className="col-sm-3">Model#</dt>
                            <dd className="col-sm-9">Odsy-1000</dd>

                            <dt className="col-sm-3">Color</dt>
                            <dd className="col-sm-9">Brown</dd>

                            <dt className="col-sm-3">Delivery</dt>
                            <dd className="col-sm-9">Russia, USA, and Europe </dd>
                        </dl> */}

                        <hr />
                        <div className="form-row">
                            <div className="form-group col-md flex-grow-0">
                                <label>Quantity</label>
                                <input id="quantity" name="quantity" type="number" defaultValue={1} min={0} max={product.quantity} className="form-control" />
                            </div>
                            {/* <div className="form-group col-md">
                                <label>Select size</label>
                                <div className="mt-1">
                                    <label className="custom-control custom-radio custom-control-inline">
                                        <input type="radio" name="select_size" className="custom-control-input" />
                                        <div className="custom-control-label">Small</div>
                                    </label>

                                    <label className="custom-control custom-radio custom-control-inline">
                                        <input type="radio" name="select_size" className="custom-control-input" />
                                        <div className="custom-control-label">Medium</div>
                                    </label>

                                    <label className="custom-control custom-radio custom-control-inline">
                                        <input type="radio" name="select_size" className="custom-control-input" />
                                        <div className="custom-control-label">Large</div>
                                    </label>

                                </div>
                            </div> */}
                        </div>

                        <a href="#" className="btn btn-primary mr-2"> Buy now </a>
                        <a href="#" className="btn btn-outline-primary"> <span className="text">Add to cart</span> <i
                            className="fas fa-shopping-cart"></i> </a>
                    </article>
                </main>
            </div>
        </div>
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