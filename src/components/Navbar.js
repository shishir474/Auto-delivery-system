import React from 'react';
import Logo from "../logo.png";
import homelogo from "../homelogo.png"
import * as FaIcons from "react-icons/fa";


function navbar() {
  return (
    <>
    <div className='flex px-6 py-2 space-x-8 items-center border bg-stone-900 relative'>
        <h2 className='font-bold text-5xl text-white' > Procurement </h2>
        <FaIcons.FaOutdent className='text-white w-[30px] h-[40px]' />
        <FaIcons.FaHome className='text-white w-[30px] h-[40px] absolute right-11'/>
        {/* <img src={homelogo} className='w-[15px] md:w-[80px] absolute right-10'></img> */}
    </div>
        
    </>
  )
}

export default navbar