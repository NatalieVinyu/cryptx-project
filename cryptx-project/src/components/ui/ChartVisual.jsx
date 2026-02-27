import React from 'react'

function ChartVisual() {
  return (
    <div>
      <div>
        <h1>BTC Prices</h1>
      </div>

      <svg
        viewBox="0 0 400 200"
        className="w-full h-full"
        preserveAspectRatio="none"
      >
        {/* Grid lines 
        <line x1="0" y1="50" x2="400" y2="50" stroke="#e5e7eb" />
        <line x1="0" y1="100" x2="400" y2="100" stroke="#e5e7eb" />
        <line x1="0" y1="150" x2="400" y2="150" stroke="#e5e7eb" />*/}

        {/* BTC Line */}
        <path
          d="M0 180 L70 120 L150 130 L150 90 L200 100 L250 70 L300 80 L350 40 L400 60"
          fill="none"
          stroke="#f59e0b"
          strokeWidth="2"
        />

        {/* Area fill */}
       <path
          d="M0 180 L70 120 L100 130 L150 90 L200 100 L250 70 L300 80 L350 40 L400 60 L400 200 L0 200 Z"
          fill="rgba(245,158,11,0.15)"
        />
      </svg>
    </div>
  )
}

export default ChartVisual
