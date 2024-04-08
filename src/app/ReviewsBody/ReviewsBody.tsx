import React from 'react'
import FirstBody from './FirstBody'
import SecondBody from './SecondBody'

export default function ReviewsBody() {
  return (
    <div className='flex flex-row mt-10' style={{gap: 40}}>
        <FirstBody />
        <div className='hidden lg:flex'>
        <SecondBody />
        </div>
        
    </div>
  )
}
