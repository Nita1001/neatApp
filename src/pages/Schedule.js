import React from 'react'
import { Helmet } from 'react-helmet'
import MeetingScheduler from '../components/MeetingScheduler'
import MeetingHoursList from '../components/MeetingHoursList'
import ScheduledMeetings from '../components/ScheduledMeetings';
import Tasks from '../components/Tasks';

const Schedule = () => {

    return (
        <>
            <Helmet>
                <title>NeatApp | Schedule</title>
            </Helmet>
            <div className='schedule calendarsGridContainer'>
                <div className='grid-3'>
                    <div className='card'>
                        <MeetingHoursList />
                    </div>
                    <div className='card1'>
                        <h5>Meetings Calendar</h5>
                        <MeetingScheduler />
                    </div>
                    <div className='card2'>
                        <div>
                            <ScheduledMeetings />
                        </div>
                        <Tasks />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Schedule