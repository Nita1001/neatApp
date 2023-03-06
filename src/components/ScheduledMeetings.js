import React from 'react';
import Tasks from './Tasks';
import { useTaskGlobalContext } from '../contexts/TasksContext';

const ScheduledMeetings = () => {
    const { getTasks } = useTaskGlobalContext();

    return (
        <div>
            <br />
            <button onClick={getTasks}>Get</button>
            <Tasks />
        </div>
    );
};


export default ScheduledMeetings;