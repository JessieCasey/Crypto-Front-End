import React, {Component} from "react";
import {Link, Navigate} from "react-router-dom";
import {connect} from "react-redux";
import './assets/css/navbar.css'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faUser} from '@fortawesome/fontawesome-free-solid'

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
            <nav className={'navigation'}>
                <div><Link to='/landing' className={"crypto-logo"}>&Crypto</Link></div>

                {
                    currentUser ?
                        <ul className="nav-links">
                            <div className="menu">
                                <li><Link className={'hover-effect'} to='/'>Home</Link></li>
                                <li className="services">
                                    <Link to='/profile'>Profile</Link>
                                    <ul className="dropdown">
                                        <li className="nav-item"><Link className={'hover-effect'} to='/profile'>Profile</Link></li>
                                        <li className="nav-item"><Link className={'hover-effect'} to='/settings'>Settings</Link></li>
                                        <li className="nav-item"><Link onClick={logout} to='/login' style={{color: 'red'}}>LogOut</Link></li>
                                    </ul>
                                </li>
                            </div>

                        </ul>
                        :
                        <ul className="nav-links">
                            <div className="menu">
                                <li><Link className={'hover-effect'} to='/'>Home</Link></li>
                                <li><Link className={'hover-effect'} to='/register'>Register</Link></li>
                                <li><Link className={'hover-effect'} to={"/login"}>Login</Link></li>
                            </div>
                        </ul>
                }

                {/*<FontAwesomeIcon icon={faUser} style={{fontSize: '24px'}}/>*/}

            </nav>);
    }

}

function mapStateToProps(state) {
    const {user} = state.auth;
    return {
        user,
    };
}

export default connect(mapStateToProps)(Navbar);