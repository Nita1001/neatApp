import useMeetingHoursList from '../hooks/useMeetingHoursList';

const MeetingHoursList = () => {
    const {
        handleSelectedTime,
        handleSetUpMeeting,
        selectedDate,
        displayTimes,
        availableHours,
        selectedTime
    } = useMeetingHoursList();


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