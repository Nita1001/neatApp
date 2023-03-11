import React, { useReducer, useEffect } from 'react';
import './styles/Table.style.css'
import { getUsers } from '../api/userServices';

const data = [
    { name: 'John', schedule: { date: '23-01-23', time: '09:00' }, email: 'john@mail.com' },
];

const reducer = () => {

}

const Table = () => {
    const initialState = {
        name: '',
        date: '',
        time: '',
        error: null
    }

    const [state, dispatch] = useReducer(reducer, initialState)

    useEffect(() => {
        const fatchUsers = async () => {
            try {
                const users = await getUsers();
                console.log(users);
            } catch (error) {
                console.log('error ocured');
            }
        }
        fatchUsers();
    }, [])

    const tableRows = data.map((row, index) => (
        <tr key={index}>
            <td>{row.name}</td>
            <td>{row.schedule.date}</td>
            <td>{row.schedule.time}</td>
            <td>{row.email}</td>
        </tr>
    ));

    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Date</th>
                    <th>Time</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                {tableRows}
            </tbody>
        </table>
    );
};

export default Table