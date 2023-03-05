import React, { useState, useContext } from "react";
import { SelectedDateContext } from '../contexts/SelectedDateContext';

function MeetingScheduler() {
    const [month, setMonth] = useState(new Date().getMonth());
    const [year, setYear] = useState(new Date().getFullYear());
    const [darkMode, setDarkMode] = useState(false);
    const [showMonthList, setShowMonthList] = useState(false);
    const { setSelectedDate } = useContext(SelectedDateContext);

    const monthNames = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December",
    ];

    const isLeapYear = (year) => {
        return (
            (year % 4 === 0 && year % 100 !== 0 && year % 400 !== 0) ||
            (year % 100 === 0 && year % 400 === 0)
        );
    };

    const getFebDays = (year) => {
        return isLeapYear(year) ? 29 : 28;
    };

    const generateCalendar = () => {
        const daysOfMonth = [
            31, getFebDays(year), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31,
        ];

        const firstDay = new Date(year, month, 1).getDay();

        const days = Array.from({ length: daysOfMonth[month] }, (_, i) => i + 1)
            .map((day) => (
                <div
                    key={day}
                    className={`day ${day === new Date().getDate() &&
                        month === new Date().getMonth() &&
                        year === new Date().getFullYear()
                        ? "today"
                        : ""
                        }`}
                    onClick={() => handleDayClick(day, month, year)}
                >
                    {day}
                </div>
            ));

        for (let i = 0; i < firstDay; i++) {
            days.unshift(<div key={`empty-${i}`} className="empty-day"></div>);
        }
        return days;
    };

    const prevYear = () => {
        setYear(year - 1);
    };

    const nextYear = () => {
        setYear(year + 1);
    };

    const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    const handleMonthClick = (index) => {
        setMonth(index);
        setShowMonthList(false);
        if (index === 0) {
            setYear(year - 1);
        } else if (index === 11) {
            setYear(year + 1);
        }
    };

    const handleDayClick = (day, month, year) => {
        const newSelectedDate = `${day}-${(month + 1).toString().padStart(2, '0')}-${(year % 100).toString().padStart(2, '0')}`;
        console.log(newSelectedDate)
        setSelectedDate(newSelectedDate);
    };
    return (
        <div className="calendarContainer">
            <div className={`calendar ${darkMode ? "dark" : "light"}`}>
                <div className="calendar-header">
                    <span className="month-picker" onClick={() => setShowMonthList(true)}>
                        {monthNames[month]}
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
                        {daysOfWeek.map((day) => (
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
                        {monthNames.map((month, index) => (
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
