import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { BiMenuAltRight } from "react-icons/bi";
import logo from "../assets/sd-logo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed z-50 text-white w-11/12 bg-transparent backdrop-blur-md rounded-full my-3 px-6 py-2 flex items-center justify-between inset-x-0 left-1/2 transform -translate-x-1/2">
      <a href="#home">
        <img className="w-auto h-[50px]" src={logo} alt="Solution Deck" />
      </a>
      <div className="md:hidden">
        <button
          onClick={toggleMenu}
          className="text-white hover:text-[#FFA01F] transition duration-300"
        >
          {isMenuOpen ? (
            <AiOutlineClose size={28} />
          ) : (
            <BiMenuAltRight size={28} />
          )}
        </button>
      </div>
      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-6 text-[15px] uppercase">
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
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute w-[12rem] top-16 right-2 bg-zinc-900 rounded-md shadow-md py-4">
          <ul className="flex flex-col gap-4 text-[15px] uppercase px-6">
            <li>
              <a
                href="#home"
                className="text-white hover:text-[#FFA01F] transition duration-300"
                onClick={toggleMenu}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#works"
                className="text-white hover:text-[#FFA01F] transition duration-300"
                onClick={toggleMenu}
              >
                Our Work
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-black bg-white px-[14px] py-[6px] hover:bg-[#FFA01F] transition duration-300"
                onClick={toggleMenu}
              >
                Hire Us
              </a>
            </li>
            <hr></hr>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
