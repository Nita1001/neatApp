import React from 'react';
import useHexagon from '../hooks/useHexagon';
import './styles/Hexagon.style.css'

const Hexagon = ({ x, y, imageSrc, title, isIcon }) => {

    const {
        shiftX,
        shiftY,
        padding,
        calculatePosition,
        hexHeightWidth
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
                <img className={isIcon ? 'hexagonIcon' : 'hexagon__background'} style={isIcon ? { width: hexHeightWidth, height: hexHeightWidth } : null} src={imageSrc} alt="" />
                <div className='hexagons-title'>{title}</div>
            </div>
        </div>
    );
}

export default Hexagon;
