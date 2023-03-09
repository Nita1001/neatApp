import React from 'react'
import { Helmet } from 'react-helmet'
const Home = () => {
    return (
        <>
            <Helmet>
                <title>NeatApp | Home</title>
            </Helmet>
            <div className='home'>
                <div className='grid-2'>
                    <div className='homeCard'>
                        Some field
                    </div>
                    <div className='homeCard'>
                        Some field
                    </div>
                    <div className='homeCard'>
                        Some field
                    </div>
                    <div className='homeCard'>
                        Some field
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home