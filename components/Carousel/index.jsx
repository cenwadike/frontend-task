import {initalState} from '../../constants/data'
import Card from '../Card'
import { useState } from 'react';
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";
import Image from 'next/image';

export default function Carousel() {

    const [cards, setCards] = useState(initalState);
  
    const handleLeftClick = (isLeft) => {
      const prevState = [...cards];
      // find next inactive card index - top
      const nextCardIdx = prevState
        .filter((ft) => ft.active === true)
        .sort((a, b) => (a.pos > b.pos ? 1 : b.pos > a.pos ? -1 : 0))[0].idx;
      // reset
      prevState.find((f) => f.active === false).active = true;
      // update
      prevState.find((f) => f.idx === nextCardIdx).active = false;
      // maximize pos
      prevState.find((f) => f.idx === nextCardIdx).pos =
        Math.max.apply(
          null,
          prevState.map(function (o) {
            return o.pos;
          })
        ) + 1;
  
      // update state
      setCards(prevState);
    };
  
    const handleRightClick = () => {
      const prevState = [...cards];
      // find next inactive card index - bottom
      const nextCardIdx = prevState
        .filter((ft) => ft.active === true)
        .sort((a, b) => (a.pos > b.pos ? 1 : b.pos > a.pos ? -1 : 0))
        .pop(1).idx;
      // minimize pos
      prevState.find((f) => f.active === false).pos =
        Math.min.apply(
          null,
          prevState.map(function (o) {
            return o.pos;
          })
        ) - 1;
      // reset
      prevState.find((f) => f.active === false).active = true;
      // update
      prevState.find((f) => f.idx === nextCardIdx).active = false;
  
      // update state
      setCards(prevState);
    };
  
    return (
      <>
        <div className='flex justify-center'>
            <div className='flex flex-row'>
                <FaLongArrowAltLeft color='white' size={50} className='mt-96 cursor-pointer hover:scale-95 duration-300 transition-all' onClick={handleLeftClick}/>
                {cards
                    .filter((f) => f.active === true)
                    .sort((a, b) => (a.pos > b.pos ? 1 : b.pos > a.pos ? -1 : 0))
                    .map((card, index) => (
                        <Card key={index} name={card.name} symbol={card.symbol} image={card.image} balance={card.balance} />
                    ))
                }
                <FaLongArrowAltRight color='white' size={50} className='mt-96 cursor-pointer hover:scale-95 duration-300 transition-all' onClick={handleRightClick}/>
            </div>
        </div>
      </>
    );
  }