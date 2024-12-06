import "./App.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Cursor from "./components/Cursor";
import { useState } from "react";
import StickyImg from "./components/StickyImg";
import Footer from "./components/Footer";
import { motion } from "framer-motion";

function App() {
  const [cursorVariant, setCursorVariant] = useState("default");

  const linkEnter = () => setCursorVariant("hover");
  const textEnter = () => setCursorVariant("text");
  const cursorLeave = () => setCursorVariant("default");

  return (
    <>
      <Cursor cursorVariant={cursorVariant} />
      <Navbar />
      <Header textEnter={textEnter} cursorLeave={cursorLeave} />
      <main>
        <StickyImg linkEnter={linkEnter} cursorLeave={cursorLeave} />
        <div className="flex flex-col xl:flex-row justify-center items-center gap-3 xl:gap-10 px-3 md:px-40 text-white">
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
            onMouseEnter={textEnter}
            onMouseLeave={cursorLeave}
            className="container bg-zinc-900 rounded-3xl flex justify-center items-start flex-col px-8 md:px-10 xl:px-20 py-8 md:py-12 xl:py-16 cursor-default"
          >
            <h2 className="text-lg md:text-xl xl:text-3xl font-medium pb-1 md:pb-2">
              Solutions that grow with your business
            </h2>
            <p className="text-sm md:text-[1rem] xl:text-lg font-normal text-zinc-400">
              Officia et aute exercitation deserunt tempor irure aliqua occaecat
              ad enim laboris incididunt. Ea elit magna cupidatat in nulla
              consequat aliquip cillum ullamco. Magna esse officia irure
              adipisicing proident. Officia et aute exercitation deserunt tempor
              irure aliqua occaecat ad enim laboris incididunt. Ea elit magna
              cupidatat in nulla consequat aliquip cillum ullamco. Magna esse
              officia irure adipisicing proident.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 2,
              delay: 0.5,
              ease: "easeInOut",
              type: "spring",
            }}
            onMouseEnter={textEnter}
            onMouseLeave={cursorLeave}
            className="container bg-zinc-900 rounded-3xl flex justify-center items-start flex-col px-8 md:px-10 xl:px-20 py-8 md:py-12 xl:py-16 cursor-default"
          >
            <h2 className="text-lg md:text-xl xl:text-3xl font-medium pb-1 md:pb-2">
              Tailored for intuitive user interactions
            </h2>
            <p className="text-sm md:text-[1rem] xl:text-lg font-normal text-zinc-400">
              Officia et aute exercitation deserunt tempor irure aliqua occaecat
              ad enim laboris incididunt. Ea elit magna cupidatat in nulla
              consequat aliquip cillum ullamco. Magna esse officia irure
              adipisicing proident. Officia et aute exercitation deserunt tempor
              irure aliqua occaecat ad enim laboris incididunt. Ea elit magna
              cupidatat in nulla consequat aliquip cillum ullamco. Magna esse
              officia irure adipisicing proident.
            </p>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
