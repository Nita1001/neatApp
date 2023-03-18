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
        setAlreadyBooked,
        noAvailableTimeSlots
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
                        <>
                            {
                                !noAvailableTimeSlots ?
                                    <h3>Available</h3>
                                    :
                                    <p className='noneAvailableParagraph'>
                                        None available meetings left on this day.
                                    </p>
                            }
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
                                                <p>Already booked a meeting</p>
                                                <p>This Day</p>
                                                <button className='editMeetingBtn'
                                                    onClick={handleEditSchedule}> Edit meetings
                                                </button>
                                            </>
                                        }
                                    </div>
                                    : null
                            }
                        </>
                    )}
                </div>
            )}
        </div>
    );
}

export default MeetingHoursList