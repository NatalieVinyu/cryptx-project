import React from 'react'
import lineGraphBlue from '../../assets/llline-blue.svg'
import lineGraphYellow from '../../assets/llline-yellow.svg'
import lineGraphGreen from '../../assets/llline-green.svg'


function TransactionTable() {
  const liveMarket = [
    {
      icon: "icon",
      title: "Ethereum",
      description: "ETH / USDT",
      change: "+14.02%",
      price: "39,786",
      chart: lineGraphBlue,
    },
    {
      icon: "icon",
      title: "Bitcoin",
      description: "ETH / USDT",
      change: "+4.02%",
      price: "21,786",
      chart: lineGraphYellow
    },
    {
      icon: "icon",
      title: "Litecoin",
      description: "ITC / USDT",
      change: "-4.02%",
      price: "9,786",
      chart: lineGraphBlue
    },
    {
      icon: "icon",
      title: "Cardano",
      description: "ADA / USDT",
      change: "+0.02%",
      price: "4,786",
      chart: lineGraphGreen
    },
  ]
  const transactions = [
    {
      icon: "icon",
      title: "Ethereum",
      price: "$24,102",
      description: "Received",
      date: "Today, 19:30"
    },
    {
      icon: "icon",
      title: "Bitcoin",
      price: "$4,157",
      description: "Buy",
      date: "Today, 14:32"
    },
    {
      icon: "icon",
      title: "Bitcoin",
      price: "$64,784",
      description: "Buy",
      date: "Today, 13:50"
    },
    {
      icon: "icon",
      title: "Litecoin",
      price: "$14,265",
      description: "Buy",
      date: "Today, 09:38"
    },
  ]

  return (
    <div className='grid grid-cols-2'>

      {/* LIVE MARKET SECTION */}
      <div className='flex flex-col'>
        <div>
          <h1>Live Market</h1>
        </div>

        <div className='flex flex-col gap-6'>
          {liveMarket.map((items, index) => (

         <div key={index} className='flex gap-6'>  
            <div className='border-2 rounded-full p-2'>{items.icon}</div>
            <div className='flex flex-col'>
              <div className='font-bold'>{items.title}</div>
              <div className='text-gray-400'>{items.description}</div>
            </div>

            <div className='flex flex-col'>
              <div className='text-gray-400'>Change</div>
              <div className={`font-semibold ${items.change.startsWith("+") ? "text-green-300" : "text-red-300"}`}>{items.change}</div>
            </div>

            <div className='flex flex-col'>
              <div className='text-gray-400'>Price</div>
              <div className='font-bold'>{items.price} USD</div>
            </div>

            <img src={items.chart} className="h-8 w-auto" />
          </div>
          ))}
         </div>
          
      </div>


      {/* TRANSACTIONS SECTION */}
      <div className=''>
        <div>
          Transactions
        </div>

        <div className='flex flex-col gap-6'>
          {transactions.map((ts, index) => (

          <div key={index} className='flex gap-6'>
            <div>{ts.icon}</div>
            <div className='flex flex-col'>
              <div className='font-bold'>{ts.title}</div>
              <div className='text-gray-400'>{ts.description}</div>
            </div>

            <div className='flex flex-col'>
              <div className='text-bold'>{ts.price}</div>
              <div className='text-gray-400'>{ts.date}</div>
            </div>
          </div>
          ))}
        </div>
       
      </div>
      
    </div>
  )
}

export default TransactionTable
