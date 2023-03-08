import { TASKS_ACTIONS } from '../actions/tasksActions'

const tasksReducer = (state, action) => {
    const { type, payload } = action;
    switch (type) {
        case TASKS_ACTIONS.SET_TASKS:
            return {
                tasks: payload,
                checkedTasks: payload
            };
        case TASKS_ACTIONS.DELETE_TASK:
            return {
                tasks: state.tasks.filter(task => task.id !== payload)
            };
        case TASKS_ACTIONS.TOGGLE_CHECKED:
            const { id, status } = action.payload;
            const tasks = [...state.tasks];
            const task = tasks.find(t => t.id === id);
            task.status = status;
            return {
                ...state,
                tasks: tasks
            };
        default:
            return state;
    }
};

export default tasksReducer