import React, { createContext, useState } from 'react';

export const SelectedDateContext = createContext();

export const SelectedDateProvider = ({ children }) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [displayDates, setDisplayDates] = useState(true);

  const hideDates = () => {
    setDisplayDates(false);
  }

  const showDates = () => {
    setDisplayDates(true);
  }

  return (
    <SelectedDateContext.Provider value={{ selectedDate, setSelectedDate, displayDates, hideDates, showDates }}>
      {children}
    </SelectedDateContext.Provider>
  );
};