import React, { useEffect, useState } from 'react'

const Flashcard = ({card,flipped,onflip}) => {


           
  return (      
        <div  className='card'  onClick={onflip}>

        
        {flipped? card.answer :card.question}                
            
        </div>
  )
}

export default Flashcard