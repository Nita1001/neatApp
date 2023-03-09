import React, { useEffect } from 'react';

const Hexagon = ({ x, y, imageSrc, title }) => {

    const allHex = document.querySelectorAll('.hexagon');
    const shiftX = 60;
    const shiftY = 90;
    const padding = 5;

    useEffect(() => {
        allHex.forEach((el) => {
            el.style.left = (parseInt(el.dataset.x) * (shiftX + padding)) + 'px';
            el.style.top = (parseInt(el.dataset.y) * (shiftY + padding)) + 'px';
        });
    }, [allHex]);

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
