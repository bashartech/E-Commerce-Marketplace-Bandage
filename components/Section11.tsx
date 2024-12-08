import React from 'react'
import Image from "next/image";

export default function Section11() {
  return (
    <div>
       <div className="lg:w-screen flex justify-center items-center h-[92px]">
        <div className="lg:w-[1049px] lg:h-full flex  items-center justify-center gap-5">
          <h1 className="text-[16px] text-[#252B42]">
          Description 
          </h1>
         
          <h1>Additional Information</h1>
          <h1>Reviews (0)</h1>
        </div>
      </div>
      <div className=' lg:h-[499px]  p-10 lg:p-0 mt-10 lg:w-screen flex justify-center items-center '>
        <div className="main grid lg:grid-cols-3 gap-10 lg:w-[1056px] h-full">
          <div className="left  flex justify-center items-center lg:justify-start lg:items-start">
          <Image src={"/images/img49.svg"} alt='hero image' width={316} height={372}></Image>


          </div>
          <div className="mid flex flex-col gap-3 ">
          <h1 className='font-bold text-[24px]'>the quick fox jumps over </h1>
          <p>
          Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.
<br /> <br />
Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.
<br /> <br />
Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.

          </p>

          </div>
          <div className="right flex flex-col gap-3">
<h1 className='font-bold text-[24px] mb-5'>the quick fox jumps over </h1>
<div>the quick fox jumps over the lazy dog</div>
<div>the quick fox jumps over the lazy dog</div>
<div>the quick fox jumps over the lazy dog</div>
<div>the quick fox jumps over the lazy dog</div>
<h1 className='font-bold text-[24px] my-5'>the quick fox jumps over </h1>
<p className='flex flex-col gap-3 my-5'>
<div>the quick fox jumps over the lazy dog</div>
<div>the quick fox jumps over the lazy dog</div>
<div>the quick fox jumps over the lazy dog</div>


</p>
          </div>

        </div>
      </div>
    </div>
  )
}

