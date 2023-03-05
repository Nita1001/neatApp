import { useState, createContext, useEffect } from 'react';
import axios from 'axios';

const LogInContext = createContext({
    isLoggedIn: false,
    logIn: () => { },
    logOut: () => { },
});

const LogInProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(
        JSON.parse(localStorage.getItem('isLoggedIn')) || false
    );

    useEffect(() => {
        localStorage.setItem('isLoggedIn', JSON.stringify(isLoggedIn));
    }, [isLoggedIn]);

    const logIn = () => setIsLoggedIn(true);

    const logOut = async () => {
        try {
            const userToken = localStorage.getItem('userToken');
            const response = await axios.get(
                `https://64022104ab6b7399d0b48fee.mockapi.io/users/${userToken}`
            );
            const user = response.data;
            user.isLoggedIn = false;
            await axios.put(
                `https://64022104ab6b7399d0b48fee.mockapi.io/users/${user.id}`,
                user
            );
            setIsLoggedIn(false);
            localStorage.removeItem('userToken');
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <LogInContext.Provider value={{ isLoggedIn, logIn, logOut }}>
            {children}
        </LogInContext.Provider>
    );
};

export { LogInContext, LogInProvider };