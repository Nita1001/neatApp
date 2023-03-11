import { useContext } from 'react'
import { getUserById, updateUsersData } from '../api/userServices'
import { LogInContext } from '../contexts/LogInContext'

const useGiveBadges = () => {
    const { usersId } = useContext(LogInContext)

    const setCompletedTasksBadge = async () => {
        const user = await getUserById(usersId);
        console.log(user)
        const checkTasks = user.schedules;
        console.log(user.schedules);
        const completedTasks = checkTasks.filter((task) => task.status === 'complete');
        const giveBadge = completedTasks.length >= 1;
        if (giveBadge) {
            const newBadge = { icon: 'target', title: 'first meeting' };
            const badgeExists = user.badges && user.badges.some(
                (badge) => badge.icon === newBadge.icon && badge.title === newBadge.title);
            if (!badgeExists) {
                const updatedBadges = user.badges ? [...user.badges, newBadge] : [newBadge];
                const updatedUser = { ...user, badges: updatedBadges };
                await updateUsersData(usersId, updatedUser);
                console.log('Received a new badge, check your profile');
            } else {
                console.log('You already have this badge!');
            }
        }
    };
    return {
        setCompletedTasksBadge
    }
}

export default useGiveBadges