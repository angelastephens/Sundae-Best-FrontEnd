import React from "react";
import SundaeListItem from "./SundaeListItem";

const SundaeList = ({ sundaes, foo }) => {
  const sortedSundaes = sundaes.sort(function (a, b) {
    return b.like_count - a.like_count;
  });
  

 

  return (
    <>
      <h1 className='text-3xl'> Amazing Sundaes</h1>
      <h1> {foo} </h1>

      
      <ul>  
        {sortedSundaes.map((sundae) => (               
          <SundaeListItem key={sundae.id} sundae={sundae} />
        ))}
      </ul>
    </>
  );
};

export default SundaeList;



