import React, { useEffect, useState } from 'react';
import Button from './Button'
import useUsers from '../hooks/useUsers';
import './styles/Table.style.css'

const Table = () => {
    const { users } = useUsers();
    const [tableRows, setTableRows] = useState(null);
    const handleDeleteUser = (user) => {
        console.log('do you want to delete this user?', user);
    }
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
                    <td>{closestSchedule ? closestSchedule.status : ''}</td>
                    <td>{user.email}</td>
                    <td>{user.phone}</td>
                    <td>{user.isLoggedIn ? 'Yes' : 'No'}</td>
                    <div className='userDelete'><Button
                        className='trash'
                        title='Delete'
                        handleClick={() => handleDeleteUser(user)}

                    /></div>
                </tr>
            );
        });

        setTableRows(tableRows);
    }, [users]);

    return (
        // 
        <div className='tablesContainer'>
            Next Sessions
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Status</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Logged In</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {tableRows ? tableRows : null}
                </tbody>
            </table>
        </div>
    );
};

export default Table