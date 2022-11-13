import React, {Component} from "react";
import {Link, Navigate} from "react-router-dom";
import {connect} from "react-redux";

class Navbar extends Component {

    render() {
        const {user: currentUser} = this.props;


        const logout = () => {
            this.props.dispatch(logout());
            this.setState({
                showModeratorBoard: false,
                showAdminBoard: false,
                currentUser: undefined,
            });
            return <Navigate to="/signup"/>
        }

        return (
            <div>
                {
                    currentUser ?
                        <ul>
                            <li className="nav-item"><Link to='/'>&Crypto</Link></li>
                            <li className="nav-item"><Link to='/landing'>Land</Link></li>
                            <li className="nav-item"><Link to='/profile'>Profile</Link></li>
                            <li className="nav-item"><Link onClick={logout} to='/register'>LogOut</Link></li>
                        </ul>
                        :
                        <ul>
                            <li className="nav-item"><Link to='/register'>Register</Link></li>
                            <li className="nav-item"><Link to={"/login"} className="nav-link">Login</Link></li>
                        </ul>
                }
            </div>);
    }

}

function mapStateToProps(state) {
    const {user} = state.auth;
    return {
        user,
    };
}

export default connect(mapStateToProps)(Navbar);