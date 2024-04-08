import Image from 'next/image'
import React from 'react'

export default function SecondBody() {
  return (
    <div className='w-[486px]'>
        <div className='flex flex-row items-center mt-1 mb-4' style={{gap: 10}}>
            <Image 
            src='/images/street1.png'
            width={235}
            height={224}
            alt='street1'
            className='rounded-[8px]' 
            />

            <Image 
            src='/images/street2.png'
            width={235}
            height={224}
            alt='street2' 
            className='rounded-[8px]' 
            />
      
        </div>

        <div className='flex flex-row items-center' style={{gap: 10}}>
            <Image 
            src='/images/street3.png'
            width={235}
            height={224}
            alt='street3' 
            className='rounded-[8px]' 
            />

            <Image 
            src='/images/street4.png'
            width={235}
            height={224}
            alt='street4' 
            className='rounded-[8px]' 
            />

            </div>
        </div>
  )
}
