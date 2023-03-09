import React, { useContext } from 'react';
import { NavLink, Link } from 'react-router-dom';
import useLogOut from '../../hooks/useLogOut';
import { LogInContext } from '../../contexts/LogInContext';

const MainNav = () => {
    const { isLoggedIn, isAdmin } = useContext(LogInContext);
    const { handleLogout } = useLogOut();
    return (
        <nav className="navbar bg-dark">
            <div className="navContainer container">
                <h1 className="logo">
                    <i className="fa-solid fa-dragon" />
                    <Link to="/">NeatApp</Link>
                </h1>
                <ul>
                    <li>
                        <NavLink to="/" className={({ isActive }) => (isActive ? 'link active' : 'link')}>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" className={({ isActive }) => (isActive ? 'link active' : 'link')}>
                            About
                        </NavLink>
                    </li>
                    {isLoggedIn ? (
                        <>
                            <li>
                                <NavLink
                                    to={
                                        isAdmin ? 'Admin' :
                                            "/profile"
                                    }

                                    className={({ isActive }) => (isActive ? 'link active' : 'link')}
                                >
                                    {isAdmin ? 'Admin' : 'Profile'}
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/schedule"
                                    className={({ isActive }) => (isActive ? 'link active' : 'link')}
                                >
                                    Schedule
                                </NavLink>
                            </li>
                            <button className="btnLogOut" onClick={handleLogout}>
                                Log Out
                            </button>
                        </>
                    ) : (
                        <>
                            <li>
                                <NavLink
                                    to="/signUp"
                                    className={({ isActive }) => (isActive ? 'link active' : 'link')}
                                >
                                    Sign Up
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/logIn"
                                    className={({ isActive }) => (isActive ? 'link active' : 'link')}
                                >
                                    Log In
                                </NavLink>
                            </li>
                        </>
                    )}
                </ul>
            </div>
        </nav >
    );
};

export default MainNav;