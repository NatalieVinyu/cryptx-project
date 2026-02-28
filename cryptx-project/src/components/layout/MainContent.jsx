//MAIN CONTENT COMPONENT
import React from 'react'
import Sidebar from './Sidebar'
import Header from './Header'
import MetricCard from '../ui/MetricCard.jsx'
import ChartVisual from '../ui/ChartVisual.jsx'
import TransactionTable from '../ui/TransactionTable.jsx'

function MainContent() {
  return (
    <div className='min-h-screen flex items-center justify-center text-xs'>
      <div className='bg-white rounded-xl shadow flex w-[1000px] min-h-[500px]'>
        <Sidebar />
      
        <div className='flex flex-col flex-1'>
          <Header />

          <div className='grid grid-cols-1 md:grid-cols-2 '>
            <MetricCard />
            <ChartVisual />
          </div>

          <div className='pb-6'>
            <TransactionTable />
          </div>

        </div>
      </div>
      
    </div>
  )
}

export default MainContent