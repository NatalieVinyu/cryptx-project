import React from 'react'
import { SiBitcoinsv, SiLitecoin, SiCardano } from "react-icons/si";
import { FaEthereum } from "react-icons/fa";

function MetricCard() {
  const cards = [
    {
      icon: SiBitcoinsv,
      rate: "+0.25%",
      price: "$40,291",
      name: "Bitcoin - BTC",
    },
    {
      icon: FaEthereum,
      rate: "+0.25%",
      price: "$18,291",
      name: "Ethereum - ETH",
    },
    {
      icon: SiLitecoin,
      rate: "+0.25%",
      price: "$8,291",
      name: "Litecoin - ITL",
    },
    {
      icon: SiCardano,
      rate: "-2.05%",
      price: "$3,291",
      name: "Cardano - ADA",
    },
  ]

  return (
    <div className='grid grid-cols-2 p-6 gap-2'>
      {cards.map((item, index) => {
        const Icon = item.icon;
             
        return (
        <div key={index} className='rounded-xl shadow-lg p-4 w-40'>

          <div className='flex justify-between items-center'>
            <div className='border-2 rounded-xl p-2'>
              <Icon className='text-2xl w-6 h-6'/>
            </div>            
            <span 
              className={`text-xm ${item.rate.startsWith("+") ? "text-green-500" : "text-red-500"}`}>
                {item.rate}
            </span>
          </div>

          <div className='mt-4'>
            <div className='text-2xl font-bold'>{item.price}</div>
            <p className='text-gray-400 pt-2'>{item.name}</p>
          </div>
        </div>
        );
      })}
    </div>
  );
}

export default MetricCard
