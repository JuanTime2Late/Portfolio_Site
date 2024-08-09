"use client";
import React, { useState }from "react";
import Image from "next/image";

const NavBar = () => {
    
  const [isClick, setisClick] = useState(false);

  const toggleNavBar = () => {
      setisClick(!isClick)
  }

  return (
    <>
      <nav className="bg-farthest-side-gradient animate-fadeIn shadow-white 
      shadow-[0_6px_6px_-3px_rgba(0,0,0,0.9)]">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 animate-pulse">
                  <Image className="text-white" src="JuanVera3d.png" alt="Juan Vera" ></Image>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-4 flex items-center space-x-4">
                <NavBarWord word={"Home"} link={"/"} block={false}/>
                <NavBarWord word={"Contact Info"} link={"/s0"} block={false}/>
                <NavBarWord word={"Projects"} link={"/s1"} block={false}/>
                <NavBarWord word={"LinkedIn"} link={"/linkedin"} block={false}/>
              </div>
            </div>
            <div className="md:hidden flex items-center">
              <button className="inline-flex items-center justify-center p-2 rounded-md text-white
              hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              onClick={toggleNavBar}>
                {isClick ? (
                  <svg  className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor" >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"/>
                  </svg>
                ) : (
                  <svg  className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16m-7 6h7"/>
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        {isClick && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3"></div>
              <NavBarWord word={"Home"} link={"/"} block={true}/>
              <NavBarWord word={"Resume"} link={"/s0"} block={true}/>
              <NavBarWord word={"Projects"} link={"/s1"} block={true}/>
              <NavBarWord word={"LinkedIn"} link={"/linkedin"} block={true}/>
          </div>
        )}
      </nav>
    </>
  );
};

const NavBarWord = ({word, link, block}) => (
  block ? (
  <a href={link}
    className="text-white block hover:bg-white hover:animate-pulse hover:text-black rounded-lg p-2">
    {word}
  </a>
  ) : (
    <a href={link}
    className="text-white hover:bg-white hover:text-black rounded-lg p-2 transition ease-in-out">
    {word}
  </a>
  )
);

export default NavBar;