import { useContext, useReducer, useCallback, createContext, useState } from 'react'
import uniqid from 'uniqid'
import { getUsersSchedule, updateUsersData, getUserById } from '../api/userServices'
import tasksReducer from '../reducers/tasksReducer';
import { TASKS_ACTIONS } from '../actions/tasksActions'
import { LogInContext } from './LogInContext';

export const TasksContext = createContext(null);

const TasksContextProvider = ({ children }) => {

    const { usersId } = useContext(LogInContext);
    const [showScheduled, setShowScheduled] = useState(false);
    const initialState = {
        tasks: [],
    };
    const [state, dispatch] = useReducer(tasksReducer, initialState);
    const getTasks = async (usersId) => {
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
            status: 'incomplete'
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

    const handleChecked = (id) => {
        const task = state.tasks.find(t => t.id === id);
        console.log(task)
        const status = task.status === 'complete' ? 'incomplete' : 'complete';
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
        const checked = tasks.filter((task) => task.state === 'complete');
        return checked;
    };

    const checkedTasks = getCheckedTasks(state.tasks);

    return (
        <TasksContext.Provider
            value={{
                createTask,
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