import { getUserById, updateUsersData } from '../api/userServices';
import useMeetingHoursList from '../hooks/useMeetingHoursList';

const MeetingHoursList = () => {

    const {
        handleSelectedTime,
        availableHours,
        displayTimes,
        selectedDate,
        selectedTime,
        setSelectedTime,
    } = useMeetingHoursList();

    const handleSetUpMeeting = async () => {
        try {
            const id = localStorage.getItem('userToken');
            const user = await getUserById(id);
            if (user) {
                const updatedSchedules = [...user.schedules, selectedTime];
                await updateUsersData(user.id, { schedules: updatedSchedules });
            }
        } catch (error) {
            console.error(error);
        }
        setSelectedTime(null);
    };

    return (
        <div>
            {selectedDate && (
                <div className='availableHoursContainer'>
                    {displayTimes && (
                        availableHours.length > 0 ? (
                            <>
                                <h3>Available</h3>
                                <ul className='hoursList text-center'>
                                    {availableHours.map((hour) => (
                                        <li className={
                                            selectedTime ?
                                                selectedTime.time === hour ?
                                                    'activeHour' : '' : null
                                        }
                                            key={hour}
                                            onClick={() => handleSelectedTime(hour)}
                                        >{hour}
                                        </li>
                                    ))}
                                </ul>
                                {
                                    selectedTime ?
                                        <>
                                            <p>Set Up Your Meeting?</p>
                                            <button className='rUSureBtn'
                                                onClick={handleSetUpMeeting}>Mine
                                            </button>
                                        </>
                                        : null
                                }
                            </>
                        ) : (
                            <p>None available meetings left on this day.</p>
                        )
                    )}
                </div>
            )}
        </div>
    );
}

export default MeetingHoursList