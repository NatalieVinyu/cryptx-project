import React from 'react'
import { useState } from "react";
import { HiSquares2X2 } from "react-icons/hi2";
import { LuChartPie, LuWalletCards, LuSettings, LuWallet } from "react-icons/lu";
import { FiMail } from "react-icons/fi";
import { BiLogOut } from "react-icons/bi";
import { IoInfinite } from "react-icons/io5";

function Sidebar() {
  const [active, setActive] = useState("Overview")

  const menu = [
    {
      label: "Overview",
      icon: HiSquares2X2,
    },
    {
      label: "Chart",
      icon: LuChartPie,
    },
    {
      label: "Transactions",
      icon: LuWalletCards,
    },
    {
      label: "Wallet",
      icon: LuWallet,
    },
    {
      label: "Mail Box",
      icon: FiMail,
    },
    {
      label: "Settings",
      icon: LuSettings,
    },
    {
      label: "Logout",
      icon: BiLogOut,
    }
  ]
  return (
    <aside className='bg-gray-100 p-6 w-50'>

        {/* LOGO */}
        <div className='flex items-center gap-2 text-2xl font-bold pb-12'>
          <IoInfinite className='text-blue-500 w-10 h-10'/>
          CryptX
        </div>

        <ul className='space-y-6'>
          {menu.map((item) => {
            const Icon = item.icon;
            const isActive = active === item.label;
          
          return (
          <li 
            key={item.label}  
            className={`relative flex items-center gap-4 text-base ${
            isActive ? "text-blue-500" : "text-gray-400"}`}
          >
            <Icon className="text-xl" />
            <span className='font-medium'>{item.label}</span>

            {isActive && (
              <span className='absolute right-3 w-2 h-2 bg-blue-500 rounded-full' />
            )}

          </li>
          );
          })}
        </ul>
      </aside>
        
  )
}

export default Sidebar
