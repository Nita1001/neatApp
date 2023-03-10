import React from 'react'
import Hexagon from "./Hexagon";
import crown from '../assets/icons/crown-colored.png'
import rocket from '../assets/icons/rocket-front-gradient.png'
import fire from '../assets/icons/fire-front-gradient.png'
import star from '../assets/icons/star-front-gradient.png'
import background from '../assets/images/hexagonBackground.png'

const images = [
  crown,
  rocket,
  fire,
  star,
];
const titles = ['crown', 'rocket', 'fire', 'star']

const badges = ['crown', 'rocket', 'fire', 'star']

const HexagonsGenerator = () => {
  const isIcon = true;

  return (

    <div className='hexagonsContainer'>
      {
        badges.map((badge, index) => {
          const x = index % 2 === 0 && index > 0 ? index - 1 : -index;
          const y = index % 2 === 0 && index > 0 ? index - 1 : index;
          return (
            <>
              <Hexagon x={x} y={y} imageSrc={background} title={titles[index]} />
              <Hexagon x={x} y={y} imageSrc={images[index]} isIcon={isIcon} />
            </>
          )
        })
      }


      {/* <Hexagon x={0} y={0} imageSrc={images[0]} title={titles[1]} />
      <Hexagon x={0} y={0} imageSrc={images[1]} isIcon={isIcon} /> */}
      {/* <Hexagon x={-1} y={1} imageSrc={images[0]} title={titles[0]} />
      <Hexagon x={-1} y={1} imageSrc={images[2]} isIcon={isIcon} /> */}



      {/* 
      <Hexagon x={1} y={1} imageSrc={images[0]} title={titles[0]} />

      <Hexagon x={-2} y={2} imageSrc={images[0]} title={titles[0]} />
      <Hexagon x={0} y={2} imageSrc={images[0]} title={titles[0]} /> */}

    </div>
  );
}
export default HexagonsGenerator;