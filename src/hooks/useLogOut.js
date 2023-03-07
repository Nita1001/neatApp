import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTaskGlobalContext } from '../contexts/TasksContext';
import { LogInContext } from '../contexts/LogInContext';

const useLogOut = () => {
    const { logOut } = useContext(LogInContext);
    const { setShowScheduled } = useTaskGlobalContext();
    const navigate = useNavigate();

    const handleLogout = () => {
        logOut();
        setShowScheduled(false);
        navigate('/logIn');
    };

    return {
        handleLogout,
    }
}

export default useLogOut