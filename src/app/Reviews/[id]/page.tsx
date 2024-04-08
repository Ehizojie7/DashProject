import React from 'react'
import { BiChevronDown, BiStar  } from "react-icons/bi";


export default function Review() {
  return (
    <div >
        <div className='w-screen lg:w-[695px] px-6 py-6 my-[10vh] border mx-auto shadow-xl'>
          <div className='text-[#1E1E1E] text-[18px] text-center font-semi-bold' style={{fontFamily: 'Inter'}}>Review Location</div>

          <div className='text-[#1E1E1E] text-[20px] font-medium' style={{fontFamily: 'Inter'}}>Bonny and Clyde Street, Ajao Estate, Lagos</div>

          <div className='bg-[#F3F7FE] flex flex-row items-center justify-between p-2 rounded-md mt-3'>
            <span className='text-[#1E1E1E] text-[16px]  font-semi-bold' style={{fontFamily: 'Inter'}}>Select Amenities</span>
            <span><BiChevronDown /></span>
          </div>

          <div className='mt-3'>
            <span className='text-[#1E1E1E] text-[16px]  font-semi-bold' style={{fontFamily: 'Inter'}}>Rate Location</span>
            <div className='flex flex-row items-center text-[#FFC70066]'>
            <BiStar size={20}/>
            <BiStar size={20}/>
            <BiStar size={20}/>
            <BiStar size={20}/>
            <BiStar size={20}/>
           </div>
          </div>

          <div className='mt-3'>
            <div className='text-[#1E1E1E] text-[16px] font-semi-bold' style={{fontFamily: 'Inter'}}>Write Review</div>
            <input
            className='pl-2 w-full mx-3 lg:mx-0 lg:w-[647px] h-[150px] mt-2 border'
            placeholder='Placeholder'
            
            />
          </div>

          <div className='mt-3'>
            <span className='text-[#1E1E1E] text-[16px]  font-semi-bold' style={{fontFamily: 'Inter'}}>Post as Anonymous</span>
            <div className='flex flex-row items-center' style={{gap: 20}}>
            <button 
                    className='bg-[#E4E9FB] py-4 px-10 w-[312px] mt-5 rounded-md text-white text-base font-medium'
                    style={{fontFamily: 'Inter'}}
                    
                    >
                        SUBMIT
                    </button>

                    <button 
                    className='bg-[#ffffff] border border-[#5378F6] py-4 px-10  w-[312px] mt-5 rounded-md text-[#5378F6] text-base font-medium'
                    style={{fontFamily: 'Inter'}}
                    
                    >
                        CANCEL
                    </button>
            </div>
          </div>


        </div>
       </div>
  )
}
