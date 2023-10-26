"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Auth ,Amplify} from "aws-amplify";
import Image from "next/image";
import { useTheme } from "next-themes";
import awsconfig from "../aws-exports";
import { useRouter } from "next/navigation";
Amplify.configure(awsconfig);
export default function Header({ activepage }) {
  const router=useRouter()
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [user, setUser] = useState(null);

  function toggleMenu() {
    setMenuOpen(!menuOpen);
  }
  const toggleTheme = () => {
    // Toggle the theme when the div is clicked
    setTheme(theme === "dark" ? "light" : "dark");
  };

  useEffect(() => {
    const checkAuthStatus = async () => {
      try {
        const currentUser = await Auth.currentAuthenticatedUser();
        setUser(currentUser);
      } catch (error) {
        setUser(null);
      }
      console.log("user",user)
    };

    checkAuthStatus();
  }, []);


  const handleLogout = async () => {
    try {
      await Auth.signOut();
      setUser(null);
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };
  return (
    <div>
      <div className="bg-white dark:bg-bgdark h-10 md:h-24 "></div>
      <div className="bg-[url('/Home/Navbar.svg')]  relative z-10 grid grid-cols-12 place-content-center px-4 lg:px-14 py-2 md:py-3">
        <div className="col-span-1">
          <Link href="/">
            <img
              src="/Home/logo.svg"
              className="absolute -translate-y-2/4 md:-translate-y-[60%] w-20 lg:w-auto"
            />
          </Link>
        </div>
        <div className="col-start-4 col-span-6 md:flex font-magistral text-white font-bold justify-around uppercase items-center text-sm md:gap-3 lg:gap-8 hidden">
          <Link href="/about">
            <div
              className={`${activepage == "about" ? "text-headingblue" : ""}`}>
              about
            </div>
          </Link>
          <Link href="/news">
            <div
              className={`${activepage == "news" ? "text-headingblue" : ""}`}>
              news
            </div>
          </Link>
          <Link href="/teams">
            <div
              className={`${activepage == "teams" ? "text-headingblue" : ""}`}>
              teams
            </div>
          </Link>
          {/*<Link href="/watch">
            <div
              className={`${activepage == "watch" ? "text-headingblue" : ""}`}>
              watch
            </div>
  </Link>*/}
          <Link
            href="/shop"
            className={`${activepage === "shop" ? "text-headingblue" : ""}`}>
            shop
          </Link>
          {/*<Link href="/stats">
            <div
              className={`${activepage == "stats" ? "text-headingblue" : ""}`}>
              stats
            </div>
  </Link>*/}
          <Link href="/partners">
            <div
              className={`${
                activepage == "partners" ? "text-headingblue" : ""
              }`}>
              partners
            </div>
          </Link>
          <Link href="/tickets">
            <div
              className={`${
                activepage == "tickets" ? "text-headingblue" : ""
              }`}>
              tickets
            </div>
          </Link>
          {/*} <Link href="/live">
            <div
              className={`flex gap-2 px-2 items-center bg-hawks rounded-md  ${
                activepage == "live" ? "text-headingblue" : ""
              }`}>
              <p>live</p>
              <p className="bg-white w-2 h-2 rounded-full"></p>
            </div>
            </Link>*/}
        </div>
        {/*<div
          onClick={toggleTheme}
          className="col-start-11 text-center col-span-1">
          {theme === "dark" ? (
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="#ffffff"
              xmlns="http://www.w3.org/2000/svg"
              className="text-white">
              <path
                d="M10 15C8.67392 15 7.40215 14.4732 6.46447 13.5355C5.52678 12.5979 5 11.3261 5 10C5 8.67392 5.52678 7.40215 6.46447 6.46447C7.40215 5.52678 8.67392 5 10 5C11.3261 5 12.5979 5.52678 13.5355 6.46447C14.4732 7.40215 15 8.67392 15 10C15 11.3261 14.4732 12.5979 13.5355 13.5355C12.5979 14.4732 11.3261 15 10 15ZM10 13.3333C10.8841 13.3333 11.7319 12.9821 12.357 12.357C12.9821 11.7319 13.3333 10.8841 13.3333 10C13.3333 9.11595 12.9821 8.2681 12.357 7.64298C11.7319 7.01786 10.8841 6.66667 10 6.66667C9.11595 6.66667 8.2681 7.01786 7.64298 7.64298C7.01786 8.2681 6.66667 9.11595 6.66667 10C6.66667 10.8841 7.01786 11.7319 7.64298 12.357C8.2681 12.9821 9.11595 13.3333 10 13.3333Z"
                fill="#ffffff"></path>
              <path
                d="M9.09091 0.909092C9.09091 0.407014 9.49792 0 10 0C10.5021 0 10.9091 0.407014 10.9091 0.909092V1.81818C10.9091 2.32026 10.5021 2.72727 10 2.72727C9.49792 2.72727 9.09091 2.32026 9.09091 1.81818V0.909092ZM9.09091 18.1818C9.09091 17.6797 9.49792 17.2727 10 17.2727C10.5021 17.2727 10.9091 17.6797 10.9091 18.1818V19.0909C10.9091 19.593 10.5021 20 10 20C9.49792 20 9.09091 19.593 9.09091 19.0909V18.1818ZM2.92909 4.21455C2.57412 3.85958 2.57412 3.28406 2.92909 2.92909C3.28406 2.57412 3.85958 2.57412 4.21455 2.92909L4.85727 3.57182C5.21224 3.92679 5.21224 4.5023 4.85727 4.85727C4.5023 5.21224 3.92679 5.21224 3.57182 4.85727L2.92909 4.21455ZM15.1427 16.4282C14.7878 16.0732 14.7878 15.4977 15.1427 15.1427C15.4977 14.7878 16.0732 14.7878 16.4282 15.1427L17.0709 15.7855C17.4259 16.1404 17.4259 16.7159 17.0709 17.0709C16.7159 17.4259 16.1404 17.4259 15.7855 17.0709L15.1427 16.4282ZM15.7851 2.92886C16.1402 2.57358 16.7161 2.57361 17.0712 2.92894C17.4261 3.28403 17.4259 3.85951 17.071 4.21447L16.4283 4.8572C16.0732 5.21221 15.4977 5.21221 15.1427 4.8572C14.7877 4.50225 14.7876 3.92678 15.1425 3.57174L15.7851 2.92886ZM3.57182 15.1427C3.92679 14.7878 4.5023 14.7878 4.85727 15.1427C5.21224 15.4977 5.21224 16.0732 4.85727 16.4282L4.21455 17.0709C3.85958 17.4259 3.28406 17.4259 2.92909 17.0709C2.57412 16.7159 2.57412 16.1404 2.92909 15.7855L3.57182 15.1427ZM19.0909 9.09091C19.593 9.09091 20 9.49792 20 10C20 10.5021 19.593 10.9091 19.0909 10.9091H18.1818C17.6797 10.9091 17.2727 10.5021 17.2727 10C17.2727 9.49792 17.6797 9.09091 18.1818 9.09091H19.0909ZM1.81818 9.09091C2.32026 9.09091 2.72727 9.49792 2.72727 10C2.72727 10.5021 2.32026 10.9091 1.81818 10.9091H0.909092C0.407014 10.9091 0 10.5021 0 10C0 9.49792 0.407014 9.09091 0.909092 9.09091H1.81818Z"
                fill="#ffffff"></path>
            </svg>
          ) : (
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-white">
              <path
                d="M8 4C8 8.4 11.6 12 16 12C17.4 12 18.8 11.6 20 11C19.5 16.1 15.2 20 10 20C4.5 20 0 15.5 0 10C0 4.8 4 0.5 9 0C8.4 1.2 8 2.6 8 4ZM2 10C2 14.4 5.6 18 10 18C12.9 18 15.5 16.5 17 14C16.7 14 16.4 14 16 14C10.5 14 6 9.5 6 4C6 3.7 6 3.4 6 3C3.6 4.4 2 7.1 2 10Z"
                fill="currentColor"></path>
            </svg>
          )}
          </div>*/}
        <div className="col-start-11 col-span-2 hidden md:grid grid-cols-6 justify-items-center place-content-center place-items-center gap-2">
          <Link href={"/cart"}>
            <img src="/Home/cart.svg" />
          </Link>
          <div>
            <img src="/Home/h.svg" />
          </div>
          <Link href={"https://www.facebook.com/AFL"}>
            <img src="/Home/facebook.svg" />
          </Link>
          <Link href={"https://www.instagram.com/afl/"}>
            <img src="/Home/instagram.svg" />{" "}
          </Link>
          <Link href={"https://www.youtube.com/@AFL"}>
            <img src="/Home/youtube.svg" />
          </Link>
          {user && (
            <img
              onClick={() => handleLogout()}
              src="/logout.svg"
              className="h-7 cursor-pointer "
            />
          )}
          {user == null && (
            <img
              onClick={() => router.push("/login")}
              src="/profile.svg"
              className="h-7 cursor-pointer"
            />
          )}
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
          className="w-fit p-5 mx-2 z-20 flex flex-col gap-3 font-roboto uppercase font-bold absolute bg-gradient-to-t from-darkorange to-lightorange"
          style={{
            transform: menuOpen ? "translateX(0)" : "translateX(100%)",
            transition: "transform 0.3s ease-in-out",
            top: "77px",
            right: "-6px",
          }}>
          <Link href="/about">
            <div
              className={`${
                activepage == "about" ? "text-headingblue" : "text-white"
              } `}>
              about
            </div>
          </Link>
          <Link href="/news">
            <div
              className={`${
                activepage == "news" ? "text-headingblue" : "text-white"
              } `}>
              news
            </div>
          </Link>
          <Link href="/teams">
            <div
              className={`${
                activepage == "teams" ? "text-headingblue" : "text-white"
              } `}>
              teams
            </div>
          </Link>
          {/*}  <Link href="/watch">
            <div
              className={`${
                activepage == "watch" ? "text-headingblue" : "text-white"
              } `}>
              watch
            </div>
            </Link>*/}
          <a
            href="/shop"
            className={`${
              activepage === "shop" ? "text-headingblue" : ""
            } text-white`}>
            shop
          </a>
          {/*} <Link href="/stats">
            <div
              className={`${
                activepage == "stats" ? "text-headingblue" : "text-white"
              } `}>
              stats
            </div>
            </Link>*/}
          <Link href="/partners">
            <div
              className={`${
                activepage == "partners" ? "text-headingblue" : "text-white"
              } `}>
              partners
            </div>
          </Link>
          <Link href="/tickets">
            <div
              className={`${
                activepage == "tickets" ? "text-headingblue" : "text-white"
              } `}>
              tickets
            </div>
          </Link>
          {/*<Link href="/live">
            <div
              className={`flex gap-2 px-2 items-center bg-hawks rounded-md  ${
                activepage == "live" ? "text-headingblue" : ""
              }`}>
              <p>live</p>
              <p className="bg-white w-2 h-2 rounded-full"></p>
            </div>
            </Link>*/}

          <div className="grid grid-cols-6 justify-items-center place-content-center place-items-center gap-2">
            <Link href={"/cart"}>
              <img src="/Home/cart.svg" />
            </Link>
            <div>
              <img src="/Home/h.svg" />
            </div>
            <div>
              <img src="/Home/facebook.svg" />
            </div>
            <div>
              <img src="/Home/instagram.svg" />{" "}
            </div>
            <div>
              <img src="/Home/youtube.svg" />
            </div>
            {user && (
              <img
                onClick={() => handleLogout()}
                src="/logout.svg"
                className="h-7 cursor-pointer "
              />
            )}
            {user == null && (
              <img
                onClick={() => router.push("/login")}
                src="/profile.svg"
                className="h-7 cursor-pointer"
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
}
