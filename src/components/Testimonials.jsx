import { motion } from "framer-motion";
import React from "react";
import profile from "../assets/profile-img.jpg";

const Testimonials = ({ textEnter, cursorLeave }) => {
  return (
    <div className="text-white flex flex-col justify-center items-center px-6 xl:px-36 gap-8 cursor-default">
      <div className="text-left w-full">
        <motion.h2
          onMouseEnter={textEnter}
          onMouseLeave={cursorLeave}
          className="text-4xl md:text-5xl"
        >
          Customer Testimonial
        </motion.h2>
      </div>

      <div className="flex flex-col xl:flex-row justify-center items-start gap-5 w-full">
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 2,
            delay: 0.2,
            ease: "easeInOut",
            type: "spring",
          }}
          className="container bg-zinc-900 border border-zinc-800 rounded-3xl flex justify-center items-start flex-col gap-4 px-8 md:px-10 xl:px-20 py-8 md:py-12 xl:py-16"
        >
          <div className="flex flex-row gap-4 items-center">
            <div className="w-[80px] h-[80px] rounded-2xl overflow-hidden">
              <img
                className="object-cover w-full h-full"
                src={profile}
                alt="profile-img"
              />
            </div>
            <h4 className="text-lg md:text-xl">Charji Layning Katalbas</h4>
          </div>

          <p className="text-zinc-400">
            Laborum voluptate culpa dolore magna qui eiusmod dolore officia
            tempor excepteur sint.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 2,
            delay: 0.4,
            ease: "easeInOut",
            type: "spring",
          }}
          className="container bg-zinc-900 border border-zinc-800 rounded-3xl flex justify-center items-start flex-col gap-4 px-8 md:px-10 xl:px-20 py-8 md:py-12 xl:py-16"
        >
          <div className="flex flex-row gap-4 items-center">
            <div className="w-[80px] h-[80px] rounded-2xl overflow-hidden">
              <img
                className="object-cover w-full h-full"
                src={profile}
                alt="profile-img"
              />
            </div>
            <h4 className="text-lg md:text-xl">Qaleclecc Habil</h4>
          </div>

          <p className="text-zinc-400">
            Laborum voluptate culpa dolore magna qui eiusmod dolore officia
            tempor excepteur sint.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 2,
            delay: 0.6,
            ease: "easeInOut",
            type: "spring",
          }}
          className="container bg-zinc-900 border border-zinc-800 rounded-3xl flex justify-center items-start flex-col gap-4 px-8 md:px-10 xl:px-20 py-8 md:py-12 xl:py-16"
        >
          <div className="flex flex-row gap-4 items-center">
            <div className="w-[80px] h-[80px] rounded-2xl overflow-hidden">
              <img
                className="object-cover w-full h-full"
                src={profile}
                alt="profile-img"
              />
            </div>
            <h4 className="text-lg md:text-xl">Jebz King</h4>
          </div>

          <p className="text-zinc-400">
            Laborum voluptate culpa dolore magna qui eiusmod dolore officia
            tempor excepteur sint.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Testimonials;
