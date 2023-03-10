import { useEffect, useReducer, useState } from 'react';
import useViewport from '../hooks/useViewport'
import hexagonReducer from '../reducers/hexagonReducer'
import { hexagonActions } from '../actions/hexagonActions';

const initialState = {
    shiftX: 0,
    shiftY: 0,
    padding: 0,
};

const useHexagon = () => {

    const [state, dispatch] = useReducer(hexagonReducer, initialState);
    const [hexHeightWidth, setHexHeightWidth] = useState('');


    const { width } = useViewport();
    const breakpoint = 1200;

    useEffect(() => {
        if (width < breakpoint) {
            setHexHeightWidth('32px');
            dispatch({ type: hexagonActions.SET_SHIFTX, payload: 26 });
            dispatch({ type: hexagonActions.SET_SHIFTY, payload: 44 });
            dispatch({ type: hexagonActions.SET_PADDING, payload: 5 });
        } else {
            setHexHeightWidth('64px');
            dispatch({ type: hexagonActions.SET_SHIFTX, payload: 58 });
            dispatch({ type: hexagonActions.SET_SHIFTY, payload: 90 });
            dispatch({ type: hexagonActions.SET_PADDING, payload: 5 });
        }
    }, [width]);

    const calculatePosition = (x, y) => {
        return {
            position: 'absolute',
            left: `${x * (state.shiftX + state.padding)}px`,
            top: `${y * (state.shiftY + state.padding)}px`,
        };
    };

    return {
        shiftX: state.shiftX,
        shiftY: state.shiftY,
        padding: state.padding,
        calculatePosition,
        hexHeightWidth
    }
}
export default useHexagon