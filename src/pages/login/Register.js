import React, {useRef, useState} from "react";
import Form from "react-validation/build/form";
import CheckButton from "react-validation/build/button";
import {isEmail} from "validator";

import AuthService from "../../services/auth.service";

const required = (value) => {
    if (!value) {
        return (
            <div className="alert alert-danger" role="alert">
                This field is required!
            </div>
        );
    }
};

const validEmail = (value) => {
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

const Register = (props) => {
    const form = useRef();
    const checkBtn = useRef();

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [successful, setSuccessful] = useState(false);
    const [message, setMessage] = useState("");

    const onChangeUsername = (e) => {
        const username = e.target.value;
        setUsername(username);
    };

    const onChangeEmail = (e) => {
        const email = e.target.value;
        setEmail(email);
    };

    const onChangePassword = (e) => {
        const password = e.target.value;
        setPassword(password);
    };

    const handleRegister = (e) => {
        e.preventDefault();

        setMessage("");
        setSuccessful(false);

        form.current.validateAll();

        if (checkBtn.current.context._errors.length === 0) {
            AuthService.register(username, email, password).then(
                (response) => {
                    setMessage(response.data.message);
                    setSuccessful(true);
                },
                (error) => {
                    const resMessage =
                        (error.response &&
                            error.response.data &&
                            error.response.data.message) ||
                        error.message ||
                        error.toString();

                    setMessage(resMessage);
                    setSuccessful(false);
                }
            );
        }
    };

    return (
        <div className="col-md-12">
            <div className="login-section card card-container">
                <div className={"card-title"}>
                    <h3>Welcome</h3>
                    <h1 className="boxed">A</h1>
                </div>

                <Form onSubmit={handleRegister} ref={form}>
                    {!successful && (
                        <div>
                            <div className="group">
                                <input
                                    type="text"
                                    className="auth-input"
                                    name="username"
                                    value={username}
                                    onChange={onChangeUsername}
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
                                    name="username"
                                    value={email}
                                    onChange={onChangeEmail}
                                    required
                                />
                                <span className="highlight"></span>
                                <span className="bar"></span>
                                <label htmlFor="username">Email</label>
                            </div>

                            <div className="group">
                                <input
                                    type="password"
                                    className="auth-input"
                                    name="password"
                                    value={password}
                                    onChange={onChangePassword}
                                    required
                                />
                                <span className="highlight"></span>
                                <span className="bar"></span>
                                <label htmlFor="password">Password</label>
                            </div>


                            <div className="group">
                                <button className={"btn-hover color"}>
                                    <span>Sign Up</span>
                                </button>
                            </div>
                        </div>
                    )}

                    {message && (
                        <div className="form-group">
                            <div
                                className={
                                    successful ? "alert alert-success" : "alert alert-danger"
                                }
                                role="alert"
                            >
                                {message}
                            </div>
                        </div>
                    )}
                    <CheckButton style={{display: "none"}} ref={checkBtn}/>
                </Form>
            </div>
        </div>
    );
};

export default Register;