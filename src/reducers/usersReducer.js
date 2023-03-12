import { usersActions } from "../actions/usersActions";

const usersReducer = (state, action) => {
    const { type, payload } = action;
    switch (type) {
        case usersActions.SET_USERS:
            return {
                ...state,
                users: payload,
                error: null
            }
        case usersActions.SET_USER_BADGES:
            const updatedUsers = state.users.map((user) => {
                if (user.id === payload.id) {
                    return {
                        ...user,
                        badges: payload.badges
                    }
                }
                return user;
            });
            return {
                ...state,
                users: updatedUsers
            };
        case usersActions.SET_ERROR:
            return {
                ...state,
                badges: null,
                loading: false,
                error: payload
            }
        default:
            return state
    }

}

export default usersReducer