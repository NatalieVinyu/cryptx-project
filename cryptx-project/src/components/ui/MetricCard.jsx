import React from 'react'

function MetricCard() {
  const card = [
    {
      icon: "icon",
      rate: "+0.25%",
      price: "$40,291",
      name: "Bitcoin - BTC",
    },
    {
      icon: "icon",
      rate: "+0.25%",
      price: "$40,291",
      name: "Bitcoin - BTC",
    },
    {
      icon: "icon",
      rate: "+0.25%",
      price: "$40,291",
      name: "Bitcoin - BTC",
    },

  ]

  return (
    <div className='grid grid-cols-2 p-4'>
      {card.map((item, index) => (
      <div className='border-2 rounded-xl shadow-xl p-4 w-50'>
        <div key={index} className='flex'>
          {item.icon}
          <span className='flex justify-end'>{item.rate}</span>
        </div>

        <div className='mt-4'>
          <div className='text-2xl'>{item.price}</div>
          <p className='text-gray-700'>{item.name}</p>
        </div>
      </div>
      ))}
    </div>
  )
}

export default MetricCard
