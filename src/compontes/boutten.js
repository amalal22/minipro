import React, { useState } from 'react'

const Boutten = () => {
    
const [cooke, increas]=useState(0);
  const changeCooke=()=>{
    increas(cooke+1);
    console.log(cooke)
  };
  return (
    <div  > 
         <button onClick={changeCooke} type="button" className="btn btn-info  justify-content-center" >
            Cookies
          </button>
          <h1>your Score is {cooke}</h1>

    </div>
  )
}

export default Boutten