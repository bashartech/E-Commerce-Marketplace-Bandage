import React from 'react'
import Image from "next/image"
import Link from 'next/link'
export default function Section1() {
  return (
    <div>
      <div className='md:w-screen mt-5 md:h-[770px] flex justify-center items-center'>
        <div className='md:w-[1050px] flex flex-col gap-16 md:h-[700px]'>
            <div className=' justify-center items-center flex gap-3 flex-col'>
                <h1 className='font-bold text-[24px]'>EDITORS PICK</h1>
                <p>Problems trying to resolve the conflict between </p>
            </div>
            <div className="grid gap-[30px] md:w-[1050px] md:h-[500px] md:grid-cols-4  md:grid-rows-2">
                <div className='md:col-span-2 md:row-span-2'>
                  <Link href={"/shop"}>
                  <Image src={"/images/img3.svg"} alt='hero image' width={510} height={500}></Image> 
                  </Link>
                </div>
                <div className='md:row-span-2 '>
                <Link href={"/shop"}>
                  <Image src={"/images/img4.svg"} alt='hero image' 
                  className='w-[510px]'
                  width={240} height={500}></Image>  
                </Link>
                </div>
                <div>
                <Link href={"/shop"}>
                  <Image src={"/images/img5.svg"} alt='hero image' 
                  className='w-[510px]'
                  width={240} height={242}></Image> 
                </Link>
                </div>
                <div>
                <Link href={"/shop"}>
                  <Image src={"/images/img6.svg"} alt='hero image' 
                  className='w-[510px]'width={240} height={242}></Image>  
                </Link>
                </div>

            </div>

        </div>

      </div>
    </div>
  )
}

