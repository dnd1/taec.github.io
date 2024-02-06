"use client";
import Image from "next/image";
import "./styles.scss";
import { Variants, motion } from "framer-motion";
import CTA from "../CTA";
import SignupForm from "../SignupForm";
import YoutubeEmbed from "../Nav/YoutubeEmbed";

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
          className="flex flex-col justify-start items-center textContainer h-full xs:w-full"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.div
            className="text-sm w-3/4 lg:w-1/2"
            variants={textVariants}
          >
            <YoutubeEmbed embed="gSD_bk4Euao" />
          </motion.div>
          <motion.h1 className="text-sm w-3/4 lg:w-1/2" variants={textVariants}>
            Suscríbete y te enviaremos la guía al correo
          </motion.h1>

          <motion.div
            className="text-sm w-3/4 lg:w-1/2"
            variants={textVariants}
          >
            <SignupForm />
          </motion.div>

          {/* <motion.img
            className="place-self-start pb-8"
            variants={textVariants}
            animate="scrollButton"
            src="/scroll.png"
            alt=""
          /> */}
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
