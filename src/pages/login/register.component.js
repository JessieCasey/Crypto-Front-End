import React, {Component} from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import {isEmail} from "validator";

import {connect} from "react-redux";
import {register} from "../../actions/auth";
import {Link} from "react-router-dom";

const required = (value) => {
    if (!value) {
        return (
            <div className="alert alert-danger" role="alert">
                This field is required!
            </div>
        );
    }
};

const email = (value) => {
    if (!isEmail(value)) {
        return (
            <div className="alert alert-danger" role="alert">
                This is not a valid email.
            </div>
        );
    }
};

const vusername = (value) => {
    if (value.length < 3 || value.length > 20) {
        return (
            <div className="alert alert-danger" role="alert">
                The username must be between 3 and 20 characters.
            </div>
        );
    }
};

const vpassword = (value) => {
    if (value.length < 6 || value.length > 40) {
        return (
            <div className="alert alert-danger" role="alert">
                The password must be between 6 and 40 characters.
            </div>
        );
    }
};

class Register extends Component {
    constructor(props) {
        super(props);
        this.handleRegister = this.handleRegister.bind(this);
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);

        this.state = {
            username: "",
            email: "",
            password: "",
            successful: false,
        };
    }

    onChangeUsername(e) {
        this.setState({
            username: e.target.value,
        });
    }

    onChangeEmail(e) {
        this.setState({
            email: e.target.value,
        });
    }

    onChangePassword(e) {
        this.setState({
            password: e.target.value,
        });
    }

    handleRegister(e) {
        e.preventDefault();

        this.setState({
            successful: false,
        });

        this.form.validateAll();

        if (this.checkBtn.context._errors.length === 0) {
            this.props
                .dispatch(
                    register(this.state.username, this.state.email, this.state.password)
                )
                .then(() => {
                    this.setState({
                        successful: true,
                    });
                })
                .catch(() => {
                    this.setState({
                        successful: false,
                    });
                });
        }
    }

    render() {
        const {message} = this.props;

        return (
            <div className="col-md-12">
                <div className="login-section card card-container">
                    <div className={"card-title"}>
                        <h3>Welcome</h3>
                        <h1 className="boxed">A</h1>
                    </div>

                    <Form
                        onSubmit={this.handleRegister}
                        ref={(c) => {
                            this.form = c;
                        }}
                    >
                        {!this.state.successful && (
                            <div>
                                <div className="group">
                                    <input
                                        type="text"
                                        className="auth-input"
                                        name="username"
                                        value={this.state.username}
                                        onChange={this.onChangeUsername}
                                        required
                                    />
                                    <span className="highlight"></span>
                                    <span className="bar"></span>
                                    <label htmlFor="username">Username</label>
                                </div>

                                <div className="group">
                                    <input
                                        type="text"
                                        className="auth-input"
                                        name="email"
                                        value={this.state.email}
                                        onChange={this.onChangeEmail}
                                        required
                                    />
                                    <span className="highlight"></span>
                                    <span className="bar"></span>
                                    <label htmlFor="email">Email</label>
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
                                    <button className={"btn-hover color"}>
                                        <span>Sign Up</span>
                                    </button>
                                </div>
                            </div>
                        )}

                        {message && (
                            <div className="form-group">
                                <div className={this.state.successful ? "alert alert-success" : "alert alert-danger"}
                                     role="alert">
                                    {message}
                                </div>
                            </div>
                        )}
                        <CheckButton
                            style={{display: "none"}}
                            ref={(c) => {
                                this.checkBtn = c;
                            }}
                        />
                    </Form>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const {message} = state.message;
    return {
        message,
    };
}

export default connect(mapStateToProps)(Register);