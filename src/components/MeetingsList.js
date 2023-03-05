import React, { useState, useEffect, useContext } from 'react'
import { getUsers } from '../api/userServices';
import { SelectedDateContext } from '../contexts/SelectedDateContext';

const MeetingsList = ({ timeSlots }) => {
    const { selectedDate, displayDates } = useContext(SelectedDateContext);
    const [availableHours, setAvailableHours] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const users = await getUsers();
                const availableTimeSlots = timeSlots.slice();
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
    }, [selectedDate, timeSlots]);

    return (
        <div>
            {selectedDate && (
                <f>
                    {displayDates && (
                        availableHours.length > 0 ? (
                            <>
                                <h3>Available</h3>
                                <ul>
                                    {availableHours.map((hour) => (
                                        <li key={hour}>{hour}</li>
                                    ))}
                                </ul>
                            </>
                        ) : (
                            <p>None available meetings for this date.</p>
                        )
                    )}
                </f>
            )}
        </div>
    );
}

export default MeetingsList