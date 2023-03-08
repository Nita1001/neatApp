import useMeetingHoursList from '../hooks/useMeetingHoursList';
import useMySchedule from '../hooks/useMySchedule';
const MeetingHoursList = () => {
    const { handleMySchedule } = useMySchedule();

    const {
        handleSelectedTime,
        handleSetUpMeeting,
        selectedDate,
        displayTimes,
        availableHours,
        selectedTime,
        alreadyBooked,
        setAlreadyBooked
    } = useMeetingHoursList();

    const handleNewMeeting = (hour) => {
        handleSelectedTime(hour);
        setAlreadyBooked(false);
    }
    const handleEditSchedule = () => {
        handleMySchedule();
    }
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
                                            onClick={() => handleNewMeeting(hour)}
                                        >{hour}
                                        </li>
                                    ))}
                                </ul>
                                {
                                    selectedTime ?
                                        <div className='setUpParagraph'>
                                            {!alreadyBooked ?
                                                <>
                                                    <p> Set Up Your Meeting? </p>
                                                    <button className='mineBtn'
                                                        onClick={handleSetUpMeeting}>Mine
                                                    </button>
                                                </>
                                                :
                                                <>
                                                    <p> Can't have multiple meetings same Day..</p>
                                                    <button className='editMeetingBtn'
                                                        onClick={handleEditSchedule}> Edit meeting
                                                    </button>
                                                </>
                                            }
                                        </div>
                                        : null
                                }
                            </>
                        ) : (
                            <p className='noneAvailableParagraph'>None available meetings left on this day.</p>
                        )
                    )}
                </div>
            )}
        </div>
    );
}

export default MeetingHoursList