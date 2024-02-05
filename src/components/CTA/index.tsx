"use client";
import { TargetAndTransition, Variants, motion } from "framer-motion";
import "./styles.scss";

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
};

const CTA: React.FC<{ text?: string; single?: boolean }> = ({
  single = true,
  text,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={textVariants.animate as TargetAndTransition}
      className="py-4"
    >
      <motion.div variants={textVariants} className="buttons">
        {!single && (
          <motion.button variants={textVariants}>
            See the Latest Works
          </motion.button>
        )}
        <a href="https://calendly.com/danielrvt88/30min">
          <motion.button variants={textVariants}>{text}</motion.button>
        </a>
      </motion.div>
    </motion.div>
  );
};
export default CTA;
