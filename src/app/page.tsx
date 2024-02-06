import Image from "next/image";
import { Roboto } from "next/font/google";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <section>
      <Nav />
      <Hero
        title="Suscríbete y te enviaremos la guía al correo"
        slider="descarga ya gratis ahora"
      />
    </section>
  );
}
