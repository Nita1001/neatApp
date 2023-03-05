import React, { useState, useEffect, useContext } from 'react'
import { getUserById, getUsers } from '../api/userServices';
import { SelectedDateContext } from '../contexts/SelectedDateContext';
import { TIME_SLOTS } from '../utils/constants';

const MeetingsList = () => {
    const { selectedDate, displayTimes, selectedTime, setSelectedTime } = useContext(SelectedDateContext);
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
        setSelectedTime({ date: selectedDate, time: hour });
    }

    useEffect(() => {
        console.log(selectedTime);
    }, [selectedTime])

    const handleSetUpMeeting = async () => {

        try {
            const id = localStorage.getItem('userToken');
            const user = await getUserById(id);
            if (user) {
                console.log('before', user.schedules);
                const currentSchedule = user.schedules;
                currentSchedule.push(selectedTime);
                console.log('after', currentSchedule);
            }
        } catch (error) {
            console.error(error);
        }
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
                                {
                                    selectedTime ? <><p>are you sure?</p><button onClick={handleSetUpMeeting}>yes</button></>
                                        : null
                                }
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