import React, { useState, useEffect, useContext } from 'react'
import { getUsers } from '../api/userServices';
import { SelectedDateContext } from '../contexts/SelectedDateContext';
import { TIME_SLOTS } from '../utils/constants';

const MeetingsList = () => {
    const { selectedDate, displayTimes, setSelectedTime } = useContext(SelectedDateContext);
    const [availableHours, setAvailableHours] = useState([]);

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
    }, [selectedDate]);

    const handleSelectedTime = (hour) => {

        setSelectedTime(hour);
        console.log(hour, selectedDate);

    }


    return (
        <div>
            {selectedDate && (
                <>
                    {displayTimes && (
                        availableHours.length > 0 ? (
                            <>
                                <h3>Available</h3>
                                <ul>
                                    {availableHours.map((hour) => (
                                        <li key={hour} onClick={() => handleSelectedTime(hour)}>{hour}</li>
                                    ))}
                                </ul>
                            </>
                        ) : (
                            <p>None available meetings for this date.</p>
                        )
                    )}
                </>
            )}
        </div>
    );
}

export default MeetingsList