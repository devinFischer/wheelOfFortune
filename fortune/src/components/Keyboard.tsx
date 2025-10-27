import React from 'react'
import {Keys} from './Keys'

type Props = {}

const Keyboard = (props: Props) => {
    const Letters ={
    A: 500, B: 0, C: 0, D: 0, E: 500, F: 0, G: 0, H: 0, I:500,
    J: 0, K: 0, L: 0, M: 0, N: 0, O: 500 , P: 0, Q: 0, R: 0,
    S: 0, T: 0, U: 500, V: 0, W: 0, X: 0, Y: 0, Z: 0
    };

  
  return (
   <div className='bg-slate-700 w-full min-h-screen p-4 text-white'>
      <h1 className='text-xl mb-4'>Letter Buttons</h1>
      <div className='grid grid-cols-[repeat(10,auto)] gap-2 justify-center'>
        {Object.entries(Letters).map(([letter, price]) => (
          <Keys key={letter} Letter={letter} isClicked={false} Price={price} />
        ))}
      </div>
    </div>


  );
}

export default Keyboard