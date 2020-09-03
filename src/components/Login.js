import React from 'react';
import { connect } from 'react-redux';
import { login } from '../services/authenciation';
import { addUser } from '../actions/user';

class Login extends React.Component {
    state = {
        username: '',
        password: '',
        error: undefined
    };

    cardStyle = {
        width: "30vw",
        margin: "1rem auto",
        minWidth: "24rem"
    };

    componentDidMount() {
        //Check User is logged
        // if logged then redirect home
        //else render component
        const user = this.props.user;

        if (user.id !== '') {
            this.props.history.push('/');
        }
    }

    isEmptyObject = (obj) => {
        for (let x in obj) { return false }
        return true;
    }

    onSubmit = async (e) => {
        try {
            e.preventDefault();

            const data = {
                username: this.state.username,
                password: this.state.password
            }

            const result = await login(data);
            const user = result.data;


            if (!this.isEmptyObject(user)) {
                this.props.dispatch(addUser(user));
                localStorage.setItem("user", JSON.stringify(user));
                this.props.history.push('/');
            }

            // this.setState(() => ({
            //     username: '',
            //     password: ''
            // }));
        }
        catch (e) {
            this.handleErrorLogin(e);
        }

    }

    handleErrorLogin = (e) => {
        this.setState(() => ({ error: "Unable sign in, please try a again."}))
        console.log(e);
    }

    onChangeUserName = (e) => {
        const username = e.target.value;
        this.setState(() => ({ username }));
    }

    onChangePassword = (e) => {
        const password = e.target.value;
        this.setState(() => ({ password }));
    }

    render() {
        return (
            <div className="container">
                <div className="card"
                    style={this.cardStyle}>
                    <div className="card-header">
                        Please sign in
                        </div>

                    <div className="card-body">
                        <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <input type="text"
                                    className="form-control"
                                    placeholder="User Name"
                                    value={this.state.username}
                                    onChange={this.onChangeUserName}
                                    required={true} />
                            </div>

                            <div className="form-group">
                                <input type="password"
                                    className="form-control"
                                    placeholder="Password"
                                    value={this.state.password}
                                    onChange={this.onChangePassword}
                                    required={true} />
                            </div>

                            <button type="submit" className="btn btn-success btn-md btn-block">
                                Login
                            </button>
                        </form>

                        <div className="form-group">
                            {this.state.error && <p className="text-danger">{this.state.error}</p>}
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = ((state) => {
    return {
        user: state.user
    }
});

export default connect(mapStateToProps)(Login);