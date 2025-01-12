import React from 'react'
import Header1b from './Header1b'
import Header2 from './Header2'
import Image from "next/image";
import Link from 'next/link';

export default function Section6() {

  return (
    <div>
        <link
            href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
            rel="stylesheet"
          />
      <Header1b/>
      <Header2/>
      <div>
        <div className='lg:w-screen flex justify-center  items-center h-[92px]'
        >
            <div className='w-[1049px] h-full flex md:justify-between justify-around items-center'>
            <h1 className='text-[20px] font-bold text-[#252B42]'>Shop</h1>
            <div className='flex'>
                <h1 className=' text-[#252B42]'>Home</h1>
                <i className='bx bx-chevron-right text-2xl'  ></i>
                <h1>Shop</h1>
            </div>
            </div>

        </div>
        <div className='lg:w-screen lg:h-[271px] flex justify-center items-center'>
        <Link href={"/shop#shopItem"}>
            <div className='lg:w-[1088px] md:h-full'>
                <div className="items grid lg:grid-cols-5 md:grid-cols-2 gap-4">
               
                <Image
                    src={"/images/img21.svg"}
                    alt="hero image"
                    width={348}
                    height={300}
                  ></Image>
               
               
                  <Image
                    src={"/images/img22.svg"}
                    alt="hero image"
                    width={348}
                    height={300}
                  ></Image>
               
               
                  <Image
                    src={"/images/img23.svg"}
                    alt="hero image"
                    width={348}
                    height={300}
                  ></Image>
                  <Image
                    src={"/images/img24.svg"}
                    alt="hero image"
                    width={348}
                    height={300}
                  ></Image>
                  <Image
                    src={"/images/img25.svg"}
                    alt="hero image"
                    width={348}
                    height={300}
                  ></Image>

                </div>

            </div>
        </Link>

        

        </div>
      </div>
    </div>
  )
}

