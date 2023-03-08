import React from 'react';
import useMySchedule from '../hooks/useMySchedule';

const ScheduledMeetings = () => {
    const { handleMySchedule } = useMySchedule();

    return (
        <div className='myScheduledMeetings'>
            <br />
            <button
                className='getScheduled'
                onClick={handleMySchedule}
            > My Schedule
            </button>
        </div>
    );
};


export default ScheduledMeetings;