"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const Nav: React.FC = () => {
  return (
    <div className="flex items-center justify-between pr-4 h-[100px]">
      <motion.span
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Image width="80" height="80" alt="dnd tech logo" src="/tuaec.png" />
      </motion.span>
      <motion.div
        initial={{ x: "100vh" }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-right text-xs">
          Todo lo que necesitas saber de acuarios!
        </p>
      </motion.div>
    </div>
  );
};

export default Nav;
