import React from 'react'

const Car = (props) => {
    const {brand,Colour}=props;
  return (
    <>
    <div class="main">
      <h1>My car brand is {props.brand} and color is {Colour}</h1>
    </div>
    <div>
      <h2>My car brand is {brand} and color is {Colour}</h2>
    </div>
    <div>
      <h3>My car brand is {brand} and color is {Colour}</h3>
    </div>
    </>
  )
}

export default Car
