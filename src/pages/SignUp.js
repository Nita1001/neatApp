import React from 'react'
import SignUpForm from '../components/SignUpForm'
import { Helmet } from 'react-helmet'

const SignUp = () => {
    return (
        <>
            <Helmet>
                <title>NeatApp | Sign Up</title>
            </Helmet>
            <SignUpForm />
        </>
    )
}

export default SignUp