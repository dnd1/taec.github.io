"use client";

import { motion } from "framer-motion";
import SectionIntro from "../SectionIntro";
import BulletCard from "../BulletCard";

const bullets = [
  "2 x 1hr Consultancy Call to Craft a Highly Converting Offer, valued at $197.",
  "Complimentary domain, valued at $17.",
  "Highly Converting Design and UX, valued at $500.",
  "SEO Optimization, valued ot $300.",
  "1 Year Hosting, valued at $60.",
];

const Bonuses: React.FC = () => {
  return (
    <div className="xs:px-4 px-12 flex flex-col items-start  flex-wrap justify-center gap-5 my-12">
      <SectionIntro text="But wait, there's more..." />
      {bullets.map((t, i) => (
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
      ))}

      <p className="text-center md:text-3xl text-2xl xs:text-md font-thin pt-12">
        Altogether, these bonuses add up to an astounding{" "}
        <span className="font-bold md:text-4xl text-3xl xs:text-xl">
          $1,074.00
        </span>{" "}
        in additional value.
      </p>
      <p className="text-center md:text-3xl text-2xl xs:text-md font-thin">
        Yet, for a limited time, you can secure our comprehensive package,
        including core services and all bonuses, for only{" "}
        <span className="font-bold md:text-4xl text-3xl xs:text-xl">
          $499.00
        </span>
        .
      </p>
    </div>
  );
};
export default Bonuses;
