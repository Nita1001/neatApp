import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTaskGlobalContext } from '../contexts/TasksContext';
import { LogInContext } from '../contexts/LogInContext';
import { SelectedDateContext } from '../contexts/SelectedDateContext';
const useLogOut = () => {
    const { logOut } = useContext(LogInContext);
    const { setShowScheduled } = useTaskGlobalContext();
    const navigate = useNavigate();
    const { hideDates } = useContext(SelectedDateContext);

    const handleLogout = async () => {
        setShowScheduled(false);
        hideDates();
        logOut();
        navigate('/logIn');
    };

    return {
        handleLogout,
    }
}

export default useLogOut