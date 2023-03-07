import React from 'react'
import { Helmet } from 'react-helmet'
const Home = () => {
    return (
        <>
            <Helmet>
                <title>NeatApp | Home</title>
            </Helmet>
            <div className='Home'>
                Home Page
            </div>
            <div className='grid-2'>

                <div className='card'>
                    Some field
                </div>
                <div className='card'>
                    Some field
                </div>
                <div className='card'>
                    Some field
                </div>
                <div className='card'>
                    Some field
                </div>
            </div>
        </>
    )
}

export default Home