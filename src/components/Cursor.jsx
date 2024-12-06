import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { GoArrowUpRight } from "react-icons/go";

const Cursor = ({ cursorVariant }) => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.pageX,
        y: e.pageY,
      });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 4,
      y: mousePosition.y - 4,
    },
    hover: {
      height: 80,
      width: 80,
      x: mousePosition.x - 55,
      y: mousePosition.y - 55,
      backgroundColor: "#FFA01F",
    },
    text: {
      height: 80,
      width: 80,
      x: mousePosition.x - 55,
      y: mousePosition.y - 55,
      backgroundColor: "#fff",
      mixBlendMode: "difference"
    },
  };

  return (
    <motion.div
      className="cursor absolute text-2xl bg-white w-[10px] h-[10px] rounded-full top-0 left-0 pointer-events-none z-[99] lg:flex justify-center items-center hidden"
      variants={variants}
      animate={cursorVariant}
    >
      {cursorVariant === "hover" ? <GoArrowUpRight /> : null}
    </motion.div>
  );
};

export default Cursor;
