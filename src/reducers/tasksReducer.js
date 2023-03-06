import { TASKS_ACTIONS } from '../actions/tasksActions'

const tasksReducer = (state, action) => {
    const { type, payload } = action;
    switch (type) {
        case TASKS_ACTIONS.SET_TASKS:
            return {
                tasks: payload
            };
        case TASKS_ACTIONS.DELETE_TASK:
            return {
                tasks: state.tasks.filter(task => task.id !== payload)
            };
        default:
            return state;
    }
};

export default tasksReducer