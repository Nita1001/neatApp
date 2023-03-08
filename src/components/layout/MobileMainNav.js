import React, { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { LogInContext } from '../../contexts/LogInContext';
import useLogOut from '../../hooks/useLogOut';

const MobileMainNav = () => {

    const { isLoggedIn } = useContext(LogInContext);
    const { handleLogout } = useLogOut();
    const [menuClicked, setMenuClicked] = useState(false);

    const handleMenuWrapClick = (event) => {
        console.log('clicked');
        if (!event.target.classList.contains("toggle")) {
            console.log('toggled');
            setMenuClicked(!menuClicked);
        }
    };

    return (
        <>
            <div className="menu-wrap" onClick={(event) => handleMenuWrapClick(event)}>
                <input type="checkbox" className='toggle' checked={menuClicked} />
                <div className="burger">
                    <div></div>
                </div>
                <div className="menu">
                    <div>
                        <div>
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
                                                to="/profile"
                                                className={({ isActive }) => (isActive ? 'link active' : 'link')}
                                            >
                                                Profile
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
                    </div>
                </div>
            </div>
        </>
    )
}

export default MobileMainNav