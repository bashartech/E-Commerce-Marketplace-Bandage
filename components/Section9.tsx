import React from 'react'

export default function Section9() {
  return (
    <div className='flex justify-center items-center'>
      <div className='w-[313px] my-20  h-[74px] grid grid-cols-7  justify-center items-center gap-1 border-black border-[1px]'>
        <div  className='text-center col-span-2 h-full  flex justify-center items-center border-r-2 border-black '
        >First</div>
        <div className='text-[#23A6F0]  h-full  flex justify-center items-center'>1</div>
        <div className='bg-[#23A6F0]  h-full  flex justify-center items-center text-white'>2</div>
        <div className=' text-[#23A6F0] h-full  flex justify-center items-center border-r-2 border-black'>3</div>
        <div className='col-span-2 font-bold text-[#23A6F0] h-full  flex justify-center items-center'>Next</div>

      </div>
    </div>
  )
}

