import React, { createContext, useState } from 'react';

export const SelectedDateContext = createContext();

export const SelectedDateProvider = ({ children }) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [displayTimes, setDisplayTimes] = useState(true);
  const [selectedTime, setSelectedTime] = useState(null);

  const hideDates = () => {
    setDisplayTimes(false);
    setSelectedTime(null);
  }

  const showDates = () => {
    setDisplayTimes(true);
    setSelectedTime(null);
  }

  return (
    <SelectedDateContext.Provider value={{ selectedDate, setSelectedDate, displayTimes, hideDates, showDates, selectedTime, setSelectedTime }}>
      {children}
    </SelectedDateContext.Provider>
  );
};