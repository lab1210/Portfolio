"use client";
import Link from "next/link";
import React, { useState } from "react";
import { IoClose, IoCode } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
const Home = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
    console.log("Sidebar toggled");
  };
  return (
    <div className="grid grid-rows-[30px_auto_auto_auto] bg-[#ffffff] h-screen overflow-y-auto overflow-x-hidden ">
      {isSidebarOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black/65 z-10 transition-opacity duration-300"
          onClick={toggleSidebar}
        ></div>
      )}
      <div className=" bg-[#ffffff] flex justify-between items-center p-5 lg:pl-15 lg:pr-15 sticky top-0 z-10 shadow-md lg:shadow-none">
        <Link
          href={"/"}
          className="text-[#27445D] font-bold lg:text-xl sm:text-lg  "
          style={{ fontFamily: "'Comfortaa', sans-serif" }}
        >
          Omolabake
        </Link>
        <ul className=" hidden lg:flex lg:gap-8 sm:gap-6 lg:text-base sm:text-xs text-[#030303] font-light cursor-pointer">
          <li className="hover:text-[#497D74] hover:scale-120 transition-all duration-300 ">
            About
          </li>
          <li className="hover:text-[#497D74] hover:scale-120 transition-all duration-300  ">
            Projects
          </li>
          <li className="hover:text-[#497D74] hover:scale-120 transition-all duration-300 ">
            Contact
          </li>
        </ul>
        <div className="text-[#030303] lg:hidden pr-2" onClick={toggleSidebar}>
          <RxHamburgerMenu />
        </div>
      </div>

      {/* Sidebar */}
      {isSidebarOpen && (
        <div
          className={`fixed top-0 right-0 h-screen w-64 bg-white shadow-md p-4 transition-transform duration-600 transform ${
            isSidebarOpen ? "translate-x-0" : "translate-x-full"
          } z-20`}
        >
          <div
            className="flex justify-end text-[#27445D] mb-10"
            onClick={toggleSidebar}
          >
            <IoClose size={25} />
          </div>

          <ul className="flex flex-col gap-6 justify-center items-center">
            <li>About</li>
            <li>Projects</li>
            <li>Contact</li>
          </ul>
        </div>
      )}
      <div className="grid lg:grid-cols-[1fr_500px] pt-6">
        <div className="flex flex-col p-5 lg:pl-15 lg:pr-15  gap-4">
          <p className="text-[#71BBB2] font-bold text-lg">FRONTEND DEVELOPER</p>
          <p className="text-5xl font-bold text-[#27445D] hidden lg:block">
            Hello, my name
          </p>
          <p className="text-5xl font-bold text-[#27445D] hidden lg:block">
            is Oladeji Omolabake
          </p>
          <p className="text-5xl font-bold text-[#27445D] sm:block lg:hidden">
            Hello, my name is Oladeji Omolabake
          </p>

          <div className="lg:w-150 sm:w-170">
            <p className="text-[#497D74] font-light text-lg">
              I am a frontend developer with a passion for building beautiful
              and functional applications. I have experience in HTML, CSS,
              JavaScript,React,Nextjs,ReactNative and TailwindCSS.
            </p>
          </div>
          <div className="flex gap-4 mt-5 font-bold text-[#27445D] lg:text-xl sm:text-2xl ">
            <button className="bg-[#71BBB2] p-1 pl-4 pr-4 rounded-lg cursor-pointer shadow-md border-2 border-[#71BBB2] hover:opacity-80 transition-all duration-300">
              Projects
            </button>
            <button className="shadow-md border-2 border-[#27445D] rounded-lg p-1 pl-4 pr-4 cursor-pointer hover:bg-[#71BBB2] hover:text-[#ffffff] hover:border-0 transition-all duration-300">
              LinkedIn
            </button>
          </div>
        </div>
        <div className="bg-[#71BBB2] h-[500px] rounded-tl-full rounded-br-full  lg:block hidden">
          <div className="flex justify-center items-center h-full">
            <span className="text-[#ffffff] font-bold text-6xl animate-bounce">
              <IoCode size={100} />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
