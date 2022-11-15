import React, {Component} from "react";
import {Link, Navigate} from 'react-router-dom';

import Form from "react-validation/build/form";
import CheckButton from "react-validation/build/button";

import {connect} from "react-redux";
import {login} from "../../actions/auth";
import './assets/css/login.css'

class Login extends Component {
    constructor(props) {
        super(props);
        this.handleLogin = this.handleLogin.bind(this);
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);

        this.state = {
            username: "",
            password: "",
            loading: false
        };
    }

    onChangeUsername(e) {
        this.setState({
            username: e.target.value,
        });
    }

    onChangePassword(e) {
        this.setState({
            password: e.target.value,
        });
    }

    handleLogin(e) {
        e.preventDefault();

        this.setState({
            loading: true,
        });

        this.form.validateAll();

        const {dispatch, history} = this.props;

        if (this.checkBtn.context._errors.length === 0) {
            dispatch(login(this.state.username, this.state.password))
                .then(() => {
                    history.push("/profile");
                    window.location.reload();
                })
                .catch(() => {
                    this.setState({
                        loading: false
                    });
                });
        } else {
            this.setState({
                loading: false,
            });
        }
    }

    render() {
        const {isLoggedIn, message} = this.props;

        if (isLoggedIn) {
            return <Navigate to="/profile"/>;
        }

        return (<div className="col-md-12">
            <div className="login-section card card-container">
                <div className={"card-title"}>
                    <h3>Welcome</h3>
                    <h1 className="boxed">A</h1>
                </div>

                <Form onSubmit={this.handleLogin} ref={(c) => {
                    this.form = c;
                }}>
                    <div className="group">
                        <input type="text"
                               className="auth-input"
                               name="username"
                               value={this.state.username}
                               onChange={this.onChangeUsername}
                               required/>
                        <span className="highlight"></span>
                        <span className="bar"></span>
                        <label htmlFor="username">Username</label>
                    </div>

                    <div className="group">
                        <input
                            type="password"
                            className="auth-input"
                            name="password"
                            value={this.state.password}
                            onChange={this.onChangePassword}
                            required
                        />
                        <span className="highlight"></span>
                        <span className="bar"></span>
                        <label htmlFor="password">Password</label>
                    </div>

                    <div className="form-group">
                        <button className={"btn-hover color"}
                                disabled={this.state.loading}>
                            {this.state.loading && (<span className=""></span>)}
                            <span>Login</span>
                        </button>

                        <Link className="link-signup" to="/register">Don't have an account? Sign Up</Link>
                    </div>

                    {message && (<div className="form-group">
                        <div className="alert alert-danger" role="alert">
                            <h3>{message}</h3>
                        </div>
                    </div>)}
                    <CheckButton
                        style={{display: "none"}}
                        ref={(c) => {this.checkBtn = c;}}
                    />
                </Form>
            </div>
        </div>);
    }
}

function mapStateToProps(state) {
    const {isLoggedIn} = state.auth;
    const {message} = state.message;
    return {
        isLoggedIn, message
    };
}

export default connect(mapStateToProps)(Login);