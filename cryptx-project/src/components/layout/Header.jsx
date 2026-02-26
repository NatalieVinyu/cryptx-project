import React from 'react'

function Header() {
  return (
    <div className='flex items-center h-16 bg-white border-b px-6'>
      <header className='flex'>
        
        {/* SEARCH BAR */}
        <label className='border-2 rounded-xl'>
          <input 
            type="text" 
            placeholder='Search type of keywords'
            className='p-2'
            />
        </label>


      </header>
    </div>
  )
}

export default Header
