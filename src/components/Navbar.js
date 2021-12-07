import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className='text-center bg-pink-400 text-blue-900 p-4'>
      <NavLink
        className='inline-block px-4 py-2'
        activeClassName='text-blue-300'
        exact
        to='/'
      >
        All The Best Sundaes
      </NavLink>
      <NavLink
        className='inline-block px-4 py-2'
        activeClassName='text-yellow-300'
        exact
        to='/sundae/new'
      >
        Create A New Delicious Sundae
      </NavLink>
    </nav>
  );
}

export default Navbar;
