"use client";
import Image from "next/image";
import "./styles.scss";
import { Variants, motion } from "framer-motion";
import SignupForm from "../SignupForm";
import YoutubeEmbed from "../YoutubeEmbed";

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
  videoId?: string;
  emailActionUrl?: string;
}> = ({ title, subtitle, slider, videoId, emailActionUrl }) => {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="flex flex-col justify-stretch items-center textContainer h-full xs:w-full "
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          {/* lg:w-1/2 w-3/4 */}
          <motion.h1
            className="text-2xl text-center mt:10  xs:w-full  xs:px-8"
            variants={textVariants}
          >
            {title}
          </motion.h1>
          <motion.div
            className="text-sm w-3/4 xs:w-full lg:w-1/2"
            variants={textVariants}
          >
            <YoutubeEmbed embed={videoId ?? "gSD_bk4Euao"} />
          </motion.div>
          <motion.div
            className="text-sm w-3/4 lg:w-1/2 xs:w-full xs:px-8"
            variants={textVariants}
          >
            <SignupForm actionUrl={emailActionUrl} />
          </motion.div>
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
