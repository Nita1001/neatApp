import React from 'react'
import { NavLink, Link } from 'react-router-dom';

const MainNav = () => {
    return (
        <nav className="navbar bg-dark">
            <div className="container">
                <h1 className='logo'>
                    <i className='fa-solid fa-dragon' />
                    <Link to="/">NeatApp</Link>
                </h1>
                <ul>
                    <li>
                        <NavLink
                            to='/'
                            className={
                                ({ isActive }) => (isActive ? 'link active' : 'link')
                            }
                        > Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to='/about'
                            className={
                                ({ isActive }) => (isActive ? 'link active' : 'link')
                            }
                        > About
                        </NavLink>

                        <NavLink
                            to='/signUp'
                            className={({ isActive }) => (isActive ? 'link active' : 'link')}
                        >
                            Sign Up
                        </NavLink>
                        <NavLink
                            to='/logIn'
                            className={({ isActive }) => (isActive ? 'link active' : 'link')}
                        >
                            Log In
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default MainNav