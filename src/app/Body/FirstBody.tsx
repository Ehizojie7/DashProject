"use client";
import Link from 'next/link'
import React, { useState } from 'react'

export default function FirstBody() {

    const [address, setAddress] = useState(' ');

    const handleSubmit = (e:any) => {
        e.preventDefault(); // Prevent default form submission behavior
        // Now, you can redirect to the Reviews page with the address as a query parameter
        // This can be done using the Next.js Router or by dynamically setting the Link href
      };
    
      const handleInputChange = (e:any) => {
        setAddress(e.target.value); // Update the address state with the input value
      };

  return (
    <div className='w-[702px] my-auto'>
        <div className='text-[#1E1E1E] lg:text-[64px] font-bold lg:w-[504px] lg:h-[154px]' style={{fontFamily: 'inter'}}>
            Find a place you will love to live!
            </div>

            <p className='w-[200px] lg:w-[507px] lg:h-[87px] text-base text-[#1E1E1E] lg:text-[24px] font-normal  mt-7'>
                See through the lenses of people who have lived or visited the neighbourhood you might have in mind.
                </p>

                <form onSubmit={handleSubmit}>
                <div className='mt-10 '>
                   
                    <input 
                    className='border border-[#D4DCF1] rounded-md py-4 px-3 lg:w-[557px] h-[50px]'
                    placeholder='Enter Address'
                    value={address}
                    onChange={handleInputChange}
                    />
                </div>

                <div>
                    <Link href={`/Reviews`}>
                    <button 
                    className='bg-[#3366FF] py-4 px-10 mt-5 rounded-md text-white text-base font-medium'
                    style={{fontFamily: 'Inter'}}
                    
                    >
                        SEARCH
                    </button>
                    </Link>
                </div>
                </form>
        </div>
  )
}
