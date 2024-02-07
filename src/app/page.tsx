import Image from "next/image";
import { Roboto } from "next/font/google";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <section>
      <Nav />
      <Hero
        title="Descarga la guía gratuita"
        slider="descarga ya gratis ahora"
      />
    </section>
  );
}
