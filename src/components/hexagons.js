import React from 'react'
import Hexagon from "./Hexagon";

const images = [
  'https://images.unsplash.com/photo-1637342672517-47dbb7f83f94?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYzODc3MjM5NA&ixlib=rb-1.2.1&q=80&w=400',
];
const titles = ['sky']
const HexagonsGenerator = () => {
  return (
    <div className='hexagonsContainer'>
      <Hexagon x={0} y={0} imageSrc={images[0]} title={titles[0]} />
      <Hexagon x={-1} y={1} imageSrc={images[0]} title={titles[0]} />
      <Hexagon x={1} y={1} imageSrc={images[0]} title={titles[0]} />
      <Hexagon x={-2} y={2} imageSrc={images[0]} title={titles[0]} />
      <Hexagon x={0} y={2} imageSrc={images[0]} title={titles[0]} />

    </div>
  );
}
export default HexagonsGenerator;