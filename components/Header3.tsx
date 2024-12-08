"use client"
import Link from "next/link";

import React from 'react'
import { useState } from 'react'
import { Button } from "@/components/ui/button"

export default function Header3() {
    const [isOpen, setIsOpen] = useState(false)

    const handleMenu = () => {
setIsOpen(!isOpen)
    }
    const handleClose = () => {
        setIsOpen(false)
    }
  return (
    <div>
      <div>
      <div className=' w-screen h-[91px] flex justify-center
       md:items-center'>
        <div className=' w-[1049px]  flex items-center justify-around md:justify-between h-[58px]'>
           <div className="logo">
            <h1 className='font-bold text-[24px]'>Bandage</h1>
            </div>
            <div className="nav hidden md:flex">
            <ul className=" flex gap-5">
              <Link href={"/home"}>
                <li>Home</li>
              </Link>
              <Link href={"/shop"}>
              <li>Shop</li> 
              </Link>
              <Link href={"/about"}>
              <li>About</li>
              </Link>
              <Link href={"/pricing"}>
              <li>Blog</li> 
              </Link>
              <Link href={"/contact"}>
              <li>Contact</li>
              </Link>
              <Link href={"/product"}>
              <li>Pages</li>
              </Link>
            </ul>
                </div> 
                <div className="links items-center flex gap-4 text-[#23A6F0]">
                    <p className='font-bold text-[#23A6F0]'>Login </p>
                    <Button className='font-bold hidden md:flex bg-[#23A6F0]  w-[214px] h-[52px] "> '>Become a member</Button>
                    <i 
                    onClick={handleMenu}
                    className='bx bx-menu-alt-right md:hidden text-xl'></i>
                    
                </div>

        </div>

      </div>
    </div>
    <div className={`bar md:hidden bg-white ${isOpen ? " h-[350px] opacity-100": "h-0 opacity-0"} `}>
    <ul className="  grid gap-10 mt-10 ">
              <Link href={"/home"}>
                <li
                onClick={handleClose}
                className="text-3xl text-center "
                >Home</li>
              </Link>
              <Link href={"/product"}>
              <li
              onClick={handleClose}
              className="text-3xl text-center "
              >Product</li> 
              </Link>
              <Link href={"/pricing"}>
              <li
              onClick={handleClose}
            className="text-3xl text-center" 
              >Pricing</li>
              </Link>
              
              <Link href={"/contact"}>
              <li
              onClick={handleClose}
              className="text-3xl text-center "
              >Contact</li>
              </Link>
              
            </ul>

      </div>
    </div>
  )
}
