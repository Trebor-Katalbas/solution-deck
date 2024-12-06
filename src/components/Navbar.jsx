import React from "react";
import logo from "../assets/sd-logo.png";

const Navbar = () => {
  return (
    <nav className="fixed z-50 text-white w-11/12 bg-transparent backdrop-blur-md rounded-full my-3 px-6 py-2 flex items-center justify-between inset-x-0 left-1/2 transform -translate-x-1/2">
      <a href="#home">
        <img className="w-auto h-[50px]" src={logo} alt="Solution Deck" />
      </a>
      <ul className="flex gap-6 text-[15px] uppercase">
        <li>
          <a
            href="#home"
            className="text-white hover:text-[#FFA01F] transition duration-300"
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#works"
            className="text-white hover:text-[#FFA01F] transition duration-300"
          >
            Our Work
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className="text-black bg-white px-[14px] py-[6px] hover:bg-[#FFA01F] transition duration-300"
          >
            Hire Us
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
