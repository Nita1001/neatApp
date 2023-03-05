import React, { createContext, useState } from 'react';

export const SelectedDateContext = createContext();

export const SelectedDateProvider = ({ children }) => {
  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <SelectedDateContext.Provider value={{ selectedDate, setSelectedDate }}>
      {children}
    </SelectedDateContext.Provider>
  );
};