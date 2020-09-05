import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';

import { register } from '../../actions/auth';
import { setAlert } from '../../actions/alert';

const Register = ({ isAuthenticated, register, setAlert }) => {

    const [formData, setFormData] = useState({
        username: '',
        password: '',
        password2: '',
        name: ''
    })

    const { username, password, password2, name } = formData;

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

        if (password === pasword2) {
            register({ username, password, name });
        }
        else {
            setAlert('Password is not match', 'dangger');
        }

    }

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    return (
        <div className="container">
            <div className="card"
                style={cardStyle}>
                <div className="card-header">
                    Register user
                </div>

                <div className="card-body">
                    <form onSubmit={e => onSubmit(e)}>

                        <div className="form-group">
                            <input type="text"
                                className="form-control"
                                placeholder="Name"
                                name='name'
                                value={name}
                                onChange={e => onChange(e)}
                                required={true} />
                        </div>

                        <div className="form-group">
                            <input type="text"
                                className="form-control"
                                placeholder="Username"
                                name='username'
                                value={username}
                                onChange={e => onChange(e)}
                                required={true} />
                        </div>

                        <div className="form-group">
                            <input type="text"
                                className="form-control"
                                placeholder="Password"
                                name='password'
                                value={password}
                                onChange={e => onChange(e)}
                                required={true} />
                        </div>

                        <div className="form-group">
                            <input type="password"
                                className="form-control"
                                placeholder="Password2"
                                name='password2'
                                value={password2}
                                onChange={e => onChange(e)}
                                required={true} />
                        </div>

                        <button type="submit" className="btn btn-success btn-md btn-block">
                            Login
                    </button>

                        <p className="my-1">
                            Already have an account? <Link to="/login">Login in</Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

Register.propTypes = {
    register: PropTypes.func.isRequired,
    setAlert: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { register, setAlert })(Register);