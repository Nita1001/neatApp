import { hexagonActions } from "../actions/hexagonActions";

const hexagonReducer = (state, action) => {
    const { type, payload } = action;

    switch (type) {
        case hexagonActions.SET_SHIFTX:
            return { ...state, shiftX: payload };
        case hexagonActions.SET_SHIFTY:
            return { ...state, shiftY: payload };
        case hexagonActions.SET_PADDING:
            return { ...state, padding: payload };
        default:
            return state;
    }
}

export default hexagonReducer
