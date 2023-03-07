import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTaskGlobalContext } from '../contexts/TasksContext';
import { LogInContext } from '../contexts/LogInContext';
import useMeetingHoursList from './useMeetingHoursList';
const useLogOut = () => {
    const { logOut } = useContext(LogInContext);
    const { setShowScheduled } = useTaskGlobalContext();
    const navigate = useNavigate();
    const { setSelectedTime } = useMeetingHoursList();

    const handleLogout = () => {
        setShowScheduled(false);
        setSelectedTime(null);
        logOut();
        navigate('/logIn');
    };

    return {
        handleLogout,
    }
}

export default useLogOut