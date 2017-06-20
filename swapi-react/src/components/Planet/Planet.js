import React from 'react';

export default function Planet(props) {
  console.log(props.fn);
  return (
    <div className="">

      <h1>Planet Name:</h1>
      <h3>{props.name}</h3>
      <h1>Population:</h1>
      <h3>{props.population}</h3>
      <button onClick={()=> props.fn()}>Inc</button>
      <h1>count: {props.count}</h1>
    </div>
  )
}
