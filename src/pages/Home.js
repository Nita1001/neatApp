import React from 'react'
import { Helmet } from 'react-helmet'
import calendarImg from '../assets/images/Capture222.PNG'
import { Link } from 'react-router-dom'
const Home = () => {

    return (
        <>
            <Helmet>
                <title>NeatApp | Home</title>
            </Helmet>
            <div className='home'>
                <div className='grid-2'>
                    <div className='homeCard homeCard0'>
                        <div className='headers'>
                            <h1>The secret of making progress</h1>
                            <h1>Is getting started</h1>
                            <button ><Link to='/signUp'>Sign Up for free</Link></button>
                        </div>
                    </div>
                    <div className='homeCard homeCard1'>
                        <img src={calendarImg} alt='cal'></img>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home