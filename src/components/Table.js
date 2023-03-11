import React, { useEffect, useState } from 'react';
import './styles/Table.style.css'
import useUsers from '../hooks/useUsers';

const Table = () => {
    const { users } = useUsers();
    const [tableRows, setTableRows] = useState(null);

    useEffect(() => {
        const tableRows = users.map((user, index) => {
            let closestSchedule = user.schedules.reduce((closest, schedule) => {
                if (!closest) {
                    return schedule;
                }
                const closestDate = new Date(closest.date);
                const scheduleDate = new Date(schedule.date);
                return scheduleDate < closestDate ? schedule : closest;
            }, null);

            return (
                <tr key={index}>
                    <td>{user.name}</td>
                    <td>{closestSchedule ? closestSchedule.date : ''}</td>
                    <td>{closestSchedule ? closestSchedule.time : ''}</td>
                    <td>{user.email}</td>
                    <td>{user.phone}</td>
                    <td>{user.isLoggedIn ? 'Yes' : 'No'}</td>
                </tr>
            );
        });

        setTableRows(tableRows);
    }, [users]);

    return (
        // 
        <>
            Next Sessions
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Logged In</th>
                    </tr>
                </thead>
                <tbody>
                    {tableRows ? tableRows : null}
                </tbody>
            </table>
        </>
    );
};

export default Table