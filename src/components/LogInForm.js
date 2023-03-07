import { Link } from 'react-router-dom';
import useInput from '../hooks/useInput';

const LogInForm = () => {

    const {
        email,
        emailError,
        password,
        passwordError,
        handleLogIn,
        handleEmailChange,
        handlePasswordChange,
    } = useInput();

    return (
        <div className="logInForm centeredContainer">
            <form className='form'>
                <input type="email" placeholder="Email" value={email} onChange={handleEmailChange} />
                {emailError && <div className="error">{emailError}</div>}
                <input type="password" placeholder="Password" value={password} onChange={handlePasswordChange} />
                {passwordError && <div className="error">{passwordError}</div>}
                <button onClick={handleLogIn}>Log In</button>
                <Link className='signLogUp' to='/signUp'>New to neatApp?</Link>
            </form>
        </div>
    )
}

export default LogInForm;