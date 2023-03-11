import { useReducer, useEffect } from 'react';
import { getUsers } from '../api/userServices';
import usersReducer from '../reducers/usersReducer';
import { usersActions } from '../actions/usersActions';
const useUsers = () => {
    const initialState = {
        users: [],
        error: null
    }

    const [state, dispatch] = useReducer(usersReducer, initialState)

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const users = await getUsers();
                console.log('users', users);
                dispatch({ type: usersActions.SET_USERS, payload: users })
            } catch (error) {
                dispatch({ type: usersActions.SET_ERROR, payload: error })

            }
        }
        fetchUsers();
    }, [])

    return {
        users: state.users,
    };
}

export default useUsers