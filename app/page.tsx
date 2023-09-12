import Image from "next/image";
import Hero from "@/app/components/Hero";
import UnderHero from "./components/UnderHero";
import Services from "./components/Services";
import Clients from "./components/Clients";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero />
      <UnderHero />
      <Services />
      <Clients />
    </main>
  );
}
