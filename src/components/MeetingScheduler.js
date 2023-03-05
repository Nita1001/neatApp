import React, { useState } from "react";
import { DAYS_OF_WEEK, MONTH_NAMES } from "../utils/constants";
import useCalendar from "../hooks/useCalendar";

const MeetingScheduler = () => {

    const {
        generateCalendar,
        prevYear,
        nextYear,
        handleMonthClick,
        showMonthList,
        monthList,
        year,
        month
    } = useCalendar();

    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    return (
        <div className="calendarContainer">
            <div className={`calendar ${darkMode ? "dark" : "light"}`}>
                <div className="calendar-header">
                    <span className="month-picker" onClick={monthList}>
                        {MONTH_NAMES[month]}
                    </span>
                    <div className="year-picker">
                        <span className="year-change" onClick={prevYear}>
                            <pre>{"<"}</pre>
                        </span>
                        <span id="year">{year}</span>
                        <span className="year-change" onClick={nextYear}>
                            <pre>{">"}</pre>
                        </span>
                    </div>
                </div>
                <div className="calendar-body">
                    <div className="calendar-week-day">
                        {DAYS_OF_WEEK.map((day) => (
                            <div key={day}>{day}</div>
                        ))}
                    </div>
                    <div className="calendar-days">{generateCalendar()}</div>
                </div>
                <div className="calendar-footer">
                    <div className="toggle">
                        <span>Dark Mode</span>
                        <div className="dark-mode-switch" onClick={toggleDarkMode}>
                            <div className="dark-mode-switch-ident"></div>
                        </div>
                    </div>
                </div>
                {showMonthList && (
                    <div className={`month-list ${showMonthList ? 'show' : ''}`}>
                        {MONTH_NAMES.map((month, index) => (
                            <div key={index} onClick={() => handleMonthClick(index)}>
                                {month}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div >
    );
}

export default MeetingScheduler;
