"use client";
import React from "react";
import { useState } from "react";
import Link from "next/link";

export default function Header2() {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenu = () => {
    setIsOpen(!isOpen);
  };
  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <div
        className=" w-screen h-[65px] flex justify-center
       items-center"
      >
        <div className=" w-[1049px] flex items-center justify-around md:justify-between h-[58px]">
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
          <div className="links flex gap-4 text-[#23A6F0]">
            <p className="font-bold text-[#23A6F0] md:flex hidden">
              Login / Register
            </p>
            <div className=" flex justify-center items-center gap-2">
              <i className="bx bx-search-alt-2"></i>
              <i className="bx bx-cart"></i>
              <i className="bx bx-heart"></i>
              <i
                onClick={handleMenu}
                className="bx bx-menu-alt-right md:hidden"
              ></i>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`bar md:hidden bg-white ${
          isOpen ? " h-[350px] opacity-100" : "h-0 opacity-0"
        } `}
      >
      
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
  );
}
