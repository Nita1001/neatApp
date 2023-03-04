import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

import { isEmailValid } from '../utils/validateEmail'
import { isPhoneValid } from '../utils/validatePhone'

const LogInForm = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [loginError, setLoginError] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogIn = async (e) => {
        e.preventDefault();
        if (!email) {
            setEmailError('Please enter email.');
            return;
        }
        if (!password) {
            setPasswordError('Please enter password.');
            return;
        }
        try {
            const response = await axios.get('https://64022104ab6b7399d0b48fee.mockapi.io/users');
            const user = response.data.find((user) => user.email === email && user.password === password);
            if (user) {
                console.log(user);
                setIsLoggedIn(true);
                user.isLoggedIn = true; // Update isLoggedIn field
                localStorage.setItem('userToken', user.id);
                await axios.put(`https://64022104ab6b7399d0b48fee.mockapi.io/users/${user.id}`, user);
                navigate(user.email === 'admin@mail.com' ? '/admin' : '/');
            } else {
                setLoginError('Incorrect email or password. Please try again.');
            }
        } catch (error) {
            console.error(error);
            setLoginError('An error occurred. Please try again later.');
        }
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        if (e.target.value) {
            setEmailError(isEmailValid(e.target.value) ? '' : 'Invalid email');
        } else {
            setEmailError('');
        }
        setLoginError('');
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
        setLoginError('');
    };


    return (
        <div className="container">
            <form className='form'>

                <input type="email" placeholder="Email" value={email} onChange={handleEmailChange} />
                <input type="password" placeholder="Password" value={password} onChange={handlePasswordChange} />
                {loginError && <div className="error">{loginError}</div>}
                <button onClick={handleLogIn}>Log In</button>
                <Link className='signLogUp' to='/signUp'>New to nitApp?</Link>

            </form>
        </div>
    )
}

export default LogInForm