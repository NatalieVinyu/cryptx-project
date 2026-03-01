import React from 'react'
import lineGraphBlue from '../../assets/llline-blue.svg'
import lineGraphYellow from '../../assets/llline-yellow.svg'
import lineGraphGreen from '../../assets/llline-green.svg'
import { SiBitcoinsv, SiLitecoin, SiCardano } from "react-icons/si";
import { LiaEthereum } from "react-icons/lia";
import { IoCaretUpCircle, IoCaretDownCircle } from "react-icons/io5";



function TransactionTable() {
  const liveMarket = [
    {
      icon: LiaEthereum,
      title: "Ethereum",
      color: "oklch(39.8% 0.195 277.366)",
      description: "ETH / USDT",
      change: "+14.02%",
      price: "39,786",
      chart: lineGraphBlue,
    },
    {
      icon: SiBitcoinsv,
      title: "Bitcoin",
      color: "oklch(75% 0.183 55.934)",
      description: "ETH / USDT",
      change: "+4.02%",
      price: "21,786",
      chart: lineGraphYellow
    },
    {
      icon: SiLitecoin,
      title: "Litecoin",
      color: "oklch(42.4% 0.199 265.638)",
      description: "ITC / USDT",
      change: "-4.02%",
      price: "9,786",
      chart: lineGraphBlue
    },
    {
      icon: SiCardano,
      title: "Cardano",
      color: "oklch(39.3% 0.095 152.535)",
      description: "ADA / USDT",
      change: "+0.02%",
      price: "4,786",
      chart: lineGraphGreen
    },
  ]
  const transactions = [
    {
      icon: IoCaretUpCircle,
      title: "Ethereum",
      color: "oklch(39.3% 0.095 152.535)",
      price: "$24,102",
      description: "Received",
      date: "Today, 19:30"
    },
    {
      icon: IoCaretDownCircle,
      title: "Bitcoin",
      color: "oklch(75% 0.183 55.934)",
      price: "$4,157",
      description: "Buy",
      date: "Today, 14:32"
    },
    {
      icon: IoCaretDownCircle,
      title: "Bitcoin",
      color: "oklch(75% 0.183 55.934)",
      price: "$64,784",
      description: "Buy",
      date: "Today, 13:50"
    },
    {
      icon: IoCaretDownCircle,
      title: "Litecoin",
      color: "oklch(75% 0.183 55.934)",
      price: "$14,265",
      description: "Buy",
      date: "Today, 09:38"
    },
  ]

  return (
    <div className='grid grid-cols-1 md:grid-cols-3 items-stretch gap-2 pl-6 pt-6'>

      {/* LIVE MARKET SECTION */}
      <div className='flex flex-col md:col-span-2'>
        <div className='font-bold pb-4'>
          <h1>Live Market</h1>
        </div>

        <div className='flex flex-col gap-6 '>
          {liveMarket.map((items, index) => {
            const Icon = items.icon;
          
          return (
         <div key={index} className='flex gap-6 items-center'> 

            <div className='border-2 border-gray-300 rounded-full p-2'>
              <Icon className='w-5 h-5' style={{ color: items.color }}/>
            </div>

            <div className='flex flex-col'>
              <div className='font-bold pb-1'>{items.title}</div>
              <div className='text-gray-400'>{items.description}</div>
            </div>

            <div className='flex flex-col'>
              <div className='text-gray-400 pb-1'>Change</div>
              <div className={`font-semibold ${items.change.startsWith("+") ? "text-green-300" : "text-red-300"}`}>{items.change}</div>
            </div>

            <div className='flex flex-col'>
              <div className='text-gray-400 pb-1'>Price</div>
              <div className='font-bold'>{items.price} USD</div>
            </div>

            <div className='pl-6'>
              <img src={items.chart} className="h-8 w-auto" />
            </div>
          </div>
            );
          })}
         </div>
          
      </div>


      {/* TRANSACTIONS SECTION */}
      <div className='flex flex-col md:col-span-1'>
        <div className='font-bold pb-4'>
          Transactions
        </div>

        <div className='flex flex-col gap-4 '>
          {transactions.map((ts, index) => {
            const Icon = ts.icon;

            return (
          <div key={index} className='flex gap-6 items-center'>

            <div className='border-1 border-gray-300 rounded-full p-2'>
              <Icon className='w-4 h-4' style={{ color: ts.color }}/>
            </div>
            <div className='flex flex-col'>
              <div className='font-bold pb-1'>{ts.title}</div>
              <div className='text-gray-400'>{ts.description}</div>
            </div>

            <div className='flex flex-col'>
              <div className='text-bold pb-1'>{ts.price}</div>
              <div className='text-gray-400'>{ts.date}</div>
            </div>
          </div>
          );
        })}
        </div>
       
      </div>
      
    </div>
  )
}

export default TransactionTable
