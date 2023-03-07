import React from 'react';
import { useTaskGlobalContext } from '../contexts/TasksContext';

const ScheduledMeetings = () => {
    const { setShowScheduled, showScheduled, getTasks } = useTaskGlobalContext();

    const handleClick = () => {
        setShowScheduled(!showScheduled);
        getTasks();
    }

    return (
        <div>
            <br />
            <button
                className='getScheduled'
                onClick={handleClick}
            >My Schedule
            </button>
        </div>
    );
};


export default ScheduledMeetings;