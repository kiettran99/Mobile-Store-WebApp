import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../../actions/auth';
import PropTypes from 'prop-types';

const Header = ({ auth: { isAuthenticated, loading, user }, logout }) => {

    const guestLinks = (
        <Fragment>
            <Link className="btn btn-success mr-3" to="/login"
            >Login</Link>

            <Link className="btn btn-primary" to="/register"
            >Sign up</Link>
        </Fragment>
    );

    const userLinks = (
        <Fragment>
            {user && <label className="mr-3">Hello, {user.name}</label>}

            {user && user.role === 'customer' ?
                <Link className="btn btn-success mr-2" to="/cart"
                ><i className="fas fa-shopping-cart" style={{ transform: "rotateY(180deg) !important" }} ></i>
                &nbsp;View Cart</Link> :
                <Link className="btn btn-success mr-2" to="/products/add">Add Product</Link>}
            <button className="btn btn-danger" onClick={() => {
                logout();
            }}
            >Sign out</button>
        </Fragment>
    );

    return (
        <div
            className="container-fluid"
            style={{ height: "25vh", backgroundColor: "rgb(238, 238, 238)" }} >
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h1 style={{ fontSize: "4rem", paddingTop: "50px" }}>
                            <Link to="/">Mobile Store</Link>
                        </h1>
                    </div>

                    <div className="col text-right">
                        <div style={{ marginTop: "60px" }}>
                            {!loading && (<Fragment>{isAuthenticated ? userLinks : guestLinks}</Fragment>)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

Header.propTypes = {
    auth: PropTypes.object.isRequired,
    logout: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
    return {
        auth: state.auth
    }
};

export default connect(mapStateToProps, { logout })(Header);