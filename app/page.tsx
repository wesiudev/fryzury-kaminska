import Hero from "@/app/components/Hero";
import UnderHero from "./components/UnderHero";
import Services from "./components/Services";

import Footer from "./components/Footer";
import Header from "./components/Header";
import { getImages } from "@/firebase";
import Clients from "./components/Clients";
import Contact from "./components/Contact";
export default async function Home() {
  const images = await getImages("fryzurykaminska");

  return (
    <main className="flex min-h-screen flex-col items-center justify-between w-full">
      <Header />
      <Hero />
      <UnderHero />
      <Services />
      <Clients images={images} />
      <Contact />
      <Footer />
    </main>
  );
}
