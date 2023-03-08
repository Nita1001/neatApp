import { useContext } from 'react';
import { useTaskGlobalContext } from '../contexts/TasksContext';
import { LogInContext } from '../contexts/LogInContext';


const useMySchedule = () => {
    const { showScheduled, setShowScheduled, getTasks } = useTaskGlobalContext();
    const { usersId } = useContext(LogInContext);

    const handleMySchedule = async () => {
        await getTasks(usersId);
        // Because it was showing for half a second
        // the scheduled meetings of previous user
        // Ive decided to put async await here.
        // might change later,
        // should ask Ori about it. 
        setShowScheduled(!showScheduled);
    }

    return {
        handleMySchedule
    }
}

export default useMySchedule