import React from 'react';
import useHexIcons from '../hooks/useHexIcons'
import Hexagon from "./Hexagon";
import background from '../assets/images/hexagonBackground.png'

const HexagonsGenerator = ({ badges }) => {

  const {
    generateIcon,
    isIcon,
  } = useHexIcons();

  return (
    <>
      {badges ?
        badges.map((badge, index) => {
          const generatedIcon = generateIcon(badge.icon);
          const pattern = [0, 1, 1, 0, 2];
          const even = (index % 2 === 0);
          const odd = (index % 2 !== 0);
          const lastIndex = (index === badges.length - 1);
          const x = (even && index > 0) ? pattern[index - 1] : (lastIndex && odd) && (index > 1) ? 2 : (odd && index > 1) ? -2 : -index;
          const y = (even && index > 0) ? pattern[index] : (odd && index > 1) ? + 2 : index;
          return (
            <div className='hexagonsContainer' key={badge.title || index}>
              <Hexagon x={x} y={y} imageSrc={background} title={(badges[index].title)} />
              <Hexagon x={x} y={y} imageSrc={generatedIcon} isIcon={isIcon} />
            </div>
          )
        })
        : null}
    </>
  );
}
export default HexagonsGenerator;