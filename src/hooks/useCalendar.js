import React, { useState, useContext } from "react";
import { SelectedDateContext } from '../contexts/SelectedDateContext';

const useCalendar = () => {
    const [month, setMonth] = useState(new Date().getMonth());
    const [year, setYear] = useState(new Date().getFullYear());
    const [showMonthList, setShowMonthList] = useState(false);
    const { setSelectedDate, hideDates, showDates } = useContext(SelectedDateContext);
    const [selectedDay, setSelectedDay] = useState(null);

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
            .map((day) => {
                const isToday =
                    day === new Date().getDate() &&
                    month === new Date().getMonth() &&
                    year === new Date().getFullYear();
                const isSelected = day === selectedDay;
                const className = `day ${isToday ? "today" : ""} ${isSelected ? "day-active" : ""}`;
                return (
                    <div
                        key={day}
                        className={className}
                        onClick={() => handleDayClick(day, month, year)}
                    >
                        {day}
                    </div>
                );
            });

        for (let i = 0; i < firstDay; i++) {
            days.unshift(<div key={`empty-${i}`} className="empty-day"></div>);
        }
        return days;
    };

    const prevYear = () => {
        hideDates();
        setYear(year - 1);
    };

    const nextYear = () => {
        hideDates();
        setYear(year + 1);
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

    const monthList = () => {
        hideDates();
        setShowMonthList(true);

    }
    const handleDayClick = (day, month, year) => {
        setSelectedDay(day);
        const newSelectedDate = `${day}-${(month + 1).toString().padStart(2, '0')}-${(year % 100).toString().padStart(2, '0')}`;
        setSelectedDate(newSelectedDate);
        showDates();
    };

    return {
        generateCalendar,
        prevYear,
        nextYear,
        handleMonthClick,
        showMonthList,
        monthList,
        year,
        month
    };

}

export default useCalendar