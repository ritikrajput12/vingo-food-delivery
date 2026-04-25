import React from 'react'
import { FaLocationDot } from "react-icons/fa6";

function Nav() {
  return (
    <div className='w-full h-[80px] flex items-center justify-between md:justify-center gap-[30px] px-[20px] fixed top-0 z-[9999] bg-[#fff9f6]'>

      {/* Logo */}
      <h1 className='text-3xl font-bold text-[#ff4d2d]'>Vingo</h1>

      {/* Location Box */}
      <div className='md:w-[60%] lg:w-[40%] h-[60px] bg-white shadow-xl rounded-lg flex items-center gap-[10px] px-[15px]'>
        
        <FaLocationDot className='text-[#ff4d2d] text-xl' />
        
        <span className='text-gray-700 font-medium'>
          Jhansi
        </span>

      </div>

    </div>
  )
}

export default Nav