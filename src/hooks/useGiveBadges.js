import { useContext } from 'react'
import { getUserById, updateUsersData } from '../api/userServices'
import { LogInContext } from '../contexts/LogInContext'

const useGiveBadges = () => {
    const { usersId } = useContext(LogInContext)

    const setCompletedTasksBadge = async () => {
        const user = await getUserById(usersId);
        const checkTasks = user.schedules;
        const completedTasks = checkTasks.filter((task) => task.status === 'complete');
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
                        console.log('Received a new badge, check your profile');
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
                        console.log('Received a new badge, check your profile');
                    }
                    break;
                default:
                    console.log('something went wrong');

            }


        }
    };
    return {
        setCompletedTasksBadge
    }
}

export default useGiveBadges