import { getUserById, updateUsersData } from '../api/userServices';
import useMeetingsList from '../hooks/useMeetingsList';
import ScheduledMeetings from './ScheduledMeetings';

const MeetingsList = () => {

    const {
        handleSelectedTime,
        availableHours,
        displayTimes,
        selectedDate,
        selectedTime,
        setSelectedTime
    } = useMeetingsList();

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
                            <p>None available meetings left on this day.</p>
                        )
                    )}
                </>
            )}
            <div>
                <ScheduledMeetings />
            </div>
        </div>
    );
}

export default MeetingsList