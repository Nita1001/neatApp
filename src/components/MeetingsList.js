import React, { useState, useEffect, useContext } from 'react'
import { getUsers } from '../api/userServices';
import { SelectedDateContext } from '../contexts/SelectedDateContext';

const MeetingsList = ({ timeSlots }) => {
    const { selectedDate } = useContext(SelectedDateContext);
    const [availableHours, setAvailableHours] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const users = await getUsers();
                const availableTimeSlots = timeSlots.slice();
                users.forEach((user) => {
                    const schedules = user.schedules;
                    if (schedules) {
                        console.log('selected Date', selectedDate);
                        schedules.forEach((schedule) => {
                            console.log(selectedDate, schedule.date)
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
    }, [selectedDate, timeSlots]);

    return (
        <div>
            {selectedDate && (
                <>
                    <h3>Available Hours</h3>
                    {availableHours.length > 0 ? (
                        <ul>
                            {availableHours.map((hour) => (
                                <li key={hour}>{hour}</li>
                            ))}
                        </ul>
                    ) : (
                        <p>None available meetings for this date.</p>
                    )}
                </>
            )}
        </div>
    );
}

export default MeetingsList