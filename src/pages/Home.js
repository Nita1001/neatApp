import React from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import HexagonsGenerator from '../components/HexagonsGenerator'
import calendarImg from '../assets/images/Capture222.PNG'

const badges = [
    { icon: 'crown', title: '' },
    { icon: 'rocket', title: '' },
    { icon: 'fire', title: '' },
    { icon: 'star', title: '' },
    { icon: 'target', title: '' },
    { icon: 'calendar', title: '' }
]


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
                    <div className='homeCard homeCard2'>
                        <div className='homeCardBadges'>
                            <HexagonsGenerator badges={badges}></HexagonsGenerator>
                        </div>
                        <p><strong>Unlock Achievement Badges</strong> by completing tasks & tracking your Progress</p>
                        <p>All while reaching your personal goals.</p>
                        <p><strong>Stay on track</strong> and Celebrate Your accomplishments</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home