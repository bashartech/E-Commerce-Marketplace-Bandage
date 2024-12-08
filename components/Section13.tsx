import React from 'react'
import { Button } from "@/components/ui/button"

export default function Section13() {
  return (
    <div>
        <div className='lg:w-screen lg:h-[729px] flex justify-center items-center bg-[url("/images/img77.svg")]'>
            <div className='lg:w-[1050px] lg:flex items-center lg:h-[545px] '>
                <div className='lg:w-[599px] flex flex-col gap-[35px] lg:h-[321px]'>
                    <h1 className='font-bold text-[#252B42]'>ABOUT COMPANY</h1>
                    <h1 className='font-bold text-[58px] text-[#252B42]'>ABOUT US</h1>
                    <p className='text-[20px] w-[376px] '>We know how large objects will act, 
                    but things on a small scale</p>
                    <Button className='font-bold bg-[#23A6F0]  w-[195px] h-[52px] "> '>Get Quote Now</Button>

                </div>

            </div>

        </div>
      
    </div>
  )
}
