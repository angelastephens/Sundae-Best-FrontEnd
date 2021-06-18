import React from "react";
import SundaeListItem from "./SundaeListItem";

const SundaeList = ({ sundaes, foo }) => {
  const sortedSundaes = sundaes.sort(function (a, b) {
    return b.like_count - a.like_count;
  });

  // const mostLikeSundaes = sundaes.filter(function (sundae) {
  //   return sundae.like_count > 15;
  // });

  // mostLikeSundaes;

  return (
    <>
      <h1 className='text-3xl'> Sundae List</h1>
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
