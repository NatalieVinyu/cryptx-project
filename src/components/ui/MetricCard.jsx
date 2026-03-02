import React from 'react'
import { SiBitcoinsv, SiLitecoin, SiCardano } from "react-icons/si";
import { LiaEthereum } from "react-icons/lia";

function MetricCard() {
  const cards = [
    {
      icon: SiBitcoinsv,
      color: "oklch(75% 0.183 55.934)",
      rate: "+0.25%",
      price: "$40,291",
      name: "Bitcoin - BTC",
    },
    {
      icon: LiaEthereum,
      rate: "+0.25%",
      color: "oklch(39.8% 0.195 277.366)",
      price: "$18,291",
      name: "Ethereum - ETH",
    },
    {
      icon: SiLitecoin,
      rate: "+0.25%",
      color: "oklch(42.4% 0.199 265.638)",
      price: "$8,291",
      name: "Litecoin - ITL",
    },
    {
      icon: SiCardano,
      rate: "-2.05%",
      color: "oklch(39.3% 0.095 152.535)",
      price: "$3,291",
      name: "Cardano - ADA",
    },
  ]

  return (
    <div className='grid grid-cols-2 p-4 gap-3'>
      {cards.map((item, index) => {
        const Icon = item.icon;
             
        return (
        <div key={index} className='rounded-xl shadow-lg p-4 w-full'>

          <div className='flex justify-between items-center'>
            <div className='rounded-xl p-2' style={{ backgroundColor: item.color }}>
              <Icon className='text-2xl w-6 h-6 text-white' />
            </div>            
            <span 
              className={`text-xm ${item.rate.startsWith("+") ? "text-green-500" : "text-red-500"}`}>
                {item.rate}
            </span>
          </div>

          <div className='mt-4'>
            <div className='text-xl md:text-2xl font-bold'>{item.price}</div>
            <p className='text-gray-400 pt-2 text-xs md:text-sm'>{item.name}</p>
          </div>
        </div>
        );
      })}
    </div>
  );
}

export default MetricCard
