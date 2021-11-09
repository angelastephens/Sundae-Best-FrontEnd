import React from "react";

const SundaeDetailswithBorder = ({sundae}) => {
  return (
    <div className='max-w-6xl w-3/4 mx-auto '>
      <h1 className='text-3xl'> Enter your ingredients</h1>
      <ul className=' border-dotted border-4 border-light-blue-500 mt-4 shadow-lg px-4 py-6 mb-4 w-1/2'>
        {sundae.name} <br />
        Number of Scoops: {sundae.scoops} <br />
        Ice Cream Flavors: {sundae.ice_cream_flavors} <br />
        Toppings: {sundae.toppings}
      </ul>
    </div>
  );
}

export default SundaeDetailswithBorder;
