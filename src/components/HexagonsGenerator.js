import React from 'react'
import Hexagon from "./Hexagon";
import crown from '../assets/icons/crown-colored.png'
import rocket from '../assets/icons/rocket-front-gradient.png'
import fire from '../assets/icons/fire-front-gradient.png'
import star from '../assets/icons/star-front-gradient.png'
import target from '../assets/icons/target-front-gradient.png'
import calendar from '../assets/icons/calender-front-gradient.png'

import background from '../assets/images/hexagonBackground.png'

const images = [
  crown,
  rocket,
  fire,
  star,
  target,
  calendar,
];
const titles = ['crown', 'rocket', 'fire', 'star', 'target', 'calendar']
const badges = ['crown', 'rocket', 'fire', 'star', 'target', 'calendar']

const HexagonsGenerator = () => {
  const isIcon = true;

  return (
    <>
      {
        badges.map((badge, index) => {
          const pattern = [0, 1, 1, 0, 2];
          const even = (index % 2 === 0);
          const odd = (index % 2 !== 0);
          const lastIndex = (index === badges.length - 1);
          const x = even && index > 0 ? pattern[index - 1] : lastIndex && odd && index > 1 ? 2 : odd && index > 1 ? -2 : -index;
          const y = even && index > 0 ? pattern[index] : odd && index > 1 ? + 2 : index;
          return (

            <div className='hexagonsContainer' key={badge}>
              <Hexagon x={x} y={y} imageSrc={background} title={titles[index]} />
              <Hexagon x={x} y={y} imageSrc={images[index]} isIcon={isIcon} />

            </div>
          )
        })
      }
    </>
  );
}
export default HexagonsGenerator;