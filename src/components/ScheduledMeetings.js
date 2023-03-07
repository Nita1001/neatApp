import React, { useContext } from 'react';
import { useTaskGlobalContext } from '../contexts/TasksContext';
import { LogInContext } from '../contexts/LogInContext';
const ScheduledMeetings = () => {
    const { showScheduled, setShowScheduled, getTasks } = useTaskGlobalContext();
    const { usersId } = useContext(LogInContext);

    const handleClick = async () => {
        await getTasks(usersId);
        // Because it was showing for half a second the scheduled meetings of previous user
        // Ive decided to put async await here. might change later, should ask ori about it. 
        setShowScheduled(!showScheduled);
    }

    return (
        <div className='myScheduledMeetings'>
            <br />
            <button
                className='getScheduled'
                onClick={handleClick}
            > My Schedule
            </button>
        </div>
    );
};


export default ScheduledMeetings;