import { useState, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { isEmailValid } from '../utils/validateEmail'
import { LOGIN_ERROR_MESSAGE, API_ERROR_MESSAGE } from '../utils/constants'

import { LogInContext } from '../contexts/LogInContext';
import { logInUser, updateUser } from '../api/userServices'

const LogInForm = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [loginError, setLoginError] = useState('');
    const { logIn } = useContext(LogInContext);

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
            const user = await logInUser(email, password);
            if (user) {
                logIn();
                console.log(user);
                localStorage.setItem('userToken', user.id);
                user.isLoggedIn = true;
                await updateUser(user);
                navigate(user.email === 'admin@mail.com' ? '/admin' : '/profile');
            } else {
                setLoginError(LOGIN_ERROR_MESSAGE);
                console.log(loginError);
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

export default LogInForm;