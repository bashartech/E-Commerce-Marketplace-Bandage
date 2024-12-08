import React from 'react'
import { Button } from "@/components/ui/button"
export default function HeroPage() {
  return (
    <div>
      <div className="md:w-screen flex justify-center items-center bg-[url('/images/img2.svg')]  md:h-[716px] ">
      <div className='md:w-[1000px] flex flex-col gap-6 md:gap-8 justify-center items-center md:items-start text-[white] h-[651px]' >
        <p className='font-bold'>SUMMER 2020</p>
        <h1 className='font-bold text-[40px] md:text-[58px]'>NEW COLLECTION</h1>
        <p className='w-[376px] text-center md:text-start text-[20px]'>We know how large objects will act, 
        but things on a small scale.</p>
        <div className='w-[221px] h-[62px]  flex justify-center items-center md:items-start '>
        <Button className='font-bold  text-[24px] w-[221px] h-[62px] bg-[#2DC071]'>SHOP NOW</Button>
        </div>


      </div>
      </div>
    </div>
  )
}
