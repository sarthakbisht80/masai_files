import React from 'react'
import ChildB from './ChildB'

const Child = ({count}) => {
  return (
    <>

    <h2>welcome to chlid component data is {count}</h2>
      <ChildB count={count}/>
    </>

   
  )
}

export default Child