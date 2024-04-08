import Image from 'next/image'
import React from 'react'

export default function SecondBody() {
  return (
    <div className='w-screen lg:w-[506px]'>
      <div className='hidden lg:flex'>
      <Image 
        src="/images/comments.png"
        height={1024}
        width={506}
        alt='comments'
        />
      </div>

      <div className=' lg:hidden'>
      <Image 
        src="/images/comments.png"
        height={400}
        width={300}
        alt='comments'
        />
      </div>
       
        </div>
  )
}
