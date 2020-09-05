import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { login } from '../../actions/auth';
import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Login = ({ isAuthenticated, login }) => {

    const [formData, setFormData] = useState({
        username: '',
        password: ''
    })

    const { username, password } = formData;

    const cardStyle = {
        width: "30vw",
        margin: "1rem auto",
        minWidth: "24rem"
    };

    if (isAuthenticated) {
        return <Redirect to='/' />
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        login(username, password);
    }

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    return (
        <div className="container">
            <div className="card"
                style={cardStyle}>
                <div className="card-header">
                    Please sign in
                </div>

                <div className="card-body">
                    <form onSubmit={e => onSubmit(e)}>
                        <div className="form-group">
                            <input type="text"
                                className="form-control"
                                placeholder="User Name"
                                name='username'
                                value={username}
                                onChange={e => onChange(e)}
                                required={true} />
                        </div>

                        <div className="form-group">
                            <input type="password"
                                className="form-control"
                                placeholder="Password"
                                name='password'
                                value={password}
                                onChange={e => onChange(e)}
                                required={true} />
                        </div>

                        <button type="submit" className="btn btn-success btn-md btn-block">
                            Login
                        </button>

                        <p className="my-1">
                            Don't have an account? <Link to="/register">Sign Up</Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

Login.propTypes = {
    login: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { login })(Login);