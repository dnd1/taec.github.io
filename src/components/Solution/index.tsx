"use client";

import BulletCard from "../BulletCard";
import SectionIntro from "../SectionIntro";
import { motion } from "framer-motion";

const bullets = [
  "Our approach is a departure from the generic.",
  "We understand the frustrations you face, and we have the expertise to break the cycle.",
  "Our team helps you craft digital experiences that tell your brand's story.",
  "Captivate your audience, and ultimately drive conversions.",
];

const Solution: React.FC = () => {
  return (
    <div className=" flex flex-col items-start justify-center xs:px-4 p-8 gap-7">
      <SectionIntro text="Our solution" />

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
  );
};

export default Solution;
