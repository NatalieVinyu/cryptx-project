import React from 'react';
import { CiSearch, CiCircleQuestion } from "react-icons/ci";
import { GoBell } from "react-icons/go";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

function Header() {
  return (
    <div className='flex items-center h-16 bg-white border-b border-gray-200 px-6 md:px-6'>
      <header className='flex justify-between items-center w-full'>
        
        {/* SEARCH BAR */}
        <label className='flex border border-gray-400 rounded-xl items-center p-2'>
          <input 
            type="text" 
            placeholder='Search type of keywords'
            className='w-50'
            />
            <CiSearch className='w-4 h-4 text-gray-400' />
        </label>

        <div className='flex ml-auto items-center gap-4'>
          <div className='flex gap-2 text-gray-600'>
            <GoBell className='w-5 h-5'/>
            <CiCircleQuestion className='w-5 h-5' />
          </div>

          <div className='flex items-center gap-4'>
            <div className='rounded-full bg-gray-700 w-10 h-10'></div>
            <div className='flex flex-col leading-tight'>
              <h1 className='font-semibold'>Laurice</h1>
              <p className='text-gray-400 text-sm'>@laurice22</p>
            </div>
            <div>
              <MdOutlineKeyboardArrowDown className='text-gray-400 w-5 h-5'/>
            </div>
          </div>
          
        </div>


      </header>
    </div>
  )
}

export default Header
