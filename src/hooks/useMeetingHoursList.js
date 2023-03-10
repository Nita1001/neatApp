import { useState, useEffect, useContext } from 'react'
import uniqid from 'uniqid'
import { getUsers } from '../api/userServices';
import { SelectedDateContext } from '../contexts/SelectedDateContext';
import { TIME_SLOTS } from '../utils/constants';
import { LogInContext } from '../contexts/LogInContext';
import { getUserById, updateUsersData } from '../api/userServices';


const useMeetingHoursList = () => {
    const { selectedDate, displayTimes, selectedTime, setSelectedTime } = useContext(SelectedDateContext);
    const [availableHours, setAvailableHours] = useState([]);
    const { usersId } = useContext(LogInContext);
    const [alreadyBooked, setAlreadyBooked] = useState(false);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const users = await getUsers();
                const availableTimeSlots = TIME_SLOTS.slice();
                users.forEach((user) => {
                    const schedules = user.schedules;
                    if (schedules) {
                        schedules.forEach((schedule) => {
                            if (schedule.date === selectedDate) {
                                const index = availableTimeSlots.indexOf(schedule.time);
                                if (index > -1) {
                                    availableTimeSlots.splice(index, 1);
                                }
                            }
                        });
                    }
                });
                setAvailableHours(availableTimeSlots);
            } catch (error) {
                console.error(error);
            }
        };
        fetchUsers();
    }, [selectedDate, selectedTime]);

    const handleSelectedTime = (hour) => {
        setSelectedTime({
            date: selectedDate,
            time: hour,
            id: uniqid(),
            status: 'incomplete'
        });
    }

    const handleSetUpMeeting = async () => {
        try {
            const user = await getUserById(usersId);
            if (user) {
                const found = user.schedules.find((scheduled) => scheduled.date === selectedDate)
                if (found) {
                    return setAlreadyBooked(true);
                } else {
                    const updatedSchedules = [...user.schedules, selectedTime];
                    await updateUsersData(user.id, { schedules: updatedSchedules });
                }
            }
        } catch (error) {
            console.error(error);
        }
        setSelectedTime(null);
    };

    return {
        handleSelectedTime,
        availableHours,
        displayTimes,
        selectedDate,
        selectedTime,
        setSelectedTime,
        handleSetUpMeeting,
        alreadyBooked,
        setAlreadyBooked
    };
}

export default useMeetingHoursList