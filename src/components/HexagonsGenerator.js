import React from 'react'
import Hexagon from "./Hexagon";
import crown from '../assets/icons/crown-colored.png'
import rocket from '../assets/icons/rocket-front-gradient.png'
import fire from '../assets/icons/fire-front-gradient.png'

import background from '../assets/images/hexagonBackground.jfif'

const images = [
  crown,
  rocket,
  fire,
];
const titles = ['King slayer', 'sky']


const HexagonsGenerator = () => {

  const badges = ['crown', 'rocket', 'fire']

  const isIcon = true;
  return (

    <div className='hexagonsContainer'>
      {
        badges.map((badge, index) => {
          console.log('badge', badge, index);
          return (
            <>
              <Hexagon x={index % 2 === 0 ? index : -index} y={index} imageSrc={background} title={titles[index]} />
              <Hexagon x={index % 2 === 0 ? index : -index} y={index} imageSrc={images[index]} isIcon={isIcon} />
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