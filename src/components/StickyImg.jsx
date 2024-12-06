import React from "react";
import branding1 from "../assets/branding-4.jpg";
import branding2 from "../assets/branding-6.jpeg";
import branding3 from "../assets/branding-5.jpg";

const StickyImg = ({linkEnter, cursorLeave}) => {
  return (
    <div className="flex flex-col items-center gap-12 px-3 md:px-8 pb-28">
      <div
        onMouseEnter={linkEnter}
        onMouseLeave={cursorLeave}
        className="w-[99%] h-[70vh] md:h-[90vh] sticky top-[10vh] rounded-[3rem] overflow-hidden"
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
        className="w-[99%] h-[70vh] md:h-[90vh] sticky top-[15vh] rounded-[3rem] overflow-hidden"
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
        className="w-[99%] h-[70vh] md:h-[90vh] sticky top-[20vh] rounded-[3rem] overflow-hidden"
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
  );
};

export default StickyImg;
