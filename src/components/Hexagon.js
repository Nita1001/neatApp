import React, { useEffect, useState } from 'react';
import useViewport from '../hooks/useViewport'

const Hexagon = ({ x, y, imageSrc, title }) => {

    const allHex = document.querySelectorAll('.hexagon');
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
        allHex.forEach((el) => {
            el.style.left = (parseInt(el.dataset.x) * (shiftX + padding)) + 'px';
            el.style.top = (parseInt(el.dataset.y) * (shiftY + padding)) + 'px';
        });
    }, [width, shiftX, shiftY, padding, allHex]);

    return (
        <div
            className="hexagon"
            data-x={x}
            data-y={y}
            style={{
                position: 'absolute',
                left: `${x * (shiftX + padding)}px`,
                top: `${y * (shiftY + padding)}px`,
            }}
        >
            <div className="hexagon__content">
                <img className="hexagon__background" src={imageSrc} alt="" />
                {title}
            </div>
        </div>
    );
}

export default Hexagon;
