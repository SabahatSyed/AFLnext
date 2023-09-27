"use client"
import { useState } from "react";
import Link from "next/link";

export default function Header({ activepage }) {
  const [menuOpen, setMenuOpen] = useState(false);

  function toggleMenu() {
    setMenuOpen(!menuOpen);
  }

  return (
    <div>
      <div className="bg-white h-10 md:h-24"></div>
      <div className="bg-[url('/Home/Navbar.svg')] grid grid-cols-12 place-content-center px-4 md:px-14 py-3 md:py-4">
        <div className="col-span-1">
          <Link href="/">
            <img
              src="/Home/logo.svg"
              className="absolute -translate-y-2/4 md:-translate-y-[60%] w-20 md:w-28 lg:w-auto"
            />
          </Link>
        </div>
        <div className="col-start-4 col-span-6 md:flex font-magistral text-white font-bold justify-around uppercase items-center text-sm md:gap-3 lg:gap-0 hidden">
          <Link href="/about">
            <div
              className={`${activepage == "about" ? "text-headingblue" : ""}`}
            >
              about
            </div>
          </Link>
          <Link href="/news">
            <div
              className={`${activepage == "news" ? "text-headingblue" : ""}`}
            >
              news
            </div>
          </Link>
          <Link href="/teams">
            <div
              className={`${activepage == "teams" ? "text-headingblue" : ""}`}
            >
              teams
            </div>
          </Link>
          <Link href="/shop">
            <div
              className={`${activepage == "shop" ? "text-headingblue" : ""}`}
            >
              shop
            </div>
          </Link>
          <Link href="/partners">
            <div
              className={`${
                activepage == "partners" ? "text-headingblue" : ""
              }`}
            >
              partners
            </div>
          </Link>
          <Link href="/tickets">
            <div
              className={`${activepage == "tickets" ? "text-headingblue" : ""}`}
            >
              tickets
            </div>
          </Link>
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
        <div className="md:hidden col-start-12 col-span-4">
          {/* Toggle Menu Button */}
          <div onClick={toggleMenu} className="w-10 h-10">
            <img src="/Home/burger-menu.svg" alt="Bars Menu SVG" />
          </div>
        </div>
      </div>
      {/* Sliding Menu */}
      {menuOpen && (
        <div
          className="w-fit p-5 mx-2 flex flex-col gap-3 font-roboto uppercase font-bold absolute bg-gradient-to-t from-darkorange to-lightorange"
          style={{
            // Set initial position off-screen
            transform: menuOpen ? "translateX(0)" : "translateX(100%)",
            transition: "transform 0.3s ease-in-out",
            top: "77px", // Adjust this to match your design
            right: "-6px",
          }}
        >
          <Link href="/about">
            <div
              className={`${activepage == "about" ? "text-headingblue" : "text-white"} `}
            >
              about
            </div>
          </Link>
          <Link href="/news">
            <div
              className={`${activepage == "news" ? "text-headingblue" : "text-white"} `}
            >
              news
            </div>
          </Link>
          <Link href="/teams">
            <div
              className={`${activepage == "teams" ? "text-headingblue" : "text-white"} `}
            >
              teams
            </div>
          </Link>
          <Link href="/shop">
            <div
              className={`${activepage == "shop" ? "text-headingblue" : "text-white"} `}
            >
              shop
            </div>
          </Link>
          <Link href="/partners">
            <div
              className={`${
                activepage == "partners" ? "text-headingblue" : "text-white"
              } `}
            >
              partners
            </div>
          </Link>
          <Link href="/tickets">
            <div
              className={`${activepage == "tickets" ? "text-headingblue" : "text-white"} `}
            >
              tickets
            </div>
          </Link>
          <div className="grid grid-cols-4 justify-items-center place-content-center place-items-center gap-2">
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
  );
}
