import { getUserById, updateUsersData } from '../api/userServices';
import useMeetingsList from '../hooks/useMeetingsList';

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
                console.log('before', user.schedules);
                const updatedSchedules = [...user.schedules, selectedTime];
                console.log('after', updatedSchedules);
                const response = await updateUsersData(user.id, { schedules: updatedSchedules });
                console.log(response);
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
                            <p>None available meetings for this date.</p>
                        )
                    )}

                </>
            )}
        </div>
    );
}

export default MeetingsList