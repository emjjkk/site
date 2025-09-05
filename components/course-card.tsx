'use client'

import {
  LuGraduationCap,
  LuClock12,
  LuArrowUpRight,
  LuBuilding,
  LuBanknote
} from 'react-icons/lu'
import { useEffect, useState } from 'react'

export default function Card() {
  return (
    <div className="w-full md:w-[300px] min-h-32 border bg-background">
      <div className="w-full relative h-[180px] bg-slate-300 relative bg-cover bg-center">
        <div className="w-32 h-20 bg-white absolute bottom-4 right-4"></div>
      </div>
      <div className="w-full p-4">
        <h1 className="text-lg font-bold mb-2">Introduction to Computer Science</h1>
        <p className="text-sm text-slate-400 mb-5">Eligendi earum laudantium, vero ipsa nostrum, nisi, dolor molestiae ad suscipit ipsam quo voluptate?</p>
        <hr />
        <div className="w-full flex items-center justify-between mt-5">
          <p className="text-sm flex items-center">
            <LuBuilding className="mr-1 relative bottom-[1px]" /> Provided By
          </p>
          <p className="text-sm">ALU Education</p>
        </div>
        <div className="w-full flex items-center justify-between mt-2">
          <p className="text-sm flex items-center">
            <LuBanknote className="mr-1 relative bottom-[1px]" /> Cost
          </p>
          <p className="text-sm">22,000 RWF</p>
        </div>
        <div className="w-full flex items-center justify-between mt-2">
          <p className="text-sm flex items-center">
            <LuGraduationCap className="mr-1 relative bottom-[1px]" /> Price
          </p>
          <p className="text-sm">Short Course</p>
        </div>
        <div className="w-full flex items-center justify-between mt-2 mb-5">
          <p className="text-sm flex items-center">
            <LuClock12 className="mr-1 relative bottom-[1px]" /> Duration
          </p>
          <p className="text-sm">~ 9 weeks</p>
        </div>
        <a href="#">
          <button className="p-2 bg-foreground w-full flex items-center text-background justify-center gap-2">
            Learn More <LuArrowUpRight />
          </button>
        </a>
      </div>
    </div>
  )
}