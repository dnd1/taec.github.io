import Image from "next/image";
import { Roboto } from "next/font/google";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Bullets from "@/components/Bullets";
import Problem from "@/components/Problem";
import Agitation from "@/components/Agitation";
import Solution from "@/components/Solution";
import CTA from "@/components/CTA";
import Bonuses from "@/components/Bonuses";
import Guarantee from "@/components/Guarantee";

export default function Home() {
  return (
    <div className="">
      <div>
        <section>
          <Nav />
          <Hero
            title="Descarga GRATIS la gu&iacute;a para acuaristas aficionados"
            subtitle="y no cometas estos x errores!"
            slider="descarga ya, gratis"
          />
        </section>
        <Bullets />
        <div className="flex justify-center pt-12">
          <CTA />
        </div>
        <Problem />
        <Agitation />
        <Solution />
        <div className="flex justify-center">
          <CTA />
        </div>
        <Bonuses />
        <Guarantee />
        <div className="flex justify-center pb-12">
          <CTA />
        </div>
      </div>
    </div>
  );
}
