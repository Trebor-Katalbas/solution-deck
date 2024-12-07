import React from "react";
import { FaFacebook } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import { FaCircleChevronRight } from "react-icons/fa6";
import logo from '../assets/orig-logo.jpg';


const Footer = () => {
  return (
    <footer className="flex justify-center items-center pt-32">
      <div className="w-full bg-zinc-900 rounded-3xl flex flex-col md:flex-row justify-between items-start p-12 mx-4 mb-4 text-white font-light">
        <div className="text-sm pb-10 md:pb-0">
          <img className="w-[200px] h-auto rounded-sm pb-2" src={logo} alt="solution-deck" />
          <p>Solution Deck</p>
          <p>All rights reserved.</p>
        </div>

        <div className="flex flex-col xl:flex-row gap-10 font-medium">
          <div>
            <h3 className="text-zinc-400 pb-4"> Contact Us </h3>
            <ul className="text-sm">
              <hr></hr>
              <a
                href="#link"
                className="flex justify-between w-[280px] md:w-[320px] px-2 md:px-5 py-4 hover:bg-orange-900 transition duration-200"
              >
                <li>Facebook</li>
                <FaFacebook />
              </a>
              <hr></hr>
              <a
                href="#link"
                className="flex justify-between w-[280px] md:w-[320px] px-2 md:px-5 py-4 hover:bg-orange-900 transition duration-200"
              >
                <li>Email</li>
                <MdEmail />
              </a>
              <hr></hr>
              <a
                href="#link"
                className="flex justify-between w-[280px] md:w-[320px] px-2 md:px-5 py-4 hover:bg-orange-900 transition duration-200"
              >
                <li>Location</li>
                <IoLocationSharp />
              </a>
              <hr></hr>
            </ul>
          </div>

          <div>
            <h3 className="text-zinc-400 pb-4"> Legal Notice </h3>
            <ul className="text-sm">
              <hr></hr>
              <a
                href="#link"
                className="flex justify-between w-[280px] md:w-[320px] px-5 py-4 hover:bg-orange-900 transition duration-200"
              >
                <li>Cookie Policy</li>
                <FaCircleChevronRight />
              </a>
              <hr></hr>
              <a
                href="#link"
                className="flex justify-between w-[280px] md:w-[320px] px-5 py-4 hover:bg-orange-900 transition duration-200"
              >
                <li>Privacy Policy</li>
                <FaCircleChevronRight />
              </a>
              <hr></hr>
              <a
                href="#link"
                className="flex justify-between w-[280px] md:w-[320px] px-5 py-4 hover:bg-orange-900 transition duration-200"
              >
                <li>Legal Notice</li>
                <FaCircleChevronRight />
              </a>
              <hr></hr>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
