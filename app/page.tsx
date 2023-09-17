import Image from "next/image";
import Hero from "@/app/components/Hero";
import UnderHero from "./components/UnderHero";
import Services from "./components/Services";
import Clients from "./components/Clients";
import { getData } from "./lib/getImages";
import Footer from "./components/Footer";
import Header from "./components/Header";
export default async function Home() {
  const { images } = await getData();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between w-full">
      <Header />
      <Hero />
      <UnderHero />
      <Services />
      <Clients images={images} />
      <Footer />
    </main>
  );
}
