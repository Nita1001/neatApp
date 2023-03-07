import { Link } from 'react-router-dom';
import useInput from '../hooks/useInput';
const SignUpForm = () => {

    const {
        isSubmitted,
        name,
        phone,
        phoneError,
        email,
        emailError,
        password,
        handleSignUp,
        handleNameChange,
        handlePhoneChange,
        handleEmailChange,
        handlePasswordChange,
    } = useInput();

    return (
        <div className="signUpForm centeredContainer">
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