import React from 'react';
import useHexagon from '../hooks/useHexagon';

const Hexagon = ({ x, y, imageSrc, title }) => {

    const {
        shiftX,
        shiftY,
        padding,
        calculatePosition
    } = useHexagon();

    calculatePosition();

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
