"use client";
import React from "react";
import { useState } from "react";
import Link from "next/link";
import { useCart } from "@/components/cartContext";

export default function Header2() {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenu = () => {
    setIsOpen(!isOpen);
  };
  const handleClose = () => {
    setIsOpen(false);
  };

  const {cartItems} = useCart()
  const cartCount = cartItems.length

  return (
    <div className="">
      <div
        className=" w-screen bg-neutral-100  h-[65px] flex justify-center
       items-center"
      >
        <div className=" w-[1049px] flex items-center justify-around md:justify-between  h-[58px]">
          <div className="logo">
            <h1 className="font-bold text-[24px]">Bandage</h1>
          </div>
          <div className="nav hidden md:flex ">
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
              <Link href={"/cart"}>
              <li>Cart</li> 
              </Link>
              <Link href={"/contact"}>
              <li>Contact</li>
              </Link>
              <Link href={"/pricing"}>
              <li>Pages</li>
              </Link>
            </ul>
          </div>
          <div className="links flex gap-4 text-[#23A6F0]">
            <p className="font-bold text-[#23A6F0] md:flex hidden">
              Login / Register
            </p>
            <div className=" text-lg flex justify-center items-center gap-2">
              <i className="bx bx-search-alt-2"></i>
            
              <div>
              <Link href={"/cart"} className='flex justify-center items-center'>
              
            <i className="bx bx-cart text-2xl"></i>
            <span className="bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">{cartCount}</span>
              </Link>
            </div>
              <i className="bx bx-heart text-2xl "></i>
              <i
                className="bx bx-menu-alt-right cursor-pointer text-2xl lg:hidden"
                onClick={handleMenu}
              ></i>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`bar text-2xl  lg:hidden bg-white ${
          isOpen ? " h-[350px] opacity-100" : "h-0 opacity-0"
        } `}
      >
      
        <ul className="  grid gap-10 mt-3">
              <Link href={"/home"}>
                <li
                onClick={handleClose}
                className="text-3xl text-center "
                >Home</li>
              </Link>
              <Link href={"/shop"}>
              <li
              onClick={handleClose}
              className="text-3xl text-center "
              >Shop</li> 
              </Link>
              <Link href={"/cart"}>
              <li
              onClick={handleClose}
            className="text-3xl text-center" 
              >Cart</li>
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
  );
}
