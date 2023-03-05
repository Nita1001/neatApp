import React from 'react'
import MeetingScheduler from '../components/MeetingScheduler'
import MeetingsList from '../components/MeetingsList'
import { Helmet } from 'react-helmet'
const Schedule = () => {

    return (
        <>
            <Helmet>
                <title>NeatApp | Schedule</title>
            </Helmet>
            <div>Schedule
                <h5>Manage Your Account</h5>
                <MeetingScheduler />
                <MeetingsList />
                <div className='grid-3'>

                    <div className='card'>
                        Some field
                    </div>
                    <div className='card1'>
                        Some field
                    </div>
                    <div className='card2'>
                        Some field
                    </div>
                </div>

            </div>

        </>
    )
}

export default Schedule