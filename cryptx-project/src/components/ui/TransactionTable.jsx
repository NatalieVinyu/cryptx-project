import React from 'react'

function TransactionTable() {
  const liveMarket = [
    {
      icon: "icon",
      title: "Ethereum",
      description: "ETH/USDT",
      change: "+14.02%",
      price: "39,786",
      chart: "chart"
    }
  ]
  const Transactions = [
    {
      icon: "icon",
      title: "Ethereum",
      price: "$24,102",
      description: "Received",
      date: "Today, 19:30"
    }
  ]

  return (
    <div className='grid grid-cols-2'>

      {/* LIVE MARKET SECTION */}
      <div className='flex flex-col'>
        <div>
          <h1>Live Market</h1>
        </div>

        <div className='flex gap-6'>
          <div className='border-2 rounded-full p-2'>icon</div>
            <div className='flex flex-col'>
              <div className='font-bold'>Ethereum</div>
              <div className='text-gray-400'>ETH/USDT</div>
            </div>

            <div className='flex flex-col'>
              <div className='text-gray-400'>Change</div>
              <div className='text-green-300'>+14.02%</div>
            </div>

            <div className='flex flex-col'>
              <div className='text-gray-400'>Price</div>
              <div className='font-bold'>39,786 USD</div>
            </div>

            <div>chart</div>
          </div>
      </div>


      {/* TRANSACTIONS SECTION */}
      <div className=''>
        <div>
          Transactions
        </div>

        <div className='flex gap-6'>
          <div>Icon</div>
          <div className='flex flex-col'>
            <div className='font-bold'>Ethereum</div>
            <div className='text-gray-400'>Received</div>
          </div>

          <div className='flex flex-col'>
            <div className='text-bold'>$24,102</div>
            <div className='text-gray-400'>Today,19:30</div>
          </div>
        </div>
       

      </div>
      
    </div>
  )
}

export default TransactionTable
