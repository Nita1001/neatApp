import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

import { isEmailValid } from '../utils/validateEmail'
import { isPhoneValid } from '../utils/validatePhone'


const SignUpForm = () => {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [phoneError, setPhoneError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isValid, setIsValid] = useState(false);
    const [loginError, setLoginError] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        setIsValid(isEmailValid(email) && isPhoneValid(phone));
    }, [email, phone, isSubmitted]);

    const handleSignUp = async (e) => {
        e.preventDefault();

        setIsSubmitted(true);

        if (!isValid) {
            return;
        }

        try {
            const response = await axios.post('https://64022104ab6b7399d0b48fee.mockapi.io/users', {
                name,
                phone,
                email,
                password,
                isLoggedIn: false,
            });
            console.log(response.data);
            navigate('/about');
        } catch (error) {
            console.error(error);
        }
    };

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
                <input type="text" placeholder="Name" value={name} onChange={handleNameChange} />
                <input type="text" placeholder="Phone" value={phone} onChange={handlePhoneChange} />
                {isSubmitted && phoneError && <div className="error">{phoneError}</div>}
                <input type="email" placeholder="Email" value={email} onChange={handleEmailChange} />
                {isSubmitted && emailError && <div className="error">{emailError}</div>}
                <input type="password" placeholder="Password" value={password} onChange={handlePasswordChange} />
                <button onClick={handleSignUp}>Create account</button>
                <Link className='signLogUp' to='/logIn'>Already a member?</Link>

            </form>
        </div>
    );
};

export default SignUpForm;