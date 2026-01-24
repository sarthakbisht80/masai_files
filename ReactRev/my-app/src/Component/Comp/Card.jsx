import React from 'react'
import ChildB from './ChildB'

const Card = (props) => {
//  console.log(name);
  return (
    <div>
      <h2> this is child card</h2>
    <ChildB name={props.name}></ChildB>
    </div>
  )
}

export default Card