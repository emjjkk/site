'use client'

import {useState, useEffect} from 'react'
import { LuArrowRight } from 'react-icons/lu'

export default function({dict} : any){
    const d = dict
    return(
        <>
            <main className="relative flex items-center justify-center flex-col w-[100dvw] h-[82dvh] text-center px-3">
                <div className="absolute w-full top-5 flex items-center justify-center gap-2">
                    <img src="/assets/logo.png" alt="" className="h-6 w-auto" />
                </div>
                <h1 className="text-5xl font-mono mb-5 text-[#f44034ff]">{d.heading}</h1>
                <p className="text-lg md:w-2/4 mb-5">{d.subtitle}</p>
                <div className="flex items-center border border-[#f44034ff] border-2 rounded-full p-[2px]">
                    <input type="text" name="" id="" className="py-3 px-5 text-sm outline-none" placeholder='Enter your email address'/>
                    <button type="submit" className="text-sm rounded-full py-3 px-5 text-white bg-[#ecc94bff] hover:bg-[#f44034ff] flex items-center gap-1">{d.notify_me}<LuArrowRight/></button>
                </div>
            </main>
            <div className="w-[100dvw] h-[18dvh] bg-pattern-bold"></div>
        </>
    )
}