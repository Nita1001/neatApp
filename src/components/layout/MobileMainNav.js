import React, { useContext, useState, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { LogInContext } from '../../contexts/LogInContext';
import useLogOut from '../../hooks/useLogOut';

const MobileMainNav = () => {

    const { isLoggedIn } = useContext(LogInContext);
    const { handleLogout } = useLogOut();
    const [menuClicked, setMenuClicked] = useState(false);
    const inputRef = useRef(null);

    const handleMenuWrapClick = (event) => {
        const inputChecked = inputRef.current.checked;
        const labelForInputClicked = event.target.closest('label')?.htmlFor === inputRef.current.id;

        // If the input is checked and the click occurred outside of the menu or on the label for the input, close the menu
        if (inputChecked && (!event.target.closest('.menu-wrap') || labelForInputClicked)) {
            setMenuClicked(false);
            inputRef.current.checked = false;
        }
        // If the click occurred on the hamburger icon or inside the menu but outside the input label, toggle the menu state
        else if (event.target.closest('.burger') || (event.target.closest('.menu-wrap') && !labelForInputClicked)) {
            setMenuClicked(!menuClicked);
            inputRef.current.checked = !inputChecked;
        }
    };

    return (
        <>
            <div className="menu-wrap" onClick={(event) => handleMenuWrapClick(event)}>
                <input type="checkbox" className='toggle' ref={inputRef} checked={menuClicked} />
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