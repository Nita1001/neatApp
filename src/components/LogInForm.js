import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

import { isEmailValid } from '../utils/validateEmail'
import { USERS_URL, LOGIN_ERROR_MESSAGE, API_ERROR_MESSAGE } from '../utils/constants'

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
            const response = await axios.get(USERS_URL);
            const user = response.data.find((user) => user.email === email && user.password === password);
            if (user) {
                console.log(user);
                setIsLoggedIn(true);
                user.isLoggedIn = true;
                localStorage.setItem('userToken', user.id);
                await axios.put(`https://64022104ab6b7399d0b48fee.mockapi.io/users/${user.id}`, user);
                navigate(user.email === 'admin@mail.com' ? '/admin' : '/');
            } else {

                setLoginError(LOGIN_ERROR_MESSAGE);
            }
        } catch (error) {
            console.error(error);
            setLoginError(API_ERROR_MESSAGE);
        }
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        setEmailError('');
        setLoginError('');
        // Wait before checking validity
        setTimeout(() => {
            if (e.target.value) {
                setEmailError(isEmailValid(e.target.value) ? '' : 'Invalid email');
            }
        }, 2500);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
        setLoginError('');
    };

    return (
        <div className="container">
            <form className='form'>

                <input type="email" placeholder="Email" value={email} onChange={handleEmailChange} />
                {emailError && <div className="error">{emailError}</div>}
                <input type="password" placeholder="Password" value={password} onChange={handlePasswordChange} />
                {passwordError && <div className="error">{passwordError}</div>}
                <button onClick={handleLogIn}>Log In</button>
                <Link className='signLogUp' to='/signUp'>New to nitApp?</Link>

            </form>
        </div>
    )
}

export default LogInForm