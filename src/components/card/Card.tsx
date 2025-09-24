import React from 'react'
import Image from 'next/image'

interface Cardprops {
    color:"green",
   
}

export const Card = ({color}:Cardprops) => {
    console.log(color);
    
  return (
    
    <div 
    // className= {
    //     color === "green" ? "card-green":
    //     color === "white" ? "card-white":
    //     color === "black" ? "card-black":""
    // }


    className='card-green'
    >
      
      <div className='card__leftSide'></div>
          <div className='card__leftSide--tittle'>Search engine <br /> 
          optimizacion</div>
          <div className='card__leftSide link'></div>
              <div className='card__leftSide--icon'></div>
              <div className='card__leftSide--text'></div>
              
      <div className='card__rigthSide'>
        
        
      </div>
      
    </div>
  )
}


