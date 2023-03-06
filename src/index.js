import React from 'react';
import ReactDOM from 'react-dom/client';
import { LogInProvider } from './contexts/LogInContext';
import { SelectedDateProvider } from './contexts/SelectedDateContext';
import TasksContextProvider from './contexts/TasksContext';
import App from './App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <LogInProvider>
      <SelectedDateProvider>
        <TasksContextProvider>
          <App />
        </TasksContextProvider>
      </SelectedDateProvider>
    </LogInProvider>
  </React.StrictMode>
);