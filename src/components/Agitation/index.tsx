"use client";

import { motion } from "framer-motion";
import SectionIntro from "../SectionIntro";

const Agitation: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center xs:px-4 px-8 gap-7 md:px-[20%]">
      <SectionIntro text="Wait, it gets worse..." />

      <p className="text-center md:text-3xl text-2xl xs:text-md font-thin">
        Are you tired of the frustrating cycle of inconsistency, where a feeble
        online presence makes a steady stream of customers seem like an elusive
        dream?
      </p>
      <p className="text-center md:text-3xl text-2xl xs:text-md font-thin">
        Have you poured money into advertising only to witness lackluster
        results and wonder if there&apos;s a better way?
      </p>
      <p className="text-center md:text-3xl text-2xl xs:text-md font-thin">
        Perhaps you find yourself stuck with a landing page that mirrors
        countless others, relegating your unique offerings to the status of a
        commodity, perpetually competing on price.
      </p>
      <p className="text-center md:text-3xl text-2xl xs:text-md font-thin">
        Competitors may promise simplicity, but it can&apos;t address the
        exhaustion that comes from low or non-existent profit margins.
      </p>
      <p className="text-center md:text-3xl text-2xl xs:text-md font-thin">
        Relying on a template-based platform may have you sharing the same
        digital space as your competitors, blurring your brand&apos;s identity
        and making it difficult to charge what your unique offerings are truly
        worth.
      </p>
      <p className="text-center text-2xl xs:text-md md:text-3xl font-thin">
        Are you tired of being stuck in the price-driven rat race, unable to
        command the value your products or services genuinely deserve?
      </p>
      <p className="text-center text-2xl xs:text-md md:text-3xl font-thin">
        If your goal is to charge more for your offer and elevate your brand
        above the sea of mediocrity, a tailored solution is not just a
        luxury—it&apos;s a necessity.
      </p>
    </div>
  );
};
export default Agitation;
