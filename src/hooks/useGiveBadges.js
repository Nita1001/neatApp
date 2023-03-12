import { useContext } from 'react'
import { getUserById, updateUsersData } from '../api/userServices'
import { LogInContext } from '../contexts/LogInContext'
import useUsers from './useUsers'
import { usersActions } from '../actions/usersActions'

const useGiveBadges = () => {
    const { usersId } = useContext(LogInContext)
    const { dispatch } = useUsers();

    const setCompletedTasksBadge = async () => {
        const user = await getUserById(usersId);
        const checkTasks = user.schedules;
        const completedTasks = checkTasks.filter((task) => task.status === 'completed');
        const giveBadge = completedTasks.length;

        const addBadge = async (newBadge) => {
            const badgeExists = user.badges && user.badges.some(
                (badge) => badge.icon === newBadge.icon && badge.title === newBadge.title);

            if (!badgeExists) {
                const updatedBadges = user.badges ? [...user.badges, newBadge] : [newBadge];
                const updatedUser = { ...user, badges: updatedBadges };
                await updateUsersData(usersId, updatedUser);
                dispatch({
                    type: usersActions.SET_USER_BADGES,
                    payload: { id: usersId, badges: updatedBadges }
                });
                console.log('Received a new badge, check your profile');
            }
        };

        switch (giveBadge) {
            case 1:
                addBadge({ icon: 'star', title: 'first meeting' });
                break;
            case 5:
                addBadge({ icon: 'target', title: '5 meetings' });
                break;
            default:
                break;
        }
    };

    return {
        setCompletedTasksBadge
    }
}

export default useGiveBadges