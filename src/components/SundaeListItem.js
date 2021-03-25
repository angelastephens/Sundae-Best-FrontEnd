import React from 'react'
import {Link} from 'react-router-dom'

const SundaeListItem = ({ sundae }) => {
  return (
    <li
      className='border-dotted border-4 border-yellow-200 max-w-6xl w-2/4 my-8 shadow-md px-4 py-6'
      key={sundae.id}
    >
      <Link to={`/sundaes/${sundae.id}`}>
        <strong> Name: </strong> {sundae.name}{" "}
      </Link>
      {/* Scoop count {sundae.scoops}
      Ice Cream Flavors {sundae.ice_cream_flavors}<br/>
      Toppings {sundae.toppings}<br/>
      Like Count {sundae.like_count} */}
    </li>
  );
}

export default SundaeListItem