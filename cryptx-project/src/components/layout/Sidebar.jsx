import React from 'react'
import { HiSquares2X2 } from "react-icons/hi2";
import { LuChartPie, LuWalletCards, LuSettings } from "react-icons/lu";
import { PiWallet } from "react-icons/pi";
import { FiMail } from "react-icons/fi";
import { BiLogOut } from "react-icons/bi";

function Sidebar() {
  return (
    <div className='bg-gray-100 p-6'>
      <div>
        <div className='text-2xl font-bold pb-12'>
          CryptX
        </div>

      <aside className='w-45'>
        <ul className='space-y-6'>
          <li className='flex gap-4 text-base'>
            <HiSquares2X2 className='w-6 h-6' />
            Overview
          </li>
          <li className='flex gap-4 text-base'>
            <LuChartPie className='w-6 h-6' />
            Chart
          </li>
          <li className='flex gap-4 text-base'>
            <PiWallet className='w-6 h-6' />
            Transactions
          </li>
          <li className='flex gap-4 text-base'>
            <LuWalletCards className='w-6 h-6' />
            Wallet
          </li>
          <li className='flex gap-4 text-base'>
            <FiMail className='w-6 h-6' />
            Mail Box
          </li>
          <li className='flex gap-4 text-base'>
            <LuSettings className='w-6 h-6' />
            Setting
          </li>
          <li className='flex gap-4 text-base'>
            <BiLogOut className='w-6 h-6' />
            Logout
          </li>
        </ul>
      </aside>
        
      </div>
    </div>
  )
}

export default Sidebar
