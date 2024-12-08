import React, { useState } from "react";
import Cursor from "../components/Cursor";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
import work1 from "../assets/work-1.png";
import work2 from "../assets/work-2.png";
import Footer from "../components/Footer";
import { MdArrowOutward } from "react-icons/md";

const OurWork = () => {
  const [cursorVariant, setCursorVariant] = useState("default");

  const linkEnter = () => setCursorVariant("hover");
  const textEnter = () => setCursorVariant("text");
  const cursorLeave = () => setCursorVariant("default");

  return (
    <>
      <Cursor cursorVariant={cursorVariant} />
      <Navbar />
      <header className="text-4xl md:text-6xl text-white flex justify-center items-center h-[50vh] md:h-[75vh] xl:h-[50vh] cursor-default">
        <motion.h1
          onMouseEnter={textEnter}
          onMouseLeave={cursorLeave}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
        >
          Our Work
        </motion.h1>
      </header>

      <main className="text-white flex flex-col gap-20 cursor-default">
        <div className="flex flex-col justify-center items-center gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1, ease: "easeOut" }}
            className="w-full h-full lg:h-[75vh] px-4 md:px-28 overflow-hidden"
          >
            <a
              href="https://www.jollibeeksa.com/"
              target="_blank"
              rel="noreferrer"
            >
              <div
                onMouseEnter={linkEnter}
                onMouseLeave={cursorLeave}
                className="w-full h-full overflow-hidden rounded md:rounded-3xl"
              >
                <motion.img
                  whileHover={{ scale: 1.04 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="object-cover"
                  src={work1}
                  alt="work-1"
                />
              </div>
            </a>
          </motion.div>

          <div className="flex flex-row items-center px-6 md:px-28">
            <motion.h1
              onMouseEnter={textEnter}
              onMouseLeave={cursorLeave}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
              className="hidden md:block text-6xl p-16"
            >
              01.
            </motion.h1>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
              className="flex flex-col gap-2"
            >
              <motion.h3
                onMouseEnter={textEnter}
                onMouseLeave={cursorLeave}
                className="text-2xl md:text-4xl"
              >
                Jollibee KSA
              </motion.h3>
              <p className="text-sm md:text-xl text-zinc-500">
                Veniam minim velit aliqua deserunt do id. Velit veniam
                incididunt mollit ea. Sunt veniam esse pariatur sunt quis
                proident magna occaecat ex. Id aute anim deserunt anim aute sit
                occaecat elit tempor consectetur nostrud ea non. Deserunt quis
                proident consectetur amet esse id duis tempor sint cupidatat
                reprehenderit mollit. Nostrud aliqua elit et id in laboris
                culpa. Laboris commodo ullamco tempor amet sit irure laboris
                occaecat.
              </p>
            </motion.div>
          </div>

          <motion.a
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
            className="bg-zinc-900 hover:bg-orange-900 text-xs md:text-lg w-fit rounded-full text-white py-3 px-6 flex flex-row items-center gap-1 border border-zinc-800 hover:border-orange-950 transition duration-200 group"
            href="https://www.jollibeeksa.com/"
            target="_blank"
            rel="noreferrer"
          >
            Visit Website
            <div className="transition-transform duration-200 ease-out group-hover:translate-x-1">
              <MdArrowOutward />
            </div>
          </motion.a>
        </div>

        <section className="px-10">
          <hr></hr>
        </section>

        <div className="flex flex-col justify-center items-center gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1, ease: "easeOut" }}
            className="w-full h-full lg:h-[75vh] px-4 md:px-28 overflow-hidden"
          >
            <a
              href="https://www.chowkingksa.com/"
              target="_blank"
              rel="noreferrer"
            >
              <div
                onMouseEnter={linkEnter}
                onMouseLeave={cursorLeave}
                className="w-full h-full overflow-hidden rounded md:rounded-3xl"
              >
                <motion.img
                  whileHover={{ scale: 1.04 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="object-cover"
                  src={work2}
                  alt="work-2"
                />
              </div>
            </a>
          </motion.div>

          <div className="flex flex-row items-center px-6 md:px-28">
            <motion.h1
              onMouseEnter={textEnter}
              onMouseLeave={cursorLeave}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
              className="hidden md:block text-6xl p-16"
            >
              02.
            </motion.h1>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
              className="flex flex-col gap-2"
            >
              <motion.h3
                onMouseEnter={textEnter}
                onMouseLeave={cursorLeave}
                className="text-2xl md:text-4xl"
              >
                Chowking KSA
              </motion.h3>
              <p className="text-sm md:text-xl text-zinc-500">
                Veniam minim velit aliqua deserunt do id. Velit veniam
                incididunt mollit ea. Sunt veniam esse pariatur sunt quis
                proident magna occaecat ex. Id aute anim deserunt anim aute sit
                occaecat elit tempor consectetur nostrud ea non. Deserunt quis
                proident consectetur amet esse id duis tempor sint cupidatat
                reprehenderit mollit. Nostrud aliqua elit et id in laboris
                culpa. Laboris commodo ullamco tempor amet sit irure laboris
                occaecat.
              </p>
            </motion.div>
          </div>

          <motion.a
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
            className="bg-zinc-900 hover:bg-orange-900 text-xs md:text-lg w-fit rounded-full text-white py-3 px-6 flex flex-row items-center gap-1 border border-zinc-800 hover:border-orange-950 transition duration-200 group"
            href="https://www.chowkingksa.com/"
            target="_blank"
            rel="noreferrer"
          >
            Visit Website
            <div className="transition-transform duration-200 ease-out group-hover:translate-x-1">
              <MdArrowOutward />
            </div>
          </motion.a>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default OurWork;
