import React from 'react';
import { useTaskGlobalContext } from '../contexts/TasksContext';

const ScheduledMeetings = () => {
    const { getTasks } = useTaskGlobalContext();

    return (
        <div>
            <br />
            <button
                className='getScheduled'
                onClick={getTasks}
            >My Schedule
            </button>

        </div>
    );
};


export default ScheduledMeetings;