import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { isEmailValid } from '../utils/validateEmail'
import { isPhoneValid } from '../utils/validatePhone'
import { createUser } from '../api/userServices'


const SignUpForm = () => {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [phoneError, setPhoneError] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isValid, setIsValid] = useState(false);

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
            const response = await createUser({
                name,
                phone,
                email,
                password,
                schedules: [],
                isLoggedIn: false,
            });
            console.log(response.data);
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

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        if (e.target.value) {
            setEmailError(isEmailValid(e.target.value) ? '' : 'Invalid email');
        } else {
            setEmailError('');
        }
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
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