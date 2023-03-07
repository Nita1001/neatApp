import React, { useContext } from 'react';
import { useTaskGlobalContext } from '../contexts/TasksContext';
import { LogInContext } from '../contexts/LogInContext';
const ScheduledMeetings = () => {
    const { showScheduled, setShowScheduled, getTasks } = useTaskGlobalContext();
    const { usersId } = useContext(LogInContext);

    const handleClick = () => {
        setShowScheduled(!showScheduled);
        getTasks(usersId);
    }

    return (
        <div>
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