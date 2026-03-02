import React from 'react';
import { CiSearch, CiCircleQuestion } from "react-icons/ci";
import { GoBell } from "react-icons/go";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

function Header() {
  return (
    <div className='flex items-center h-16 bg-white border-b border-gray-200 px-6 md:px-6'>
      <header className='flex justify-between items-center w-full gap-3'>
        
        {/* SEARCH BAR */}
        <label className='flex border border-gray-400 rounded-xl items-center p-2 flex-1 min-w-0 max-w-xs'>
          <input 
            type="text" 
            placeholder='Search type of keywords'
            className='w-full min-w-0 outline-none text-xs'
            />
            <CiSearch className='w-4 h-4 text-gray-400 flex-shrink-0' />
        </label>

        <div className='flex ml-auto items-center gap-4'>
          <div className='flex gap-2 text-gray-600'>
            <GoBell className='w-5 h-5'/>
            <CiCircleQuestion className='w-5 h-5 hidden sm:block' />
          </div>

          <div className='flex items-center gap-2'>
            <div className='rounded-full bg-gray-700 w-8 h-8 md:h-8 flex-shrink-0'></div>
            <div className='hidden sm:flex flex-col leading-tight'>
              <h1 className='font-semibold'>Laurice</h1>
              <p className='text-gray-400 text-sm'>@laurice22</p>
            </div>
            <div>
              <MdOutlineKeyboardArrowDown className='text-gray-400 w-5 h-5 hidden sm:block'/>
            </div>
          </div>
          
        </div>


      </header>
    </div>
  )
}

export default Header
