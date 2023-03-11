import { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { isEmailValid } from '../utils/validateEmail'
import { LOGIN_ERROR_MESSAGE, API_ERROR_MESSAGE } from '../utils/constants'

import { LogInContext } from '../contexts/LogInContext';
import { logInUser, updateUser } from '../api/userServices'

import { isPhoneValid } from '../utils/validatePhone'
import { createUser } from '../api/userServices'

const useInput = () => {
    const navigate = useNavigate();
    const { logIn } = useContext(LogInContext);

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [phoneError, setPhoneError] = useState('');
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');
    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [loginError, setLoginError] = useState('');
    const [isValid, setIsValid] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    useEffect(() => {
        setIsValid(isEmailValid(email) && isPhoneValid(phone));
    }, [email, phone, isSubmitted]);

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
                localStorage.setItem('name', user.name);
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

    const handleSignUp = async (e) => {
        e.preventDefault();
        setIsSubmitted(true);
        if (!isValid) {
            return;
        }
        try {
            await createUser({
                name,
                phone,
                email,
                password,
                schedules: [],
                badges: [{ icon: 'rocket', title: 'first lunch' }],
                isLoggedIn: false,
            });
            navigate('/logIn');
        } catch (error) {
            console.error(error);
        }
    };
    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handlePhoneChange = (e) => {
        setPhone(e.target.value);
        if (e.target.value) {
            setPhoneError(isPhoneValid(e.target.value) ? '' : 'Invalid phone');
        } else {
            setPhoneError('');
        }
    };

    return {
        isSubmitted,
        name,
        phone,
        phoneError,
        email,
        emailError,
        password,
        passwordError,
        handleLogIn,
        handleSignUp,
        handleNameChange,
        handlePhoneChange,
        handleEmailChange,
        handlePasswordChange,
    }
}

export default useInput