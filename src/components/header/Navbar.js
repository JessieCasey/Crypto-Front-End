import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import './assets/css/navbar.css'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faUser} from '@fortawesome/fontawesome-free-solid'
import AuthService from "../../services/auth.service";
import EventBus from "../../common/EventBus";

const Navbar = () => {
    const [showModeratorBoard, setShowModeratorBoard] = useState(false);
    const [showAdminBoard, setShowAdminBoard] = useState(false);
    const [currentUser, setCurrentUser] = useState(undefined);

    useEffect(() => {
        const user = AuthService.getCurrentUser();

        if (user) {
            setCurrentUser(user);
            setShowModeratorBoard(user.roles.includes("ROLE_MODERATOR"));
            setShowAdminBoard(user.roles.includes("ROLE_ADMIN"));
        }

        EventBus.on("logout", () => {
            logOut();
        });

        return () => {
            EventBus.remove("logout");
        };
    }, []);

    const logOut = () => {
        AuthService.logout();
        setShowModeratorBoard(false);
        setShowAdminBoard(false);
        setCurrentUser(undefined);
    };
    return (
        <nav className={'navigation'}>
            <div><Link to='/' className={"crypto-logo"}>&Crypto</Link></div>

            {currentUser ? (
                <ul className="nav-links">
                    <div className="menu">
                        {/* Under development */}
                        {/*{showAdminBoard && (*/}
                        {/*    <li className="nav-item">*/}
                        {/*        <Link to={"/admin"} className="nav-link">*/}
                        {/*            Admin Board*/}
                        {/*        </Link>*/}
                        {/*    </li>*/}
                        {/*)}*/}
                        {/*{showModeratorBoard && (*/}
                        {/*    <li className="nav-item">*/}
                        {/*        <Link to={"/mod"} className={'hover-effect'}>*/}
                        {/*            Moderator Board*/}
                        {/*        </Link>*/}
                        {/*    </li>*/}
                        {/*)}*/}
                        <li><Link className={'hover-effect'} to='/'>Home</Link></li>
                        <li className="services" style={{zIndex: '100'}}>
                            <Link to='/profile'>{currentUser.username}</Link>
                            <ul className="dropdown">
                                <li className="nav-item"><Link className={'hover-effect'} to='/profile'>Profile</Link>
                                </li>
                                <li className="nav-item"><Link className={'hover-effect'} to='/settings'>Settings</Link>
                                </li>
                                <li className="nav-item"><Link onClick={logOut} to='/login'
                                                               style={{color: 'red'}}>LogOut</Link></li>
                            </ul>
                        </li>
                    </div>
                </ul>
            ) : (
                <ul className="nav-links">
                    <div className="menu">
                        <li><Link className={'hover-effect'} to='/'>Home</Link></li>
                        <li><Link className={'hover-effect'} to='/register'>Register</Link></li>
                        <li><Link className={'hover-effect'} to={"/login"}>Login</Link></li>
                    </div>
                </ul>
            )}
        </nav>
    );
}


export default Navbar;