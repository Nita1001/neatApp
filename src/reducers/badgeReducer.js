import { badgeActions } from "../actions/badgeActions";

const badgeReducer = (state, action) => {
    const { type, payload } = action;
    switch (type) {
        case badgeActions.SET_BADGES:
            return {
                ...state,
                badges: payload,
                loading: false,
                error: null
            }
        case badgeActions.SET_ERROR:
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

export default badgeReducer