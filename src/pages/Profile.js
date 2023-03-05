import React from 'react'
import MeetingScheduler from '../components/MeetingScheduler'
import MeetingsList from '../components/MeetingsList'

const Profile = () => {
    const timeSlots = ['09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00'];

    return (
        <div>Profile
            <h5>Manage Your Account</h5>
            <MeetingScheduler />
            <MeetingsList timeSlots={timeSlots} />
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

    )
}

export default Profile