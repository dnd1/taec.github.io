import Nav from "@/components/Nav";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <section>
      <Nav />
      <Hero
        title="Descarga la guía mezclas para tu acuario"
        slider="descarga ya gratis ahora"
        emailActionUrl="https://assets.mailerlite.com/jsonp/733625/forms/119696636780742471/subscribe"
        videoId=""
      />
    </section>
  );
}
