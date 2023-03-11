import { useContext, useReducer, createContext, useState } from 'react'
import { getUsersSchedule, updateUsersData, getUserById } from '../api/userServices'
import tasksReducer from '../reducers/tasksReducer';
import { TASKS_ACTIONS } from '../actions/tasksActions'
import { LogInContext } from './LogInContext';

export const TasksContext = createContext(null);

const TasksContextProvider = ({ children }) => {
    const initialState = {
        tasks: [],
    };
    const [state, dispatch] = useReducer(tasksReducer, initialState);
    const [showScheduled, setShowScheduled] = useState(false);
    const { usersId } = useContext(LogInContext);

    const getTasks = async (usersId) => {
        try {
            const schedules = await getUsersSchedule(usersId);
            if (schedules) {
                dispatch({ type: TASKS_ACTIONS.SET_TASKS, payload: schedules })
            }
        } catch (error) {
            console.error(error);
        }
    }

    const deleteMeetingFromAPI = async (updatedSchedule) => {
        try {
            const user = await getUserById(usersId);
            if (user) {
                await updateUsersData(usersId, { schedules: updatedSchedule });
            }
        } catch (error) {
            console.error(error);
        }
    }

    const deleteTask = (task) => {
        const updatedTasks = state.tasks.filter(t => t.id !== task.id);
        dispatch({ type: TASKS_ACTIONS.DELETE_TASK, payload: task.id });
        deleteMeetingFromAPI(updatedTasks);
    };

    const handleChecked = (id) => {
        const task = state.tasks.find(t => t.id === id);
        const status = task.status === 'completed' ? 'incomplete' : 'completed';
        dispatch({
            type: TASKS_ACTIONS.TOGGLE_CHECKED,
            payload: { id, status },
        });
        updateMeetingsStatusOnAPI();
    };

    const updateMeetingsStatusOnAPI = async () => {
        try {
            const user = await getUserById(usersId);
            if (user) {
                await updateUsersData(usersId, { schedules: state.tasks });
            }
        } catch (error) {
            console.error(error);
        }
    }

    const getCheckedTasks = (tasks) => {
        const checked = tasks.filter((task) => task.state === 'completed');
        return checked;
    };

    const checkedTasks = getCheckedTasks(state.tasks);

    return (
        <TasksContext.Provider
            value={{
                deleteTask,
                tasks: state.tasks,
                getTasks,
                showScheduled,
                setShowScheduled,
                handleChecked,
                checkedTasks,
                updateMeetingsStatusOnAPI
            }}
        >
            {children}
        </TasksContext.Provider>
    );
};

export const useTaskGlobalContext = () => {
    return useContext(TasksContext);
}

export default TasksContextProvider;