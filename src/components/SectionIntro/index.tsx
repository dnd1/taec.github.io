"use client";

import { motion, useInView } from "framer-motion";
import "./styles.scss";
import { useRef } from "react";

const SectionIntro: React.FC<{ text: string; full?: boolean }> = ({
  text,
  full,
}) => {
  const container = useRef(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { root: container });

  const title = (
    <motion.h2
      className="text-center flex items-center h-full justify-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1, transition: { duration: 1, delay: 0.3 } }}
    >
      {text}
    </motion.h2>
  );

  return !full ? (
    <div
      ref={container}
      className="flex flex-col items-center justify-center w-full py-2"
    >
      {title}
    </div>
  ) : (
    <motion.div
      ref={container}
      className="flex flex-col items-center justify-evenly h-full"
    >
      {title}
    </motion.div>
  );
};

export default SectionIntro;
