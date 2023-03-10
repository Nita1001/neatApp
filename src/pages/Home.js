import React from 'react'
import { Helmet } from 'react-helmet'
import calendarImg from '../assets/images/Capture222.PNG'
const Home = () => {
    return (
        <>
            <Helmet>
                <title>NeatApp | Home</title>
            </Helmet>
            <div className='home'>
                <div className='grid-2'>
                    <div className='homeCard homeCard0'>
                        <h1>The secret of making progress</h1>
                        <h1> Is to get started</h1>
                    </div>
                    <div className='homeCard homeCard1'>
                        <img src={calendarImg} alt='cal'></img>
                    </div>
                    <div className='homeCard homeCard2'>
                        <button>Sign Up for free</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home