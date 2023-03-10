import { useEffect, useState } from 'react';
import useViewport from '../hooks/useViewport'

const useHexagon = () => {

    const { width } = useViewport();
    const breakpoint = 1200;

    const [shiftX, setShiftX] = useState(60);
    const [shiftY, setShiftY] = useState(90);
    const [padding, setPadding] = useState(5);

    useEffect(() => {
        if (width < breakpoint) {
            setShiftX(30);
            setShiftY(44);
            setPadding(5);
        }


    }, [width]);

    const calculatePosition = (x, y) => {
        return {
            position: 'absolute',
            left: `${x * (shiftX + padding)}px`,
            top: `${y * (shiftY + padding)}px`,
        };
    };

    return {
        shiftX,
        shiftY,
        padding,
        calculatePosition
    }
}

export default useHexagon