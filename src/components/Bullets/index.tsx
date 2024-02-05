"use client";
import "./styles.scss";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import SectionIntro from "../SectionIntro";
import BulletCard from "../BulletCard";

const bullets = [
  "Imagine Amplifying Profits from your Marketing, turning every effort into a revenue-generating opportunity",
  "Imagine getting a consistent flow of leads comming in every month",
  "Imagine Consistently Convert Visitors into Paying Customers",
  "Enhance Brand Visibility and Stand Out in a Crowded Market",
  "Capture the right kind of leads Effortlessly",
];

const Bullets: React.FC = () => {
  const container = useRef(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { root: container });

  return (
    <div>
      <div
        ref={container}
        className="xs:px-4 px-12 flex flex-col items-start  flex-wrap justify-center gap-5"
      >
        <SectionIntro text="Just picture this..." />
        {bullets.map((t, i) => {
          return (
            <motion.div
              key={t}
              initial={{
                opacity: 0,
                translateX: i % 2 === 0 ? -50 : 50,
                translateY: 50,
              }}
              whileInView={{ opacity: 1, translateX: 0, translateY: 0 }}
              transition={{ duration: 0.2, delay: i * 0.2 }}
            >
              <BulletCard title={t} />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
export default Bullets;
