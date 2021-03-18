import React from 'react'
import SundaeListItem from './SundaeListItem'

const SundaeList = ({sundaes}) => {
  return (
    <>
      <h1 className= "text-3xl"> SundaeList</h1>
      <ul>
        {sundaes.map((sundae) => (
          <SundaeListItem key={sundae.id} sundae={sundae} />
        ))}
      </ul>
    </>
  )
}



export default SundaeList