import { useContext, useReducer, useCallback, createContext } from 'react'
import uniqid from 'uniqid'
import { getUsersSchedule, updateUsersData, getUserById } from '../api/userServices'
import tasksReducer from '../reducers/tasksReducer';
import { TASKS_ACTIONS } from '../actions/tasksActions'
export const TasksContext = createContext(null);

const TasksContextProvider = ({ children }) => {
    const usersId = localStorage.getItem('userToken');

    const initialState = {
        tasks: []
    };

    const [state, dispatch] = useReducer(tasksReducer, initialState);

    const getTasks = async () => {
        try {
            const schedules = await getUsersSchedule(usersId);
            if (schedules) {
                const tasks = schedules.map((meeting) => createTask(meeting.date, meeting.time));
                dispatch({ type: TASKS_ACTIONS.SET_TASKS, payload: tasks })
            }
        } catch (error) {
            console.error(error);
        }
    }

    const createTask = useCallback((date, time) => {
        return {
            date,
            time,
            id: uniqid(),
            state: 'incomplete'
        }
    }, []);

    const deleteMeetingFromAPI = async (updatedSchedule) => {
        try {
            const id = localStorage.getItem('userToken');
            const user = await getUserById(id);
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

    return (
        <TasksContext.Provider
            value={{
                createTask,
                deleteTask,
                tasks: state.tasks,
                getTasks
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