import { Header } from "@/components/site/header";
import { Footer } from "@/components/site/footer";
import { FaqSection } from "@/components/site/faq-section";
import { Hero } from "@/components/home/hero";
import { NextLevel } from "@/components/home/next-level";
import { BoostPresence } from "@/components/home/boost-presence";
import { Solutions } from "@/components/home/solutions";
import { Plans } from "@/components/home/plans";
import { CtaSection } from "@/components/home/cta";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <NextLevel />
        <BoostPresence />
        <Solutions />
        <Plans />
        <FaqSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
