"use client";
import Image from "next/image";
import "./styles.scss";
import { Variants, motion } from "framer-motion";
import CTA from "../CTA";

const textVariants: Variants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

const sliderVariants: Variants = {
  initial: {
    x: "10%",
  },
  animate: {
    x: "-100%",
    transition: {
      repeat: Infinity,
      repeatType: "loop",
      duration: 40,
      ease: "linear",
    },
  },
};

const Hero: React.FC<{
  title?: string;
  slider?: string;
  subtitle?: string;
}> = ({ title, subtitle, slider }) => {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="flex flex-col justify-between pt-4 items-center textContainer h-full"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 className="text-sm" variants={textVariants}>
            GET A
          </motion.h2>
          <motion.div variants={textVariants}>
            <motion.h1 className="mx-10" variants={textVariants}>
              High-Converting Landing Page
            </motion.h1>
            <motion.h3 className="mx-10 " variants={textVariants}>
              so good your visitors can&apos;t say no to it
            </motion.h3>
          </motion.div>
          <motion.div variants={textVariants} className="buttons z-10">
            <CTA />
          </motion.div>
          <motion.img
            className="place-self-start pb-8"
            variants={textVariants}
            animate="scrollButton"
            src="/scroll.png"
            alt=""
          />
        </motion.div>
      </div>
      <motion.div
        className="slidingTextContainer"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        {slider}
      </motion.div>
    </div>
  );
};

export default Hero;
