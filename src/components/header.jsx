"use client"
import React,{useState} from "react";
import Link from 'next/link';
export default function Header() {
      const [isMenuOpen, setIsMenuOpen] = useState(false);
function toggleMenu() {
  setIsMenuOpen(!isMenuOpen);
}
  return (
    <div>
      <div className="bg-white h-10 md:h-24 "></div>
      <div className="  bg-[url('/Home/Navbar.svg')] grid grid-cols-12 place-content-center px-4 md:px-14 py-3 md:py-4">
        <div className=" col-span-1">
          <img
            src="/Home/logo.svg"
            className="absolute -translate-y-2/4 md:-translate-y-[60%] w-20 md:w-28 lg:w-auto"
          />
        </div>
        <div className="col-start-4 col-span-6 md:flex font-magistral text-white font-medium justify-around uppercase items-center text-sm md:gap-3 lg:gap-0 hidden">
          <Link href="/"><div>about</div></Link>
          <Link href="/news"><div>news</div></Link>
          <Link href="/teams"><div>teams</div></Link>
          <Link href="/shop"><div>shop</div></Link>
          <Link href="/partners"><div className="">partners</div></Link>
          <Link href="/tickets"><div>tickets</div></Link>
        </div>
        <div className="col-start-12 col-span-1 hidden md:grid grid-cols-4 justify-items-center place-content-center place-items-center gap-2">
          <div>
            <img src="/Home/h.svg" />
          </div>
          <div>
            {" "}
            <img src="/Home/facebook.svg" />
          </div>
          <div>
            <img src="/Home/instagram.svg" />{" "}
          </div>
          <div>
            <img src="/Home/youtube.svg" />
          </div>
        </div>
        <div className="md:hidden col-start-9 col-span-4">
          {/* <button className="md:hidden w-full " onClick={toggleMenu}>
            Toggle Menu
          </button> */}
          <div onClick={toggleMenu} className="w-10 h-10">
          <img  src="/Home/burger-menu.svg" alt="Bars Menu SVG"/>
          </div>
          {isMenuOpen && (
            <div className="w-fit p-5 mx-2 flex flex-col gap-3 font-roboto uppercase font-bold absolute bg-gradient-to-t from-darkorange to-lightorange">
              <div>about</div>
              <div>news</div>
              <div>teams</div>
              <div>shop</div>
              <div className="">partners</div>
              <div>tickets</div>
              <div className=" grid grid-cols-4 justify-items-center place-content-center place-items-center gap-2">
                <div>
                  <img src="/Home/h.svg" />
                </div>
                <div>
                  {" "}
                  <img src="/Home/facebook.svg" />
                </div>
                <div>
                  <img src="/Home/instagram.svg" />{" "}
                </div>
                <div>
                  <img src="/Home/youtube.svg" />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
