import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeUser } from '../actions/user';

const Header = (props) => {
    //Equal ComponentDidMount
    // useEffect(() => {

    // }, []);
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
                        <span className="lead">subtitle</span>
                    </div>

                    <div className="col text-right">
                        <div style={{ marginTop: "60px" }}>
                            {
                                props.user.name === '' ? <Link className="btn btn-success" to="/login"
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

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
};

export default connect(mapStateToProps)(Header);