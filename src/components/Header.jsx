import { motion } from "framer-motion";
import React from "react";

const Header = ({ textEnter, cursorLeave }) => {

  const fade = {
    hidden: { opacity: 0, y: -80 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.5,
        delay: 2.5,
      },
    },
  };

  return (
    <header className="min-h-screen min-w-screen flex flex-col justify-center items-center text-center text-white">
      <div className="flex lg:gap-40 md:gap-28 sm:gap-24 gap-16 mb-5">
        {/* Animated SVG 1 */}
        <motion.svg
          fill="#FFA01F"
          className="xl:w-[100px] md:w-[80px] sm:w-[70px] w-[60px]"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          variants={fade}
          initial="hidden"
          animate="show"
        >
          <motion.path d="M18.54,9,8.88,3.46a3.42,3.42,0,0,0-5.13,3V17.58A3.42,3.42,0,0,0,7.17,21a3.43,3.43,0,0,0,1.71-.46L18.54,15a3.42,3.42,0,0,0,0-5.92Zm-1,4.19L7.88,18.81a1.44,1.44,0,0,1-1.42,0,1.42,1.42,0,0,1-.71-1.23V6.42a1.42,1.42,0,0,1,.71-1.23A1.51,1.51,0,0,1,7.17,5a1.54,1.54,0,0,1,.71.19l9.66,5.58a1.42,1.42,0,0,1,0,2.46Z" />
        </motion.svg>

        {/* Animated SVG 2 */}
        <motion.svg
          className="xl:w-[100px] md:w-[80px] sm:w-[70px] w-[60px]"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          variants={fade}
          initial="hidden"
          animate="show"
          whileInView={{ rotate: 360 }}
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatDelay: 3,
            ease: "easeInOut",
            type: "spring",
          }}
        >
          <motion.path
            stroke="#FFA01F"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M14 21h-4l-.551-2.48a6.991 6.991 0 0 1-1.819-1.05l-2.424.763-2-3.464 1.872-1.718a7.055 7.055 0 0 1 0-2.1L3.206 9.232l2-3.464 2.424.763A6.992 6.992 0 0 1 9.45 5.48L10 3h4l.551 2.48a6.992 6.992 0 0 1 1.819 1.05l2.424-.763 2 3.464-1.872 1.718a7.05 7.05 0 0 1 0 2.1l1.872 1.718-2 3.464-2.424-.763a6.99 6.99 0 0 1-1.819 1.052L14 21z"
          />
          <circle cx="12" cy="12" r="3" stroke="#FFA01F" strokeWidth="1.5" />
        </motion.svg>

        {/* Animated SVG 3 */}
        <motion.svg
          fill="#FFA01F"
          className="xl:w-[100px] md:w-[80px] sm:w-[70px] w-[60px]"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          data-name="Layer 1"
          variants={fade}
          initial="hidden"
          animate="show"
        >
          <path
            strokeWidth="1"
            d="M21.71,15.58l-4.52-4.51a6.85,6.85,0,0,0,.14-1.4A7.67,7.67,0,0,0,6.42,2.72a1,1,0,0,0-.57.74,1,1,0,0,0,.28.88l4.35,4.34-1.8,1.8L4.34,6.13a1,1,0,0,0-.88-.27,1,1,0,0,0-.74.56,7.67,7.67,0,0,0,7,10.91,6.85,6.85,0,0,0,1.4-.14l4.51,4.52a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42l-4.9-4.9a1,1,0,0,0-.95-.26,5.88,5.88,0,0,1-1.48.2A5.67,5.67,0,0,1,4,9.67a6,6,0,0,1,.08-1L8,12.6a1,1,0,0,0,1.42,0L12.6,9.39A1,1,0,0,0,12.6,8L8.71,4.08a6.12,6.12,0,0,1,1-.08,5.67,5.67,0,0,1,5.66,5.67,5.88,5.88,0,0,1-.2,1.48,1,1,0,0,0,.26.95l4.9,4.9a1,1,0,0,0,1.42-1.42Z"
          />
        </motion.svg>
      </div>

      <motion.h1
        onMouseEnter={textEnter}
        onMouseLeave={cursorLeave}
        className="hero-h1 font-light text-4xl md:text-7xl sm:text-5xl md:py-4 py-2 cursor-default"
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
      >
        Reimagining <br />
        Digital Experiences
      </motion.h1>

      <motion.p
        className="hero-p font-normal text-1xl md:text-2xl text-gray-500 xl:max-w-[80rem] lg:px-[16rem] md:px-[6rem] sm:px-[4rem] px-[3rem]"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.5, ease: "easeOut" }}
      >
        Empower your business with cutting-edge digital solutions designed to
        enhance user engagement and optimize operations.
      </motion.p>

      <div className="absolute bottom-16 right-1/2 flex flex-col justify-center items-center translate-x-1/2">
        <motion.div
          className="mt-2 arrow-down"
          animate={{
            y: [0, 18, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <svg
            fill="white"
            width="40px"
            height="40px"
            viewBox="-1 0 19 19"
            xmlns="http://www.w3.org/2000/svg"
            className="cf-icon-svg"
          >
            <path d="M8.5 15.313a1.026 1.026 0 0 1-.728-.302l-6.8-6.8a1.03 1.03 0 0 1 1.455-1.456L8.5 12.828l6.073-6.073a1.03 1.03 0 0 1 1.455 1.456l-6.8 6.8a1.026 1.026 0 0 1-.728.302z" />
          </svg>
        </motion.div>
      </div>
    </header>
  );
};

export default Header;
