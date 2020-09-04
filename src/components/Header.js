import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../actions/auth';
import PropTypes from 'prop-types';
import Spinnet from './layout/Spinnet';

const Header = ({ auth: { isAuthenticated, loading, user }}) => {
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
                            {
                                !isAuthenticated ? <Link className="btn btn-success" to="/login"
                                >Login</Link> :
                                    <div>
                                        <label className="mr-3">Hello, {props.user.name}</label>
                                        <Link className="btn btn-success mr-2" to="/cart"
                                        ><i className="fas fa-shoppingcart" style={{ transform: "rotateY(180deg) !important" }} ></i>
                                        View Cart</Link>
                                        <button className="btn btn-danger" onClick={(e) => {
                                            props.dispatch(removeUser());
                                            localStorage.removeItem("user");
                                            this.history.push("/")
                                        }}
                                        >Sign out</button>
                                    </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

Header.propTypes = {
    auth: PropTypes.object.isRequired
};

const mapStateToProps = (state) => {
    return {
        auth: state.auth
    }
};

export default connect(mapStateToProps)(Header);