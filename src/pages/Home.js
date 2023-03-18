import React from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import HexagonsGenerator from '../components/HexagonsGenerator'
import Spinner from '../components/Spinner';
import { BADGES as badges } from '../utils/constants'
import './styles/Pages.style.css'
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

                    </div>
                    <div className='homeCard homeCard2'>
                        <div className='badgesHeaders'>
                            {!badges ? (
                                <Spinner />
                            ) : (
                                <HexagonsGenerator badges={badges} className="homeHomeCardBadges" />)
                            }
                            <p><strong>Unlock Achievement Badges</strong> by completing tasks & tracking your progress</p>
                            <p>All while reaching your personal goals.</p>
                            <p><strong>Stay on track</strong> and Celebrate Your accomplishments</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home