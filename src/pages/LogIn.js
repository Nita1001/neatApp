import React from 'react'
import LogInForm from '../components/LogInForm'
import { Helmet } from 'react-helmet'
const LogIn = () => {
    return (
        <>
            <Helmet>
                <title>NeatApp | Log In</title>
            </Helmet>
            <LogInForm />
        </>
    )
}

export default LogIn