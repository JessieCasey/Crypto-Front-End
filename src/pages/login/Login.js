import React, {useState, useRef} from "react";
import Form from "react-validation/build/form";
import CheckButton from "react-validation/build/button";
import {Link, useNavigate} from "react-router-dom";
import AuthService from "../../services/auth.service";
import './assets/css/login.css'

const Login = (props) => {
    let navigate = useNavigate();
    const form = useRef();
    const checkBtn = useRef();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");

    const onChangeUsername = (e) => {
        const username = e.target.value;
        setUsername(username);
    };

    const onChangePassword = (e) => {
        const password = e.target.value;
        setPassword(password);
    };

    const handleLogin = (e) => {
        e.preventDefault();

        setMessage("");
        setLoading(true);

        form.current.validateAll();

        if (checkBtn.current.context._errors.length === 0) {
            AuthService.login(username, password).then(
                () => {
                    navigate("/profile");
                    // props.history.push("/profile");
                    window.location.reload();
                },
                (error) => {
                    const resMessage =
                        (error.response &&
                            error.response.data &&
                            error.response.data.message) ||
                        error.message ||
                        error.toString();

                    setLoading(false);
                    setMessage(resMessage);
                }
            );
        } else {
            setLoading(false);
        }
    };

    return (
        <div className="col-md-12">
            <div className="login-section card card-container">
                <div className={"card-title"}>
                    <h3>Welcome</h3>
                    <h1 className="boxed">A</h1>
                </div>

                <Form onSubmit={handleLogin} ref={form}>
                    <div className="group">
                        <input type="text"
                               className="auth-input"
                               name="username"
                               value={username}
                               onChange={onChangeUsername}
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
                            {loading && (<span className=""></span>)}
                            <span>Login</span>
                        </button>

                        <Link className="link-signup" to="/register">Don't have an account? Sign Up</Link>
                    </div>

                    {message && (
                        <div className="form-group">
                            <div className="alert alert-danger" role="alert">
                                {message}
                            </div>
                        </div>
                    )}

                    <CheckButton style={{ display: "none" }} ref={checkBtn} />
                </Form>
            </div>
        </div>
    );
};

export default Login;