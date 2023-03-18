import { useState, useEffect, useContext } from 'react';
import uniqid from 'uniqid';
import { getUsers } from '../api/userServices';
import { SelectedDateContext } from '../contexts/SelectedDateContext';
import { TIME_SLOTS } from '../utils/constants';
import { LogInContext } from '../contexts/LogInContext';
import { getUserById, updateUsersData } from '../api/userServices';

const useMeetingHoursList = () => {
    const { selectedDate, displayTimes, selectedTime, setSelectedTime } = useContext(
        SelectedDateContext
    );
    const { usersId } = useContext(LogInContext);
    const [availableHours, setAvailableHours] = useState(TIME_SLOTS);
    const [alreadyBooked, setAlreadyBooked] = useState(false);
    const [noAvailableTimeSlots, setNoAvailableTimeSlots] = useState(false);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const users = await getUsers();
                const bookedHours = users.reduce((acc, user) => {
                    const schedules = user.schedules || [];
                    schedules
                        .filter((schedule) => schedule.date === selectedDate)
                        .forEach((schedule) => acc.add(schedule.time));
                    return acc;
                }, new Set());
                setAvailableHours(TIME_SLOTS.filter((time) => !bookedHours.has(time)));
            } catch (error) {
                console.error(error);
            }
        };
        fetchUsers();
    }, [selectedDate, selectedTime]);

    useEffect(() => {
        const available = availableHours.length === 0;
        setNoAvailableTimeSlots(available);
    }, [availableHours]);

    const handleSelectedTime = (hour) => {
        setSelectedTime({
            date: selectedDate,
            time: hour,
            id: uniqid(),
            status: 'incomplete',
        });
    };

    const handleSetUpMeeting = async () => {
        try {
            const user = await getUserById(usersId);
            if (user) {
                const found = user.schedules.find((scheduled) => scheduled.date === selectedDate);
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
        setAlreadyBooked,
        noAvailableTimeSlots,
    };
};

export default useMeetingHoursList;