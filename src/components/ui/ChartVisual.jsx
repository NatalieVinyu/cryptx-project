import React from 'react'
import Image from '../../assets/BTC Prices.png'

function ChartVisual() {
  return (
    <div className='p-2'>
      {/* Imported Image */}
      <div className='w-full'>
        <img src={Image} alt="Chart Visual" className='w-full h-auto object-contain' />
      </div>
    </div>
  )
}

export default ChartVisual
