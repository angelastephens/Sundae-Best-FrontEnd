import React from 'react'
import {Link} from 'react-router-dom'

const SundaeListItem = ({ sundae }) => {
  return (
    <li className="" key={sundae.id}>
      <Link to={`/sundaes/${sundae.id}`} >name {sundae.name} </Link>
      Scoop count {sundae.scoops}
      Ice Cream Flavors {sundae.ice_cream_flavors}<br/>
      Toppings {sundae.toppings}<br/>
      Like Count {sundae.like_count}
    </li>
  )
}

export default SundaeListItem