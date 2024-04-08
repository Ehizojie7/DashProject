import FirstBody from "./FirstBody";
import SecondBody from "./SecondBody";
import React from 'react'


export default function Body() {
    return (
      <div className='lg:flex lg:flex-row mt-5'>
          <FirstBody />
         
          <SecondBody />
         
          
      </div>
    )
  }