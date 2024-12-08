import React from "react";
import branding1 from "../assets/branding-3.png";
import branding3 from "../assets/branding-6.jpeg";
import branding2 from "../assets/branding-4.png";
import { MdArrowOutward } from "react-icons/md";

const StickyImg = ({ linkEnter, cursorLeave }) => {
  return (
    <>
      <div className="flex flex-col items-center gap-12 px-3 md:px-8 pb-16">
        <div
          onMouseEnter={linkEnter}
          onMouseLeave={cursorLeave}
          className="w-[99%] h-[80vh] md:h-[90vh] sticky top-[10vh] rounded-[3rem] overflow-hidden"
        >
          <a href="#brand">
            <img
              className="object-cover w-full h-full"
              src={branding1}
              alt="brand-1"
            />
          </a>
        </div>
        <div
          onMouseEnter={linkEnter}
          onMouseLeave={cursorLeave}
          className="w-[99%] h-[80vh] md:h-[90vh] sticky top-[15vh] rounded-[3rem] overflow-hidden"
        >
          <a href="#brand">
            <img
              className="object-cover w-full h-full"
              src={branding2}
              alt="brand-2"
            />
          </a>
        </div>
        <div
          onMouseEnter={linkEnter}
          onMouseLeave={cursorLeave}
          className="w-[99%] h-[80vh] md:h-[90vh] sticky top-[20vh] rounded-[3rem] overflow-hidden"
        >
          <a href="#brand">
            <img
              className="object-cover w-full h-full"
              src={branding3}
              alt="brand-3"
            />
          </a>
        </div>
      </div>

      <div className="flex justify-center items-start pb-28">
        <a
          className="bg-zinc-900 hover:bg-orange-900 w-fit rounded-full text-white py-3 px-6 flex flex-row items-center gap-1 border border-zinc-800 hover:border-orange-950 transition duration-200 group"
          href="#ourwork"
        >
          View All Works
          <div className="transition-transform duration-200 ease-out group-hover:translate-x-1">
            <MdArrowOutward />
          </div>
        </a>
      </div>
    </>
  );
};

export default StickyImg;
