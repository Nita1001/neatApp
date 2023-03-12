import { useContext, useEffect } from 'react';
import { useTaskGlobalContext } from '../contexts/TasksContext';
import { LogInContext } from '../contexts/LogInContext';
import useGiveBadges from './useGiveBadges'

const useMySchedule = () => {
    const { showScheduled, setShowScheduled, getTasks } = useTaskGlobalContext();
    const { usersId } = useContext(LogInContext);
    const { setCompletedTasksBadge } = useGiveBadges();

    const handleMySchedule = async () => {
        await getTasks(usersId);
        setShowScheduled(!showScheduled);
    }

    useEffect(() => {
        const setBadge = async () => {
            await setCompletedTasksBadge();
        };
        setBadge();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return {
        handleMySchedule
    }
}

export default useMySchedule