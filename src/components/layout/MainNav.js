import React, { useContext } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { LogInContext } from '../../contexts/LogInContext';

const MainNav = () => {
    const { isLoggedIn, logOut } = useContext(LogInContext);

    const handleLogout = () => {
        logOut();
    };

    return (
        <nav className="navbar bg-dark">
            <div className="container">
                <h1 className="logo">
                    <i className="fa-solid fa-dragon" />
                    <Link to="/">NeatApp</Link>
                </h1>
                <ul>
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive }) => (isActive ? 'link active' : 'link')}
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/about"
                            className={({ isActive }) => (isActive ? 'link active' : 'link')}
                        >
                            About
                        </NavLink>
                        {isLoggedIn ? (
                            <>
                                {/* <NavLink
                  to='/profile'
                  className={({ isActive }) => (isActive ? 'link active' : 'link')}
                >
                  Profile
                </NavLink> */}
                                <button onClick={handleLogout}>Log Out</button>
                            </>
                        ) : (
                            <>
                                <NavLink
                                    to="/signUp"
                                    className={({ isActive }) => (isActive ? 'link active' : 'link')}
                                >
                                    Sign Up
                                </NavLink>
                                <NavLink
                                    to="/logIn"
                                    className={({ isActive }) => (isActive ? 'link active' : 'link')}
                                >
                                    Log In
                                </NavLink>
                            </>
                        )}
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default MainNav;