import { useContext } from 'react'
import { updateUsersData } from '../api/userServices'
import { LogInContext } from '../contexts/LogInContext'
import { usersActions } from '../actions/usersActions'
import useUsers from './useUsers'

const useGiveBadges = () => {
    const { usersId } = useContext(LogInContext)
    const { users, dispatch } = useUsers();

    const setCompletedTasksBadge = async () => {

        const user = users.find((user) => user.id === usersId);
        if (user && user.schedules.length > 0) {
            const checkTasks = user.schedules;
            const completedTasks = checkTasks.filter((task) => task.status === 'completed');
            const giveBadge = completedTasks.length;
            if (giveBadge) {
                let newBadge;
                let badgeExists;
                switch (giveBadge) {
                    case 1:
                        newBadge = { icon: 'star', title: 'first meeting' };
                        badgeExists = user.badges && user.badges.some(
                            (badge) => badge.icon === newBadge.icon && badge.title === newBadge.title);
                        if (!badgeExists) {
                            const updatedBadges = user.badges ? [...user.badges, newBadge] : [newBadge];
                            const updatedUser = { ...user, badges: updatedBadges };
                            await updateUsersData(usersId, updatedUser);
                            dispatch({ type: usersActions.SET_USER_BADGES, payload: { id: usersId, badges: updatedBadges } });
                        }
                        break;
                    case 5:
                        newBadge = { icon: 'target', title: '5 meetings' };
                        badgeExists = user.badges && user.badges.some(
                            (badge) => badge.icon === newBadge.icon && badge.title === newBadge.title);
                        if (!badgeExists) {
                            const updatedBadges = user.badges ? [...user.badges, newBadge] : [newBadge];
                            const updatedUser = { ...user, badges: updatedBadges };
                            await updateUsersData(usersId, updatedUser);
                            dispatch({ type: usersActions.SET_USER_BADGES, payload: { id: usersId, badges: updatedBadges } });
                        }
                        break;
                    default:
                        break;
                }
            }
        }
    }
    return {
        setCompletedTasksBadge
    }
};

export default useGiveBadges