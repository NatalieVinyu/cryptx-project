//MAIN CONTENT COMPONENT
import React from 'react'
import Sidebar from './Sidebar'
import Header from './Header'
import MetricCard from '../ui/MetricCard.jsx'


function MainContent() {
  return (
    <div className='min-h-screen flex items-center justify-center'>
      <div className='bg-white rounded-xl shadow flex w-[1200px] min-h-[500px]'>
        <Sidebar />
      
        <div className='flex flex-col flex-1'>
          <Header />

          <div className='grid grid-cols-2'>
            <MetricCard />
          </div>

        </div>
      </div>
      
    </div>
  )
}

export default MainContent