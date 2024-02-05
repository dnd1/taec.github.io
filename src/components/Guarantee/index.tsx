"use client";

import SectionIntro from "../SectionIntro";

const Guarantee: React.FC = () => {
  return (
    <div className="xs:px-4 px-12 flex flex-col items-start  flex-wrap justify-center gap-5">
      <SectionIntro text="We' so confident in our work" />
      <p className="text-center md:text-3xl text-2xl xs:text-md font-thin">
        We&apos;re so confident in the transformative power of our services that
        we&apos;ve designed our guarantee to be directly tied to your
        commitment.
      </p>
      <p className="text-center md:text-3xl text-2xl xs:text-md font-thin">
        If, within 30 days of implementing our solutions, you actively advertise
        your business, drive a minimum agreed-upon number of visits to your
        landing page, and follow our strategic recommendations, yet fail to see
        the promised results, we&apos;ll promptly refund your investment.
      </p>
    </div>
  );
};
export default Guarantee;
